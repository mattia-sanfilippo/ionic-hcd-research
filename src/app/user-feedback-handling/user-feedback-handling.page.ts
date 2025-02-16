import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-feedback-handling',
  templateUrl: './user-feedback-handling.page.html',
  styleUrls: ['./user-feedback-handling.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule],
})
export class UserFeedbackHandlingPage {
  constructor() {}
}
