import { Component } from '@angular/core';
import {
  faSyringe,
  faPersonBreastfeeding,
  faCalendarDays,
  faPoo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faSyringe = faSyringe;
  faPersonBreastfeeding = faPersonBreastfeeding;
  faCalendarDays = faCalendarDays;
  faPoo = faPoo;

  name = 'Alexa';
  age = '10 meses';
}
