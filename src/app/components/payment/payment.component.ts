import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  esewacheck:boolean= false;
  esewablock() {
    this.esewacheck =true;
  }
  esewanone() {
    this.esewacheck =false;
  }

  
  khalticheck:boolean= false;
  khaltiblock() {
    this.khalticheck =true;
  }
  khaltinone() {
    this.khalticheck =false;
  }

}
