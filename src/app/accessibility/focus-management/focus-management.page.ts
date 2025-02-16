import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-focus-management',
  templateUrl: './focus-management.page.html',
  styleUrls: ['./focus-management.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class FocusManagementPage {
  constructor() {}
}
