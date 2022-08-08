import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: '1', name: 'Jegs', lastName: 'V', tags: ['angular', 'typescript'] },
    { id: '2', name: 'Niv', lastName: 'Yukt', tags: ['javascript', 'rxjs'] },
    { id: '3', name: 'Niharika', lastName: 'Jegs', tags: ['angular', 'promise'] },
    { id: '4', name: 'Gayu', lastName: 'Jegs', tags: ['angular', 'typescript'] },
    { id: '5', name: 'abc', lastName: 'xyz', tags: ['angular', 'typescript'] },
    { id: '6', name: 'xyz', lastName: 'abc', tags: ['angular', 'typescript'] }
  ].map(e => new User(e.name, e.lastName, e.tags, e.id));

  getUsers(): User[] {
    return [...this.users];
  }

  create(user: User) {
    user.id = `${this.users.length + 1}`;
    this.users.push(user.clone());
  }

  edit(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user.clone();
  }
}
