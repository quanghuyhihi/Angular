import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CateService } from '../../../../services/category.service';
import { Category } from '../../../../types/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-editcate',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './editcate.component.html',
  styleUrl: './editcate.component.css'
})
export class EditcateComponent {
  categoryId: string | undefined;
  categoryEdit:Category={
    id:'',
    name: '',
    description: '',
    createdAt:'',
    updatedAt:''
  };
  categoryService = inject(CateService); // inject vao bien
  router = inject(Router);
  route = inject(ActivatedRoute);
  categoryList: Category[] = [];
  ngOnInit(): void {
    this.categoryService
      .getCateList()
      .subscribe((categories) => (this.categoryList = categories));
    // Lay ProductId From Url
    this.route.params.subscribe((param) => {
      this.categoryId = param['id'];
      return this.getCategoryDetail();
    });
  }

  getCategoryDetail() {
    if (!this.categoryId) return;
    this.categoryService
      .getDetailCategoryById(this.categoryId)
      .subscribe(
        (categories) =>
          (this.categoryEdit = { ...categories})
      );
  }

  handleSubmit() {
    if (!this.categoryId) return;
    this.categoryService
      .updateCategoryById(this.categoryEdit, this.categoryId)
      .subscribe(() => this.router.navigate(['/admin/category']));
    // call service api POST products
  }
}

