import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  @ViewChild('listOfPeople') listOfPeople;
  num:number = 0;
  scroll:any;
  constructor() { }

  ngOnInit(): void {
    this.startScroll();
  }
  startScroll(){
    this.scroll = setInterval(()=>{
      if(this.num <= -5500){
        this.num = 0;
      }
      this.num-=1.4;
      this.listOfPeople.nativeElement.style.left = this.num+'px';
    },16)
  }
  mouseEnter(){
    clearInterval(this.scroll);
    
  }
  mouseLeave(){
    this.startScroll();
  }

}
