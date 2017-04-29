/**
 * Created by You on 2017/4/29.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AboutPage} from "./about";

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage)
  ],
  entryComponents: [
    AboutPage
  ]
})
export class ContactPageModule { }
