import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebantuService {

  private apiUrl = 'http://localhost:5171/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/v1/notificationlogs`); // Replace with your actual endpoint
  }
}