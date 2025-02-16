import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pinch-to-zoom',
  templateUrl: './pinch-to-zoom.page.html',
  styleUrls: ['./pinch-to-zoom.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class PinchToZoomPage {
  constructor() {}
}
