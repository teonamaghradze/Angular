import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  constructor(private userDataService: UserDataService) {}

  logOut() {
    this.userDataService.logOut();
  }
}
