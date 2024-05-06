import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {TaskFilterService} from "../../services/task-filter.service";
import {TaskSortService} from "../../services/task-sort.service";
import {IProject, ITask} from "../../interfaces/projects";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProjectDataService} from "../../services/project-data.service";

interface IOptions {
  value: string,
  label: string,
}

@Component({
  selector: 'app-filter-and-sort',
  standalone: true,
    imports: [
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
    ],
  templateUrl: './filter-and-sort.component.html',
  styleUrl: './filter-and-sort.component.scss'
})
export class FilterAndSortComponent implements OnInit, OnDestroy{
  public dateSort: string | null = null;
  public assigneeSort: string | null = null;
  public statusFilter: string = 'all';
  public priorityFilter: string = 'all';
  public assigneeFilter: string = 'All';
  public employees: string[] = ['All', 'Ivan Ivanov', 'John Doe', 'Elena Petrova'];

  currentTaskList: ITask[] | null = null;
  filteredTasks: ITask[] | null = null;

  private _projectSubscription: Subscription | null = null;

  private _filterService = inject(TaskFilterService);
  private _sortService = inject(TaskSortService);
  private _dataService = inject(ProjectDataService);

  ngOnInit() {
    this._projectSubscription = this._dataService.$currentProjectData.subscribe((data: IProject) => {
      this.currentTaskList = data.tasks;
      this.applyFilter();
    })
  }

  public statusOptions: IOptions[] = [
    {
      value: 'all',
      label: 'All',
    },
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

  public priorityOptions: IOptions[] = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'low',
      label: 'Low',
    },
    {
      value: 'medium',
      label: 'Medium',
    },
    {
      value: 'high',
      label: 'High',
    },
  ];

  public applyFilter() {
    if (this.currentTaskList) {
      this.filteredTasks = this._filterService.applyFilter(this.currentTaskList, this.statusFilter, this.assigneeFilter, this.priorityFilter)
      this._dataService.setFilteredTasks(this.filteredTasks);
    }
  }

  public sortByDate() {
    if (this.filteredTasks && this.dateSort) {
      this.filteredTasks = this._sortService.sortByDate(this.filteredTasks, this.dateSort);
      this._dataService.setFilteredTasks(this.filteredTasks);
    }
  }

  public sortByAssignee() {
    if (this.filteredTasks && this.assigneeSort) {
      this.filteredTasks = this._sortService.sortByAssignee(this.filteredTasks, this.assigneeSort);
      this._dataService.setFilteredTasks(this.filteredTasks);
    }
  }

  ngOnDestroy() {
    if (this._projectSubscription) {
      this._projectSubscription.unsubscribe();
    }
  }
}
