import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Baby-Care';
  backgroundColor = '#FFF';

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit() {
    this.selectBackgroundColor();
    this.redirectAuthenticatedUser();
  }

  redirectAuthenticatedUser() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/front':
          case '/register':
          case '/login':
            if (this.userService.user) {
              this.router.navigateByUrl('/home');
            }
            break;
          default:
            if (!this.userService.user) {
              this.router.navigateByUrl('/front');
            }
        }
      }
    });
  }

  selectBackgroundColor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/front':
            this.backgroundColor = 'rgba(48, 168, 242, .5)';
            break;
          case '/home':
            this.backgroundColor = '#808BF5';
            break;
          case '/feeding':
          case '/feeding/create':
          case this.router.url.match(/^\/feeding\/show\/.*/)?.[0]:
            this.backgroundColor = '#ABEBAF';
            break;
          case '/poo':
          case '/poo/create':
          case this.router.url.match(/^\/poo\/show\/.*/)?.[0]:
            this.backgroundColor = '#F9DC76';
            break;
          case '/vaccinate':
            this.backgroundColor = '#E98B96';
            break;
          case '/appointments':
          case '/appointments/create':
          case this.router.url.match(/^\/appointments\/show\/.*/)?.[0]:
            this.backgroundColor = '#BEC4FD';
            break;
          default:
            this.backgroundColor = '#FFF';
        }
      }
    });
  }
}
