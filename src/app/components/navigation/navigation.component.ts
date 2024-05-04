import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawerContainer, MatSidenavModule } from "@angular/material/sidenav";
import {ProjectListComponent} from "../project-list/project-list.component";
import {ProjectTasksComponent} from "../project-tasks/project-tasks.component";
import { ProjectDataService } from '../../services/project-data.service';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ProjectsPageComponent} from "../../pages/projects-page/projects-page.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatToolbar,
    MatDrawerContainer,
    MatSidenavModule,
    ProjectListComponent,
    ProjectTasksComponent,
    MatProgressSpinner,
    ProjectsPageComponent,
    RouterOutlet,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public dataService = inject(ProjectDataService);
}
