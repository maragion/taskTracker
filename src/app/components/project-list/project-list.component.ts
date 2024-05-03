import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IProject} from "../../interfaces/projects";
import {ProjectDataService} from "../../services/project-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {


  public projects: IProject[] = [];
  private _dataService = inject(ProjectDataService);
  private _dataSubscription: Subscription | null = null;

  ngOnInit() {
    this._dataSubscription = this._dataService.$projectsData.subscribe(data => {
      console.log(data);
      this.projects = data;
    })
  }

  public setCurrentProjectId(projectId: number) {
    this._dataService.setCurrentProject(projectId)
  }

}
