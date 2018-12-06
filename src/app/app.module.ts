import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VetsProvider } from '../providers/vets/vets';
import { VetsPageModule } from '../pages/vets/vets.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { InfoPageModule } from '../pages/info/info.module';
import { ContactsProvider } from '../providers/contacts/contacts';
import { GeolocationProvider } from '../providers/geolocation/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    VetsPageModule,
    RegisterPageModule,
    InfoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    VetsProvider,
    ContactsProvider,
    GeolocationProvider
  ]
})
export class AppModule { }
