import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/admin/Productss/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
  import { CreateComponent } from './pages/admin/Productss/create/create.component';
  import { EditComponent } from './pages/admin/Productss/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { CategoryComponent } from './pages/admin/Category/catelist/catelist.component';
import { CreateCateComponent } from './pages/admin/Category/createcate/createcate.component';
import { EditcateComponent } from '../app/pages/admin/Category/editcate/editcate.component';


export const routes: Routes = [
  // route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'admin', component: ProductsComponent },
  {
    path: 'admin',
    canActivate:[AdminGuard],
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: CreateComponent },
      { path: 'products/edit/:id', component: EditComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/create', component: CreateCateComponent },
      { path: 'category/edit/:id', component: EditcateComponent },
    ],
  },
];
