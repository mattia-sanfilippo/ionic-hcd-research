import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language-support',
  templateUrl: './multi-language-support.page.html',
  styleUrls: ['./multi-language-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, TranslateModule],
})
export class MultiLanguageSupportPage {
  constructor(private translate: TranslateService) {}

  toggleLanguage() {
    this.translate.use(this.translate.currentLang === 'en' ? 'fr' : 'en');
  }
}
