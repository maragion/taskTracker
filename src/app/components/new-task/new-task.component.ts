import {Component, inject} from '@angular/core';
import {MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

interface IOptions {
  value: string,
  label: string,
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    MatFabButton,
    MatTooltip,
    MatIconModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(NewTaskDialogComponent);
  }
}

@Component({
  selector: 'new-task-dialog',
  templateUrl: 'new-task-dialog.component.html',
  styleUrl: './new-task.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatIconModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
})

export class NewTaskDialogComponent {
  private _fb = inject(FormBuilder);

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
  public priorityOptions: IOptions[] = [
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

  public taskForm = this._fb.group({
    title: ['', Validators.required],
    date: [''],
    priority: ['low'],
    assignee: [''],
    status: ['todo'],
    description: ['', Validators.required],
  })

  public onSubmit() {
    if (this.taskForm.valid) {
      const data = this.taskForm.getRawValue();
      console.log(data);
    }
  }

}
