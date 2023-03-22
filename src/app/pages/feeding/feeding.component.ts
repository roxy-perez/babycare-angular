import { Component } from '@angular/core';
import {
  faPersonBreastfeeding,
  faPlay, faStop,
  faPause, faArrowRotateBackward,
  faCow, faBowlFood
} from '@fortawesome/free-solid-svg-icons';
import { Feeding } from 'src/app/models/feeding';

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

  feedings: Feeding[] = [
    {
      leftBreast: `00:04`,
      rightBreast: `00:03`,
      total: `00:07`,
      bottle: 160,
      solid: 50,
      date: new Date()
    },
    {
      leftBreast: `07:04`,
      rightBreast: `02:00`,
      total: `09:04`,
      bottle: 240,
      solid: 45,
      date: new Date('2023-03-20T08:35:45')
    },
    {
      leftBreast:  `00:06`,
      rightBreast: `01:05`,
      total: `01:11`,
      bottle: 200,
      solid: 60,
      date: new Date('2023-03-17T15:30:45')
    },
    {
      leftBreast:  "",
      rightBreast: "",
      total: "",
      bottle: 350,
      solid: 50,
      date: new Date('2023-03-16T10:30:45')
    },
  ];
}
