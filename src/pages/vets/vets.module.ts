import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VetsPage } from './vets';

@NgModule({
  declarations: [
    VetsPage,
  ],
  imports: [
    IonicPageModule.forChild(VetsPage),
  ],
})
export class VetsPageModule {}
