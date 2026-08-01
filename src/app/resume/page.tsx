'use client';

export default function ResumePage() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      'https://drive.google.com/uc?export=download&id=1z5Zw0r0COFDyukzEgrQglBJhnKN2ljog',
    );
    link.setAttribute('download', 'Nathaniel_Nyakotey_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Kwame Nkrumah University of Science and Technology</h4>

            <span>2024 — 2025</span>

            <p className="timeline-text">MPhil Computer Engineering</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Kwame Nkrumah University of Science and Technology</h4>

            <span>2017 — 2021</span>

            <p className="timeline-text">BSc Electrical Engineering</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Achimota College</h4>

            <span>2014 — 2017</span>

            <p className="timeline-text">General Science</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Founder and Software Engineer</h4>

            <span>2026 — Present</span>

            <p className="timeline-text">
              Founded &quot;Nytrix Technologies&quot;, a business focused on digital innovation.
              Flagship product is the ISEDAN app, a cross-platform application for tracking the Ghana Stock Exchange.
              Currently serves 1500+ users with 10000+ social media followers.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Research Engineer</h4>

            <span>2021 — 2024</span>

            <p className="timeline-text">
              Worked at Solartaxi, the pioneer eco-mobility company in Ghana.
              Served as a Graduate trainee (National Service Personnel) in my first year, working on a variety of Electric motorcycle and electric car components.
              I was retained as a permanent staff after my first year, a testament to my work ethic, and into the role of Research Engineer
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Embedded Systems Engineer</h4>

            <span>2023</span>

            <p className="timeline-text">Worked remotely as an Embedded Systems Engineer at the startup Simpeller, based in Germany.</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Engineering Intern</h4>

            <span>2020</span>

            <p className="timeline-text">
              Interned at the Council for Scientific and Industrial Research (CSIR-IIR), worked on several innovative projects including an automated COVID disinfection chamber, and a Solar-powered Cyber Mobile Irrigation Unit
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Software Engineering</h5>
              <data value="85">85%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Computer Engineering</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Electrical Engineering</h5>
              <data value="95">95%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>
        </ul>
      </section>

      <section className="download">
        <h3 className="h3"> Download CV </h3>

        <button type="button" className="form-btn" id="download-btn" onClick={downloadCV}>
          <ion-icon name="cloud-download"></ion-icon>
          Download PDF
        </button>
      </section>
    </article>
  );
}