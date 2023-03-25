import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faGear,
  faPlus,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGear = faGear;
  faPlus = faPlus;
  faArrowRightFromBracket = faArrowRightFromBracket;
  allowNavigation = false;
  isHomePage = false;

  constructor(public router: Router, public userService: UserService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/poo':
          case '/feeding':
          case '/appointments':
            this.allowNavigation = true;
            this.isHomePage = false;
            break;
          case '/home':
            this.isHomePage = true;
            break;
          default:
            this.allowNavigation = false;
            this.isHomePage = false;
        }
      }
    });
  }

  show(): boolean {
    if (
      this.router.url !== '/register' &&
      this.router.url !== '/login' &&
      this.router.url !== '/front'
    ) {
      return true;
    }
    return false;
  }

  navigate(): void {
    if (this.allowNavigation) {
      this.router.navigateByUrl(`${this.router.url}/create`);
    }
  }
}
