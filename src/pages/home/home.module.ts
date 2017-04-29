/**
 * Created by You on 2017/4/29.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule { }

