import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-swipe-gestures',
  templateUrl: './swipe-gestures.page.html',
  styleUrls: ['./swipe-gestures.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class SwipeGesturesPage {
  constructor() {}
}
