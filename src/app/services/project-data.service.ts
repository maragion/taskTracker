import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IProject, ITask} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  projects: IProject[] = [];
  data: BehaviorSubject<IProject[]>;
  $projectsData: Observable<IProject[]>;
  currentProjectId: number = 0;
  currentProject: BehaviorSubject<IProject>;
  $currentProjectData: Observable<IProject>;
  isLoading = signal(true);
  currentTask = signal(0);

  constructor() {
    this.currentProject = new BehaviorSubject(this.projects[this.currentProjectId]);
    this.data = new BehaviorSubject(this.projects);
    this.$projectsData = this.data as Observable<IProject[]>;
    this.$currentProjectData = this.currentProject as Observable<IProject>;
  }

  public setCurrentProject(projectId: number) {
    this.currentProjectId = projectId;
    this.currentProject.next(this.projects[this.currentProjectId]);
  }

  public getProjectsData() {
    const data = localStorage.getItem("projects");

    if (data) {
      setTimeout(() => {
        this.projects = JSON.parse(data);
        this.data.next(this.projects);
        this.currentProject.next(this.projects[this.currentProjectId]);
        this.isLoading.set(false);
      }, 1000);
    }
  }

  public addTask(data: ITask): void {
    this.projects[this.currentProjectId].tasks.push(data);
    this.data.next(this.projects);
  }

  public updateTask() {
    this.data.next(this.projects);
  }

  public setCurrentTask(id: number) {
    this.currentTask.set(id);
  }

}
