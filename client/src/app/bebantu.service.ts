import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BebantuService {

  private apiUrl = environment.apiUrl+'/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/v1/notificationlogs`); // Replace with your actual endpoint
  }
}