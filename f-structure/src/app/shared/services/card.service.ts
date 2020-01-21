import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardCount : number = 0;
  public $cardCount = new BehaviorSubject<number>(this.cardCount);

  constructor() { }

  addToCard(){
    this.cardCount++;
    this.$cardCount.next(this.cardCount);
  }

  resetCount() {
    this.cardCount = 0;
    this.$cardCount.next(this.cardCount);
  }
}
