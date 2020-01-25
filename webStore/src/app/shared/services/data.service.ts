import { Injectable } from '@angular/core';
import { Clothes } from '../interfaces/clothes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  clothes: Clothes[] = [
    {
      img: "assest/asdgsg",
      name: "hoodie",
      price: 22
    }
  ]
  constructor() { }
}
