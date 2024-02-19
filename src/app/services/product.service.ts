import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Product, ProductAdmin, ProductAdd } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiAdminUrl = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl);
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl);
  }

  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }

  getDetailProductById(id: string): Observable<ProductAdmin> {
    return this.http.get<ProductAdmin>(`${this.apiAdminUrl}/${id}`);
  }

  updateProductById(product: ProductAdd, id: string) {
    return this.http.put<Product>(`${this.apiAdminUrl}/${id}`, product);
  }
}
