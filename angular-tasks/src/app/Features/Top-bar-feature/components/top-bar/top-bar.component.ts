import { Component } from '@angular/core';
import { UserDataService } from '../../../../Shared/services/user-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class TopBarComponent {
  constructor(private userDataService: UserDataService) {}

  logOut() {
    this.userDataService.logOut();
  }
}
