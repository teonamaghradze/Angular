import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { Users } from '../users.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnChanges {
  registrationForm: FormGroup;
  //empty array to push registered users
  userData: Users[] = [];

  passwordMatched: boolean = true;

  @Input() selectedUser: Users | null = null;

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private router: Router
  ) {
    console.log(this.selectedUser, 'seslds');
    this.userData = this.userDataService.getUsersData();

    this.registrationForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{8,}$/)],
        ],

        confirmPassword: ['', [Validators.required, this.isPasswordMatched]],
        nickname: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)],
        ],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^\+995\d{9}$/)],
        ],
        website: [
          '',
          [
            Validators.required,

            Validators.pattern(
              /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})(\/[a-zA-Z0-9]{2,})?/
            ),
          ],
        ],
        agreement: [false, Validators.requiredTrue],
      },
      { validators: this.isPasswordMatched }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser']) {
      console.log(this.selectedUser, changes['selectedUser'].currentValue);

      this.selectedUser = changes['selectedUser'].currentValue;
      if (this.selectedUser) this.editUser(this.selectedUser);
    }
  }

  isPasswordMatched(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  }

  onSubmit(formData: any) {
    if (
      this.registrationForm.errors &&
      this.registrationForm.errors['passwordMismatch']
    ) {
      this.passwordMatched = false;
      return;
    }

    this.passwordMatched = true;

    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // this.userData.push(formData);
      this.registrationForm.reset();

      this.userDataService.setUserData(formData);
      // this.router.navigate(['/login']);
    }
  }

  //edit User
  editUser(user: Users) {
    console.log(user, 'dsad');

    //copy of user
    this.selectedUser = { ...user };

    this.registrationForm.patchValue(this.selectedUser);
    console.log('dasdsad', this.selectedUser);
  }

  // // Function to save the edited user
  saveUser() {
    console.log(this.selectedUser, 'save');
    console.log(this.userData, 'user data 111');

    if (this.registrationForm.valid) {
      const editedUserData = this.registrationForm.value;
      const index = this.userData.findIndex(
        (user) => user.email === this.selectedUser?.email
      );

      console.log(index, 'index 2');

      if (index !== -1) {
        this.userData[index] = editedUserData;

        this.userDataService.editUserData(index, editedUserData);

        this.selectedUser = null;
        this.registrationForm.reset();
      }
    }
  }

  // //cancel edit
  cancelEdit() {
    console.log('edit', this.selectedUser);

    this.selectedUser = null;
    this.registrationForm.reset();
  }

  checkPasswords() {
    this.passwordMatched = !(
      this.registrationForm.get('password')?.value !==
      this.registrationForm.get('confirmPassword')?.value
    );
  }
}
