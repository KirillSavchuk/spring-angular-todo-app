import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  username: string;
  id: number;

  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.username = 'test';
    this.id = Number(this.route.snapshot.params[`id`]);

    this.todo = new Todo(this.id, '', new Date(), false);

    if (this.todo.id !== 0) {
      this.todoService.getTodo(this.username, this.id).subscribe(
        response => this.todo = response
      );
    }
  }

  public saveTodo(): void {
    if (this.todo.id === 0) {
      this.todoService.createTodo(this.username, this.todo).subscribe(
        response => this.router.navigate([`todos`])
      );
    } else {
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        response => this.router.navigate([`todos`])
      );
    }
  }

}
