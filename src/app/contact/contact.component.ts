import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContactComponent {
  fullname!: string;
  email!: string;
  message!: string;
  notificationMsg!: string;
  showNotification = false;
  sendEmail(event: { target: HTMLFormElement; }) {
    emailjs
      .sendForm('service_83amxb6', 'contact_form', event.target as HTMLFormElement, {
        publicKey: 'rcyPcjrq8H0XHRGZI',
      })
      .then(
        (res) => {
          this.showNotification = true;
          this.notificationMsg = "message delivered 🎉";
          console.log('SUCCESS!', res.status, res.text);
          this.fullname = '';
          this.email = '';
          this.message = '';
        },
        (error) => {
          this.showNotification = true;
          this.notificationMsg = "Oops, error occurred 😓";
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
  closeNotification(){
    this.showNotification = false;
  }
  constructor() { }
}
