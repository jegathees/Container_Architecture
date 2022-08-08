import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent {

  @Input() vm: {
    name: string;
    lastName: string;
    tags: string[];
  } | undefined;

  @Input() active: boolean | undefined;
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  select() {
    this.selected.emit();
  }

}
