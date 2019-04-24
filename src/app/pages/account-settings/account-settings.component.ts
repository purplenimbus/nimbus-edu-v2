import { Component, Input, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

export interface User {
	email: string;
	firstname: string;
	middlename?: string;
	lastname: string;
};

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
	@Input() user: User;

  constructor(public authService: NbAuthService) { }

  ngOnInit() {
  	this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload().user;
      }
    });
  }

}
