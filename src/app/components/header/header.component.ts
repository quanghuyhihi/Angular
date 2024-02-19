import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent  {
  isLoggedIn: boolean = false;
  title = 'Homeppage';
  menuList = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Shop',
      link: '/shop',
    },
    {
      label: 'Contact',
      link: '/',
    },
    {
      label: 'Admin',
      link: '/admin/products',
    }
  ]; // NgFor
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    // Kiểm tra trạng thái đăng nhập khi component được khởi tạo
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  // Phương thức logout
  logout(): void {
    this.userService.logout(); // Thực hiện phương thức logout từ service
    this.isLoggedIn = false; // Cập nhật biến trạng thái đăng nhập
  }
}
