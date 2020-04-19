import { createAction, props } from '@ngrx/store'

export type filtroValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set filtro ',
    props<{ filtro: filtroValidos }>()
);