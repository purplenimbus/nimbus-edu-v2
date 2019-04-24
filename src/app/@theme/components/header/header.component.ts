import { Component, Input, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{
    link: '/pages/account-settings',
    title: 'Account Settings',
  }, {
    link: '/auth/logout',
    title: 'Sign Out',
  }];

  constructor(public authService: NbAuthService,
              private menuService: NbMenuService,
              private router: Router,
              private sidebarService: NbSidebarService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload().user;
      }
    });
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  goToLogin() {
    this.router.navigate(['auth/login']);
  }
}