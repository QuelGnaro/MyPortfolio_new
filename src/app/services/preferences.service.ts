import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  // default settings
  private themeSubject = new BehaviorSubject<string>('dark');
  private languageSubject = new BehaviorSubject<string>('it');

  constructor(private translate: TranslateService,
  ) {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
      this.themeSubject.next(savedTheme);
      document.body.className = savedTheme;
    }

    if (savedLanguage) {
      this.languageSubject.next(savedLanguage);
      this.translate.use(savedLanguage);
    }
  }

  get theme$() {
    return this.themeSubject.asObservable();
  }

  get language$() {
    return this.languageSubject.asObservable();
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }

  setLanguage(language: string) {
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  getTheme() {
    return this.themeSubject.getValue();
  }

  bigger() {
    document.querySelectorAll("p").forEach(el => {
      const currentSize = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = `${currentSize + 1}px`;
    });
  }

  smaller() {
    document.querySelectorAll("p").forEach(el => {
      const currentSize = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = `${currentSize - 1}px`;
    });
  }
}
