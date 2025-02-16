import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-right-to-left-layout',
  templateUrl: './right-to-left-layout.page.html',
  styleUrls: ['./right-to-left-layout.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, TranslateModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class RightToLeftLayoutPage {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  toggleLanguage() {
    if (this.translate.getDefaultLang() === 'en') {
      this.translate.setDefaultLang('ar');
      document.dir = 'rtl';
    } else {
      this.translate.setDefaultLang('en');
      document.dir = 'ltr';
    }
  }
}
