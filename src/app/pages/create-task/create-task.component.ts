import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  task: Task = { title: '', isCompleted: false, description: '' };
  successMsg: boolean | null = null;
  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.createTaskItem(this.task).subscribe((res) => {
      this.successMsg = true;
      setTimeout(() => {
        this.successMsg = false;
      }, 3000);
    });
    this.task = { title: '', isCompleted: false, description: '' };
  }
}
