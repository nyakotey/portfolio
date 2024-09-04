import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { EceComponent } from '../ece/ece.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  imports: [EceComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  constructor() {}

  filter = 'all';
  isFilterActive = false;
  selectedCategory = 'Select category';
  categories = ['All', 'Engineering', 'AI/ML', 'Web Dev', 'CSS Art'];
  project! : { title: string; category: string; image: string; alt: string; link: string; isExternal: boolean; text: string;};

  @ViewChild(EceComponent, { static: true }) ECEComponent: any;

  popUpProject(project: any) {
    this.project = project;
    this.ECEComponent.toggleModal();
  }

  filterFunc(event: any) {
    this.filter = event.target.innerHTML.toLowerCase();
    if (this.filter == 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (p) => p.category.toLowerCase() == this.filter
      );
    }
  }
  setSelected(option: any) {
    this.selectedCategory = option.target.innerHTML;
    this.toggleClass();
    this.filterFunc(option);
  }
  toggleClass() {
    this.isFilterActive = !this.isFilterActive;
  }

  projects = [
    {
      title: 'Musical Instrument Classification Transformer Model',
      category: 'AI/ML',
      image: '../assets/images/minst-classifier.png',
      alt: 'AI/ML',
      link: "https://huggingface.co/spaces/Nyakotey/Musical-Instrument-Classifier",
      isExternal: true,
      text: '',
    },
    {
      title: 'GPS Tracker - Design to PCB',
      category: 'Engineering',
      image: '../assets/images/gps.png',
      alt: 'GPS Tracker - Design to PCB',
      link: "ece",
      isExternal: false,
      text: 'The research team embarked on a project to locally develop GPS trackers for the fleet of EVs. The Circuit Design works were done with EASYEDA software, PCB printing was outsourced but soldering and assembly was done in-house',
    },
    {
      title: 'Todo App with Firebase',
      category: 'Web Dev',
      image: '../assets/images/todoapp.png',
      alt: 'Todo App with Firebase',
      link: "https://todosky6.netlify.app",
      isExternal: true,
      text: '',
    },
    {
      title: 'CAD Designs and modelling',
      category: 'Engineering',
      image: '../assets/images/cad.png',
      alt: 'Robot Gripper design in Fusion360',
      link: "ece",
      isExternal: false,
      text: 'I am Proficient in the use of CAD software such as Solidworks and Fusion360. The image here is that of a robotic End effector design actuated by a stepper motor',
    },
    {
      title: 'Fuel to Electric Bike Conversion',
      category: 'Engineering',
      image: '../assets/images/bike conversion.png',
      alt: 'Fuel to Electric Bike Conversion',
      link: "ece",
      isExternal: false,
      text: 'The research team transformed this fuel motorcycle into a fully electric version, substituting in Electronic Speed Controllers (ESC), Relays and the lithium battery pack built in-house',
    },
    {
      title: 'EV Battery Lab Development',
      category: 'Engineering',
      image: '../assets/images/batterylab.png',
      alt: 'EV Battery Lab Development',
      link: "ece",
      isExternal: false,
      text: 'Myself at the Battery Lab, where I research, build and assemble EV lithium battery packs',
    },
    {
      title: 'CallCodes',
      category: 'Web Dev',
      image: '../assets/images/callcodes.png',
      alt: 'callcodes',
      link: "https://call-codes.vercel.app/",
      isExternal: true,
      text: '',
    },
    {
      title: 'Rcountdown',
      category: 'Web Dev',
      image: '../assets/images/countdown.png',
      alt: 'rcountdown',
      link: "https://rcountdown.netlify.app/",
      isExternal: true,
      text: '',
    },
    {
      title: 'Coffin Dancers 👯‍♂️',
      category: 'CSS Art',
      image: '../assets/images/coffin.png',
      alt: 'Coffin Dancers',
      link: "https://coffin-dance-meme.netlify.app",
      isExternal: true,
      text: '',
    },
    {
      title: 'Loaders 🔃',
      category: 'CSS Art',
      image: '../assets/images/loaders.png',
      alt: 'css loaders',
      link: "https://www.sololearn.com/en/compiler-playground/WJQTaKV9LKoj",
      isExternal: true,
      text: '',
    },
    {
      title: 'Epic Christmas Show🎅🎄🎬',
      category: 'CSS Art',
      image: '../assets/images/xmas.png',
      alt: 'Epic Christmas Show',
      link: "https://www.sololearn.com/en/compiler-playground/WgboaWLHXidi",
      isExternal: true,
      text: '',
    },
  ];
  filteredProjects = this.projects
}
