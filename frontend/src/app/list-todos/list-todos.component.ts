import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Array<Todo>;

  message: string;

  constructor(
    private router: Router,
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  private refreshTodos(): void {
    this.todoService.getAllTodos('test').subscribe(
      response => this.todos = response,
      error => this.todos = []
    );
  }

  public addTodo(): void {
    this.router.navigate([`todos`, 0]);
  }

  public updateTodo(id: number): void {
    this.router.navigate([`todos`, id]);
  }

  public deleteTodo(id: number): void {
    this.todoService.deleteTodo('test', id).subscribe(
      response => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.message = `Succesfully deleted ${id} Todo!`;
      }
    );
  }

}
