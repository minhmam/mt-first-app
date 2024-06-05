import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required: true}) name!: string;
  @Input() user!: {
    name: string;
    id: string;
    avatar: string
  };

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Spring Boot',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Java core',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
}

