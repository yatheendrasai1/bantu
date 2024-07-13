import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationLogService {

  private apiUrl = 'http://localhost:5171/api/notificationlogs';

  constructor(private http: HttpClient) {
    console.log("kkkkkkkkkkkkkkkkkkkkk");
  }

  getLogs(): Observable<any[]> {
    console.log("huuuuuuuuuuuuuuu");
    return this.http.get<any[]>(this.apiUrl);
  }
}