import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  constructor(
    public  sanitizer:DomSanitizer) {
    }

 

  ngOnInit() {
  }

}
