import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dynamic-text-scaling',
  templateUrl: './dynamic-text-scaling.page.html',
  styleUrls: ['./dynamic-text-scaling.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class DynamicTextScalingPage {
  constructor() {}
}
