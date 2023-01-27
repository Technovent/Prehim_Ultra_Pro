import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.scss']
})
export class MutualFundComponent implements OnInit{
  tableShow: boolean
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
