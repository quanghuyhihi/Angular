import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../../../types/Category';
import { CateService } from '../../../../services/category.service';
import { NgFor } from '@angular/common';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './createcate.component.html',
  styleUrl: './createcate.component.css',
})
export class CreateCateComponent {
  categoryService = inject(CateService); // inject vao bien
  productService = inject(ProductService); // inject vao bien
  router = inject(Router);

  categoryAdd = {
    id:'',
    name: '',
    description: '',
    createdAt:'',
    updatedAt:''
  };
  categoryList: Category[] = [];
 
  ngOnInit(): void {
    this.categoryService
      .getCateList()
      .subscribe((categories) => (this.categoryList = categories)); // callApi.then(cb fuc)
  }
  handleSubmit() {
    this.categoryService
      .createCategory(this.categoryAdd)
      .subscribe(() => this.router.navigate(['/admin/category']));
    // call service api POST products
  }
}