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
import { Router } from '@angular/router';
import { FeedingService } from 'src/app/services/feeding.service';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';

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

  type: string;
  solid: number;
  bottle: number;

  timeLeftBreast: string = null;
  timeRightBreast: string = null;

  total: string = '00:00';
  isRunningLeft: boolean = false;
  isRunningRight: boolean = false;
  isBreastTimerRunning = false;
  intervalLeft: any;
  intervalRight: any;
  startTimeLeft: number;
  startTimeRight: number;
  elapsedTimeLeft: number = 0;
  elapsedTimeRight: number = 0;

  saveEnabled: boolean = false;

  constructor(public router: Router,
    public feedingService: FeedingService,
    public userService: UserService,
    public toastService: ToastService) { }

  submitForm(form) {
    //Validaciones
    if (this.type === 'BOTTLE') {
      if (form.value.amountBottle == null) {
        this.toastService.warning('Debe rellenar los datos');
        return;
      }
    }

    if (this.type === 'SOLIDS') {
      if (form.value.amountSolids == null) {
        this.toastService.warning('Debe rellenar los datos');
        return;
      }
    }

    if (this.type != 'BREASTFEEDING' || this.saveEnabled) {
      const date = new Date();
      const feeding: Feeding = {
        ...form.value,
        date,
        babyId: this.userService.getBabyId(),
        timeLeftBreast: this.timeLeftBreast,
        timeRightBreast: this.timeRightBreast
      };
      console.log(feeding);

      this.feedingService.createFeeding(feeding).subscribe({
        next: (response: { message: Feeding }) => {
          console.log(response.message);
          if (feeding) {
            this.toastService.success('Guardado correctamente');
          }
          return true;
        },
        complete: () => {
          this.resetForm();
          this.router.navigateByUrl('/feeding');
        },
        error: (error: Error) => {
          const errorMessage = error.message;
          this.toastService.error(errorMessage);
          return false;
        },
      });
    } else {
      this.toastService.warning('Debe cronometrar ambos');
      return;
    }
  }

  resetForm() {
    this.timeLeftBreast = null;
    this.timeRightBreast = null;
    this.total = '00:00';
    this.isBreastTimerRunning = false;
    this.isRunningLeft = false;
    this.isRunningRight = false;
    clearInterval(this.intervalLeft);
    clearInterval(this.intervalRight);
    this.elapsedTimeLeft = 0;
    this.elapsedTimeRight = 0;
  }

  startTimer(breast: string) {
    this.isBreastTimerRunning = true;
    if (breast === 'left') {
      this.startTimeLeft = Date.now() - this.elapsedTimeLeft;
      this.intervalLeft = setInterval(() => {
        this.elapsedTimeLeft = Date.now() - this.startTimeLeft;
        this.timeLeftBreast = this.formatTime(this.elapsedTimeLeft);
        this.total = this.formatTime(
          this.elapsedTimeLeft + this.elapsedTimeRight
        );
      }, 1000);
      this.isRunningLeft = true;
    } else if (breast === 'right') {
      this.startTimeRight = Date.now() - this.elapsedTimeRight;
      this.intervalRight = setInterval(() => {
        this.elapsedTimeRight = Date.now() - this.startTimeRight;

        this.timeRightBreast = this.formatTime(this.elapsedTimeRight);

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
      this.isBreastTimerRunning = false;
    } else if (this.isRunningRight) {
      clearInterval(this.intervalRight);
      this.isRunningRight = false;
      this.isBreastTimerRunning = false;
    }

    if (this.type == 'BREASTFEEDING' && this.timeLeftBreast && this.timeRightBreast) {
      this.saveEnabled = true;
    } else {
      this.saveEnabled = false;
    }
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
