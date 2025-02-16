import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, ToastController, AlertController, Platform } from '@ionic/angular/standalone';


@Component({
  selector: 'app-toast-messages-and-snackbars',
  templateUrl: './toast-messages-and-snackbars.page.html',
  styleUrls: ['./toast-messages-and-snackbars.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class ToastMessagesAndSnackbarsPage {
  constructor(private toastController: ToastController, private alertController: AlertController, private platform: Platform) {}

  async showToast() {
    const toast = await this.toastController.create({
      message: 'This is a Toast message!',
      duration: 3000,
      position: 'bottom',
      buttons: [{ text: 'Close', role: 'cancel' }]
    });
    await toast.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an Alert message!',
      buttons: ['OK']
    });
    await alert.present();
  }
}
