import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss']
})
export class CardCountComponent implements OnInit {
  private cardCount = 0;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.$cardCount.subscribe(count => {
      this.cardCount = count;
    });
  }

}
