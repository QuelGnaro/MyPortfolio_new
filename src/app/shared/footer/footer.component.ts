import { Component, ViewChild } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @ViewChild(NgbTooltip) tooltip: NgbTooltip | undefined;

  contacts = [
    { name: 'info@lorenzobaratti.it', icon: 'envelope', pre: 'fas' },
    { name: 'LinkedIn', icon: 'linkedin', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'TikTok', icon: 'tiktok', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'Instagram', icon: 'instagram', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'Messanger', icon: 'facebook-messenger', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
    { name: 'GitHub', icon: 'github', pre: 'fab', url: 'https://www.linkedin.com/in/baratti-lorenzo/' },
  ];

  year = new Date().getFullYear();
  copyTitle: string = '';
  language: string = '';
  constructor(private preferencesService: PreferencesService) { }

  ngOnInit() {
    // Iscriviti al flusso della lingua e aggiorna copyTitle quando cambia
    this.preferencesService.language$.subscribe(language => {
      this.updateTooltipTextLanguage(language);
      this.language = language;
    });
  }



  updateTooltipTextLanguage(language: string) {
    if (language === 'en') {
      this.copyTitle = 'Copy e-mail!';
    } else {
      this.copyTitle = 'Copia e-mail!';
    }
  }

  // Funzione che aggiorna il testo del tooltip in base alla lingua
  updateTooltipText(language: string) {
    if (language === 'en') {
      this.copyTitle = 'Copied!';
      setTimeout(() => {
        this.copyTitle = 'Copy e-mail!';
        if (this.tooltip) {
          this.tooltip.close();
        }
      }, 2000);
    } else {
      this.copyTitle = 'Copiata!';
      setTimeout(() => {
        this.copyTitle = 'Copia e-mail!';
        if (this.tooltip) {
          this.tooltip.close();
        }
      }, 2000);
    }
  }

  downloadCV() {
    if (this.language === 'en') {
      window.open('assets/cv/cv_en.pdf', '_blank');
    } else
      window.open('assets/cv/CV ITA.pdf', '_blank');
  }

  email: string = 'info@lorenzobaratti.it';

  copyText() {
    const textToCopy = this.email;
    // Usa la Clipboard API per copiare il testo
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        this.updateTooltipText(this.language);
      },
      (err) => {
        console.error('Errore durante la copia del testo:', err);
      }
    );
  }




}
