import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import { Category } from '../types/Category';
@Injectable({
  providedIn: 'root',
})
export class CateService {
  // call api
 
  apiAdminUrl = 'https://database-r1g7.onrender.com/categories'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getCateList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }


  deleteCategoryById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(this.apiAdminUrl, category);
  }

  getDetailCategoryById(id: string) {
    return this.http.get<Category>(`${this.apiAdminUrl}/${id}`);
  }

  updateCategoryById(product: Category, id: string) {
    return this.http.put<Category>(`${this.apiAdminUrl}/${id}`, product);
  }
}