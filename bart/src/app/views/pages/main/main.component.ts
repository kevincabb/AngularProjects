import { Component, OnInit } from '@angular/core';
import { BartService } from 'src/app/bart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  city = [];
  apiURL ='http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=Z2R9-54Q2-9SRT-DWE9&json=y';
  constructor(private dataS: BartService) { }

  ngOnInit() {
    this.dataS.getURL(this.apiURL).subscribe(
      x => {
        this.city = x;
      }
    )
  };

}
