import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dark-mode-support',
  templateUrl: './dark-mode-support.page.html',
  styleUrls: ['./dark-mode-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class DarkModeSupportPage {
  constructor() {}
}
