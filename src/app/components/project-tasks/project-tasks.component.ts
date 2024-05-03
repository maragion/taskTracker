import { Component } from '@angular/core';
import { PROJECTSDATA} from "../../projects-data";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DatePipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-project-tasks',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgClass,
    DatePipe
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.scss'
})
export class ProjectTasksComponent {

  currentProject = PROJECTSDATA[1];

}
