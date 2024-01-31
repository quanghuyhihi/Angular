import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators,FormControl } from '@angular/forms';
import { DescriptionPipe } from '../../../../pipes/description.pipe';
import { CateService } from '../../../../services/category.service';
import { Category } from '../../../../types/Category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink],
  templateUrl: './catelist.component.html',
  styleUrl: './catelist.component.css',
})
export class CategoryComponent {
  CateService = inject(CateService); // inject vao bien
  categoryList: Category[] = []

  ngOnInit(): void {
    this.CateService
      .getCateList()
      .subscribe((category) => (this.categoryList = category)); // callApi.then(cb fuc)
  }
  handleDeleteCategory(id: string) {
    if (window.confirm('Do you really remove category?')) {
      this.CateService
        .deleteCategoryById(id)
        .subscribe(
          () =>
            (this.categoryList = this.categoryList.filter(
              (category) => category.id !== id
            ))
        );
    }
  }
}