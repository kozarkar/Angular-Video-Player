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

  constructor() { }

  ngOnInit(): void {
  }

  chips: Chips[] = [
    {name: 'Cartoon Network'},
    {name: 'Disney'},
    {name: 'Python'},
    {name: 'React'},
    {name: 'Angular'},
    {name: 'Music'},
    {name: 'Cartoon Network'},
    {name: 'Disney'},
    {name: 'JavaScript'},
    {name: 'Pogo'},
    {name: 'Cartoon Network'},
    {name: 'Disney'},
    {name: 'Java'},
    {name: 'PHP'},
    {name: 'Photoshop'},
    
  ];

  redirect(){
    window.location.reload();
  }

  // drop(event: CdkDragDrop<Chips[]>) {
  //   moveItemInArray(this.chips, event.previousIndex, event.currentIndex);
  // }
}
