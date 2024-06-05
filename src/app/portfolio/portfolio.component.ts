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
  categories = ['All', 'ECE', 'CSS Art', 'Web Development'];

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
      title: 'CallCodes',
      category: 'Web Development',
      image: '../assets/images/project-1.jpg',
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
      image: '../assets/images/project-3.jpg',
      alt: 'Todo App with Firebase',
      link: "https://todosky6.netlify.app",
    },
    {
      title: 'Coffin Dancers',
      category: 'CSS Art',
      image: '../assets/images/project-4.png',
      alt: 'Coffin Dancers',
      link: "/css-art",
    },
    {
      title: 'Loaders',
      category: 'CSS Art',
      image: '../assets/images/project-5.png',
      alt: 'loaders',
      link: "/css-art",
    },
    {
      title: 'Piano Man',
      category: 'CSS Art',
      image: '../assets/images/project-6.png',
      alt: 'Piano Man',
      link: "/css-art",
    },
    {
      title: 'Electronics',
      category: 'ECE',
      image: '../assets/images/project-7.png',
      alt: 'Electronics',
      link: "/ece",
    },
    {
      title: 'Powerbanks',
      category: 'ECE',
      image: '../assets/images/project-8.jpg',
      alt: 'Powerbanks',
      link: "/ece",
    },
    {
      title: 'DIY Fan - 100% Recycled',
      category: 'ECE',
      image: '../assets/images/project-9.png',
      alt: 'arrival',
      link: "/ece",
    },
  ];
  filteredProjects = this.projects.sort((a, b) => {
    if (a.category < b.category) {
        return -1;
    }
    if (a.category > b.category) {
        return 1;
    }
    return 0;
});
}
