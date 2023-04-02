import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Feeding } from '../models/feeding';

@Injectable({
  providedIn: 'root'
})
export class FeedingService {

  private feedingUrl: string;
  feeding: Feeding;

  constructor(private http: HttpClient) {
    this.feedingUrl = 'http://localhost:3000/api/v1/feeding';
  }

  getAllFeedings(babyId: string): Observable<Object> {
    return this.http.get<ApiResponse>(`${this.feedingUrl}/${babyId}`);
  }

  createFeeding(feedingData: Feeding): Observable<Object> {
    return this.http.post<ApiResponse>(this.feedingUrl, feedingData);
  }

  calculateBreastfeedingTime(feed: Feeding): string {
    let totalTime = "";
    const leftBreastTime = feed.timeLeftBreast || '0:00';
    const rightBreastTime = feed.timeRightBreast || '0:00';

    const [leftMinutes, leftSeconds] = leftBreastTime.split(':').map(Number);
    const [rightMinutes, rightSeconds] = rightBreastTime.split(':').map(Number);

    const totalMinutes = leftMinutes + rightMinutes;
    const totalSeconds = leftSeconds + rightSeconds;

    console.log(totalSeconds);

    totalTime = `${totalMinutes} minutos y ${totalSeconds} segundos`;

    return totalTime;
  }
}
