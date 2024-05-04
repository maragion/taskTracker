import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IProject} from "../../interfaces/projects";
import {ProjectDataService} from "../../services/project-data.service";
import {Subscription} from "rxjs";
import {MatFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {NgClass} from "@angular/common";
import {LocalStorageService} from "../../services/localStorage.service";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    RouterLink,
    MatFabButton,
    MatTooltip,
    NgClass
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {

  public projects: IProject[] = [];
  public currentProjectId = 0;
  private _dataService = inject(ProjectDataService);
  private _localStorageService = inject(LocalStorageService);
  private _dataSubscription: Subscription | null = null;

  ngOnInit() {
    this._dataSubscription = this._dataService.$projectsData.subscribe(data => {
      this.projects = data;
      this._localStorageService.updateProjects(this.projects);
    })
  }

  public setCurrentProjectId(projectId: number) {
    this.currentProjectId = projectId;
    this._dataService.setCurrentProject(projectId)
  }

}
