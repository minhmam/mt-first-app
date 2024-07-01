import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {DatePipe} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {TaskModule} from "./tasks/task.module";

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, FormsModule, TaskModule]
})
export class AppModule {

}

