import { Injectable } from '@angular/core';
import { IExperience } from '../models/interfaces/experience.interface';
import { ISkill } from '../models/interfaces/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor() { }

  getExperiences(): IExperience[] {
    return [
      { role: 'Frontend Developer', company: 'Freelance', period: '10-2024 - Present', location: 'Milano, Italia', mode: 'Full remote', modeIcon: 'headset', description: 'experience.freelance', logos: { logo: '/assets/logos/webdev_lb_logo.png' }, pills: ['Ionic', 'Firebase', 'Hosting services',] },
      { role: 'Frontend Developer', company: 'Moi Studio', period: '03-2024 - 10-2024', location: 'Pistoia, Italia', mode: 'Full remote', modeIcon: 'headset', description: 'experience.moi_2024', logos: { lightLogo: 'https://moistudio.it/wp-content/uploads/2023/08/Logo-MOI-Studio-v2-2048x1009.png', darkLogo: 'https://moistudio.it/wp-content/uploads/2023/08/Logo-MOI-Studio.png', logo: '' }, pills: ['JS', 'Docker', 'Dynamic WEB TWAIN', 'AG Grid'] },
      { role: 'B2B Sales Representative', company: 'More S.R.L.', period: '02-2019 - 05-2023', location: 'Milano, Italia', mode: 'On site', modeIcon: 'briefcase', description: 'experience.more_sales', logos: { logo: '/assets/logos/logo+MORE.png' }, pills: ['Prospecting e Lead Generation', 'Communication and Negotiation', 'Sales Cycle Management', 'Analytical Skills'] },
      { role: 'Store Manager', company: 'More S.R.L.', period: '07-2017 - 05-2023', location: 'Milano / Roma, Italia', mode: 'On site', modeIcon: 'briefcase', description: 'experience.more_store_manager', logos: { logo: '/assets/logos/logo+MORE.png' }, pills: ['Leadership', 'Effective Communication', 'Time management', 'Problem-solving'] },
    ];
  }

  getCurrentSkills(): ISkill[] {
    return [{
      name: 'Angular',
      url: 'https://www.svgrepo.com/show/373427/angular.svg',
      description: "Durante il corso 24 Ore Business School ho scoperto Angular e ora ho una solida base. Non vedo l'ora di approfondire le mie conoscenze e diventare un professionista nel campo dello sviluppo web."
    },
    {
      name: 'HTML',
      url: 'https://www.svgrepo.com/show/452228/html-5.svg',
      description: "Ho incontrato HTML diverse volte, ma solo nel 2023 ho iniziato a studiarlo seriamente. Ho utilizzato un'app per apprendere le basi del web dev e ho approfondito durante il corso 24 Ore Business School."
    },
    {
      name: 'JavaScript',
      url: 'https://www.svgrepo.com/show/452045/js.svg',
      description: "Ho studiato JavaScript per un anno a scuola, ma non l'ho mai approfondito. Durante il corso 24 Ore Business School, abbiamo ripassato le basi del linguaggio, aprendo nuove prospettive per il mio sviluppo professionale."
    },
    {
      name: 'TypeScript',
      url: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
      description: "Prima del corso 24 Ore Business School, non ero a conoscenza di TypeScript. Durante il corso, ho avuto l'opportunità di scoprire e apprendere le sue basi, aprendo nuove prospettive per il mio sviluppo professionale."
    },
    {
      name: 'SASS',
      url: 'https://www.svgrepo.com/show/354310/sass.svg',
      description: ""
    },
    {
      name: 'CSS',
      url: 'https://www.svgrepo.com/show/452185/css-3.svg',
      description: "CSS è un linguaggio che ho scoperto nel 2023, iniziando a utilizzare un'app per apprendere le basi dello sviluppo web. Spero di migliorare la mia conoscenza del linguaggio per creare progetti sempre più unici e di successo."
    },
    {
      name: 'GitHub',
      url: 'https://www.svgrepo.com/show/450156/github.svg',
      description: "GitHub è una piattaforma di hosting per il controllo delle versioni e la collaborazione nello sviluppo di software. Ho scoperto GitHub nel 2023 durante un corso su Coursera e ho apprezzato il suo potere nel versioning. Durante il corso 24 Ore Business School, abbiamo fatto ampio uso di GitHub per il controllo delle versioni e la collaborazione."
    },
    {
      name: 'Figma',
      url: 'https://www.svgrepo.com/show/452202/figma.svg',
      description: "Ho partecipato a un workshop con BSD Design per imparare le basi di Figma. Insieme a un collega del corso, abbiamo progettato un wireframe per una web app ipotetica."
    },
    {
      name: 'Bootstrap',
      url: 'https://www.svgrepo.com/show/353498/bootstrap.svg',
      description: "Durante il corso, abbiamo ampiamente utilizzato la libreria di Bootstrap per acquisire familiarità con le librerie UI. Inoltre, abbiamo utilizzato anche ngBootstrap per implementare componenti che migliorano l'esperienza utente e l'interfaccia delle nostre applicazioni."
    },
    {
      name: 'Postman',
      url: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      description: "Durante il workshop sul backend, abbiamo utilizzato Postman, un'applicazione che simula chiamate API. Ho trovato Postman molto utile per testare e sviluppare le API, poiché consente di eseguire richieste, visualizzare le risposte e testare vari scenari senza dover scrivere codice."
    },
    {
      name: 'Ionic',
      url: 'https://www.svgrepo.com/show/373687/ionic.svg',
      description: "Durante il corso 24 Ore Business School, abbiamo sperimentato Ionic, un framework specifico per la produzione di web app mobile. È stato un'esperienza molto interessante e piacevole, che ha arricchito le nostre competenze nello sviluppo di applicazioni mobile."
    },
    {
      name: 'Firebase',
      url: 'https://brandeps.com/logo-download/F/Firebase-logo-vector-02.svg',
      description: ""
    },
    ];
  };

  getLearningSkills(): ISkill[] {
    return [
      {
        name: 'Nest.js',
        url: 'https://www.svgrepo.com/show/373863/nest-middleware-js.svg',
        description: "Durante il corso 24 Ore Business School, abbiamo affrontato una parte di back-end utilizzando Nest.js per creare un progetto base di REST API."
      },

      {
        name: 'Electron Framework',
        url: 'https://www.svgrepo.com/show/353689/electron.svg',
        description: "Durante il corso 24 Ore Business School, abbiamo trattato l'argomento del testing e convertito le web app in app desktop con Electron. Inoltre, abbiamo esplorato le basi di questo framework, ampliando così le nostre competenze nello sviluppo di applicazioni cross-platform."
      },
      {
        name: 'Docker',
        url: 'https://www.svgrepo.com/show/373553/docker.svg',
        description: ""
      },
      {
        name: 'Ubuntu',
        url: 'https://www.svgrepo.com/show/452122/ubuntu.svg',
        description: ""
      },
      {
        name: 'MySQL',
        url: 'https://www.svgrepo.com/show/303251/mysql-logo.svg',
        description: ""
      },
      {
        name: 'Python',
        url: 'https://www.svgrepo.com/show/452091/python.svg',
        description: ""
      },
      { name: 'Chart.js', url: 'https://cdn.brandfetch.io/idFdo8ulhr/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed', description: '' },
      // {
      //   name: 'Three.js',
      //   url: 'https://global.discourse-cdn.com/flex035/uploads/threejs/original/2X/b/be2f75f72751c11cbe1593c69a99a52900bf12cb.svg',
      //   description: ""
      // },
      // {
      //   name: 'Pixi.js',
      //   url: 'https://files.pixijs.download/branding/pixijs-logo-mark-dark.svg',
      //   description: ""
      // },
      // {
      //   name: 'Jest',
      //   url: 'https://www.svgrepo.com/show/373700/jest.svg',
      //   description: ""
      // },
      {
        name: 'Cypress',
        url: 'https://www.svgrepo.com/show/439131/cypress.svg',
        description: ""
      },

      {
        name: 'NgRx',
        url: 'https://cdn.worldvectorlogo.com/logos/ngrx.svg',
        description: "Durante il corso 24 Ore Business School, abbiamo discusso dello stato nell'ambito dello sviluppo di applicazioni web e abbiamo approfondito Ngrx, un framework per la gestione dello stato in Angular basato sul pattern Redux. Abbiamo implementato i reducer, le actions e i selectors per gestire lo stato in modo efficiente e scalabile."
      },
      // {
      //   name: 'AWS',
      //   url: 'https://www.svgrepo.com/show/448266/aws.svg',
      //   description: ""
      // },

      {
        name: 'Ag Grid',
        url: '/assets/agGrid.svg',
        description: ""
      },
    ];
  }
}
