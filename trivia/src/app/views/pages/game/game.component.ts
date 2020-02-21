import { Component, OnInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Question } from 'src/app/shared/interfaces/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  questions: Question[] = [];
  difficulty: string;
  twentyQ = [];
  qNum = 0;
  correctAns = 0;
  triviaTimer = 15;
  time = setInterval(this.checkTime, 1000);
  scoreCount = 0;
  count = 0;
  showResult = false;
  cheat = "Off"

  aDisabled = false;
  bDisabled = false;
  cDisabled = false;
  dDisabled = false;
  nDisabled = false;

  
  

  constructor(private dservice: DataService, private element: ElementRef) {
  }

  ngOnInit(){
    this.questions = this.dservice.getQuestions();
    this.difficulty = this.dservice.getDifficulty();
    this.twentyQuestions();
    this.setTriviaTimer();
    this.startCountDown();
  }

  twentyQuestions() {
    let totalQuestions = 20;
    for (let i = 0; i < totalQuestions; i++) {
      let qArr = this.questions.map(function (item) { return item.q });
      let isDuplicate = qArr.some(function (item, idx) {
        return qArr.indexOf(item) !== idx;
      });
      let ranNum = Math.floor(Math.random() * this.questions.length);
      if (this.twentyQ.length < 0 || !isDuplicate) {
        this.twentyQ.push(this.questions[ranNum]);
      }
    }
    console.log(this.questions);
    console.log(this.twentyQ);
  }


  setTriviaTimer() {
    if (this.difficulty == "easy") {
      this.triviaTimer = 15;
    }
    else if (this.difficulty == "medium") {
      this.triviaTimer = 10;
    }
    else {
      this.triviaTimer = 5;
    }
  }

  startCountDown(){
    if(this.triviaTimer && this.triviaTimer >0){
      this.doCountDown();
    }
  }

  doCountDown(){
    setInterval(()=>{
      this.triviaTimer = this.triviaTimer -1;
      this.checkTime();
    }, 1000);
  }
  //function to set timer
  checkTime() {
    if (this.triviaTimer < 0) {
      this.aDisabled = true;
      this.bDisabled = true;
      this.cDisabled = true;
      this.dDisabled = true;
      this.nDisabled = false;
    } 
  }

  stop(clear) {
    clearInterval(clear);
  }

  nextQ() {
    this.stop(this.time);

    //If timer seconds is LESS/EQUAL to 0, then add -3 or -1 to score
    if (this.triviaTimer <= 0) {

      //If bonus is currently active, score accordingly
      if (this.count > 2) {
        this.scoreCount -= 3;
        this.cheat = "Off";
      }
      else {
        this.scoreCount -= 1
      }

      //Re-set bonus counter after Incorrect answer is given
      this.count = 0;
    }

    //Enable Answer buttons for next set, also Disable Next button for next set
    this.aDisabled = false;
    this.bDisabled = false;
    this.cDisabled = false;
    this.dDisabled = false;
    this.nDisabled = true;

    if(this.qNum < 20){
      this.qNum++;
    }

    //Re-set time for the timer, AND re-set setInterval so timer will count down on next set
    this.setTriviaTimer();
    this.time = setInterval(this.checkTime, 1000);

    if(this.qNum >= 19){
      this.showResult = true;
    }
  }

  checkAnswer(answer){
    this.stop(this.time);

    console.log(answer);
    console.log(this.twentyQ[this.qNum].correct);
    console.log(this.qNum);
    if(answer === this.twentyQ[this.qNum].correct){
      answer = "CORRECT";
      this.correctAns += 1;
      this.aDisabled = true;
      this.bDisabled = true;
      this.cDisabled = true;
      this.dDisabled = true;
      this.nDisabled = false;

      if(this.count > 2) {
        this.scoreCount += 3;
        this.count = 0;
      } else {
        this.scoreCount += 1;
        this.count += 1;
      }

      if(this.count === 3) {
        this.cheat = "On";
      } else {
        this.cheat = "Off";
      }
    } else {
      answer = "INCORRECT";
      this.aDisabled = true;
      this.bDisabled = true;
      this.cDisabled = true;
      this.dDisabled = true;
      this.nDisabled = false;

        if(this.count > 2){
          this.scoreCount -=3;
          this.cheat = "Off";
        } else {
          this.scoreCount -= 1;
        }

        this.count = 0;
    }
  }

}


