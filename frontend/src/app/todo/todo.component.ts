import { ActivatedRoute } from '@angular/router';
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
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params[`username`];
    this.id = this.route.snapshot.params[`id`];

    this.todo = new Todo(1, '', new Date(), false);
    this.todoService.getTodo(this.username, this.id).subscribe(
      response => this.todo = response
    );
  }

  public saveTodo(): void {
    console.log("lol");
  }

}
