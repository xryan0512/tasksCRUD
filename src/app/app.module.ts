import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/list-task/list-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { DetailTaskComponent } from './pages/detail-task/detail-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    CreateTaskComponent,
    DetailTaskComponent,
    UpdateTaskComponent,
    BackBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
