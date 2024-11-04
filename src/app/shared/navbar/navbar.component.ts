import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sections = [
    { link: 'home', name: 'Home' },
    { link: 'skills', name: 'Skills' },
    { link: 'about', name: 'About' },
    { link: 'certificates', name: 'Certificates' },
    { link: 'projects', name: 'Projects' },
    { link: 'contact', name: 'Contact' },
  ];

  isMobile: boolean = false;
  isNavOpen = false;


  constructor(private viewportScroller: ViewportScroller) { }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  onResize(): void {
    if (window.innerWidth <= 1117) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit(): void {
    this.onResize(); // Call the onResize method when the component is initialized
    window.addEventListener('resize', this.onResize.bind(this)); // Add event listener for window resize
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this)); // Remove event listener when the component is destroyed
  }


  // Funzione per aprire/chiudere il menu
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
