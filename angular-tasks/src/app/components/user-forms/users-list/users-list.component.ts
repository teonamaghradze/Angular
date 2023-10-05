import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Users } from '../users.interface';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Output() selectedUser = new EventEmitter<Users>();

  editingUser: boolean | any = false;

  userToRemove: Users | null = null;

  currentUser: any = '';

  // @Input() userData: Users[] = [];
  userData: Users[] = [];

  constructor(private userDataService: UserDataService) {
    console.log(this.userData);
    this.userData = this.userDataService.getUsersData();
  }

  //edit User
  editUser(user: Users) {
    console.log(user, 'user');

    this.editingUser = user;
    this.selectedUser.emit(user);
  }

  //removeuser
  removeUser(user: Users) {
    this.userToRemove = user;
  }

  getCurrentUser() {
    return this.userDataService.currentUser;
  }

  // Function to confirm and remove the user
  confirmRemoveUser() {
    if (this.userToRemove) {
      const email = this.userToRemove.email;
      const confirmMessage = `This action will remove a user with this email: ${email}\nAre you sure?`;

      if (confirm(confirmMessage)) {
        const index = this.userData.findIndex(
          (user: Users) => user.email === this.userToRemove?.email
        );
        console.log('index', index);
        console.log(this.userToRemove);

        if (index !== -1) {
          console.log(this.userData, 1);

          // Remove the user from the list
          this.userData.splice(index, 1);
          console.log(this.userData, 2);
        }
        this.userToRemove = null;
      }
    }
  }

  // Function to cancel the removal action
  cancelRemoveUser() {
    this.userToRemove = null;
  }
}
