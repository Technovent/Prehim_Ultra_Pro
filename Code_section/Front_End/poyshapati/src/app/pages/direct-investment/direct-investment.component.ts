import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-direct-investment',
  templateUrl: './direct-investment.component.html',
  styleUrls: ['./direct-investment.component.scss']
})
export class DirectInvestmentComponent implements OnInit{
  isActiveLeft(right: string) {
    return localStorage.getItem('hidden') === right
  }
  ngOnInit() {
    localStorage.setItem('activeProduct', 'chaldal');
  }

  isActiveProduct(chaldal: string) {
    return localStorage.getItem('activeProduct') === chaldal
  }
}
