import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sStudent: Student;
  constructor() { }

  ngOnInit() {
  }
  
  onSelection(person: Student){
    this.sStudent = person;
  }
}
