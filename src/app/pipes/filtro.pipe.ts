import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos/models/todo.model';
import { filtroValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroValidos'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtroValido: filtroValidos): any {
    switch (filtroValido) {
      case 'completados':
        return value.filter(todo => todo.completado)
      case 'pendientes':
        return value.filter(todo => !todo.completado)
      default:
        return value;
    }
  }

}
