import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})

export class Spacexapi {

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Get all Missions
  get missions(): Observable<Mission[]> {

    return this.http.get<Mission[]>(this.apiUrl)
  }

  // Get Mission by flight number
  getMission(flightNumber: number): Observable<Mission> {

    return this.http.get<Mission>(`${this.apiUrl}/${flightNumber}`);
  }

  // Get Missions by year
  getMissionsByYear(year: number): Observable<Mission[]> {

    return this.http.get<Mission[]>(`${this.apiUrl}?launch_year=${year}`);
  }
}
