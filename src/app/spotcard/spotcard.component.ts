import { Component, OnInit, Input } from '@angular/core';
import { TWSpotService } from './../service/twspot.service';
import { Router } from '@angular/router';

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

  constructor(private twservice: TWSpotService,
    private router: Router) {
    this.startIndex = 0;
    this.endIndex = 10;
  }

  ngOnInit() {
    this.twservice.get()
      .then((data: any) => {
        console.log(data);
        this.spotlist = data.Infos.Info;
        this.spotcount = data.Infos.Info.length;
        this.spotshow = this.spotlist.slice(0, 10);
        //console.log(this.spotcount);
      });
  }
  onSwitch(event) {
    // console.log(event);
    this.startIndex = (event.pageIndex) * event.pageSize;
    this.endIndex = (event.pageIndex + 1) * event.pageSize;
    this.spotshow = this.spotlist.slice(this.startIndex, this.endIndex);
    // console.log(this.spotshow);
  }
  onRedirect(id) {
    this.router.navigate(['/spots', id]);
  }
  getClass(id) {
    return this.twservice.getSpotClass().get(id);
  }

}
