import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  getIndustryContent(){
    return this.http.get("https://my-json-server.typicode.com/kozarkar/Angular-Video-Player/content?type=industry");
  }
  
  getEdtechContent(){
    return this.http.get("https://my-json-server.typicode.com/kozarkar/Angular-Video-Player/content?type=edtech");
  }
}

