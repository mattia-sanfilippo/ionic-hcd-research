import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, IonBackButton, IonButtons],
})
export class AccessibilityPage {
  constructor() {}
}
