import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent {
  todos: any = [];
  todo: any;

  // instantiate todo service with constructor
  constructor(private todoService: TodoService) { }

  done(id: any) {
    this.todoService.done(id);
    this.ngOnInit();

  }
  remove(id: any) {
    this.todoService.removeTodo(id);
    this.ngOnInit();
  }

  addTodo() {
    const newObj = { id: this.todos.length + 1, title: this.todo, status: 0 };
    this.todoService.addTodo(newObj);
    this.ngOnInit();
    this.todo = '';

  }

  // make ng on init method and fetch the data from the service
  ngOnInit() {
    this.todoService.getTodos().then(
      result => {
        this.todos = result.filter((todo: { status: number; }) => todo.status === 0);
      }
    );
  }

}
