import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

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

  todos = [];

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.todoService.getAllTodos('test').subscribe(
      response => this.todos = response
    );
  }

}
