import { Component, inject,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators,FormControl } from '@angular/forms';
import { ProductAdmin } from '../../../../types/Product';
import { ProductService } from '../../../../services/product.service'; // import services
import { DescriptionPipe } from '../../../../pipes/description.pipe';
import { CateService } from '../../../../services/category.service';
import { Category } from '../../../../types/Category';
import { CurrencyPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink,ReactiveFormsModule,FormsModule,CurrencyPipe,NgxPaginationModule],
  providers:[CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit  {
  productService = inject(ProductService); // inject vao bien
  categoryService = inject(CateService);
  productList: ProductAdmin[] = [];
  categoryList: Category[] = [];
  filteredProductList: ProductAdmin[] = [];
  searchText: string = '';
  p: number = 1;
  selectedCategory: string = '';
  
  constructor() {
  }
  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts() {
    this.productService.getProductListAdmin().subscribe((products) => {
      this.productList = products;
      this.filteredProductList = [...products];
    });
  }

  loadCategories() {
    this.categoryService.getCateList().subscribe((category) => (this.categoryList = category));
  }
  handleDeleteProduct(id: string) {
    if (window.confirm('Do you really want to remove the product?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(() => {
          this.productList = this.productList.filter((product) => product.id !== id);
          this.filteredProductList = this.filteredProductList.filter((product) => product.id !== id);
        });
    }
  }
  searchProducts() {
    this.filteredProductList = this.productList.filter((product) =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.p=1;
  }
  onPageChange(event: number) {
    this.p = event;
  }

  
  
}