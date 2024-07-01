import {Component, EventEmitter, Input} from '@angular/core';
import { type NewTaskData, Task} from "./task/task.model";
import {TaskService} from "./task/task.service";

@Component({
  selector: 'app-tasks',
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
  isAddingTask = false;
  constructor(private tasksService: TaskService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
    this.tasksService.addTask(taskData, this.user.id);
  }
}

