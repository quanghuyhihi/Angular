import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { ProductAdd } from '../../../../types/Product';
import { CateService } from '../../../../services/category.service';
import { Category } from '../../../../types/Category';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports:[FormsModule,NgFor]
})
export class EditComponent  {
  productId: string | undefined;
  productEdit: ProductAdd = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  categoryList: Category[] = [];

  constructor(
    private categoryService: CateService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getCateList().subscribe((categories) => (this.categoryList = categories));
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      return this.getProductDetail();
    });
  }

  getProductDetail() {
    if (!this.productId) return;
    this.productService.getDetailProductById(this.productId).subscribe(
      (product) =>
        (this.productEdit = { ...product, category: product.category.id })
    );
  }

  handleSubmit() {
    if (!this.productId) return;
    this.productService
      .updateProductById(this.productEdit, this.productId)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}
