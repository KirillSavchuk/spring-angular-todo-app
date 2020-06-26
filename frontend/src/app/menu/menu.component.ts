import { Component, OnInit, OnChanges } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    public authService: HardcodedAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
