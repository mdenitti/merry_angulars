import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  undo(id: any) {
    fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: 0})
    })
  }

  done(id: any) {
    fetch(this.url + '/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: 1})
    })
  }

  todos: any[] = []
  constructor() { }

  url: string = 'http://localhost:3000/todo';

  getTodos() {
    return fetch(this.url).then(res => res.json())
  }

  addTodo(newObj: { title: any; status: number; }) {
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
  }

  removeTodo (id: any) {
    fetch(this.url + '/' + id, {
      method: 'DELETE'
    })
  }


}
