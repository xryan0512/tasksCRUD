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

  getTaskItems(pageNumber = 1, pageSize = 5): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  getTaskItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTaskItem(taskItem: any): Observable<any> {
    return this.http.post(this.apiUrl, taskItem);
  }

  updateTaskItem(id: number, taskItem: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, taskItem);
  }

  deleteTaskItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
