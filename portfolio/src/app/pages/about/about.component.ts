import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
trash:Student[] = [
  {
    fName: 'Jon',
    lName: 'Stewart',
    sName: 'JonStewart',
    pNumber: 123445
  },
  {
    fName: 'Kevin',
    lName: 'Caballero',
    sName: 'cab',
    pNumber: 234556
  }
];
  constructor() { }

  ngOnInit() {
  }

}
