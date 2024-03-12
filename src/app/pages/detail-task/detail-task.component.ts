import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css'],
})
export class DetailTaskComponent implements OnInit {
  task!: Task;

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
}
