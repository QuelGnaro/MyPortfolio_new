import { Injectable } from '@angular/core';
import { IProject } from '../models/interfaces/project.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { faKipSign } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() { }

  // ! al posto di link inserire url del progetto una volta deployato
  getProjects(): IProject[] {
    return [
      { url: 'money-changer', title: 'Money Changer', techsIcons: [{ docUrl: 'https://www.dynamsoft.com/web-twain/overview/', name: 'Dynamsoft Web TWAIN', url: 'https://avatars.githubusercontent.com/u/16186457?s=280&v=4' }, { docUrl: 'https://www.docker.com/', name: 'Docker', url: 'https://www.svgrepo.com/show/373553/docker.svg' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }, { docUrl: 'https://www.ag-grid.com/', name: 'AG Grid', url: 'https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png' }], name: 'moneychanger', img: ['assets/projects/moneyChanger/MoneyChanger-copertina.png'], link: '#', class: "item1" },
      {
        url: 'money-tracker', title: 'Money Tracker',
        techsIcons: [{ docUrl: 'https://ionicframework.com/', name: 'Ionic', url: 'https://img.icons8.com/color/512/ionic.png' }, { docUrl: 'https://www.chartjs.org/', name: 'Chart.js', url: 'https://cdn.brandfetch.io/idFdo8ulhr/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }],
        name: 'money-tracker',
        img: ['assets/projects/moneyTracker/logo.png'], link: 'https://app.lorenzobaratti.it', class: "item2"
      },
      {
        url: 'anime-list', title: 'My Anime List',
        techsIcons: [{ docUrl: 'https://www.ag-grid.com/', name: 'AG Grid', url: 'https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png' }, { docUrl: 'https://www.chartjs.org/', name: 'Chart.js', url: 'https://cdn.brandfetch.io/idFdo8ulhr/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }],
        name: 'anime-list',
        img: ['assets/projects/animeList/image.png'], link: '*', class: "item3"
      },
      {
        url: 'tasks-manager', title: 'My Task-Manager',
        techsIcons: [{ docUrl: 'https://ngrx.io/', name: 'NgRx', url: 'https://cdn.worldvectorlogo.com/logos/ngrx.svg' }, { docUrl: 'https://rxjs.dev/', name: 'RxJS', url: 'https://cdn.worldvectorlogo.com/logos/rxjs-1.svg' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }],
        name: 'tasks-manager',
        img: ['assets/projects/ngrx-logo.png'], link: '*', class: "item4"
      },

    ];
  }

  getProjectByUrl(url: string): IProject | undefined {
    return this.getProjects().find(project => project.url === url);
  }

}
