import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../types/User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.css'
})

export class UsereditComponent {
  userId: string | undefined;
  userEdit:User={
    id:'',
    email: '',
    username: '',
    password:'',
    role:''
  };
  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  userList: User[]= [];
  ngOnInit():void{
    this.userService
    .getUserList()
    .subscribe((users) => (this.userList = users));
    
    this.route.params.subscribe((param) => {
      this.userId = param['id'];
      return this.getDetailUser();
    });
  }
  getDetailUser(){
    if (!this.userId) return;
    this.userService
      .getUserByCode(this.userId)
      .subscribe(
        (users) =>
          (this.userEdit = { ...users})
      );
  }
  handleSubmit() {
    if (!this.userId) return;
    this.userService
      .updateUser(this.userEdit)
      .subscribe(() => this.router.navigate(['/admin/users']));
    // call service api POST products
  }
}