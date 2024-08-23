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
  categories = ['All', 'ECE', 'AI', 'Web Development', 'CSS Art'];

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
      title: 'CAD Designs with Fusion360',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'Robot Gripper design in Fusion360',
      link: "/ece",
    },
    {
      title: 'Fuel to Electric Bike Conversion',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'Fuel to Electric Bike Conversion',
      link: "/ece",
    },
    {
      title: 'EV Battery Build and Assembly',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'EV Battery Build and Assembly',
      link: "/ece",
    },
    {
      title: 'GPS Tracker - Design to PCB',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'GPS Tracker - Design to PCB',
      link: "/ece",
    },
    {
      title: 'MATLAB Simulations',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'MATLAB Simulations',
      link: "/ece",
    },
    {
      title: 'Musical Instrument Classification Transformer Model',
      category: 'AI',
      image: '../assets/images/project-7.png',
      alt: 'AI',
      link: "https://huggingface.co/spaces/Nyakotey/Musical-Instrument-Classifier",
    },
    {
      title: 'CallCodes',
      category: 'Web Development',
      image: '../assets/images/project-2.png',
      alt: 'callcodes',
      link: "https://call-codes.vercel.app/",
    },
    {
      title: 'Rcountdown',
      category: 'Web Development',
      image: '../assets/images/project-2.png',
      alt: 'rcountdown',
      link: "https://rcountdown.netlify.app/",
    },
    {
      title: 'Todo App with Firebase',
      category: 'Web Development',
      image: '../assets/images/project-2.png',
      alt: 'Todo App with Firebase',
      link: "https://todosky6.netlify.app",
    },
    {
      title: 'Coffin Dancers 👯‍♂️',
      category: 'CSS Art',
      image: '../assets/images/project-4.png',
      alt: 'Coffin Dancers',
      link: "https://coffin-dance-meme.netlify.app",
    },
    {
      title: 'Piano Man 🎹',
      category: 'CSS Art',
      image: '../assets/images/project-4.png',
      alt: 'piano man',
      link: "https://www.sololearn.com/en/compiler-playground/Wa2geW5KnOIt",
    },
    {
      title: 'Epic Christmas Show🎅🎄🎬',
      category: 'CSS Art',
      image: '../assets/images/project-4.png',
      alt: 'Epic Christmas Show',
      link: "https://www.sololearn.com/en/compiler-playground/WgboaWLHXidi",
    },
  ];
  filteredProjects = this.projects
}
