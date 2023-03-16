import { Component } from '@angular/core';
import {
  faPersonBreastfeeding,
  faPlay, faStop,
  faPause, faArrowRotateBackward,
  faCow, faBowlFood
} from '@fortawesome/free-solid-svg-icons';

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
}
