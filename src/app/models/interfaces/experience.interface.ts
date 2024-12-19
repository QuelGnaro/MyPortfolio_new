export interface IExperience {
  role: string,
  company: string,
  period: string,
  location: string,
  mode: string,
  modeIcon: string,
  description: string,
  logos: {
    lightLogo?: string,
    darkLogo?: string,
    logo?: string;
  },
  pills: string[];
}

