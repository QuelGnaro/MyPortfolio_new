import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsModalComponent } from './skills-modal/skills-modal.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { TranslateModule } from '@ngx-translate/core';



const sharedModules = [
  CommonModule, RouterModule, ReactiveFormsModule, FormsModule, FontAwesomeModule,
  TranslateModule,

];

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ScrollToTopButtonComponent,
    SkillsModalComponent,
    SettingsButtonComponent,
  ],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ],

})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
