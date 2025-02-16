import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, ToastController, GestureController } from '@ionic/angular/standalone';
import Hammer from 'hammerjs';
@Component({
  selector: 'app-basic-tap-gestures',
  templateUrl: './basic-tap-gestures.page.html',
  styleUrls: ['./basic-tap-gestures.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons],
})
export class BasicTapGesturesPage implements OnInit {
  @ViewChild('gestureBox', { static: true }) gestureBox!: ElementRef;

  private tapTimeout: any;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    const hammer = new Hammer(this.gestureBox.nativeElement);

    hammer.get('tap').set({ taps: 1 });
    hammer.get('doubletap').set({ taps: 2 });

    hammer.on('tap', () => this.onSingleTap());
    hammer.on('doubletap', () => this.onDoubleTap());
    hammer.on('press', () => this.onLongPress());
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });

    await toast.present();
  }

  handleTap() {
    if (this.tapTimeout) {
      clearTimeout(this.tapTimeout);
      this.tapTimeout = null;
      this.onDoubleTap();
    } else {
      this.tapTimeout = setTimeout(() => {
        this.onSingleTap();
        this.tapTimeout = null;
      }, 300);
    }
  }

  handleDoubleTap() {
    if (this.tapTimeout) {
      clearTimeout(this.tapTimeout);
      this.tapTimeout = null;
    }
    this.onDoubleTap();
  }


  onSingleTap() {
    this.showToast('Single tap detected');
  }

  onDoubleTap() {
    this.showToast('Double tap detected');
  }

  onLongPress() {
    this.showToast('Long press detected');
  }
}