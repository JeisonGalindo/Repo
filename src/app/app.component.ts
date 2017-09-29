import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxDSMOm_MI-OXnszWvQ662b6WY_kNV3Ok',
      authDomain: 'templateedited.firebaseapp.com',
    });
  }

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
