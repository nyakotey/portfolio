import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ResumeComponent {
downloadCV() {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://drive.google.com/uc?export=download&id=1x2DTRz-t0lTTlPe3xsYJx-79p_1Sg7c9');
  link.setAttribute('download', 'Nathaniel_Nyakotey_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  constructor() { }
}
