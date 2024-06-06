import {Component, EventEmitter, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {Task} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required: true}) name!: string;
  @Input() addTask = new EventEmitter()
  @Input() user!: {
    name: string;
    id: string;
    avatar: string
  };
  task: Task = {
    id: 't4',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
    dueDate: '2025-12-31'
  }


  tasks: Task[] = [
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

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask(task: Task) {
    // this.addTask.emit(this.user.id)
    // let task = {
    //   id: 't4',
    //   userId: this.user.id,
    //   title: 'Master Java',
    //   summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
    //   dueDate: '2025-12-31'
    // }
    this.tasks.push(task);
  }
}

