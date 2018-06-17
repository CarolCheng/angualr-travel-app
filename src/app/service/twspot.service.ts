import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TWSpotService {

  //private url = 'http://gis.taiwan.net.tw/XMLReleaseALL_public/activity_C_f.json';
  private headers = new Headers(
    {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
  );
  private url = './assets/activity_C_f.json';
  constructor(private http: Http) { }

  get(): Promise<any> {
    return this.http.get(this.url, {headers: this.headers})
     .toPromise()
     .then(response => response.json().XML_Head.Infos);
  }
  getCities(): Promise<any> {
    return this.http.get('./assets/cities.json', {headers: this.headers})
     .toPromise()
     .then(response => response.json());
  }
}
