import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './Features/Top-bar-feature/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TopBarComponent, RouterOutlet],
})
export class AppComponent {
  title = 'angular-tasks';
}
