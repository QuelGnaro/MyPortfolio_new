import { Component, Input, } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
export class SettingsButtonComponent {
  @Input() isMobileMenuOpen: boolean;

  isMobile: boolean = false;
  isOpen: boolean = false;

  currentTheme: string = '';
  currentLanguage: string = '';

  constructor(
    private preferencesService: PreferencesService
  ) {
    this.isMobileMenuOpen = false;
    this.preferencesService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.preferencesService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.preferencesService.setTheme(newTheme);
    if (newTheme === 'light') {
      return 'light';
    } else {
      return 'dark';
    }
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'it' : 'en';
    this.preferencesService.setLanguage(newLanguage);
  }

}
