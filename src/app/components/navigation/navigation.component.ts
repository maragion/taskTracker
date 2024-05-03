import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawerContainer, MatSidenavModule } from "@angular/material/sidenav";
import {ProjectListComponent} from "../project-list/project-list.component";
import {ProjectTasksComponent} from "../project-tasks/project-tasks.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatDrawerContainer,
    MatSidenavModule,
    ProjectListComponent,
    ProjectTasksComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
