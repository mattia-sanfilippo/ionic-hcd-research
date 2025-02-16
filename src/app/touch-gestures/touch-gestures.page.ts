import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-touch-gestures',
  templateUrl: './touch-gestures.page.html',
  styleUrls: ['./touch-gestures.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, IonButtons, IonBackButton],
})
export class TouchGesturesPage {
  constructor() {}
}
