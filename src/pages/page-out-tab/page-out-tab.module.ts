import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageOutTab } from './page-out-tab';

@NgModule({
  declarations: [
    PageOutTab,
  ],
  imports: [
    IonicPageModule.forChild(PageOutTab),
  ],
  exports: [
    PageOutTab
  ]
})
export class PageOutTabModule {}
