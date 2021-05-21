import { flatten } from '@angular/compiler';
import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check:boolean=false;

  navToggle() {
    if(this.check==false){
      this.check=true;
    }
    else{
      this.check=false;
    }
  }
  hidenav() {
    this.check =false;
  }

  headercheck:boolean = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop >400 ){
      this.headercheck = true;
    }
    else{
      this.headercheck = false;
    }
  }
}
