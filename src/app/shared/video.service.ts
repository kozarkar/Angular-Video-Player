import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  // local db call :  http://localhost:3000/content
  // hosted db call : https://my-json-server.typicode.com/kozarkar/Angular-Video-Player/content

  getIndustryContent(){
    return this.http.get("https://my-json-server.typicode.com/kozarkar/Angular-Video-Player/content?type=industry");
  }
  
  getEdtechContent(){
    return this.http.get("https://my-json-server.typicode.com/kozarkar/Angular-Video-Player/content?type=edtech");
  }
}

