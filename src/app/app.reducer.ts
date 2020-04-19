import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { filtroValidos } from './filtro/filtro.actions';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
    todos : Todo[],
    filtro : filtroValidos
}


export const appReducers : ActionReducerMap<AppState> = {
   todos : todoReducer , 
   filtro : filtroReducer
}