import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DatePipe, NgClass} from "@angular/common";
import {IProject, ITask} from "../../interfaces/projects";
import {ProjectDataService} from "../../services/project-data.service";
import {Subscription} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatDialog} from "@angular/material/dialog";
import {TaskPageComponent} from "../../pages/task-page/task-page.component";
import {NewTaskComponent} from "../new-task/new-task.component";
import {FilterAndSortComponent} from "../filter-and-sort/filter-and-sort.component";

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
    FilterAndSortComponent
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.scss'
})
export class ProjectTasksComponent implements OnInit, OnDestroy{

  public currentProject: IProject | null = null;
  public filteredTasks: ITask[] | null = null
  private _dataService = inject(ProjectDataService);
  public taskDialog = inject(MatDialog);

  private _projectSubscription: Subscription | null = null;
  private _filteredTaskSubscription: Subscription | null = null;

  ngOnInit() {
    this._projectSubscription = this._dataService.$currentProjectData.subscribe((data: IProject) => {
      this.currentProject = data;
    })
    this._filteredTaskSubscription = this._dataService.$filteredTasks.subscribe((data: ITask[]) => {
      this.filteredTasks = data;
    })
  }

  public onClick(id: number): void {
    this._dataService.setCurrentTask(id);
    this.openTask();
  }

  public openTask() {
    this.taskDialog.open(TaskPageComponent);
  }

  ngOnDestroy() {
    if (this._projectSubscription) {
      this._projectSubscription.unsubscribe();
    }
    if (this._filteredTaskSubscription) {
      this._filteredTaskSubscription.unsubscribe();
    }
  }
}
