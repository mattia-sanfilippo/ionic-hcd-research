import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonLabel, IonText, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-error-message-handling',
  templateUrl: './error-message-handling.page.html',
  styleUrls: ['./error-message-handling.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons, IonLabel, IonText, IonInput, IonItem, NgIf, ReactiveFormsModule],
})
export class ErrorMessageHandlingPage {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form valid and submitted');
    }
  }
}
