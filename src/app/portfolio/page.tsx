'use client';

import { useState } from 'react';

type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
  link: string;
  isExternal: boolean;
  text: string;
};

const categories = ['All', 'Engineering', 'AI/ML', 'Web Dev', 'CSS Art'];

const projects: Project[] = [
  {
    title: 'Deep Reinforcement Learning For UAV Landing Control',
    category: 'AI/ML',
    image: '/assets/images/drl-uav.png',
    alt: 'simulation env for DRL control of uav',
    link: 'https://github.com/nyakotey/recline',
    isExternal: true,
    text: '',
  },
  {
    title: 'ISEDAN - Ghana Stock Tracker App',
    category: 'Web Dev',
    image: '/assets/images/isedan.png',
    alt: 'GSE Portfolio Dashboard',
    link: 'https://isedan.app/',
    isExternal: true,
    text: '',
  },
  {
    title: 'Musical Instrument Classification Transformer Model',
    category: 'AI/ML',
    image: '/assets/images/minst-classifier.png',
    alt: 'AI/ML',
    link: 'https://huggingface.co/spaces/Nyakotey/Musical-Instrument-Classifier',
    isExternal: true,
    text: '',
  },
  {
    title: 'GPS Tracker - Design to PCB',
    category: 'Engineering',
    image: '/assets/images/gps.png',
    alt: 'GPS Tracker - Design to PCB',
    link: 'ece',
    isExternal: false,
    text:
      'The research team embarked on a project to locally develop GPS trackers for the fleet of EVs. The Circuit Design works were done with EASYEDA software, PCB printing was outsourced but soldering and assembly was done in-house',
  },
  {
    title: 'CAD Designs and modelling',
    category: 'Engineering',
    image: '/assets/images/cad.png',
    alt: 'Robot Gripper design in Fusion360',
    link: 'ece',
    isExternal: false,
    text:
      'I am Proficient in the use of CAD software such as Solidworks and Fusion360. The image here is that of a robotic End effector design actuated by a stepper motor',
  },
  {
    title: 'Fuel to Electric Bike Conversion',
    category: 'Engineering',
    image: '/assets/images/bike conversion.png',
    alt: 'Fuel to Electric Bike Conversion',
    link: 'ece',
    isExternal: false,
    text:
      'The research team transformed this fuel motorcycle into a fully electric version, substituting in Electronic Speed Controllers (ESC), Relays and the lithium battery pack built in-house',
  },
  {
    title: 'EV Battery Lab Development',
    category: 'Engineering',
    image: '/assets/images/batterylab.png',
    alt: 'EV Battery Lab Development',
    link: 'ece',
    isExternal: false,
    text: 'Myself at the Battery Lab, where I research, build and assemble EV lithium battery packs',
  },
  {
    title: 'CallCodes',
    category: 'Web Dev',
    image: '/assets/images/callcodes.png',
    alt: 'callcodes',
    link: 'https://call-codes.vercel.app/',
    isExternal: true,
    text: '',
  },
  {
    title: 'Rcountdown',
    category: 'Web Dev',
    image: '/assets/images/countdown.png',
    alt: 'rcountdown',
    link: 'https://rcountdown.netlify.app/',
    isExternal: true,
    text: '',
  },
  {
    title: 'Coffin Dancers 👯‍♂️',
    category: 'CSS Art',
    image: '/assets/images/coffin.png',
    alt: 'Coffin Dancers',
    link: 'https://coffin-dance-meme.netlify.app',
    isExternal: true,
    text: '',
  },
  {
    title: 'Loaders 🔃',
    category: 'CSS Art',
    image: '/assets/images/loaders.png',
    alt: 'css loaders',
    link: 'https://www.sololearn.com/en/compiler-playground/WJQTaKV9LKoj',
    isExternal: true,
    text: '',
  },
  {
    title: 'Epic Christmas Show🎅🎄🎬',
    category: 'CSS Art',
    image: '/assets/images/xmas.png',
    alt: 'Epic Christmas Show',
    link: 'https://www.sololearn.com/en/compiler-playground/WgboaWLHXidi',
    isExternal: true,
    text: '',
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('Select category');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActive, setModalActive] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const applyFilter = (category: string) => {
    const nextFilter = category.toLowerCase();

    setFilter(nextFilter);
    setFilteredProjects(
      nextFilter === 'all' ? projects : projects.filter((project) => project.category.toLowerCase() === nextFilter),
    );
  };

  const setSelected = (category: string) => {
    setSelectedCategory(category);
    setIsFilterActive(false);
    applyFilter(category);
  };

  const filterFunc = (category: string) => {
    applyFilter(category);
  };

  const popUpProject = (project: Project) => {
    setSelectedProject(project);
    setModalActive(true);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button className={category.toLowerCase() === filter ? 'active' : ''} onClick={() => filterFunc(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className={`filter-select ${isFilterActive ? 'active' : ''}`} onClick={() => setIsFilterActive((value) => !value)}>
            <div className="select-value" data-select-value>
              {selectedCategory}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button type="button" onClick={() => setSelected(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => {
            if (project.isExternal) {
              return (
                <li className="project-item active" key={project.title}>
                  <a href={project.link}>
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <img src={project.image} alt={project.alt} loading="lazy" />
                    </figure>

                    <h3 className="project-title">{project.title}</h3>

                    <p className="project-category">{project.category}</p>
                  </a>
                </li>
              );
            }

            return (
              <li className="project-item active" key={project.title} onClick={() => popUpProject(project)}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {selectedProject ? (
        <div className={`modal-container ${modalActive ? 'active' : ''}`}>
          <div className={`overlay ${modalActive ? 'active' : ''}`}></div>

          <section className="testimonials-modal">
            <button type="button" className="modal-close-btn" onClick={() => setModalActive(false)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={selectedProject.image} alt={selectedProject.alt} width="200" data-modal-img />
              </figure>
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                {selectedProject.title}
              </h4>

              <div data-modal-text>
                <p>{selectedProject.text}</p>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
}