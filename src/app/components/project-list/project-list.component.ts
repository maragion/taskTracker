import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PROJECTSDATA} from "../../projects-data";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  public projects = PROJECTSDATA;

}
