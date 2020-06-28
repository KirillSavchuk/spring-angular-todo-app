import { API_URL } from './../../app.constants';
import { Todo } from './../../list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTodos(username: string): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  public getTodo(username: string, id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  public createTodo(username: string, todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }

  public updateTodo(username: string, id: number, todo: Todo): Observable<Todo>  {
    return this.httpClient.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  public deleteTodo(username: string, id: number): Observable<Todo>  {
    return this.httpClient.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

}
