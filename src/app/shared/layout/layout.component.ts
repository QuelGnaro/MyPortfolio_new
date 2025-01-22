import { Component } from '@angular/core';

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


  // if mobile close sidebar
  checkMobile(): void {
    this.isMobile = window.innerWidth <= 1117;
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}
