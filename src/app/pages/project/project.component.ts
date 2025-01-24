import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { IProject } from '../../models/interfaces/project.interface';
import { ActivatedRoute } from '@angular/router';
import *  as projectDataRaw from '../../../../public/i18n/it.json';
import { TranslateService } from '@ngx-translate/core';
const projectData = projectDataRaw as unknown as ProjectsData;
interface ProjectsData {
  projects: { [key: string]: Project; };
}
interface Project {
  features: { [key: string]: string; };
  subfeatures: { [key: string]: string; };
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})


export class ProjectComponent {
  projectName: string | null = null;
  projectDetails: any = null;

  project: IProject | undefined;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { }



  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.projectName = this.route.snapshot.paramMap.get('id');
    this.project = this.projectsService.getProjectByUrl(this.projectName!);
    if (this.projectName && (projectData as any).projects[this.projectName]) {
      return this.projectDetails = (projectData as any).projects[this.projectName];
    }
  }

  translateFeature(projectName: string, feature: string): string {
    if (feature.includes('sub')) {
      const key = `projects.${projectName}.subfeatures.${feature}`;
      return this.translate.instant(key);
    }
    const key = `projects.${projectName}.features.${feature}`;
    return this.translate.instant(key);
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  get description(): string {
    return `projects.${this.projectName}.description`;
  }
  get techs(): string {
    return `projects.${this.projectName}.techs`;
  }

  get newInterface() {
    const newInterface = `projects.${this.projectName}.new_interface`;
    if (newInterface && this.translate.instant(newInterface) !== newInterface) {
      return newInterface;
    }
    return false;
  }

  get conclusion() {
    return `projects.${this.projectName}.conclusion`;
  }


  navigateToTech(docUrl: string) {
    window.open(docUrl, '_blank');
  }

}
