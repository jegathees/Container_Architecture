import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input()
  vm: User;
  @Output() save: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  onSave() {
    this.save.emit(this.vm);
  }

}
