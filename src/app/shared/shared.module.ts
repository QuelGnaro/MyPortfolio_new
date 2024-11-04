import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';

const sharedModules = [
  CommonModule, RouterModule
];

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    ScrollToTopButtonComponent,
  ],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule { }
