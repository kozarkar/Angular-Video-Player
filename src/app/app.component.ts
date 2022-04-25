import { VideoService } from './shared/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'video-player';
  videoList:any = [];
  showMain:boolean = true;
  single:any;

  constructor(private ser: VideoService) {}

  
  ngOnInit(): void {
    this.getContent();
    
  }

  getContent(){

    this.ser.getContent()
    .subscribe(res=>{
      this.videoList = res;
      
    })
  }
  
  singleView(id: any){
    this.showMain = false;
    this.single = this.videoList[id] 
  }
}
