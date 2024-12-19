import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isSidebarOpen: boolean = false;
  isMobile: boolean = false;
  constructor() {
    this.isSidebarOpen = false;
  }

  // TODO: sistemare per burger menu
  ngOnInit(): void {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  onToggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth <= 1117;
    // Chiudi la sidebar automaticamente se mobile
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}
