import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-semantic-elements-and-aria-roles',
  templateUrl: './semantic-elements-and-aria-roles.page.html',
  styleUrls: ['./semantic-elements-and-aria-roles.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class SemanticElementsAndAriaRolesPage {
  constructor() {}
}
