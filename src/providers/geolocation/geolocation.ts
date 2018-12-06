import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocationProvider {
  api_key = "xFIZyReO3QysHtrIE5lcMQ6ZEYumK2KQ";

  constructor(public http: Http) {
    console.log('Hello GeolocationProvider Provider');
  }

  getLatLngFromAddress(address) {
    return new Promise(resolve => {
      this.http.get(`https://www.mapquestapi.com/geocoding/v1/address?key=${this.api_key}&inFormat=kvp&outFormat=json&location=${address}&thumbMaps=false`)
      .subscribe(data => {
        var datj = data.json();
        try {
          var latLng = datj.results[0].locations[0].latLng;
          resolve (latLng);
        } catch (error) {
          resolve (null);
        }
        console.log(latLng);
      })
    });
  }

}
