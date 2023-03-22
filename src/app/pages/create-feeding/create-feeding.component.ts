import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faPersonBreastfeeding,
  faPlay,
  faStop,
  faPause,
  faArrowRotateBackward,
  faBowlFood,
} from '@fortawesome/free-solid-svg-icons';
import { Feeding } from 'src/app/models/feeding';

@Component({
  selector: 'app-create-feeding',
  templateUrl: './create-feeding.component.html',
  styleUrls: ['./create-feeding.component.scss'],
})
export class CreateFeedingComponent {
  faBreastfeeding = faPersonBreastfeeding;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faArrowRotateBackward = faArrowRotateBackward;
  faFood = faBowlFood;

  solid: number;
  bottle: number;

  leftBreast: string = '00:00';

  rightBreast: string = '00:00';

  total: string = '00:00';
  isRunningLeft: boolean = false;
  isRunningRight: boolean = false;
  intervalLeft: any;
  intervalRight: any;
  startTimeLeft: number;
  startTimeRight: number;
  elapsedTimeLeft: number = 0;
  elapsedTimeRight: number = 0;

  create(form: NgForm) {
    const date = new Date();
    const feed: Feeding = {
      ...form.value,
      date,
    };
    console.log(feed);
  }

  startTimer(breast: string) {
    if (breast === 'left') {
      this.startTimeLeft = Date.now() - this.elapsedTimeLeft;
      this.intervalLeft = setInterval(() => {
        this.elapsedTimeLeft = Date.now() - this.startTimeLeft;
        this.leftBreast = this.formatTime(this.elapsedTimeLeft);
        this.total = this.formatTime(
          this.elapsedTimeLeft + this.elapsedTimeRight
        );
      }, 1000);
      this.isRunningLeft = true;
    } else if (breast === 'right') {
      this.startTimeRight = Date.now() - this.elapsedTimeRight;
      this.intervalRight = setInterval(() => {
        this.elapsedTimeRight = Date.now() - this.startTimeRight;

        this.rightBreast = this.formatTime(this.elapsedTimeRight);

        this.total = this.formatTime(
          this.elapsedTimeLeft + this.elapsedTimeRight
        );
      }, 1000);
      this.isRunningRight = true;
    }
  }

  stopTimer() {
    if (this.isRunningLeft) {
      clearInterval(this.intervalLeft);
      this.isRunningLeft = false;
    } else if (this.isRunningRight) {
      clearInterval(this.intervalRight);
      this.isRunningRight = false;
    }
  }

  resetTimer() {
    clearInterval(this.intervalLeft);
    clearInterval(this.intervalRight);
    this.leftBreast = '00:00';
    this.rightBreast = '00:00';
    this.total = '00:00';
    this.elapsedTimeLeft = 0;
    this.elapsedTimeRight = 0;
    this.isRunningLeft = false;
    this.isRunningRight = false;
  }

  formatTime(milliseconds: number): string {
    const minutes: number = Math.floor(milliseconds / 60000);
    const seconds: number = Math.floor((milliseconds % 60000) / 1000);
    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  padNumber(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
}
