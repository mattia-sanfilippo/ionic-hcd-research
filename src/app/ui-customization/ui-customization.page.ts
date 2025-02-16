import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ui-customization',
  templateUrl: './ui-customization.page.html',
  styleUrls: ['./ui-customization.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule],
})
export class UiCustomizationPage {
  constructor() {}
}
