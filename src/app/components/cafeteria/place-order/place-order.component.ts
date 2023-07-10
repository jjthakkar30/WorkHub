import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements AfterViewInit {
  @ViewChild('dateInput', {static: false}) dateInputRef !: ElementRef;
  checkbox1Val: Boolean = false;
  checkbox2Val: Boolean = false;
  bVeg:Boolean = true;
  lVeg: Boolean = true;

  dateTomorrow: Date = new Date();
  minDate: String;

  constructor() {
    const dateToday = new Date();
    this.dateTomorrow.setDate(dateToday.getDate() + 1);
    const yyyy = dateToday.getFullYear();
    let mm = dateToday.getMonth() + 1;
    let dd = dateToday.getDate();

    if (dd < 10) dd = Number('0' + dd);
    if (mm < 10) mm = Number('0' + mm);

    this.minDate = yyyy + '-' + mm + '-' + dd;
  }
  
  ngAfterViewInit() {
  }

  onBoxChange(ifChecked: Boolean, id: Number) {
    if (id === 1) this.checkbox1Val = ifChecked;
    else this.checkbox2Val = ifChecked;
  }

  onRadioChange(ifVeg: Boolean, type: string) {
    if (type === 'b') this.bVeg = ifVeg;
    else this.lVeg = ifVeg;
  }
}
