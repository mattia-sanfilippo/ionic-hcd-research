import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading-indicators',
  templateUrl: './loading-indicators.page.html',
  styleUrls: ['./loading-indicators.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class LoadingIndicatorsPage {
  constructor() {}
}
