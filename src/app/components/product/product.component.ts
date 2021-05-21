import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productcheck:boolean = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 1500){
      this.productcheck = true;
    }
    else{
      this.productcheck = false;
    }
  }

}
