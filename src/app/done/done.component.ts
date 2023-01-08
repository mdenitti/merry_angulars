import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {

  todos: any = [];
  todo: any;

  // instantiate todo service with constructor
  constructor(private todoService: TodoService) { }

undo(id: any) {
  this.todoService.undo(id);
  this.ngOnInit();
}

ngOnInit() {
  this.todoService.getTodos().then(
    result => {
      this.todos = result.filter((todo: { status: number; }) => todo.status === 1);
    }
  );
}

}
