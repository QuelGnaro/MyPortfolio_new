import { Injectable } from '@angular/core';
import { IProject } from '../models/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  // ! al posto di link inserire url del progetto una volta deployato
  getProjects(): IProject[] {
    return [
      { titolo: 'Progetto 1', descrizione: 'Descrizione 1', img: 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png', link: '#', class: "item1" },
      { titolo: 'Progetto 2', descrizione: 'Descrizione 2', img: 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png', link: '#', class: "item2" },
      { titolo: 'Progetto 3', descrizione: 'Descrizione 3', img: 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png', link: '#', class: "item3" },
      { titolo: 'Progetto 4', descrizione: 'Descrizione 4', img: 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png', link: '#', class: "item4" },
    ];
  }
}
