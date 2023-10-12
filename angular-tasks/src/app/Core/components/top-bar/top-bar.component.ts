import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { UserDataService } from 'src/app/Shared/services/user-data.service';

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
