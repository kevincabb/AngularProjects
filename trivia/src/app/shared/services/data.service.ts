import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  difficulty: string = "EASY";
  score: number = 0;
  correct: number = 0;
  questions: Question[] = [
    {
      "q": "How many NBA teams are currently in the NBA?",
      "a1": "20",
      "a2": "30",
      "a3": "25",
      "a4": "15",
      "correct": "30"
    },
    {
      "q": "How many player are on each team roster?",
      "a1": "20",
      "a2": "10",
      "a3": "8",
      "a4": "15",
      "correct": "15"
    },
    {
      "q": "How many NBA teams are currently located in California?",
      "a1": "1",
      "a2": "2",
      "a3": "3",
      "a4": "5",
      "correct": "3"
    },
    {
      "q": "What is the name of the championship trophy?",
      "a1": "MICHAEL O' BRIAN",
      "a2": "LARRY O' BRIAN",
      "a3": "CHAMPION",
      "a4": "MAGIC",
      "correct": "LARRY O' BRIAN"
    },
    {
      "q": "Finish this team name: Sacramento ____.",
      "a1": "QUEENS",
      "a2": "HORNETS",
      "a3": "JOKERS",
      "a4": "KINGS",
      "correct": "KINGS"
    },
    {
      "q": "How many Championship did Michael Jordan win?",
      "a1": "11",
      "a2": "6",
      "a3": "3",
      "a4": "5",
      "correct": "6"
    },
    {
      "q": "Which shooting guard is mostly compared with Michael Jordan?",
      "a1": "DWAYNE WADE",
      "a2": "ZACH LAVINE",
      "a3": "LEBRON JAMES",
      "a4": "KOBE BRYANT",
      "correct": "KOBE BRYANT"
    },
    {
      "q": "Tim Duncan played for which franchise?",
      "a1": "LA LAKERS",
      "a2": "SAN ANTONIO SPURS",
      "a3": "HOUSTON ROCKETS",
      "a4": "ORLANDO MAGICS",
      "correct": "SAN ANTONIO SPURS"
    },
    {
      "q": "Who is the current all-time leader in 3 pointers?",
      "a1": "RAY ALLEN",
      "a2": "REGGIE MILLER",
      "a3": "STEPHEN CURRY",
      "a4": "JASON TERRY",
      "correct": "RAY ALLEN"
    },
    {
      "q": "Which point guard is the all-time leader in assists?",
      "a1": "BARON DAVIS",
      "a2": "DERRICK ROSE",
      "a3": "CHRIS PAUL",
      "a4": "JOHN STOCKTON",
      "correct": "JOHN STOCKTON"
    },
    {
      "q": "What team drafted Lebron James in 2003?",
      "a1": "MIAMI HEAT",
      "a2": "LA LAKERS",
      "a3": "CLEVELAND CAVALIERS",
      "a4": "CHICAGO BULLS",
      "correct": "CLEVELAND CAVALIERS"
    },
    {
      "q": "How many championships has Lebron James won?",
      "a1": "6",
      "a2": "1",
      "a3": "5",
      "a4": "3",
      "correct": "3"
    },
    {
      "q": "What year did Dwayne Wade and Lebron James get drafted?",
      "a1": "2001",
      "a2": "2008",
      "a3": "2003",
      "a4": "1999",
      "correct": "2003"
    },
    {
      "q": "How many championships did the LA Lakers win in the 2000's?",
      "a1": "8",
      "a2": "4",
      "a3": "2",
      "a4": "5",
      "correct": "5"
    },
    {
      "q": "What year did Kobe Bryant retire?",
      "a1": "2010",
      "a2": "2013",
      "a3": "2014",
      "a4": "2016",
      "correct": "2016"
    },
    {
      "q": "Who is the Youngest Most Valuable Player in NBA history?",
      "a1": "KOBE BRYANT",
      "a2": "STEPHEN CURRY",
      "a3": "LEBRON JAMES",
      "a4": "DERRICK ROSE",
      "correct": "DERRICK ROSE"
    },
    {
      "q": "What city did the Golden State Warriors move to in 2019?",
      "a1": "BOSTON",
      "a2": "LA",
      "a3": "DALLAS",
      "a4": "SAN FRANCISCO",
      "correct": "SAN FRANCISCO"
    },
    {
      "q": "How many Most Valuable Player awards does Stephen Curry have?",
      "a1": "1",
      "a2": "2",
      "a3": "3",
      "a4": "0",
      "correct": "2"
    },
    {
      "q": "How many NBA teams are located in Texas?",
      "a1": "3",
      "a2": "2",
      "a3": "1",
      "a4": "0",
      "correct": "3"
    },
    {
      "q": "How many NBA teams are located in New York?",
      "a1": "1",
      "a2": "2",
      "a3": "3",
      "a4": "6",
      "correct": "2"
    },
    {
      "q": "How many games are played in the regular season?",
      "a1": "160",
      "a2": "60",
      "a3": "82",
      "a4": "52",
      "correct": "82"
    },
    {
      "q": "How much points are Free-throw shots worth?",
      "a1": "3",
      "a2": "2",
      "a3": "4",
      "a4": "1",
      "correct": "1"
    },
    {
      "q": "Which coach won championships with both Michael Jordan and Kobe Bryant?",
      "a1": "GREG POPAVICH",
      "a2": "RICK ADELMAN",
      "a3": "JERRY SLOAN",
      "a4": "PHIL JACKSON",
      "correct": "PHIL JACKSON"
    },
    {
      "q": "What is Chicago's mascot?",
      "a1": "HORNETS",
      "a2": "BOBCATS",
      "a3": "ROCKETS",
      "a4": "BULLS",
      "correct": "BULLS"
    },
    {
      "q": "How many players get selected to the all-star team?",
      "a1": "30",
      "a2": "20",
      "a3": "24",
      "a4": "12",
      "correct": "24"
    },
    {
      "q": "What are the LA Lakers team colors?",
      "a1": "PURPLE & GOLD",
      "a2": "RED",
      "a3": "BLACK",
      "a4": "WHITE & PINK",
      "correct": "PURPLE & GOLD"
    },
    {
      "q": "How many points are technical free-throw shots worth?",
      "a1": "1",
      "a2": "2",
      "a3": "3",
      "a4": "0",
      "correct": "1"
    },
    {
      "q": "How many positions are there in basketball?",
      "a1": "4",
      "a2": "52",
      "a3": "10",
      "a4": "5",
      "correct": "5"
    },
    {
      "q": "Which one of these is NOT a position in basketball?",
      "a1": "POINT GUARD",
      "a2": "RUNNINGBACK",
      "a3": "SMALL FORWARD",
      "a4": "CENTER",
      "correct": "RUNNINGBACK"
    },
    {
      "q": "Michael Jordan played for which team?",
      "a1": "LA LAKERS",
      "a2": "CHICAGO BULLS",
      "a3": "SACRAMENTO KINGS",
      "a4": "NEW YORK KNICKS",
      "correct": "CHICAGO BULLS"
    },
    {
      "q": "What year did Kobe Bryant get drafted?",
      "a1": "1998",
      "a2": "1990",
      "a3": "1996",
      "a4": "1995",
      "correct": "1996"
    },
    {
      "q": "How many Championships has Tim Duncan won?",
      "a1": "1",
      "a2": "5",
      "a3": "0",
      "a4": "6",
      "correct": "5"
    },
    {
      "q": "How many fouls can a player accrue before fouling out?",
      "a1": "5",
      "a2": "8",
      "a3": "4",
      "a4": "6",
      "correct": "6"
    },
    {
      "q": "What is NOT considered a turnover?",
      "a1": "ASSIST",
      "a2": "TRAVELING",
      "a3": "OFFENSIVE FOUL",
      "a4": "3 SECONDS IN THE KEY",
      "correct": "ASSIST"
    },
    {
      "q": "How many technical fouls can a player/coach acrrue before being ejected?",
      "a1": "6",
      "a2": "1",
      "a3": "2",
      "a4": "3",
      "correct": "2"
    },
    {
      "q": "What are Chicago team colors?",
      "a1": "BLACK & YELLOW",
      "a2": "BLACK & RED",
      "a3": "WHITE",
      "a4": "BLUE & RED",
      "correct": "BLACK & RED"
    },
    {
      "q": "Which team was located in seattle before being moved?",
      "a1": "BULLS",
      "a2": "KINGS",
      "a3": "SONICS",
      "a4": "SPURS",
      "correct": "SONICS"
    },
    {
      "q": "Which city did the Sonics relocate to?",
      "a1": "LAS VEGAS",
      "a2": "OKLAHOMA CITY",
      "a3": "AUSTIN",
      "a4": "STOCKTON",
      "correct": "OKLAHOMA CITY"
    },
    {
      "q": "Which team is no longer in the NBA?",
      "a1": "SONICS",
      "a2": "KINGS",
      "a3": "SPURS",
      "a4": "MAGICS",
      "correct": "SONICS"
    },
    {
      "q": "How many seconds in a shot clock?",
      "a1": "12",
      "a2": "24",
      "a3": "15",
      "a4": "30",
      "correct": "24"
    },
    {
      "q": "Which city does NOT have an NBA team?",
      "a1": "LAS VEGAS",
      "a2": "SACRAMENTO",
      "a3": "ORLANDO",
      "a4": "LA",
      "correct": "LAS VEGAS"
    },
    {
      "q": "How many teams has Lebron James played for?",
      "a1": "1",
      "a2": "4",
      "a3": "7",
      "a4": "3",
      "correct": "3"
    },
    {
      "q": "Who was Scottie Pippens most know teammate?",
      "a1": "STEVE KERR",
      "a2": "RASHEED WALLACE",
      "a3": "LEBRON JAMES",
      "a4": "MICHAEL JORDAN",
      "correct": "MICHAEL JORDAN"
    },
    {
      "q": "Who was considered as Michael Jordan's sidekick?",
      "a1": "HORACE GRANT",
      "a2": "BILL CARTWRIGHT",
      "a3": "SCOTTIE PIPPEN",
      "a4": "KOBE BRYANT",
      "correct": "SCOTTIE PIPPEN"
    },
    {
      "q": "What college did Michael Jordan attend?",
      "a1": "DUKE",
      "a2": "UCLA",
      "a3": "NORTH CAROLINA",
      "a4": "USC",
      "correct": "NORTH CAROLINA"
    },
    {
      "q": "What college did Lebron attend?",
      "a1": "USC",
      "a2": "UCLA",
      "a3": "DUKE",
      "a4": "NONE OF THE ABOVE",
      "correct": "NONE OF THE ABOVE"
    },
    {
      "q": "What college did Kobe Bryant attend?",
      "a1": "USC",
      "a2": "UCLA",
      "a3": "DUKE",
      "a4": "NONE OF THE ABOVE",
      "correct": "NONE OF THE ABOVE"
    },
    {
      "q": "How old was Lebron when he was drafted?",
      "a1": "20",
      "a2": "21",
      "a3": "18",
      "a4": "19",
      "correct": "18"
    },
    {
      "q": "What team does Stephen Curry play for?",
      "a1": "GOLDEN STATE WARRIORS",
      "a2": "NEW YORK KNICKS",
      "a3": "CLEVELAND CAVALIERS",
      "a4": "HOUSTON ROCKETS",
      "correct": "GOLDEN STATE WARRIORS"
    },
    {
      "q": "What are Golden State Warriors team colors?",
      "a1": "BLUE & GOLD",
      "a2": "GREEN & YELLOW",
      "a3": "PURPLE & GOLD",
      "a4": "PURPLE & BLACK",
      "correct": "BLUE & GOLD"
    }
  ];

  $difficulty = new BehaviorSubject<string>(this.difficulty);
  $score = new BehaviorSubject<number>(this.score);
  $correct = new BehaviorSubject<number>(this.correct);

  constructor() { }

  getQuestions(){
    return this.questions;
  }
  getDifficulty(){
    return this.difficulty;
  }

  getScore(){
    return this.score;
  }
  getCorrect(){
    return this.correct;
  }

  changeDiff(value){
    this.difficulty = value.innerHTML;
    this.$difficulty.next(this.difficulty);
  }

  changeScore(value, number){
    this.score = value;
    this.correct = number;
    this.$score.next(this.score);
    this.$correct.next(this.correct);
  }
}
