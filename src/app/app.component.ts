import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USER} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USER;
  selectUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectUserId);
  }

  onSelect(id: string) {
    this.selectUserId = id;
  }
}
