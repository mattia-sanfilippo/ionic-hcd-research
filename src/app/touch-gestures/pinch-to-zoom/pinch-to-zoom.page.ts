import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-pinch-to-zoom',
  templateUrl: './pinch-to-zoom.page.html',
  styleUrls: ['./pinch-to-zoom.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons],
})
export class PinchToZoomPage implements OnInit {
  @ViewChild('zoomBox', { static: true }) zoomBox!: ElementRef;
  scale: number = 1;
  private initialScale: number = 1;

  ngOnInit() {
    const hammer = new Hammer(this.zoomBox.nativeElement);

    hammer.get('pinch').set({ enable: true });

    hammer.on('pinchstart', (ev) => this.onPinchStart(ev));
    hammer.on('pinchmove', (ev) => this.onPinchMove(ev));
    hammer.on('pinchend', (ev) => this.onPinchEnd(ev));
  }

  onPinchStart(ev: any) {
    this.initialScale = this.scale;
  }

  onPinchMove(ev: any) {
    this.scale = this.initialScale * ev.scale;
    this.zoomBox.nativeElement.querySelector('img').style.transform = `scale(${this.scale})`;
  }

  onPinchEnd(ev: any) {
    this.initialScale = this.scale;
  }
}
