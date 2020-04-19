import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletado } from './todo.action';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Conquistar a una chica'),
  new Todo('Estudiar mas'),
  new Todo('Ser mas audaz'),
  new Todo('Controlar las emociones')
];

const _todoReducir = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {

    return state.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completado: !item.completado
        }
      } else {
        return item;
      }
    });

  }),

  on(editar, (state, { id, texto }) => {
    return state.map(item => {
      if (item.id === id) {
        return {
          ...item,
          texto: texto
        }
      } else {
        return item;
      }
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter(item => item.id !== id)
  }),

  on(toggleAll, (state, { completado }) => {

    return state.map(item => {
        return {
          ...item,
          completado: completado
        }
    });
  }),
  on( limpiarCompletado, (state)=> {
    return state.filter(item => !item.completado)
  })
);

export function todoReducer(state, action) {
  return _todoReducir(state, action);
}