import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificationLogService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log("kkkkkkkkkkkkkkkkkkkkk");
  }

  getLogs(): Observable<any[]> {
    console.log("huuuuuuuuuuuuuuu");
    return this.http.get<any[]>(this.apiUrl);
  }
}