import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    alert("it works!");
  }

  switch(v){
    this.flip = !this.flip;
    if(this.flip){
      v.innerText= 'Off';
    } else {
      v.innerText= 'On';
    }
  }

}
