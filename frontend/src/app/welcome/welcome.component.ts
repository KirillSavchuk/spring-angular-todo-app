import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, WelcomeResponseEntity } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromServer = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params[`name`];
  }

  getWelcomeMessage(): void {
    this.welcomeDataService.executeWelcomeService(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  private handleSuccessResponse(response: WelcomeResponseEntity): void {
    this.welcomeMessageFromServer = response.message;
  }

  private handleErrorResponse(error: any): void {
    this.welcomeMessageFromServer = error.error.message;
  }

}
