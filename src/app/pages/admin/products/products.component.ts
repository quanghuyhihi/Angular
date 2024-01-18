import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductAdmin } from '../../../types/Product';
import { ProductService } from '../../../services/product.service'; // import services
import { DescriptionPipe } from '../../../pipes/description.pipe';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, DescriptionPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productService = inject(ProductService); // inject vao bien

  productList: ProductAdmin[] = [];

  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  handleDeleteProduct(id: string) {
    if(window.confirm('Do you really want remove this product?')){
      this.productService
      .deleteProductAdmin(id)
      .subscribe(
        ()=>
        (this.productList = this.productList.filter(
          (product) =>product.id !==id
        ))
      )
    }
  }
  // deleteProduct(id) : productService.deleteProductById(id)
}

// 1. Viet service
// 2. Update UI
// 3. Handle trong component
