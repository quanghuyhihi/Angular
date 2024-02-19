import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Category } from '../types/Category';

@Injectable({
  providedIn: 'root',
})
export class CateService {
  private apiAdminUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getCateList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl);
  }

  deleteCategoryById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(this.apiAdminUrl, category);
  }

  getDetailCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiAdminUrl}/${id}`);
  }

  updateCategoryById(category: Category, id: string) {
    return this.http.put<Category>(`${this.apiAdminUrl}/${id}`, category);
  }
}
