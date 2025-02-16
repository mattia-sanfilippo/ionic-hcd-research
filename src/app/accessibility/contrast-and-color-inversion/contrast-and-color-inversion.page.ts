import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contrast-and-color-inversion',
  templateUrl: './contrast-and-color-inversion.page.html',
  styleUrls: ['./contrast-and-color-inversion.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ContrastAndColorInversionPage {
  constructor() {}
}
