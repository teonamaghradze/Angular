import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employees } from '../interfaces/employees.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';
  public dataUpdated: EventEmitter<void> = new EventEmitter<void>();
  public employeesCount: Subject<number> = new Subject<number>();
  public allEmployees = 0;

  constructor(private http: HttpClient) {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.http.get(this.apiUrl).subscribe((employees: any) => {
      this.employeesCount.next(employees.length);
      this.allEmployees = employees.length;
    });
  }

  addEmployee(employeeData: Employees): Observable<any> {
    return this.http.post(this.apiUrl, employeeData).pipe(
      tap(() => {
        this.allEmployees++;
        this.employeesCount.next(this.allEmployees);
        this.dataUpdated.emit();
      })
    );
  }

  //pagination
  getEmployees(page: number, pageSize: number): Observable<Employees[]> {
    const url = `${this.apiUrl}?_page=${page}&_limit=${pageSize}`;
    return this.http.get<Employees[]>(url);
  }

  //to get details of employee
  getEmployeeId(id: number) {
    return this.http.get<Employees>(`${this.apiUrl}/${id}`);
  }

  //update data
  updateEmployeeData(id: number, data: Employees) {
    return this.http.put<Employees[]>(`${this.apiUrl}/${id}`, data);
  }

  //delete functionality
  deleteEmployee(id: number): Observable<Employees> {
    return this.http.delete<Employees>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.allEmployees--;
        this.employeesCount.next(this.allEmployees);
        this.dataUpdated.emit();
      })
    );
  }
}
