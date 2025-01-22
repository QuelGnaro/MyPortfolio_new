import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  modalTitle: string = '';
  modalMessage: string = '';
  isModalOpen: boolean = false;
  openSectionIndex: number | null = null;

  // ! (deprecated To add a field to the form, simply add a new object to the 'fields' array following the structure of the IField interface.  now I use my dynamic form via json

  form: FormGroup;
  fields: IField[] = [
    { label: 'Data', name: 'date', type: 'date', placeholder: 'Inserisci la data' },
    { label: 'Nome', name: 'name', type: 'text', placeholder: 'Inserisci il tuo nome', validators: [Validators.required] },
    { label: 'Cognome', name: 'surname', type: 'text', placeholder: 'Inserisci il tuo cognome', validators: [Validators.required] },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Inserisci la tua email', validators: [Validators.required, Validators.email] },
    { label: 'Telefono', name: 'phone', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono', validators: [Validators.required] },
    { label: 'Messaggio', name: 'message', type: 'textarea', placeholder: 'Mi interesserebbe saperne di più su . . .', maxLength: 300, validators: [Validators.maxLength(300)] },
    { label: 'Privacy & Policy', name: 'privacy', type: 'checkbox', validators: [Validators.required] },

  ];

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
    this.form = this.fb.group({});
  }

  get textCounter(): number {
    const message = this.form.get('message')?.value;
    if (message) {
      return this.form.get('message')?.value.length;
    } else {
      return 0;
    }
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
    this.createFormControls();
    this.projects = this.projectsService.getProjects();
    this.experiences = this.experienceService.getExperiences();
    this.curentSkills = this.experienceService.getCurrentSkills();
    this.learningSkills = this.experienceService.getLearningSkills();
  };


  // * builder for form controls
  createFormControls(): void {
    this.fields.forEach(field => {
      // ! if field is a radio button change if statement. used to generate radio buttons
      // if (field.name === 'isDemo') {
      //   const radio = new FormControl(field.default || true,
      //     field.validators);
      //   this.form.addControl(field.name, radio);
      // } else {
      const control = new FormControl(
        field.default || '',
        field.validators
      );
      this.form.addControl(field.name, control);
      // }
    });
  };

  onSubmit() {
    if (this.form.valid) {
      this.contactUsService
        .saveContact(this.form.value).subscribe({
          next: () => {
            console.log('Dati salvati con successo!');
            this.showSuccessModal();
            this.form.reset();
          },
          error: (err: any) => {
            console.error('Errore durante il salvataggio:', err);
            this.showErrorModal();
          },
        });

    } else {
      this.form.markAllAsTouched();
    }
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

  showSuccessModal() {
    this.isModalOpen = true;
    this.modalTitle = 'Richiesta inviata';
    this.modalMessage = 'Grazie per avermi contattato! Ti risponderò al più presto.';
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }

  showErrorModal() {
    this.isModalOpen = true;
    this.modalTitle = 'Errore';
    this.modalMessage = 'Si è verificato un errore durante l\'invio della richiesta. Riprova più tardi.';
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToProject(url: string) {
    this.router.navigateByUrl(`project/${url}`);
    console.log(url);

  }
}
