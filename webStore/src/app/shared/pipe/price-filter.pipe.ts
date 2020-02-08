import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../interfaces/items';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: items[], term: string): items[] {
    if(term === undefined){
      return products
    }

    if(term === "high"){
      return products.sort((a,b)=> b.price-a.price);
    } 
    else if(term === "low"){
      return products.sort((a,b)=> a.price-b.price);
    }
  }

}
