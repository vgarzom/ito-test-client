import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VetInfoPage } from './vet-info';

@NgModule({
  declarations: [
    VetInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VetInfoPage),
  ],
})
export class VetInfoPageModule {}
