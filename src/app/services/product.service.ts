import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin, ProductAdd } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
 
  apiAdminUrl = 'https://database-r1g7.onrender.com/products'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }

  getDetailProductById(id: string) {
    return this.http.get<ProductAdmin>(`${this.apiAdminUrl}/${id}`);
  }

  updateProductById(product: ProductAdd, id: string) {
    return this.http.put<Product>(`${this.apiAdminUrl}/${id}`, product);
  }
}