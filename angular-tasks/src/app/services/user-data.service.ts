import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersData: any[] = [];
  public isLoggedIn: boolean = false; //es guardistvis
  public currentUser: any = '';

  setUserData(data: any) {
    this.usersData.push(data);
    console.log(data);
  }

  editUserData(index: number, data: any) {
    console.log(data, 'data');
    console.log(index, 'i');
    console.log(this.usersData);

    // const index = this.usersData.findIndex(
    //   (user: any) => user.email === data.email
    // );
    // console.log(index, 'index');
    this.currentUser = this.usersData[index].email;

    this.usersData[index] = data;
  }

  getUsersData() {
    return this.usersData;
  }
  getUserByEmail(email: string) {
    const userEmail = this.usersData.find((user) => user.email === email);

    if (userEmail) {
      this.isLoggedIn = true; // guardistvis
      this.currentUser = email;
    }

    return userEmail;
  }

  //esec guardistvis
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
