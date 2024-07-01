import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    TaskComponent,
    NewTaskComponent,
    TasksComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    DatePipe
  ],
  exports: [TasksComponent]
})
export class TaskModule {

}
