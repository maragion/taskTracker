import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {ProjectListComponent} from "../../components/project-list/project-list.component";
import {ProjectTasksComponent} from "../../components/project-tasks/project-tasks.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
    imports: [
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        ProjectListComponent,
        ProjectTasksComponent
    ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
