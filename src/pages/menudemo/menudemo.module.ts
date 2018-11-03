import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenudemoPage } from './menudemo';

@NgModule({
  declarations: [
    MenudemoPage,
  ],
  imports: [
    IonicPageModule.forChild(MenudemoPage),
  ],
})
export class MenudemoPageModule {}
