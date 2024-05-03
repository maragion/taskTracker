import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {LocalStorageService} from "./services/localStorage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'taskTracker';
  localStorageService = inject(LocalStorageService);

  ngOnInit() {

    this.localStorageService.writeToLocalStorage();

  }
}
