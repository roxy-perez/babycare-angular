import { Component } from '@angular/core';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-vaccinate',
  templateUrl: './vaccinate.component.html',
  styleUrls: ['./vaccinate.component.scss']
})
export class VaccinateComponent {
  faSyringe = faSyringe;
}
