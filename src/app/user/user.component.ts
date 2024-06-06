import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
