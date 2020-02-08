import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../interfaces/items';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: items[], term: string): items[] {
    if(term === undefined || term === "all"){
      return products;
    }

    return products.filter(function(product){
      return product.type.includes(term);
    });
  }

}
