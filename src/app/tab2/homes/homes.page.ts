import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {


  mlsURL: SafeResourceUrl;
  constructor(public domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.mlsURL = this.domSanitizer.bypassSecurityTrustResourceUrl("https://my.flexmls.com/tonyraybaker/search/idx_links/20180222193507250589000000/listings");
  }

}
