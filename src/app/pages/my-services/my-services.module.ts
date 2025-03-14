import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MyServicesComponent } from './my-services.component';


const routes: Routes = [
  {
    path: '',
    component: MyServicesComponent
  }
];

@NgModule({
  declarations: [
    MyServicesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class MyServicesModule { }
