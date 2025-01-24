import { Injectable } from '@angular/core';
import { IProject } from '../models/interfaces/project.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { faKipSign } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }

  // ! al posto di link inserire url del progetto una volta deployato
  getProjects(): IProject[] {
    return [
      { url: 'money-changer', title: 'Money Changer', techsIcons: [{ docUrl: 'https://www.dynamsoft.com/web-twain/overview/', name: 'Dynamsoft Web TWAIN', url: 'https://avatars.githubusercontent.com/u/16186457?s=280&v=4' }, { docUrl: 'https://www.docker.com/', name: 'Docker', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }, { docUrl: 'https://www.ag-grid.com/', name: 'AG Grid', url: 'https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png' }], name: 'moneychanger', img: ['https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png'], link: '#', class: "item1" },
      {
        url: 'money-tracker', title: 'Money Tracker',
        techsIcons: [{ docUrl: 'https://ionicframework.com/', name: 'Ionic', url: 'https://img.icons8.com/color/512/ionic.png' }, { docUrl: 'https://www.chartjs.org/', name: 'Chart.js', url: 'https://cdn.brandfetch.io/idFdo8ulhr/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed' }, { docUrl: 'https://angular.dev/', name: 'Angular', url: 'https://www.svgrepo.com/show/353396/angular-icon.svg' }],
        name: 'money-tracker',
        img: ['assets/SCR-20250122-kjpx.png'], link: 'https://app.lorenzobaratti.it', class: "item2"
      },

    ];
  }

  getProjectByUrl(url: string): IProject | undefined {
    return this.getProjects().find(project => project.url === url);
  }

}
