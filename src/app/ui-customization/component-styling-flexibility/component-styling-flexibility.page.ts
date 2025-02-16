import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-component-styling-flexibility',
  templateUrl: './component-styling-flexibility.page.html',
  styleUrls: ['./component-styling-flexibility.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class ComponentStylingFlexibilityPage {
  constructor() {}
}
