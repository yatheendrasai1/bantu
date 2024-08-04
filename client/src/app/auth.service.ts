import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl+'/api/auth';

  constructor(private http: HttpClient, private router: Router) { }
  

  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password, name });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

  // Add other auth methods as needed
}
