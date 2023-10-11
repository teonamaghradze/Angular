import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        EmployeeListComponent,
    ],
})
export class EmployeesComponent {
  registrationForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      salary: [null, Validators.required],
      age: [null, Validators.required],
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const employeeData = this.registrationForm.value;
      this.employeeService.addEmployee(employeeData).subscribe(
        (response) => {
          console.log('Employee added successfully', response);
          this.registrationForm.reset();
        },
        (error) => {
          console.error('Error adding employee', error);
        }
      );
    }
  }
}
