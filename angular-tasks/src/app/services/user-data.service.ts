import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersData: any[] = [];

  constructor() {}

  setUserData(data: any) {
    this.usersData = data;
    console.log(data);
  }

  getUsersData() {
    return this.usersData;
  }
  getUserByEmail(email: string) {
    return this.usersData.find((user) => user.email === email);
  }
}