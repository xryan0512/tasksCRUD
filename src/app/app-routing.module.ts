import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { DetailTaskComponent } from './pages/detail-task/detail-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'createtask', component: CreateTaskComponent },
  { path: 'detail/:id', component: DetailTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
