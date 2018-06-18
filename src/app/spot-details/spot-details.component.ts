import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { TWSpotService } from './../service/twspot.service';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.component.html',
  styleUrls: ['./spot-details.component.css']
})
export class SpotDetailsComponent implements OnInit {

  spot: any;
  bready: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private spotservice: TWSpotService) {
    }

  ngOnInit() {
    this.bready = false;
    this.route.paramMap
      .subscribe(params => {
        this.spotservice.getSpot(params.get('id'))
          .then((data: any) => {
            this.spot = data[0];
            console.log(data);
            this.bready = true;
          });
      });
  }
  getClass(id) {
    return this.spotservice.getSpotClass().get(id);
  }
}
