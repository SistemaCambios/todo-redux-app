import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtroValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarCompletado } from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  estadoInicial : filtroValidos = 'todos';
  filtros : filtroValidos[] = ['todos','completados','pendientes'];
  faltantes : number;
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    // this.store.select('filtro').subscribe(estado => this.estadoInicial = estado)
     this.store.subscribe( store => {
     this.estadoInicial = store.filtro;
     this.faltantes = store.todos.filter(todo => !todo.completado).length
     })
  }

  cambioEstado(valor : filtroValidos) {
    this.store.dispatch(setFiltro({ filtro : valor }));
  }

  borrarCompletado() {
    this.store.dispatch(limpiarCompletado());
  }
}
