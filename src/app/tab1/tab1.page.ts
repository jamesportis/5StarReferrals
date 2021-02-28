import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppRate } from '@ionic-native/app-rate/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private menu: MenuController, public appRate: AppRate) { }

  

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  rateMeNow(){
    console.log(this);
    

    this.appRate.preferences = {
      usesUntilPrompt: 1,
      storeAppURL: {
       ios: '1491382600',
       android: 'market://details?id=com.seetucsonhomes.fivestar',
       windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }
     }
     
    this.appRate.promptForRating(false);

    console.log(this);
  }

  
}


