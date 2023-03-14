import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {
  faGear,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faGear = faGear;

  constructor(public router: Router) { }

  show(): boolean {
    if (this.router.url !== '/register' && this.router.url !== '/login') {
      return true;
    }
    return false;
  }
}
