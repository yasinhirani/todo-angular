import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Array<any> = [];
  todoClear: any;

  createTodo(e: any){
    this.todos.push(e);
    console.log(e);
    localStorage.setItem('todos',JSON.stringify(this.todos));
    this.todoClear = "";
  }

  deleteTodo(e: any){
    const index = this.todos.indexOf(e);
    console.log(index);
    this.todos.splice(index, 1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  constructor() { 
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
    else{
      this.todos = [];
    }
   }

  ngOnInit(): void {
  }

}
