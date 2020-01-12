import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../interfaces/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() sStudent: Student;
  constructor() {
  }

  ngOnInit() {
  }

}
