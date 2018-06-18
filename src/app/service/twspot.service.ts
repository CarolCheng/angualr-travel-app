import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TWSpotService {

  //private url = 'http://gis.taiwan.net.tw/XMLReleaseALL_public/activity_C_f.json';
  private headers = new Headers(
    { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
  );
  private url = './assets/activity_C_f.json';
  private promise: Promise<any>;
  spotclass =  new Map([
    ['1', '文化類'], ['2', '生態類'], ['3', '古蹟類'], ['4', '生態類'],
    ['5', '藝術類'], ['6', '小吃/特產類'], ['7', '國家公園類'], ['8', '國家風景區類'],
    ['9', '休閒農業類'], ['10', '溫泉類'], ['11', '自然風景類'], ['12', '遊憩類'],
    ['13', '體育健身類'], ['14', '觀光工廠類'], ['15', '都會公園類'], ['16', '森林遊樂區類'],
    ['13', '林場類'], ['18', '其他']
  ]);

  constructor(private http: Http) { }

  get(): Promise<any> {
    this.promise =  this.http.get(this.url, { headers: this.headers })
        .toPromise();
    return this.promise.then(response =>  response.json().XML_Head );
  }
  getCities(): Promise<any> {
    return this.http.get('./assets/cities.json', { headers: this.headers })
      .toPromise()
      .then(response => response.json());
  }
  getSpot(id): Promise<any> {
    if ( this.promise === undefined) {
      this.promise =  this.http.get(this.url, { headers: this.headers })
        .toPromise();
    }
    return this.promise.then(response =>  response.json().XML_Head.Infos.Info.filter( spot => spot.Id === id) );
  }
  getSpotClass() {
    return this.spotclass;
  }
}
