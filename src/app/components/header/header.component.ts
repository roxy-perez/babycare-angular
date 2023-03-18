import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGear = faGear;
  faPlus = faPlus;
  allowNavigation = false;

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/poo':
          case '/feeding':
            this.allowNavigation = true;
            break;
          default:
            this.allowNavigation = false;
        }
      }
    });
  }

  show(): boolean {
    if (this.router.url !== '/register' && this.router.url !== '/login' && this.router.url !== '/front') {
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
