import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;

  constructor(private data: UserService) { }

  ngOnInit(): void {
    this.users = this.data.getUsers();
  }

  selectUser(user:User){
    this.selectedUser = user.clone();
  }

  create(){
    this.selectedUser = User.createBlank();
  }

  save(user: User) {
    if (!user.valid) {
      return;
    }

    if (user.id) {
      this.data.edit(user);
    } else {
      this.data.create(user);
    }
    this.users = this.data.getUsers();
    this.selectedUser = undefined;
  }

}
