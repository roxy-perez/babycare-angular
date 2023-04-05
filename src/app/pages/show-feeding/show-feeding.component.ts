import { Component } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faPlay, faStop, faPause, faArrowRotateBackward, faBowlFood, faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Feeding } from 'src/app/models/feeding';
import { FeedingService } from 'src/app/services/feeding.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-feeding',
  templateUrl: './show-feeding.component.html',
  styleUrls: ['./show-feeding.component.scss']
})
export class ShowFeedingComponent {
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faArrowRotateBackward = faArrowRotateBackward;
  faFood = faBowlFood;
  faXmark = faXmark;

  id: number;
  type: string;
  amountSolids: number;
  amountBottle: number;
  babyId: string;
  total: string;
  feeding: Feeding;
  createdAt: Date;

  timeLeftBreast: string;
  timeRightBreast: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public feedingService: FeedingService,
    public userService: UserService,
    public toastService: ToastService
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.babyId = this.userService.getBabyId();
    this.getFeeding();
  }

  getFeeding() {
    this.feedingService.getOneFeeding(this.babyId, this.id).subscribe({
      next: (response: { message: Feeding }) => {
        const feeding = response.message;
        if (feeding) {
          this.feeding = feeding;
          this.type = feeding.type;
          this.amountSolids = feeding.amountSolids;
          this.amountBottle = feeding.amountBottle;
          this.timeLeftBreast = feeding.timeLeftBreast;
          this.timeRightBreast = feeding.timeRightBreast;
          this.createdAt = feeding.createdAt;
          this.total = this.getTotal();
        }
        return true;
      },
      error: (error) => {
        console.error(error);
        this.toastService.error('Error al actualizar');
        this.router.navigateByUrl('/feeding');
        return false;
      },
    });
  }

  update(form: NgForm) {
    const updatedFeeding = {
      timeLeftBreast: this.timeLeftBreast,
      timeRightBreast: this.timeRightBreast,
      amountBottle: this.amountBottle,
      amountSolids: this.amountSolids,
      createdAt: this.createdAt,
    };

    this.feedingService.updateFeeding(this.id, updatedFeeding).subscribe({
      next: (response: { message: Feeding }) => {
        const feeding = response.message;
        if (feeding) {
          this.toastService.success('Actualizado correctamente');
          this.router.navigateByUrl('/feeding');
        } else {
          this.toastService.error('Error al ctualizar');
          this.router.navigateByUrl('/feeding');
        }
        return true;
      },
      complete: () => { form.resetForm() },
      error: (error) => {
        console.log(error);
        this.toastService.error('Error al actualizar');
        this.router.navigateByUrl('/feeding');
        return false;
      },
    });
  }

  delete() {
    this.feedingService.deleteFeeding(this.id).subscribe({
      next: (response: { message: Feeding }) => {
        const feeding = response.message;
        if (feeding) {
          this.toastService.success('Eliminado correctamente');
          this.router.navigateByUrl('/feeding');
        } else {
          this.toastService.error('Error al eliminar');
          this.router.navigateByUrl('/feeding');
        }
        return true;
      },
      error: (error) => {
        this.toastService.error('Error al eliminar');
        this.router.navigateByUrl('/feeding');
        return false;
      },
    });
  }

  getTotal(): string {
    let totalMinutes = 0;
    let totalSeconds = 0;

    if (this.timeLeftBreast) {
      const leftBreastMinutes = parseInt(this.timeLeftBreast.slice(0, 2));
      const leftBreastSeconds = parseInt(this.timeLeftBreast.slice(3, 5));
      totalMinutes += leftBreastMinutes;
      totalSeconds += leftBreastSeconds;
    }

    if (this.timeRightBreast) {
      const rightBreastMinutes = parseInt(this.timeRightBreast.slice(0, 2));
      const rightBreastSeconds = parseInt(this.timeRightBreast.slice(3, 5));
      totalMinutes += rightBreastMinutes;
      totalSeconds += rightBreastSeconds;
    }

    const totalSecondsNormalized = totalSeconds % 60;
    const totalMinutesNormalized = Math.floor(totalMinutes + totalSeconds / 60);
    const totalTime = `${totalMinutesNormalized.toString().padStart(2, '0')}:${totalSecondsNormalized.toString().padStart(2, '0')}`;
    return totalTime;

  }

}
