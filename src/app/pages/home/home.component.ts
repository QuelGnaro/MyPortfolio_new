import { Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { IField } from '../../models/interfaces/form-fields.interface';
import { ContactUsService } from '../../services/contact-us.service';
import { Router } from '@angular/router';
import { PreferencesService } from '../../services/preferences.service';
import { ProjectsService } from '../../services/projects.service';
import { IProject } from '../../models/interfaces/project.interface';
import { IExperience } from '../../models/interfaces/experience.interface';
import { ExperiencesService } from '../../services/experiences.service';
import { ISkill } from '../../models/interfaces/skill.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private modalService = inject(NgbModal);
  modalMessage: string = '';
  isModalVisible: boolean = false;
  modalTitle: string = '';
  @ViewChild('content') content!: TemplateRef<any>;

  openSectionIndex: number | null = null;

  projects: IProject[] = [];
  experiences: IExperience[] = [];
  // TODO: aggiungere descrizioni per le skills e modale per visualizzarle
  curentSkills: ISkill[] = [];
  learningSkills: ISkill[] = [];

  constructor(private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private router: Router,
    private preferencesService: PreferencesService,
    private projectsService: ProjectsService,
    private experienceService: ExperiencesService,

  ) {
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  get theme(): string {
    return this.preferencesService.getTheme();
  }

  //! checkers for field types
  isTextField(field: IField): boolean {
    return field.type === 'text' || field.type === 'email' || field.type === 'tel';
  }

  isTextareaField(field: IField): boolean {
    return field.type === 'textarea';
  }

  isCheckboxField(field: IField): boolean {
    return field.type === 'checkbox';
  }

  isRadioField(field: IField): boolean {
    return field.type === 'radio';
  }


  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
    this.experiences = this.experienceService.getExperiences();
    this.curentSkills = this.experienceService.getCurrentSkills();
    this.learningSkills = this.experienceService.getLearningSkills();
  };


  handleFormResponse(response: { modalTitle: string, message: string; success: boolean; }) {
    this.openVerticallyCentered(this.content);
    this.modalMessage = response.message;
    this.modalTitle = response.modalTitle;
    // this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }


  // nav to contact section
  goToContact(param: string) {
    this.router.navigateByUrl(param);
  }

  toggleAccordion(index: number): void {
    this.openSectionIndex = this.openSectionIndex === index ? null : index;
  }

  isAccordionOpen(index: number): boolean {
    return this.openSectionIndex === index;
  }

  getBentoboxSize(index: number): string {
    const size = (index % 5 === 0) ? 'large' : (index % 3 === 0) ? 'medium' : 'small';
    return size;
  }

  navigateToProject(url: string) {
    this.router.navigateByUrl(`project/${url}`);
    if (url === 'anime-list') {
      this.router.navigateByUrl(`anime-list`);
    }
  }
}
