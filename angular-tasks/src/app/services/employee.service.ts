import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';
  public dataUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData).pipe(
      tap(() => {
        this.dataUpdated.emit();
      })
    );
  }

  //pagination
  getEmployees(page: number, pageSize: number): Observable<any[]> {
    const url = `${this.apiUrl}?_page=${page}&_limit=${pageSize}`;
    return this.http.get<any[]>(url);
  }

  //to get details of employee
  getEmployeeId(id: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  //update data
  updateEmployeeData(id: number, data: any) {
    return this.http.put<any[]>(`${this.apiUrl}/${id}`, data);
  }

  //delete functionality
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.dataUpdated.emit();
      })
    );
  }
}
