import { Injectable } from '@angular/core';
import {ITask} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class TaskSortService {

  constructor() { }

  public sortByDate(tasks: ITask[], order: string): ITask[] {

    if (order === 'ascending') {
      return tasks.sort((a, b) => {
        return a.date - b.date;
      })
    } else if (order === 'descending') {
      return tasks.sort((a, b) => {
        return b.date - a.date;
      })
    } else {
      return tasks;
    }
  }

  public sortByAssignee(tasks: ITask[], order: string): ITask[] {

    if (order === 'ascending') {
      return tasks.sort((a, b) => {
        const nameA = a.assignee.toUpperCase();
        const nameB = b.assignee.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    } else if (order === 'descending') {
      return tasks.sort((a, b) => {
        const nameA = a.assignee.toUpperCase();
        const nameB = b.assignee.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      })
    }
    else {
      return tasks;
    }
  }
}
