import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {LocalStorageService} from "./services/localStorage.service";
import {ProjectDataService} from "./services/project-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'taskTracker';
  private _localStorageService = inject(LocalStorageService);
  private _dataService = inject(ProjectDataService);

  ngOnInit() {

    this._localStorageService.writeToLocalStorage();
    this._dataService.getProjectsData();

  }
}
