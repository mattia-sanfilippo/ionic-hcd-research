import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-toast-messages-and-snackbars',
  templateUrl: './toast-messages-and-snackbars.page.html',
  styleUrls: ['./toast-messages-and-snackbars.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ToastMessagesAndSnackbarsPage {
  constructor() {}
}
