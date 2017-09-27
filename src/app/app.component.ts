import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNPjH-s7Eh2Ico-A-a7DdGyeFyTfD4gTY',
      authDomain: 'template-decima.firebaseapp.com'
    });
  }

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
