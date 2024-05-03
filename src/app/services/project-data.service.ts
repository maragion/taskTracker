import {inject, Injectable} from '@angular/core';
import {LocalStorageService} from "./localStorage.service";
import {BehaviorSubject, Observable} from "rxjs";
import { IProject} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  projects:IProject[];

  localStorageService = inject(LocalStorageService);
  data: BehaviorSubject<IProject[]>;
  $projectsData: Observable<IProject[]>;
  currentProjectId = 0;
  currentProject: BehaviorSubject<IProject>;
  $currentProjectData: Observable<IProject>;

  constructor() {
    this.projects = this.localStorageService.getProjects();
    this.currentProject = new BehaviorSubject(this.projects[this.currentProjectId]);
    this.data = new BehaviorSubject(this.projects)
    this.$projectsData = this.data as Observable<IProject[]>;
    this.$currentProjectData =  this.currentProject as Observable<IProject>;
  }

  public setCurrentProject(projectId: number) {
    this.currentProjectId = projectId;
    this.currentProject.next(this.projects[this.currentProjectId]);
  }


}
