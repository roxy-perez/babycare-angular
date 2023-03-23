import { Component } from '@angular/core';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { VaccinateService } from '../../services/vaccinate.service';
@Component({
  selector: 'app-vaccinate',
  templateUrl: './vaccinate.component.html',
  styleUrls: ['./vaccinate.component.scss']
})
export class VaccinateComponent {
  faSyringe = faSyringe;

  vaccines: any[];

  constructor(private vaccinateService: VaccinateService) {}

  onSelectPeriod(selectedMonth: string): void {
    this.vaccinateService;
  }
}
