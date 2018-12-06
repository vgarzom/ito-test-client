import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { VetsProvider } from '../../providers/vets/vets';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AlertController } from 'ionic-angular';

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
    private alertCtrl: AlertController) {

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
          this.navCtrl.setRoot("InfoPage");
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
          this.navCtrl.setRoot("VetsPage");
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
