import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherService} from "./Weather/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


//
//     selecttasks = 'тут должны быть погодные явления';
//   // private data: any;
//   // private myArrStr: string;
//   // private myArrStr: Array <any>;
//   details: Array<any>;
//
//    constructor(private http: HttpClient) {
//   }
//
//   ngOnInit() {
//     this.http.get('http://localhost:8080/Weather-1.0-SNAPSHOT/api/weatherAll').subscribe(data => {
//       var details;
//       details = data;
//       // console.log(data);
//       // this.selecttasks = this.http.get()
//
//     });
//
//     // const myArrStr = JSON.stringify(this.http.get('http://localhost:8080/Weather-1.0-SNAPSHOT/api/weatherAll').subscribe(data => {
//     //   console.log(data);
//     // }));
//
//
//    //  for (int i = 1; i <= columnCount; ++i) {
//    // }
//
//
//
//     // const myArrStr = JSON.stringify(this.data)
//     // JSON.parse(myArrStr, (key, value) => {
//     //   // if (typeof value === 'string') {
//     //   //   return value.toUpperCase();
//     //   // }
//     //   return value;
//     // });
//     //
//     // console.log(myArrStr);
//
//   }
// }

// export class Weather
// {
//   constructor(id:number, name:string) {
//     this.id=id;
//     this.name=name;
//   }
//
//   id:number;
//   name:string;
// }


  Weather: Array<any>;

  constructor(private weatherALL: WeatherService) { }

  ngOnInit() {
    this.weatherALL.getweatherALL().subscribe(data => {
      this.Weather = data;
      console.log(this.Weather);
      // for (const detail of this.details) {
      //   this.giphyService.get(detail.name).subscribe(url => detail.giphyUrl = url);
      // }
    });
  }

}
