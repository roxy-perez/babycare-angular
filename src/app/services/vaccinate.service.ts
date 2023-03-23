import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinateService {
  period = 'recién nacido';
  vaccines = [];

  /* private vaccineUrl = 'http://api.babycare.com/vaccines';

  constructor(private http: HttpClient) { }

  getVaccinesByPeriod(selectedPeriod: string): Observable<any> {
    const url = `${this.vaccineUrl}?period=${selectedPeriod}`;
    return this.http.get(url);
  } */
}


