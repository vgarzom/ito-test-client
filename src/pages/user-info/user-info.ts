import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get("user").then((user) => {
      console.log("user retrieve", user);
      this.user = JSON.parse(user);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');

  }

  logout() {
    this.storage.remove("user");
    this.navCtrl.setRoot("HomePage");
  }

  goToVetList() {
    this.navCtrl.push("VetsPage");
  }

}
