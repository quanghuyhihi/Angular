import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
  import { CreateComponent } from './pages/admin/create/create.component';
  import { EditComponent } from './pages/admin/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { guardsGuard } from './guards/guards.guard';


export const routes: Routes = [
  // route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'admin', component: ProductsComponent },
  {
    path: 'admin',
    canActivate:[guardsGuard],
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: CreateComponent },
      { path: 'products/edit/:id', component: EditComponent },
    ],
  },
];
