import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DatePipe, NgClass} from "@angular/common";
import {IProject} from "../../interfaces/projects";
import {ProjectDataService} from "../../services/project-data.service";
import {Subscription} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatDialog} from "@angular/material/dialog";
import {NewTaskComponent} from "../new-task/new-task.component";
import {TaskPageComponent} from "../../pages/task-page/task-page.component";

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
    NewTaskComponent,
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.scss'
})
export class ProjectTasksComponent implements OnInit{

  currentProject: IProject | null = null;
  private _dataService = inject(ProjectDataService);
  public taskDialog = inject(MatDialog);
  private _projectSubscription: Subscription | null = null;

  ngOnInit() {
    this._projectSubscription = this._dataService.$currentProjectData.subscribe(data => {
      this.currentProject = data;
    })
  }

  public onClick(id: number): void {
    this._dataService.setCurrentTask(id);
    this.openTask();
  }

  public openTask() {
    this.taskDialog.open(TaskPageComponent);
  }

}
