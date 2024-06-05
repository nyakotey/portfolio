import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  modalData!: { avatar: string; title: string; text: string; alt_text: string };
  modalActive = false;
 constructor(){ }

 toggleModal =  () => {
  this.modalActive = !this.modalActive;
 }

 testimonial = (id:number) => {
  this.toggleModal();
  this.modalData = this.testimonies[id];

 }
testimonies = [
  {
    "avatar": "../assets/images/avatar-1.png",
    "title": "Mr. Samuel Adabor ",
    "text": "Nathaniel is an incredible person to work with. He really pays attention to the little details that we often miss in our design iterations. In short, he has good problem-solving skills, adapts quickly, and is self-motivated",
    "alt_text": "Mr. Samuel Adabor "
  },
  {
    "avatar": "../assets/images/avatar-4.png",
    "title": "Dr. Kwasi Opare",
    "text": "I had the privilege of teaching Mr. Nyakotey during his time as a student in the Faculty of Electrical and Computer Engineering at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana. , Mr. Nyakotey exhibits a great deal of discipline and responsibility in his work. I found him to be a highly intelligent, hardworking, and dedicated student. ",
    "alt_text": "Dr. Kwasi Opare"
  },
]

}
