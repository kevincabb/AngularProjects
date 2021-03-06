import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //API URL for station list
  stationURL = 'https://api.mysportsfeeds.com/v2.1/pull/nba/2019-2020-regular/date/';
  dateUrl;
  typeUrl = '/games.json';
  stationSheet;
  // myDate = new Date();
  // localYr;
  // localMonth;
  // localDay;
  // utcStr;

  statsUrl = 'https://api.mysportsfeeds.com/v2.1/pull/nba/2019-2020-regular/games/';
  gameIdUrl = '53497';
  typeU = '/boxscore.json';
  statSheet;

  
  httpOptions = {
    headers: new HttpHeaders({
      // 'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      // 'x-rapidapi-key': '88224e13f6msh97607e9ef0ce201p12c351jsnf1f943c73d2b'
      'Authorization': 'Basic ' + btoa('ab0eac51-ac2c-41f8-8dad-15dc5c:MYSPORTSFEEDS')
    })
  };

  constructor( private http: HttpClient, private datePipe: DatePipe) {
    // this.utcStr = this.myDate.toUTCString();
    // this.localYr = this.utcStr[12] + this.utcStr[13] + this.utcStr[14] + this.utcStr[15];
    // this.localMonth = this.datePipe.transform(this.myDate, 'MM');
    // this.localDay = this.utcStr[5] + this.utcStr[6];
    // this.dateUrl = this.localYr + '-' + this.localMonth + '-' + this.localDay;

    //format dateUrl
    this.dateUrl = moment('12-25-2019').format('YYYYMMDD');
    //this.dateUrl = moment('2020-02-22T20:30:00.000Z').format('LT')
    console.log(this.dateUrl);



    this.getData();
    this.getStats();
  }


  // //function to grab the station list AND specified station schedule
  getData() {
    // http request for JSON data
    this.stationSheet = this.http.get(this.stationURL + this.dateUrl + this.typeUrl , this.httpOptions);

    // stream station data to stops variable
    this.stationSheet.subscribe(x => {
      console.log(x);
    });
  }
  getStats() {
    // http request for JSON data
    this.statSheet = this.http.get(this.statsUrl + this.gameIdUrl + this.typeU , this.httpOptions);

    // stream station data to stops variable
    this.statSheet.subscribe(x => {
      console.log(x);
    });
  }

}

