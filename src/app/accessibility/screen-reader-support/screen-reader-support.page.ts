import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-screen-reader-support',
  templateUrl: './screen-reader-support.page.html',
  styleUrls: ['./screen-reader-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons],
})
export class ScreenReaderSupportPage {
  constructor() {}
}
