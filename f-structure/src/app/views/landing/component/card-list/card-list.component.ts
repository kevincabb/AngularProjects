import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  items: any[] = ['item 1', 'item2', 'item3', 'item4', 'item5'];

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  addToCard(){
    this.cardService.addToCard();
  }
}
