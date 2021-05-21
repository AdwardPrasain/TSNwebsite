import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  check: boolean = false;
  opcheck: boolean = false;
  

  toggleMore() {
    if (this.check == false) {
      this.check = true;
      this.svcheckME = true;
      this.opcheck = true;
      this.text = 'Less';
    } else {
      this.check = false;
      this.svcheckME = false;
      this.opcheck = false;
      this.text = 'More';
    }
  }

  detailscheckME: boolean = false;
  svcheckME: boolean = false;
  text: string = 'More';

  toggleMoreUpME() {
    if (this.detailscheckME == false) {
      this.detailscheckME = true;
      this.svcheckME = true;
      this.text = 'Less';
    } else {
      this.detailscheckME = false;
      this.svcheckME = false;
      this.text = 'More';
    }
  }

  ME: string = 'ME';

  detailscheckPIS: boolean = false;
  svcheckPIS: boolean = false;
  textPIS: string = 'More';

  toggleMoreUpPIS() {
    if (this.detailscheckPIS == false) {
      this.detailscheckPIS = true;
      this.svcheckPIS = true;
      this.textPIS = 'Less';

      // this.toggleItems(this.detailscheckME, this.svcheckME, this.text);
      // this.detailscheckME = false;
      // this.svcheckME = false;
      // this.text = 'More';
    } else {
      this.detailscheckPIS = false;
      this.svcheckPIS = false;
      this.textPIS = 'More';
    }
  }

  // toggleItems(a, b, c) {
  //   a = false;
  //   b = false;
  //   c = 'More';
  //   // `this.detailscheck${a}`= false;
  //   // this.svcheckME = false;
  //   // this.text = 'More';
  //   console.log(a);
  // }

  detailscheckWD: boolean = false;
  svcheckWD: boolean = false;
  textWD: string = 'More';

  toggleMoreUpWD() {
    if (this.detailscheckWD == false) {
      this.detailscheckWD = true;
      this.svcheckWD = true;
      this.textWD = 'Less';
    } else {
      this.detailscheckWD = false;
      this.svcheckWD = false;
      this.textWD = 'More';
    }
  }

  detailscheckMD: boolean = false;
  svcheckMD: boolean = false;
  textMD: string = 'More';

  toggleMoreUpMD() {
    if (this.detailscheckMD == false) {
      this.detailscheckMD = true;
      this.svcheckMD = true;
      this.textMD = 'Less';
    } else {
      this.detailscheckMD = false;
      this.svcheckMD = false;
      this.textMD = 'More';
    }
  }

  servicecheck:boolean = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 800){
      this.servicecheck = true;
    }
    else{
      this.servicecheck = false;
    }
  }
}
