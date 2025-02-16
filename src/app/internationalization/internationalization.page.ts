import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.page.html',
  styleUrls: ['./internationalization.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule],
})
export class InternationalizationPage {
  constructor() {}
}
