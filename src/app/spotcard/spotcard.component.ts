import { Component, OnInit, Input } from '@angular/core';
import { TWSpotService } from './../service/twspot.service';

@Component({
  selector: 'app-spotcard',
  templateUrl: './spotcard.component.html',
  styleUrls: ['./spotcard.component.css']
})
export class SpotCardComponent implements OnInit {

  @Input()
  breakpoint:number;
  spotlist: any;
  spotcount: number;
  startIndex: number;
  endIndex: number;
  spotshow: any;
  spotclass =  new Map([
    ['1', '文化類'], ['2', '生態類'], ['3', '古蹟類'], ['4', '生態類'],
    ['5', '藝術類'], ['6', '小吃/特產類'], ['7', '國家公園類'], ['8', '國家風景區類'],
    ['9', '休閒農業類'], ['10', '溫泉類'], ['11', '自然風景類'], ['12', '遊憩類'],
    ['13', '體育健身類'], ['14', '觀光工廠類'], ['15', '都會公園類'], ['16', '森林遊樂區類'],
    ['13', '林場類'], ['18', '其他']
  ]);

  constructor(private twservice: TWSpotService) {
    this.startIndex = 0;
    this.endIndex = 10;
  }

  ngOnInit() {
    this.twservice.get()
      .then((data: any) => {
        //console.log(data);
        this.spotlist = data.Info;
        this.spotcount = data.Info.length;
        this.spotshow = this.spotlist.slice(0, 10);
        //console.log(this.spotcount);
      });
  }
  onSwitch(event) {
    console.log(event);
    this.startIndex = (event.pageIndex) * event.pageSize;
    this.endIndex = (event.pageIndex + 1) * event.pageSize;
    this.spotshow = this.spotlist.slice(this.startIndex, this.endIndex);
    console.log(this.spotshow);

  }

}
