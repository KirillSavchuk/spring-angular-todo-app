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

  todos = this.generateTodos();

  constructor() { }

  ngOnInit(): void {
  }

  private generateTodos(): any[] {
    const todos = Array<Todo>();
    for (let i = 1; i <= 5; i++) {
      todos.push(new Todo(i, `Todo #${i}`, new Date(), false));
    }
    return todos;
  }

}
