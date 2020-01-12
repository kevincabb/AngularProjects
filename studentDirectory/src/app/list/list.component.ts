import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() open= new EventEmitter();

  students: Student[] = [];
  constructor(private dataService: DataService) {
    this.students = dataService.getStudent();
   }
  ngOnInit() {}
  studentClicked(person:Student){
    //alert(person.fName)
    //this.dataService.setCardData(person);
    this.open.emit(person);
  }
}