import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the VetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VetsProvider {
  serverUrl = "https://itotestserver.herokuapp.com"
  constructor(public http: Http) {
    console.log('Hello VetsProvider Provider');
  }

  login(userdata) {
    return new Promise(resolve => {
      this.http.post(this.serverUrl + "/api/vets/login",
        userdata)
        .subscribe(data => {
          resolve(data.json());
        })
    });
  }

  register(userdata) {
    return new Promise(resolve => {
      this.http.post(this.serverUrl + "/api/vets/register",
        userdata)
        .subscribe(data => {
          resolve(data.json());
        })
    });
  }

  getCloseVets(lng, lat) {
    return new Promise(resolve => {
      this.http.post(this.serverUrl + "/api/vets/close",
        { lat: lat, lng: lng, max_distance: 10000 })
        .subscribe(data => {
          resolve(data.json());
        })
    })
  }


}
