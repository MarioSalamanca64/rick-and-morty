import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interface/personajes.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  //filtro para seccionar la paginacion y solo muestre 6
  transform(persoanjes: Result[], page: number = 0): Result[] {
  
    return persoanjes.slice(page, page + 6);
  }

}
