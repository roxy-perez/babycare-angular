import { Component } from '@angular/core';
import {
  faHouse,
  faSyringe,
  faPersonBreastfeeding,
  faCalendarDays,
  faPoo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faHouse = faHouse;
  faSyringe = faSyringe;
  faPersonBreastfeeding = faPersonBreastfeeding;
  faCalendarDays = faCalendarDays;
  faPoo = faPoo;
}
