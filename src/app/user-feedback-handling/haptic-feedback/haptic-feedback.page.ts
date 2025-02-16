import { Component } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-haptic-feedback',
  templateUrl: './haptic-feedback.page.html',
  styleUrls: ['./haptic-feedback.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons],
})
export class HapticFeedbackPage {
  constructor() {}

  async triggerHaptic() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
}
