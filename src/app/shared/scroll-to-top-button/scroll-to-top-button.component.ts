import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.scss'
})
export class ScrollToTopButtonComponent {
  isVisible: boolean = false;


  @HostListener('window:scroll')

  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
