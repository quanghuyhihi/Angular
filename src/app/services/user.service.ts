import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:3000/users";

  constructor(private http:HttpClient, private toastr: ToastrService) { 
    this.isLoggedInSubject.next(this.isLoggedIn());
  }
  private currentUserKey = 'currentUser';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  setCurrentUser(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }
  getCurrentUser(): User | null {
    const userString = localStorage.getItem(this.currentUserKey);
    return userString ? JSON.parse(userString) : null;
  }
  clearCurrentUser(): void {
    localStorage.removeItem(this.currentUserKey);
    sessionStorage.removeItem('email'); // Xóa dữ liệu trong sessionStorage
    this.isLoggedInSubject.next(false);
  }
  getUserByCode(id: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  RegisterUser(data: User): Observable<User> {
    data.role = 'member';
    return this.http.post<User>(this.apiUrl, data);
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('email') !== null || localStorage.getItem(this.currentUserKey) !== null;
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
  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  logout(): void {
    // Xóa thông tin người dùng hiện tại và cập nhật trạng thái đăng nhập
    this.clearCurrentUser();
    this.toastr.success('Logged out successfully!');
  }
}
