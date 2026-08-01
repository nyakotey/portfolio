'use client';

import { useState } from 'react';

type Testimony = {
  avatar: string;
  title: string;
  text: string;
  alt_text: string;
};

const testimonies: Testimony[] = [
  {
    avatar: '/assets/images/avatar-1.png',
    title: 'Mr. Samuel Adabor',
    text: 'Nathaniel is an incredible person to work with. He really pays attention to the little details that we often miss in our design iterations. In short, he has good problem-solving skills, adapts quickly, and is self-motivated',
    alt_text: 'Mr. Samuel Adabor',
  },
  {
    avatar: '/assets/images/avatar-4.png',
    title: 'Dr. Kwasi Opare',
    text: 'I had the privilege of teaching Mr. Nyakotey during his time as a student in the Faculty of Electrical and Computer Engineering at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana. Mr. Nyakotey exhibits a great deal of discipline and responsibility in his work. I found him to be a highly intelligent, hardworking, and dedicated student.',
    alt_text: 'Dr. Kwasi Opare',
  },
];

export default function AboutPage() {
  const [modalData, setModalData] = useState<Testimony | null>(null);
  const [modalActive, setModalActive] = useState(false);

  const openTestimony = (index: number) => {
    setModalData(testimonies[index]);
    setModalActive(true);
  };

  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am an open-minded and versatile individual, ready to learn on-the-go and take on challenges
          that ultimately shapes and builds my career in eco-friendly intelligent systems.
        </p>

        <p>
          My interests lie in but not limited to Autonomous Systems, Artificial Intelligence (AI), Robotics
          and programming.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Engineering</h4>

              <p className="service-item-text">
                Building intelligent and embedded sytems, Circuit Design and Engineering Simulation.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="software development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Software Development</h4>

              <p className="service-item-text">High-quality engineering of websites and apps.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonies.map((testimony, index) => (
            <li className="testimonials-item" key={testimony.title} onClick={() => openTestimony(index)}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src={testimony.avatar} alt={testimony.alt_text} width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimony.title}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimony.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {modalData ? (
        <div className={`modal-container ${modalActive ? 'active' : ''}`}>
          <div className={`overlay ${modalActive ? 'active' : ''}`}></div>

          <section className="testimonials-modal">
            <button type="button" className="modal-close-btn" onClick={() => setModalActive(false)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalData.avatar} alt={modalData.alt_text} width="80" data-modal-img />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {modalData.title}
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
}