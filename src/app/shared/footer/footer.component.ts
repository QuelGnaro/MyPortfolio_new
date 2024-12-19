import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  contacts = [
    { name: 'barartti.lorenzo3@gmail.com', icon: 'envelope', pre: 'fas' },
    // { name: 'Seveso, MB', icon: 'map-pin', pre: 'fas' },
    // { name: 'Fulltime / Freelancer', icon: 'suitcase', pre: 'fas' },
    { name: 'LinkedIn', icon: 'linkedin', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'TikTok', icon: 'tiktok', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'Instagram', icon: 'instagram', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'Messanger', icon: 'facebook-messenger', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'GitHub', icon: 'github', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
  ];

  year = new Date().getFullYear();

  constructor() { }

  downloadCV() {
    if (localStorage.getItem('language') === 'en') {
      window.open('assets/cv/cv_en.pdf', '_blank');
    }
    if (localStorage.getItem('language') === 'it') {
      window.open('assets/cv/CV ITA.pdf', '_blank');
    }
  }
}
