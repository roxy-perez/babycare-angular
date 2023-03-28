import { Component } from '@angular/core';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { Vaccinate } from 'src/app/models/vaccinate';
import { VaccinateService } from '../../services/vaccinate.service';
import { ApiResponse } from 'src/app/models/api-response';
@Component({
  selector: 'app-vaccinate',
  templateUrl: './vaccinate.component.html',
  styleUrls: ['./vaccinate.component.scss']
})

export class VaccinateComponent {
  faSyringe = faSyringe;

  periods = [
    { value: 'newborn', display: 'Récien nacido' },
    { value: 'month_2', display: '2 meses' },
    { value: 'month_4', display: '4 meses' },
    { value: 'month_6', display: '6 meses' },
    { value: 'month_11', display: '11 meses' },
    { value: 'month_12', display: '12 meses' },
    { value: 'month_15', display: '15 meses' }
  ];
  vaccineDescription: string;

  constructor(private vaccinateService: VaccinateService) { }

  onSelectPeriod(period: string): void {
    console.log("Opción seleccionada:", period);
    this.vaccinateService.getVaccinesByPeriod(period).subscribe({
      next: (response: ApiResponse) => {
        console.log(response.message);
        if (response.ok) {
          this.vaccineDescription = response.message[0].description;
        } else {
          this.vaccineDescription = 'No existen vacunas para el período seleccionado.';
        }
      },
      error: (error) => {
        this.vaccineDescription = 'Error cargando la información solicitada.';
        console.error(error);
      },
    });
  }
}
