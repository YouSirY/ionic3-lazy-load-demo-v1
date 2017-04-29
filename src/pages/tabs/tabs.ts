import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage({
  name: 'tabsPage',
  segment: 'myTabs/:tabId/:token',
  priority:'high'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = "AboutPage";
  tab3Root = "ContactPage";

  constructor() {

  }
}
