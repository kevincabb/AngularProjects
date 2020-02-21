import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  difficulty: string;
  constructor(private dservice: DataService) { }

  ngOnInit() {
    this.dservice.$difficulty.subscribe(difficulty=> {
      this.difficulty = difficulty;
    });
  }

  changeDiff(value){
    this.dservice.changeDiff(value);
  }
}
