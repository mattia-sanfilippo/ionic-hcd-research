import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-right-to-left-layout',
  templateUrl: './right-to-left-layout.page.html',
  styleUrls: ['./right-to-left-layout.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class RightToLeftLayoutPage {
  constructor() {}
}
