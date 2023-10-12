import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employees } from '../../interfaces/employees.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
})
export class EditEmployeeComponent implements OnInit {
  editEmployee: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.editEmployee = this.fb.group({
      name: ['', Validators.required],
      salary: [null, Validators.required],
      age: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.employeeService
      .getEmployeeId(this.router.snapshot.params['id'])
      .subscribe((data: Employees) => {
        this.editEmployee = this.fb.group({
          name: [data['name'], Validators.required],
          salary: [data['salary'], Validators.required],
          age: [data['age'], Validators.required],
        });
        this.cd.markForCheck();
      });
  }

  updateData() {
    const id = this.router.snapshot.params['id'];
    const value = this.editEmployee.value;

    this.employeeService.updateEmployeeData(id, value).subscribe(
      (data) => {
        console.log(data);
        alert('Data is changed');
      },
      (error) => {
        console.error('Error deleting employee', error);
      }
    );
  }
}
