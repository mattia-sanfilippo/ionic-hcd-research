import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading-indicators',
  templateUrl: './loading-indicators.page.html',
  styleUrls: ['./loading-indicators.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton],
})
export class LoadingIndicatorsPage {
  constructor(private loadingController: LoadingController) {}

  async showLoadingIndicator() {
    const loading = await this.loadingController.create({
      duration: 3000
    });
    await loading.present();
  }
}
