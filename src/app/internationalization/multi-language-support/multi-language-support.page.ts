import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-multi-language-support',
  templateUrl: './multi-language-support.page.html',
  styleUrls: ['./multi-language-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class MultiLanguageSupportPage {
  constructor() {}
}
