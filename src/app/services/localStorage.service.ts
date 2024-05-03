import {Injectable} from '@angular/core';
import {PROJECTSDATA} from "../projects-data";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  data = PROJECTSDATA;
  key = 'projects'

  public writeToLocalStorage() {

    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(this.data));
    } else return;

  }

  public getProjects() {
    const data = localStorage.getItem(this.key);

    if (data) {
      return JSON.parse(data);
    } else return [];
  }

  constructor() {
  }
}
