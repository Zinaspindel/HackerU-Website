import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-center-popup',
  templateUrl: './center-popup.component.html',
  styleUrls: ['./center-popup.component.css']
})
export class CenterPopupComponent implements OnInit {
  @ViewChild('popupShadow') shadow;
  @ViewChild('popup') popup;
  @ViewChild('content') content;
  constructor() { }

  ngOnInit(): void {
  }
  closePopup(){
    this.hide(this.content.nativeElement);
    setTimeout(()=>{
      this.shadow.nativeElement.style.display = "none";
      this.content.nativeElement.style.display = "none";
    },500)
  }
  hide(elem) {
    elem.classList.add("fade-out")
  }
}
