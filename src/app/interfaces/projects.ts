export interface IProject {
  title: string;
  link: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  description: string;
  assignee: string;
  priority: string;
  date: number;
  status: string;
}

