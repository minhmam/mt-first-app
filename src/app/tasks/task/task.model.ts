export interface Task {
  summary: string;
  dueDate: string;
  id: string;
  title: string;
  userId: string
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
