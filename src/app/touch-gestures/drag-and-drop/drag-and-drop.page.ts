import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.page.html',
  styleUrls: ['./drag-and-drop.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class DragAndDropPage {
  constructor() {}
}
