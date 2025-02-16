import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-platform-consistency-vs-adaptation',
  templateUrl: './platform-consistency-vs-adaptation.page.html',
  styleUrls: ['./platform-consistency-vs-adaptation.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons, NgIf],
})
export class PlatformConsistencyVsAdaptationPage implements OnInit {

  public isIos: boolean = false;
  public isAndroid: boolean = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');
    console.log('Platform: ', this.platform.platforms());
  }
}
