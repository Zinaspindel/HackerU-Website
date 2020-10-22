import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bottom-popup',
  templateUrl: './bottom-popup.component.html',
  styleUrls: ['./bottom-popup.component.css']
})
export class BottomPopupComponent implements OnInit {
  @ViewChild('content') content;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.content.nativeElement.classList.remove("hide");
    },3000)
  }
  closeContent(){
    this.content.nativeElement.classList.add("hide");
  }

}
