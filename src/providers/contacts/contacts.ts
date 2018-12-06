import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {
  serverUrl = "http://localhost:8081"
  constructor(public http: Http) {
    console.log('Hello VetsProvider Provider');
  }

  login(userdata) {
    return new Promise(resolve => {
      this.http.post(this.serverUrl + "/api/contacts/login",
        userdata)
        .subscribe(data => {
          resolve(data.json());
        })
    });
  }

  register(userdata) {
    return new Promise(resolve => {
      this.http.post(this.serverUrl + "/api/contacts/register",
        userdata)
        .subscribe(data => {
          resolve(data.json());
        })
    });
  }

}
