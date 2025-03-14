import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateX(-50px)' })), // Stato iniziale
      transition(':enter', [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class MyServicesComponent {

  modalMessage: string = '';
  modalTitle: string = '';
  isModalVisible: boolean = false;

  benefits = [
    { title: 'services.benefits.visibility', description: 'services.benefits.visibility1' },
    { title: 'services.benefits.professional', description: 'services.benefits.professional1' },
    { title: 'services.benefits.contact', description: 'services.benefits.contact1' },
    { title: 'services.benefits.responsive', description: 'services.benefits.responsive1' }
  ];

  packages = [
    {
      title: '🔹 Basic - 300€',
      features: [
        'services.packages.basic.features.1',
        'services.packages.basic.features.2',
        'services.packages.basic.features.3',
        'services.packages.basic.features.4',
        'services.packages.basic.features.5'
      ]
    },
    {
      title: '🔹 Advanced - 600€',
      features: [
        'services.packages.advanced.features.1',
        'services.packages.advanced.features.2',
        'services.packages.advanced.features.3',
        'services.packages.advanced.features.4',
        'services.packages.advanced.features.5'
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('li').forEach(item => {
      observer.observe(item);
    });
  }



  handleFormResponse(response: { modalTitle: string, message: string; success: boolean; }) {
    this.modalMessage = response.message;
    this.modalTitle = response.modalTitle;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }


}
