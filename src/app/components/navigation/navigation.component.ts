import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawerContainer, MatSidenavModule } from "@angular/material/sidenav";
import {ProjectListComponent} from "../project-list/project-list.component";
import {ProjectTasksComponent} from "../project-tasks/project-tasks.component";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatDrawerContainer,
    MatSidenavModule,
    ProjectListComponent,
    ProjectTasksComponent,
    MatIcon,
    MatFabButton,
    MatTooltip
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
