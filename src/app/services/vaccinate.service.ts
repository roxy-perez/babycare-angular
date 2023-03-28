import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vaccinate } from '../models/vaccinate';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class VaccinateService {
  vaccineUrl: string;

  constructor(private http: HttpClient) {
    this.vaccineUrl = 'http://localhost:3000/api/v1/vaccine';
  }

  getVaccinesByPeriod(period: string): Observable<ApiResponse> {
    const url = `${this.vaccineUrl}/${period}`;
    return this.http.get<ApiResponse>(url);
  }
}


