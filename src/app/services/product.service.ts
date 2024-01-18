import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiAdminUrl = 'https://65a66fdb74cf4207b4f005e4.mockapi.io/products'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
  deleteProductAdmin(id:string):Observable<Product>{
    return this.http.delete<Product>(`${this.apiAdminUrl}/${id}`)
  }
}
