import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactcheck:boolean = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 2100){
      this.contactcheck = true;
    }
    else{
      this.contactcheck = false;
    }
  }
}
