import { ISkill } from "./skill.interface";

export interface IProject {
  title: string;
  techsIcons: ISkill[];
  name: string;
  img: string[];
  link: string;
  class: string;
  url: string;
}