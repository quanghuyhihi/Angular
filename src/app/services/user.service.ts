import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "https://database-r1g7.onrender.com/users";
  constructor(private http:HttpClient) { }
  
  getUserByCode(id: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  RegisterUser(data: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, data);
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('email') !== null;
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }
  getRole(): string {
    return sessionStorage.getItem('role') || '';
  }
}
