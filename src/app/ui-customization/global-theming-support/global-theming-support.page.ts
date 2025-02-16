import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-global-theming-support',
  templateUrl: './global-theming-support.page.html',
  styleUrls: ['./global-theming-support.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonList, IonItem],
})
export class GlobalThemingSupportPage {
  constructor() {}
}
