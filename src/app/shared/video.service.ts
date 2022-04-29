import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }

  getIndustryContent(){
    return this.http.get("http://localhost:3000/content?type=industry");
  }
  
  getEdtechContent(){
    return this.http.get("http://localhost:3000/content?type=edtech");
  }
}

