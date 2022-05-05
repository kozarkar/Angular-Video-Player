import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



export interface Chips {
  name : string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  showSide: boolean = true;

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  openIndustry(){
    window.location.assign('/toolbar/');
  }

  openEdtech(){
    window.location.assign('/toolbar/edtechplayer');
  }
}
