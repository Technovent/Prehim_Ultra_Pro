import { Component } from '@angular/core';

@Component({
  selector: 'app-direct-investment',
  templateUrl: './direct-investment.component.html',
  styleUrls: ['./direct-investment.component.scss']
})
export class DirectInvestmentComponent {
  isActiveLeft(right: string) {
    return localStorage.getItem('hidden') === right
  }
}
