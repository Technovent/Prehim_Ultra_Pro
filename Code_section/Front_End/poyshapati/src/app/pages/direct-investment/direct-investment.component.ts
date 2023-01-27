import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-direct-investment',
  templateUrl: './direct-investment.component.html',
  styleUrls: ['./direct-investment.component.scss']
})
export class DirectInvestmentComponent implements OnInit{
   tableShow: boolean;
  ngOnInit() {
    localStorage.setItem('activeProduct', 'chaldal');
  }

  isActiveProduct(chaldal: string) {
    return localStorage.getItem('activeProduct') === chaldal
  }


  isActiveRight(right: string) {
    return localStorage.getItem('hidden') === right
  }

  isActiveLeft(left: string) {
    return localStorage.getItem('hidden') === left
  }

  onClick() {
    this.tableShow = true
  }

  onClickHide() {
    this.tableShow = false
  }
}
