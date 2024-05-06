import { Injectable } from '@angular/core';
import {ITask} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class TaskFilterService {

  constructor() { }

  public applyFilter(tasks: ITask[], status: string, assignee: string, priority: string): ITask[] {

      if (status !== 'all') {
        tasks = this.filterByStatus(tasks, status);
      }

      if (assignee !== 'All') {
        tasks = this.filterByAssignee(tasks, assignee);
      }

      if (priority !== 'all') {
        tasks = this.filterByPriority(tasks, priority);
      }
      return tasks;
  }

  public filterByStatus(tasks: ITask[], status: string): ITask[] {
    return tasks.filter(item => item.status === status);
  }

  public filterByAssignee(tasks: ITask[], assignee: string): ITask[] {
    return tasks.filter(item => item.assignee === assignee);
  }

  public filterByPriority(tasks: ITask[], priority: string): ITask[] {
    return tasks.filter(item => item.priority === priority);
  }
}
