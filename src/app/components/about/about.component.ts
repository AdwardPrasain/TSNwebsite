import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutcheck:boolean = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 100){
      this.aboutcheck = true;
    }
    else{
      this.aboutcheck = false;
    }
  }

}
