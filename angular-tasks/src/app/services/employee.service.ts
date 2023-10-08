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

  getEmployees(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployeeId(id: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.dataUpdated.emit();
      })
    );
  }
}
