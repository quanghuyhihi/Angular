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
  private currentUserKey = 'currentUser';
  setCurrentUser(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }
  getCurrentUser(): User | null {
    const userString = localStorage.getItem(this.currentUserKey);
    return userString ? JSON.parse(userString) : null;
  }
  clearCurrentUser(): void {
    localStorage.removeItem(this.currentUserKey);
  }
  getUserByCode(id: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  RegisterUser(data: User): Observable<User> {
    data.role = 'member';
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
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl); //axios.get(apiUrl)
  }
  deleteUserById(id:string):Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
  updateUser(updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/${updatedUser.id}`;
    return this.http.put<User>(url, updatedUser);
  }
  getUserDetail(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }
  updateUserById(userId: string, updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<User>(url, updatedUser);
  }
}
