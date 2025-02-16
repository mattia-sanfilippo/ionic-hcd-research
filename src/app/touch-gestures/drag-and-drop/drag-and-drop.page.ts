import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.page.html',
  styleUrls: ['./drag-and-drop.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgFor, IonButtons, IonBackButton, IonIcon],
})
export class DragAndDropPage implements OnInit {
  @ViewChild('draggable', { static: true }) draggable!: ElementRef;
  @ViewChild('dropContainer', { static: true }) dropContainer!: ElementRef;

  private initialX: number = 0;
  private initialY: number = 0;
  private currentX: number = 0;
  private currentY: number = 0;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    const hammer = new Hammer(this.draggable.nativeElement);

    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hammer.on('panstart', (ev) => this.onDragStart(ev));
    hammer.on('panmove', (ev) => this.onDragMove(ev));
    hammer.on('panend', (ev) => this.onDragEnd(ev));
  }

  onDragStart(ev: any) {
    ev.preventDefault();
    this.initialX = ev.center.x - this.currentX;
    this.initialY = ev.center.y - this.currentY;
    this.draggable.nativeElement.style.transition = 'none';
  }

  onDragMove(ev: any) {
    ev.preventDefault();
    this.currentX = ev.center.x - this.initialX;
    this.currentY = ev.center.y - this.initialY;
    this.draggable.nativeElement.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
  }

  onDragEnd(ev: any) {
    ev.preventDefault();
    const dropRect = this.dropContainer.nativeElement.getBoundingClientRect();
    const dragRect = this.draggable.nativeElement.getBoundingClientRect();

    if (
      dragRect.left >= dropRect.left &&
      dragRect.right <= dropRect.right &&
      dragRect.top >= dropRect.top &&
      dragRect.bottom <= dropRect.bottom
    ) {
      this.draggable.nativeElement.style.transform = 'translate(0, 0)';
      this.dropContainer.nativeElement.appendChild(this.draggable.nativeElement);
      this.showToast('Dropped successfully!');
    } else {
      this.draggable.nativeElement.style.transition = 'transform 0.3s ease';
      this.draggable.nativeElement.style.transform = 'translate(0, 0)';
      this.currentX = 0;
      this.currentY = 0;
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });

    await toast.present();
  }
}
