import { Component } from '@angular/core';
import {
  faPersonBreastfeeding,
  faPlay, faStop,
  faPause, faArrowRotateBackward,
  faCow, faBowlFood
} from '@fortawesome/free-solid-svg-icons';
import { Feeding } from 'src/app/models/feeding';
import { UserService } from 'src/app/services/user.service';
import { FeedingService } from '../../services/feeding.service';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent {
  faBreastfeeding = faPersonBreastfeeding;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faArrowRotateBackward = faArrowRotateBackward;
  faCow = faCow;
  faFood = faBowlFood;

  feedings: Feeding[] = [];
  babyId: string;
  totalTime: string | null = null;

  constructor(public userService: UserService, public feedingService: FeedingService) {
    this.babyId = this.userService.getBabyId();
    this.feedingService.getAllFeedings(this.babyId).subscribe({
      next: (response: { message: Feeding[] }) => {

        if (response) {
          this.feedings = response.message;

          for (const feed of this.feedings) {
            if (feed.timeLeftBreast || feed.timeRightBreast) {
              this.totalTime = this.feedingService.calculateBreastfeedingTime(feed);
            } else (feed.timeLeftBreast = '00:00', feed.timeRightBreast = '00:00');
          }
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}

