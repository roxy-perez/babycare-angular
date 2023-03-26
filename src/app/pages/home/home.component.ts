import { Component } from '@angular/core';
import {
  faSyringe,
  faPersonBreastfeeding,
  faCalendarDays,
  faPoo,
} from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/services/user.service';

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

  name: string;
  age: number;

  constructor(public userService: UserService) {
    const baby = this.userService.user?.Baby;
    if (baby) {
      this.name = baby.name;
      this.age = this.calculateAgeInMonths(new Date(baby.birthday));
    }
  }

  calculateAgeInMonths(birthday: Date) {
    const today = new Date();
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const daysPassed = Math.round(
      (today.getTime() - birthday.getTime()) / millisecondsInOneDay
    );
    const monthPassed = Math.floor(daysPassed / 30.44);
    return monthPassed;
  }
}
