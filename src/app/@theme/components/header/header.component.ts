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
    link: '/pages/profile',
    title: 'Profile',
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
        this.userMenu[0].link = `/pages/profile/${this.user.id}`;
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