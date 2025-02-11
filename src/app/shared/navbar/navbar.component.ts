import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  sections = [
    { link: 'home', name: ' Home' },
    { link: '#aboutMe', name: ' About' },
    { link: '#projects', name: ' Projects' },
    { link: '#experience', name: ' My Experience' },
    { link: '#skills', name: ' Skills' },
    { link: '#contactForm', name: ' Contact Me' }
  ];

  contactMe = { link: '#contactForm', name: 'Contact Me' };

  buttons = [
    { name: 'lenguage', icon: 'language', items: [{ en: 'en' }, { it: 'it' }] },
    { name: 'theme color', icon: 'color_lens', items: [{ light: 'light' }, { dark: 'dark' }] }
  ];


  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  constructor(
    private router: Router,
    private preveferencesService: PreferencesService
  ) {
  }

  get theme() {
    const theme = this.preveferencesService.getTheme();
    if (theme === 'dark') {
      return 'dark-btn';
    } else {
      return 'light-btn';
    }
  }

  onResize(): void {
    this.isMobile = window.innerWidth <= 991;
  }

  // FIXME: sistemare per burger menu
  ngOnInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  // Funzione per aprire/chiudere il menu

  onToggleSidebar(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  navigateTo(item: string) {
    if (item) {
      this.router.navigateByUrl(item);
      this.isMenuOpen = false;
    }
    return;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
