import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VetsProvider } from '../../providers/vets/vets';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the VetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vets',
  templateUrl: 'vets.html',
})
export class VetsPage {
  user: any;
  vets = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private vetsProvider: VetsProvider, private storage: Storage) {
    this.storage.get("user").then((user) => {
      console.log("user retrieve", user);
      this.user = JSON.parse(user);

      this.vetsProvider.getCloseVets(this.user.location.coordinates[0], this.user.location.coordinates[1]).then(data => {
        console.log("vets", data);
        if (data['code'] === 200) {
          this.vets = data['vets'];
        }

      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VetsPage');

  }

  getDistanceName(dist: number) {
    if (dist > 1) {
      return parseFloat(String(dist)).toFixed(2) + "Km";
    } else {
      return parseFloat(String(dist * 1000)).toFixed(2) + "m";
    }
  }

}
