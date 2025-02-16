import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-basic-tap-gestures',
  templateUrl: './basic-tap-gestures.page.html',
  styleUrls: ['./basic-tap-gestures.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class BasicTapGesturesPage {
  constructor() {}
}
