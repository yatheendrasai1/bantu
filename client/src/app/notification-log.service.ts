import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificationLogService {

  private apiUrl = environment.apiUrl+'/api/v1/notificationlogs';
  
  constructor(private http: HttpClient) {
    console.log("kkkkkkkkkkkkkkkkkkkkk");
    }

  getLogs(): Observable<any[]> {
    console.log("huuuuuuuuuuuuuuu");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Example of adding an Authorization header
    });
    return this.http.get<any[]>(this.apiUrl, { headers});
  }
}