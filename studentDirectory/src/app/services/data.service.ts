import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;
  private studentData: Student[] = [
    {
      fName: 'Kevin',
      lName: 'Caballero',
      sName: 'cab',
      hobbies: 'nothing',
      nName: 'cabfare'
    },
    {
      fName: 'jon',
      lName: 'stewart',
      sName: 'i forget',
      hobbies: 'games',
      nName: 'jon < h'
    },
    {
      fName: 'frankie',
      lName: 'something',
      sName: 'frannnnnkie',
      hobbies: 'idk',
      nName: 'frank'
    },
    {
      fName: 'zach',
      lName: 'uhh',
      sName: 'zach attack',
      hobbies: 'vaping',
      nName: 'zach attack'
    },
    {
      fName: 'carson',
      lName: 'who knows',
      sName: 'cool guy',
      hobbies: 'stuff',
      nName: 'whatever'
    },
  ];
  constructor() {
  }

  getStudent(): Student[]{
    return this.studentData;
  }

  setCardData(person: Student){
    //save the students data 
    this.cardData = person;
  }

  getCardData(): Student{
    //Retrieve student data card
    return this.cardData;
  }
}
