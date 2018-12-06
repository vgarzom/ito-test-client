import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VetsProvider } from '../../providers/vets/vets';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {};
  isVet = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private vetsProvider: VetsProvider, private contactsProvider: ContactsProvider, private geolocationProvider: GeolocationProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.geolocationProvider.getLatLngFromAddress(this.user['address']).then(latlng => {
      if (latlng === null) {
        const alert = this.alertCtrl.create({
          title: 'Hay un problema!',
          subTitle: 'No hemos podido validar tu dirección. Recuerda ingresarla en este formato ejemplo: calle 23 7-48, Bogotá, Colombia',
          buttons: [{
            text: 'Vale', handler: data => {
              this.navCtrl.pop();
            }
          }]
        });
        alert.present();
        return;
      }

      this.user['location'] = {
        type: "Point",
        coordinates: [latlng['lng'], latlng['lat']]
      }

      if (this.isVet) {
        this.vetsProvider.register(this.user).then(data => {
          console.log(data);
          if (data['code'] === 200) {
            const alert = this.alertCtrl.create({
              title: 'Excelente!',
              subTitle: 'Te has registrado exitosamente.',
              buttons: [{
                text: 'Vale', handler: data => {
                  this.navCtrl.pop();
                }
              }]
            });
            alert.present();
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
        this.contactsProvider.register(this.user).then(data => {
          console.log(data);
          if (data['code'] === 200) {
            const alert = this.alertCtrl.create({
              title: 'Excelente!',
              subTitle: 'Te has registrado exitosamente.',
              buttons: [{
                text: 'Vale', handler: data => {
                  this.navCtrl.pop();
                }
              }]
            });
            alert.present();
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

    })



  }

  goToLogin() {
    this.navCtrl.setRoot("LoginPage");
  }

}
