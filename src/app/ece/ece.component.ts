import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-ece',
  standalone: true,
  imports: [],
  templateUrl: './ece.component.html',
  styleUrl: './ece.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EceComponent {
  constructor(){ }

  modalActive = false;

 toggleModal =  () => {
  this.modalActive = !this.modalActive;
 }

 testimonial = () => {
  this.toggleModal();
 }

 @Input() project! : { title: string; category: string; image: string; alt: string; link: string; isExternal: boolean; text: string; };

}
