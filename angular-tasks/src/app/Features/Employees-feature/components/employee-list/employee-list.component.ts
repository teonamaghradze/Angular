import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { EmployeeService } from '../../../../services/employee.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Employees } from '../../employees.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, RouterLink],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = parseInt(params['page']) || 1;
      this.getEmployees();
    });

    this.employeeService.employeesCount.subscribe((employees: any) => {
      this.totalPages = Math.ceil(employees / this.pageSize);
      this.cd.markForCheck();
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
          this.cd.markForCheck();
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
      this.cd.markForCheck();
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (res) => {
        console.log(res);
        this.employees = this.employees.filter(
          (employee) => employee.id !== id
        );
        this.cd.markForCheck();
      },
      (error) => {
        console.error('Error deleting employee', error);
      }
    );
  }
}
