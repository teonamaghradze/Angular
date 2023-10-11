import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employees } from '../employees.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
    standalone: true,
    imports: [NgIf],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employees | null = null;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const employeeId = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeId(employeeId).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error finding employee by id', error);
      }
    );
  }
}
