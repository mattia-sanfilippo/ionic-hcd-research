import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-screen-reader-support',
  templateUrl: './screen-reader-support.page.html',
  styleUrls: ['./screen-reader-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ScreenReaderSupportPage {
  constructor() {}
}
