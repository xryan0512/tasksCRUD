import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public apiUrl = 'http://localhost:5264/api/TaskItems';

  constructor(private http: HttpClient) {}

  getTaskItems(pageNumber = 1, pageSize = 5): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  getTaskItem(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  createTaskItem(taskItem: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, taskItem);
  }

  updateTaskItem(id: number, taskItem: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, taskItem);
  }

  deleteTaskItem(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${id}`);
  }
}
