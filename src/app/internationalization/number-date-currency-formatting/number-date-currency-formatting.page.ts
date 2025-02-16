import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-number-date-currency-formatting',
  templateUrl: './number-date-currency-formatting.page.html',
  styleUrls: ['./number-date-currency-formatting.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class NumberDateCurrencyFormattingPage {
  constructor() {}
}
