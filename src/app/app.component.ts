import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { TWSpotService } from './service/twspot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  cities: any;
  spotclass =  new Map([
    ['1', '文化類'], ['2', '生態類'], ['3', '古蹟類'], ['4', '生態類'],
    ['5', '藝術類'], ['6', '小吃/特產類'], ['7', '國家公園類'], ['8', '國家風景區類'],
    ['9', '休閒農業類'], ['10', '溫泉類'], ['11', '自然風景類'], ['12', '遊憩類'],
    ['13', '體育健身類'], ['14', '觀光工廠類'], ['15', '都會公園類'], ['16', '森林遊樂區類'],
    ['13', '林場類'], ['18', '其他']
  ]);
  constructor(private twservice: TWSpotService) {

  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.twservice.getCities()
    .then((temp: any) => {
      // console.log(temp.data);
      this.cities = temp.data;
    });
    console.log(this.spotclass.values);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }
  getClass(map){
    return Array.from(this.spotclass.keys());
  }
}
