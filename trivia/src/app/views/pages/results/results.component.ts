import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  score: number;
  correct: number;
  totalQ= 20;
  percent= ((this.correct/this.totalQ) * 100);
  constructor(private dservice: DataService) { }

  ngOnInit() {
    this.dservice.$score.subscribe(score=> {
      this.score = score;
    });
    this.dservice.$correct.subscribe(correct=> {
      this.score = correct;
    });
    this.score = this.dservice.getScore();
    this.correct = this.dservice.getCorrect();
    console.log(this.score);
    console.log(this.correct);
  }


}
