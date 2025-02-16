import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-keyboard-navigation',
  templateUrl: './keyboard-navigation.page.html',
  styleUrls: ['./keyboard-navigation.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class KeyboardNavigationPage {
  constructor() {}
}
