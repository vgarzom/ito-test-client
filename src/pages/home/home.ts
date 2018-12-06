import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { VetsProvider } from '../../providers/vets/vets';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { IonicPage, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isVet = true;
  user = {
    username: "",
    password: ""
  }
  constructor(public navCtrl: NavController,
    private vetsProvider: VetsProvider,
    private contactsProvider: ContactsProvider,
    private alertCtrl: AlertController,
    private storage: Storage) {

  }

  login() {
    console.log('trying login');
    if (this.user.username === "" || this.user.username === "") {
      const alert = this.alertCtrl.create({
        title: 'Ooops!',
        subTitle: 'Por favor no dejes campos en blanco',
        buttons: ['Vale']
      });
      alert.present();
      return;
    }
    if (this.isVet) {
      this.vetsProvider.login(this.user).then(data => {
        console.log(data);
        if (data['code'] === 200) {
          console.log("Is code 200");
          this.storage.set("user", JSON.stringify(data['vet']));
          this.navCtrl.setRoot("VetInfoPage");
        } else {
          const alert = this.alertCtrl.create({
            title: 'Ooops!',
            subTitle: 'Parece que el usuario o la contraseña es incorrecta. Vuelve a intentarlo',
            buttons: ['Vale']
          });
          alert.present();
        }
      })
    }
    else {
      this.contactsProvider.login(this.user).then(data => {
        console.log(data);
        if (data['code'] === 200) {
          this.storage.set("user", JSON.stringify(data['vet']));
          this.navCtrl.setRoot("UserInfoPage");
        } else {
          const alert = this.alertCtrl.create({
            title: 'Ooops!',
            subTitle: 'Parece que el usuario o la contraseña es incorrecta. Vuelve a intentarlo',
            buttons: ['Vale']
          });
          alert.present();
        }
      })
    }
  }

  register() {
    this.navCtrl.push("RegisterPage");
  }

}
