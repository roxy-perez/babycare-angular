import { Component } from '@angular/core';
import {
  faPersonBreastfeeding,
  faPlay, faStop,
  faPause, faArrowRotateBackward,
  faCow, faBowlFood
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-feeding',
  templateUrl: './create-feeding.component.html',
  styleUrls: ['./create-feeding.component.scss']
})
export class CreateFeedingComponent {
  faBreastfeeding = faPersonBreastfeeding;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faArrowRotateBackward = faArrowRotateBackward;
  faCow = faCow;
  faFood = faBowlFood;

}
