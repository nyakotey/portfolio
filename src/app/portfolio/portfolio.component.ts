import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  constructor() {}
  filter = 'all';
  isFilterActive = false;
  selectedCategory = 'Select category';
  categories = ['All', 'Engineering', 'AI/ML', 'Web Dev', 'CSS Art'];

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
    },
    {
      title: 'GPS Tracker - Design to PCB',
      category: 'Engineering',
      image: '../assets/images/gps.png',
      alt: 'GPS Tracker - Design to PCB',
      link: "/ece",
    },
    {
      title: 'Todo App with Firebase',
      category: 'Web Dev',
      image: '../assets/images/todoapp.png',
      alt: 'Todo App with Firebase',
      link: "https://todosky6.netlify.app",
    },
    {
      title: 'CAD Designs and modelling',
      category: 'Engineering',
      image: '../assets/images/cad.png',
      alt: 'Robot Gripper design in Fusion360',
      link: "/ece",
    },
    {
      title: 'Fuel to Electric Bike Conversion',
      category: 'Engineering',
      image: '../assets/images/bike conversion.png',
      alt: 'Fuel to Electric Bike Conversion',
      link: "/ece",
    },
    {
      title: 'EV Battery Lab Development',
      category: 'Engineering',
      image: '../assets/images/batterylab.png',
      alt: 'EV Battery Lab Development',
      link: "/ece",
    },
    {
      title: 'CallCodes',
      category: 'Web Dev',
      image: '../assets/images/callcodes.png',
      alt: 'callcodes',
      link: "https://call-codes.vercel.app/",
    },
    {
      title: 'Rcountdown',
      category: 'Web Dev',
      image: '../assets/images/countdown.png',
      alt: 'rcountdown',
      link: "https://rcountdown.netlify.app/",
    },
    {
      title: 'Coffin Dancers 👯‍♂️',
      category: 'CSS Art',
      image: '../assets/images/coffin.png',
      alt: 'Coffin Dancers',
      link: "https://coffin-dance-meme.netlify.app",
    },
    {
      title: 'Loaders 🔃',
      category: 'CSS Art',
      image: '../assets/images/loaders.png',
      alt: 'css loaders',
      link: "https://www.sololearn.com/en/compiler-playground/WJQTaKV9LKoj",
    },
    {
      title: 'Epic Christmas Show🎅🎄🎬',
      category: 'CSS Art',
      image: '../assets/images/xmas.png',
      alt: 'Epic Christmas Show',
      link: "https://www.sololearn.com/en/compiler-playground/WgboaWLHXidi",
    },
  ];
  filteredProjects = this.projects
}
