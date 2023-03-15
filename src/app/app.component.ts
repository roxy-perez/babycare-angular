import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Baby-Care';
  backgroundColor = '#FFF';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/home':
            this.backgroundColor = '#808BF5';
            break;
          case '/food':
            this.backgroundColor = '#ABEBAF';
            break;
          case '/poo':
            this.backgroundColor = '#F9DC76';
            break;
          case '/vaccines':
            this.backgroundColor = '#E98B96';
            break;
          case '/appointments':
            this.backgroundColor = '#BEC4FD';
            break;
          default:
            this.backgroundColor = '#FFF';
        }
      }
    });
  }
}
