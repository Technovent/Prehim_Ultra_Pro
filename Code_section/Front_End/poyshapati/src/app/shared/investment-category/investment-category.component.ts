import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-investment-category',
  templateUrl: './investment-category.component.html',
  styleUrls: ['./investment-category.component.scss']
})
export class InvestmentCategoryComponent implements OnInit{
  @Input() organizationName: string = 'Chaldal';
  graphs: any[] = Array(3);
  tableShow: boolean;
  @Input() investLogo: any;

  ngOnInit() {
    localStorage.setItem('hidden', 'left')
  }
  onClickLeftIcon() {
    localStorage.setItem('hidden', 'left')
  }

  onClickRightIcon() {
    localStorage.setItem('hidden', 'right')
  }

  isActiveLeft(left: string) {
    return localStorage.getItem('hidden') === left
  }
}
