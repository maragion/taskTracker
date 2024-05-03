import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DatePipe, NgClass} from "@angular/common";
import {IProject} from "../../interfaces/projects";
import {ProjectDataService} from "../../services/project-data.service";
import {Subscription} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NewTaskComponent} from "../new-task/new-task.component";

@Component({
  selector: 'app-project-tasks',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgClass,
    DatePipe,
    MatProgressSpinner,
    NewTaskComponent
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.scss'
})
export class ProjectTasksComponent implements OnInit{


  currentProject: IProject | null = null;
  private _dataService = inject(ProjectDataService);
  private _projectSubscription: Subscription | null = null;

  ngOnInit() {
    this._projectSubscription = this._dataService.$currentProjectData.subscribe(data => {
      this.currentProject = data;
    })
  }

}
