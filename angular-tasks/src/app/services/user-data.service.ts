import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersData: any[] = [];
  private isLoggedIn: boolean = false; //es guardistvis

  constructor() {}

  setUserData(data: any) {
    this.usersData.push(data);
    console.log(data);
  }

  getUsersData() {
    return this.usersData;
  }
  getUserByEmail(email: string) {
    const userEmail = this.usersData.find((user) => user.email === email);
    this.isLoggedIn = true; // guardistvis
    return userEmail;
  }

  //esec guardistvis
  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}
