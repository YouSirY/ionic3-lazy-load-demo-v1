/**
 * Created by You on 2017/4/29.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ContactPage} from "./contact";

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage)
  ],
  entryComponents: [
    ContactPage
  ]
})
export class ContactPageModule { }
