import {NewTaskData, Task} from "./task.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
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
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId)
  }

  constructor() {
    const tasks = localStorage.getItem('task')

    if (tasks) {
      this.tasks = JSON.parse(tasks);
      this.saveTasks();
    }
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  addTask(newTaskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.date
    })
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
