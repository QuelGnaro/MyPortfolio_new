import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.scss'
})
export class ScrollToTopButtonComponent {
  isVisible: boolean = true;

  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = yOffset > 20; // Mostra il bottone se lo scroll è superiore a 20px
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
