import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  @ViewChild('navbar') navbar;
  menuPosition: any;
  sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.menuPosition){
        this.sticky = true;
    } else {
        this.sticky = false;
    }
}
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.menuPosition = this.navbar.nativeElement.offsetTop;
  }

}
