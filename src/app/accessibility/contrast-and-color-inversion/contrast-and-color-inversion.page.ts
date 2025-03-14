import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contrast-and-color-inversion',
  templateUrl: './contrast-and-color-inversion.page.html',
  styleUrls: ['./contrast-and-color-inversion.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class ContrastAndColorInversionPage {
  constructor() {}
}
