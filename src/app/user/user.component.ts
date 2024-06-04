import {Component, signal} from '@angular/core';
import {DUMMY_USER} from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USER.length)
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {
  selectedUser = signal(DUMMY_USER[randomIndex]);

  get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USER.length);
    this.selectedUser.set(DUMMY_USER[randomIndex]);
  }
}
