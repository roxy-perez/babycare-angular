import { Component } from '@angular/core';
import {
  faPlay, faStop, faPause, faArrowRotateBackward, faBowlFood
} from '@fortawesome/free-solid-svg-icons';
import { Feeding } from 'src/app/models/feeding';
import { UserService } from 'src/app/services/user.service';
import { FeedingService } from '../../services/feeding.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent {
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faArrowRotateBackward = faArrowRotateBackward;
  faFood = faBowlFood;

  feedings: Feeding[] = [];
  babyId: string;
  total: string | null = null;

  constructor(public userService: UserService, public feedingService: FeedingService, public router: Router) {
    this.babyId = this.userService.getBabyId();
    this.feedingService.getAllFeedings(this.babyId).subscribe({
      next: (response: { message: Feeding[] }) => {

        if (response) {
          this.feedings = response.message;
          console.log(this.feedings)

          for (const feed of this.feedings) {
            if (feed.timeLeftBreast || feed.timeRightBreast) {
              feed.total = this.feedingService.calculateBreastfeedingTime(feed);
              console.log(feed.total)
            } else {
              feed.timeLeftBreast = '00:00';
              feed.timeRightBreast = '00:00';
              feed.total = '00:00';
            }
          }
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  show(id: string) {
    this.router.navigateByUrl(`/feeding/show/${id}`);
  }
}

