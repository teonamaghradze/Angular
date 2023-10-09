import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  currentPage: number = 1;
  pageSize: number = 2;
  totalPages: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = parseInt(params['page']) || 1;
      this.getEmployees();
    });

    // this.employeeService.getAllEmployees().subscribe((employees: any) => {
    //   this.totalPages = Math.ceil(employees.length / this.pageSize);
    // });
    this.employeeService.employeesCount.subscribe((employees: any) => {
      this.totalPages = Math.ceil(employees / this.pageSize);
    });

    this.employeeService.dataUpdated.subscribe(() => {
      this.getEmployees();
    });
  }

  getEmployees() {
    this.employeeService
      .getEmployees(this.currentPage, this.pageSize)
      .subscribe(
        (data) => {
          this.employees = data;
        },
        (error) => {
          console.error('Error fetching employees', error);
        }
      );
  }

  changePage(newPage: number) {
    if (newPage >= 1) {
      this.currentPage = newPage;

      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: newPage },
        queryParamsHandling: 'merge',
      });
    }
    console.log(
      `currentPage: ${this.currentPage}, totalPages: ${this.totalPages}`
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (res) => {
        console.log(res);
        this.employees = this.employees.filter(
          (employee) => employee.id !== id
        );
      },
      (error) => {
        console.error('Error deleting employee', error);
      }
    );
  }
}
