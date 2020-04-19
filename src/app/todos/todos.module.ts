import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPagesComponent } from './todo-pages/todo-pages.component';

import { ReactiveFormsModule } from '@angular/forms'
import { FiltroPipe } from '../pipes/filtro.pipe';



@NgModule({
  declarations: [TodoAddComponent, 
    TodoFooterComponent, 
    TodoItemComponent, 
    TodoListComponent, 
    TodoPagesComponent,
    FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [TodoPagesComponent]
})



export class TodosModule { }
