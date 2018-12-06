import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the VetInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vet-info',
  templateUrl: 'vet-info.html',
})
export class VetInfoPage {

  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VetInfoPage');
    this.storage.get("user").then((user) => {
      console.log("user retrieve", user);
      this.user = JSON.parse(user);
    })
  }

  logout() {
    this.storage.remove("user");
    this.navCtrl.setRoot("HomePage");
  }

}
