import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  addEmployee(employeeData: any): Observable<any> {
    const data = this.http.post(this.apiUrl, employeeData);
    return data;
  }
}
