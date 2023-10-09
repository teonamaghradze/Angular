import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  editEmployee: FormGroup; // Declare the registrationForm property

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.editEmployee = this.fb.group({
      name: ['', Validators.required],
      salary: [null, Validators.required],
      age: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.employeeService
      .getEmployeeId(this.router.snapshot.params['id'])
      .subscribe((data: any) => {
        // console.log(data);
        this.editEmployee = this.fb.group({
          name: [data['name'], Validators.required],
          salary: [data['salary'], Validators.required],
          age: [data['age'], Validators.required],
        });
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
