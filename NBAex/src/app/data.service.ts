import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //API URL for station list
  stationURL = 'https://api-nba-v1.p.rapidapi.com/games/date/';
  dateUrl;
  stationSheet;
  myDate = new Date();
  localYr;
  localMonth;
  localDay;
  utcStr;

  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      'x-rapidapi-key': '88224e13f6msh97607e9ef0ce201p12c351jsnf1f943c73d2b'
    })
  };

  constructor( private http: HttpClient, private datePipe: DatePipe) {
    this.utcStr = this.myDate.toUTCString();
    this.localYr = this.utcStr[12] + this.utcStr[13] + this.utcStr[14] + this.utcStr[15];
    this.localMonth = this.datePipe.transform(this.myDate, 'MM');
    this.localDay = this.utcStr[5] + this.utcStr[6];
    this.dateUrl = this.localYr + '-' + this.localMonth + '-' + this.localDay;

    this.getData();
  }


  // //function to grab the station list AND specified station schedule
  getData() {
    // http request for JSON data
    this.stationSheet = this.http.get(this.stationURL + this.dateUrl, this.httpOptions);

    // stream station data to stops variable
    this.stationSheet.subscribe(x => {
      console.log(x);
    });
  }

}

