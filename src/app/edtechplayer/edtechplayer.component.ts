import { Component, OnInit } from '@angular/core';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'app-edtechplayer',
  templateUrl: './edtechplayer.component.html',
  styleUrls: ['./edtechplayer.component.css']
})
export class EdtechplayerComponent implements OnInit {

  videoList:any = [];
  showMain:boolean = true;
  single:any;

  constructor(private ser: VideoService) {}
 
  ngOnInit(): void {
    this.getEdTechContent();
  }

  getEdTechContent(){
    this.ser.getEdtechContent()
    .subscribe(res=>{
      this.videoList = res;
    })
  }
  
  singleView(id: any){
    this.showMain = false;
    this.single = this.videoList[id];
    console.log(this.single);
  }
}