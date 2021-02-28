import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit() {
  }

}
