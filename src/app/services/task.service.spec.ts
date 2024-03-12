import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService],
    });
    service = TestBed.inject(TaskService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all task items', () => {
    const mockTaskItems = [{ id: 1, title: 'Test Task', isCompleted: false }];

    service.getTaskItems().subscribe((taskItems) => {
      expect(taskItems.length).toBe(1);
      expect(taskItems).toEqual(mockTaskItems);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${service.apiUrl}`,
    });

    req.flush(mockTaskItems);
  });

  it('should retrieve a task item by id', () => {
    const testTaskItem = { id: 1, title: 'Test Task', isCompleted: false };

    service.getTaskItem(1).subscribe((taskItem) => {
      expect(taskItem).toEqual(testTaskItem);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${service.apiUrl}/1`,
    });

    req.flush(testTaskItem);
  });

  it('should create a task item', () => {
    const newTaskItem = { title: 'New Task', isCompleted: false };

    service.createTaskItem(newTaskItem).subscribe((taskItem) => {
      expect(taskItem.title).toEqual(newTaskItem.title);
      expect(taskItem.isCompleted).toEqual(newTaskItem.isCompleted);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: service.apiUrl,
    });

    req.flush({
      id: 1,
      ...newTaskItem,
    });
  });

  it('should update a task item', () => {
    const updatedTaskItem = { id: 1, title: 'Updated Task', isCompleted: true };

    service
      .updateTaskItem(updatedTaskItem.id, updatedTaskItem)
      .subscribe((taskItem) => {
        expect(taskItem).toEqual(updatedTaskItem);
      });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${service.apiUrl}/1`,
    });

    req.flush(updatedTaskItem);
  });

  it('should delete a task item', () => {
    service.deleteTaskItem(1).subscribe((response) => {
      expect(response).toBeNull(); // Often, delete operations might not return any content
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${service.apiUrl}/1`,
    });

    req.flush(null); // Simulating a no-content response
  });
});
