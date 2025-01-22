export interface IField {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'radio' | 'checkbox' | 'select' | 'date';
  placeholder?: string | null;
  validators?: any[];
  value?: boolean;
  default?: boolean;
  options?: { label: string, value: any; }[];
  maxLength?: number;
}

