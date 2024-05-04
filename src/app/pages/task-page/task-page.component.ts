import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {DatePipe, NgClass} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {ProjectDataService} from "../../services/project-data.service";
import {ITask} from "../../interfaces/projects";
import {Subscription} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";

interface IOptions {
  value: string,
  label: string,
}

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    RouterLink,
    NgClass,
    FormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent implements OnInit, OnDestroy{

  private _dataService = inject(ProjectDataService);
  private _taskDialog = inject(MatDialog);

  private _taskId: number | null = null;
  public task: ITask | null = null;
  private _taskSubscription: Subscription | null = null;
  public employees: string[] = ['Ivan Ivanov', 'John Doe', 'Elena Petrova'];
  public statusOptions: IOptions[] = [
    {
      value: 'todo',
      label: 'To Do',
    },
    {
      value: 'in-progress',
      label: 'In progress',
    },
    {
      value: 'done',
      label: 'Done',
    },
  ];
  public selectedAssignee: string | null = null;
  public selectedStatus: string | null = null;

  ngOnInit() {
    this._taskSubscription = this._dataService.currentProject.subscribe(data => {
      this._taskId = this._dataService.currentTask();
      this.task = data.tasks[this._taskId];
      this.selectedAssignee = this.task.assignee;
      this.selectedStatus = this.task.status;
    })
  }

  public closeTask(): void {
    this._taskDialog.closeAll();
  }

  public updateTask() {
    if (this.selectedAssignee && this.task) {
      this.task.assignee = this.selectedAssignee;
    }

    if (this.selectedStatus && this.task) {
      this.task.status = this.selectedStatus;
    }

    this._dataService.updateTask();
    this.closeTask();
  }

  ngOnDestroy() {
    if (this._taskSubscription) {
      this._taskSubscription.unsubscribe();
    }
  }

}
