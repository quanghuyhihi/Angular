import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import { Category } from '../types/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {  
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/categories'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getCategoryListAdmin(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
}