'use client';

import { type FormEvent, useState } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export default function ContactPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notificationMsg, setNotificationMsg] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const closeNotification = () => {
    setShowNotification(false);
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    emailjs
      .sendForm('service_83amxb6', 'contact_form', form, {
        publicKey: 'rcyPcjrq8H0XHRGZI',
      })
      .then(
        (res) => {
          setShowNotification(true);
          setNotificationMsg('message delivered 🎉');
          console.log('SUCCESS!', res.status, res.text);
          setFullname('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setShowNotification(true);
          setNotificationMsg('Oops, error occurred 😓');
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=accra&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              className="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="form-btn" type="submit" disabled={!fullname || !email || !message}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>

      {showNotification ? (
        <section className="modal-container active">
          <div className="notification" style={{ animationPlayState: 'running' }} onClick={closeNotification}>
            {notificationMsg}
            <span className="close"><ion-icon name="close"></ion-icon></span>
          </div>
        </section>
      ) : null}
    </article>
  );
}