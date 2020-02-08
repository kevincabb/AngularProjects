import { Injectable } from '@angular/core';
import { Profiles } from '../interfaces/profiles';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Profiles[] = [];

  constructor() { }

  checkCred(email: string, password: string): boolean {
    let result = false;
    for (let i = 0; i < this.accounts.length; i++) {
      if (email === this.accounts[i].email && password === this.accounts[i].password) {
        result = true;
      }
    }
    return result;
  }

  userExists(userEmail: string): boolean {
    let result = false;
    if (this.accounts.find(x => userEmail.toLowerCase() === x.email) !== undefined) {
      result = true;
    }
    return result;
  }

  addUser(fName: string, lName: string, email: string, password: string, cPassword: string) {
    const userAccount: Profiles = {
      fName: fName.toLowerCase(),
      lName: lName.toLowerCase(),
      email: email.toLowerCase(),
      password: password.toLowerCase(),
      cPassword: cPassword.toLowerCase()
    };
    this.accounts.push(userAccount);
    localStorage.setItem('users', JSON.stringify(this.accounts));
    console.log(this.accounts);
  }

  setUserList() {
    if (JSON.parse(localStorage.getItem('users'))) {
      this.accounts = JSON.parse(localStorage.getItem('users'));
      console.log(this.accounts)
    }
  }
}
