import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  actualPage: number = 1;
  disablePreviousBtn = false;
  disableNextBtn = false;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getTaskItems();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTaskItem(id).subscribe((res) => {
      this.getTaskItems();
    });
  }

  gotoDetails(id: number): void {
    this.router.navigate(['/detail/', id]);
  }

  gotoUpdate(id: number): void {
    this.router.navigate(['/update/', id]);
  }

  getTaskItems(pageNumber = 1) {
    this.taskService.getTaskItems(pageNumber).subscribe((tasks) => {
      if (tasks.length > 0) {
        this.tasks = tasks;
        this.disableNextBtn = false;
        this.disablePreviousBtn = false;
      } else {
        this.actualPage--;
        this.disableNextBtn = true
      }
    });
  }

  nextPage() {
    this.actualPage++;
    this.getTaskItems(this.actualPage);
  }

  previusPage() {
    if (this.actualPage > 1) {
      this.actualPage--;
      this.getTaskItems(this.actualPage);
      this.disablePreviousBtn = false;
    }else{
      this.disablePreviousBtn = true;
    }
  }
}
