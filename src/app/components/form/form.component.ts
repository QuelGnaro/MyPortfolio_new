import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IField } from '../../models/interfaces/form-fields.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PreferencesService } from '../../services/preferences.service';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  @Output() formResponse = new EventEmitter<{ modalTitle: string, message: string; success: boolean; }>();
  openSectionIndex: number | null = null;

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

  constructor(private fb: FormBuilder,
    private preferencesService: PreferencesService,
    private contactUsService: ContactUsService,
  ) {
    this.form = this.fb.group({});
  }
  ngOnInit(): void {
    this.createFormControls();
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
      this.contactUsService.saveContact(this.form.value).subscribe({
        next: () => {
          this.formResponse.emit({ modalTitle: 'Richiesta Inviata', message: 'Dati salvati con successo!', success: true });
          this.form.reset();
        },
        error: (err: any) => {
          this.formResponse.emit({ modalTitle: 'Richiesta Fallita', message: 'Errore durante il salvataggio. Riprova.', success: false });
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
