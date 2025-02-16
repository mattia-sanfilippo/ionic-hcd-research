import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-error-message-handling',
  templateUrl: './error-message-handling.page.html',
  styleUrls: ['./error-message-handling.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ErrorMessageHandlingPage {
  constructor() {}
}
