import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContactComponent {
  fullname!: string;
  email!: string;
  message!: string;
  sendEmail(event: { target: HTMLFormElement; }) {
    emailjs
      .sendForm('service_83amxb6', 'contact_form', event.target as HTMLFormElement, {
        publicKey: 'rcyPcjrq8H0XHRGZI',
      })
      .then(
        (res) => {
          console.log('SUCCESS!', res.status, res.text);
          this.fullname = '';
          this.email = '';
          this.message = '';
          alert("message sent")
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
  constructor() { }

}
