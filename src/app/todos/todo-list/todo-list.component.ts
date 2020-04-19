import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtroValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listaTodo : Todo[] = [];
  filtroActual : filtroValidos;
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state =>{       
      this.listaTodo = state.todos;
      this.filtroActual = state.filtro;
         
    });
  }

}
