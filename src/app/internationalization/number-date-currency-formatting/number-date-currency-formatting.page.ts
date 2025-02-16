import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-number-date-currency-formatting',
  templateUrl: './number-date-currency-formatting.page.html',
  styleUrls: ['./number-date-currency-formatting.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, TranslateModule],
})
export class NumberDateCurrencyFormattingPage {
  locale: string = 'en-US';
  today: Date = new Date();
  formattedNumber: string = '';
  formattedDate: string = '';
  formattedCurrency: string = '';

  constructor(
    private translate: TranslateService,
  ) {
    this.updateFormatting();
  }

  updateFormatting() {
    this.formattedNumber = new Intl.NumberFormat(this.locale, { minimumFractionDigits: 2 }).format(1234567.89);
    this.formattedDate = new Intl.DateTimeFormat(this.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }).format(this.today);
    this.formattedCurrency = new Intl.NumberFormat(this.locale, { style: 'currency', currency: 'EUR' }).format(1000);
  }

  changeLanguage(lang: string) {
    this.locale = lang === 'fr' ? 'fr-FR' : 'en-US';
    this.translate.use(lang);
    this.updateFormatting();
  }
}
