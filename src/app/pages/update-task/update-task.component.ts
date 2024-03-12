import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent {
  task: Task = { title: '', isCompleted: false, description: '' };
  isSuccessMsg = false;
  textSucessMsg = 'Datos actualizados!!!';
  constructor(private route: ActivatedRoute, public service: TaskService) {}

  ngOnInit(): void {
    let id: number = 0;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });
    this.service.getTaskItem(id).subscribe((task) => {
      this.task = task;
    });
  }

  saveTask(task: Task) {
    if (task.id !== undefined) {
      this.service.updateTaskItem(task.id, task).subscribe((res) => {
        this.isSuccessMsg = true;
        setTimeout(() => {
          this.isSuccessMsg = false;
        }, 3000);
      });
    }
  }
}
