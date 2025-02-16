import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent,  IonButtons, IonBackButton, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonList, IonItemOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-swipe-gestures',
  templateUrl: './swipe-gestures.page.html',
  styleUrls: ['./swipe-gestures.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonList, NgFor],
})
export class SwipeGesturesPage {
  constructor() {}

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  deleteItem(item: string) {
    this.items = this.items.filter(i => i !== item);
    console.log(`${item} deleted`);
  }
}
