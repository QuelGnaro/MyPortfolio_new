import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ProjectModule { }
