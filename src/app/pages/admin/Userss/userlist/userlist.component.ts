import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators,FormControl } from '@angular/forms';
import { DescriptionPipe } from '../../../../pipes/description.pipe';
import { User } from '../../../../types/User';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent  {
  UserService = inject(UserService); // inject vao bien
  userList: User[] = []

  ngOnInit(): void {
    this.UserService
      .getUserList()
      .subscribe((users) => (this.userList = users)); // callApi.then(cb fuc)
  }

  handleDeleteUser(id: string) {
    if (window.confirm('Do you really remove category?')) {
      this.UserService
        .deleteUserById(id)
        .subscribe(
          () =>
            (this.userList = this.userList.filter(
              (user) => user.id !== id
            ))
        );
    }
  }
}