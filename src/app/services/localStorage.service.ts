import {Injectable} from '@angular/core';
import {PROJECTSDATA} from "../projects-data";
import {IProject} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  data: IProject[] = PROJECTSDATA;
  key = 'projects'

  public writeToLocalStorage() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify(this.data));
    } else return;
  }

  public updateProjects(data: IProject[]) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

}
