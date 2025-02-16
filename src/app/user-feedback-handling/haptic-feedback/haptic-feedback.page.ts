import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-haptic-feedback',
  templateUrl: './haptic-feedback.page.html',
  styleUrls: ['./haptic-feedback.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HapticFeedbackPage {
  constructor() {}
}
