import { Component } from '@angular/core';

@Component({
  selector: 'app-share-market',
  templateUrl: './share-market.component.html',
  styleUrls: ['./share-market.component.scss']
})
export class ShareMarketComponent {

  isActiveLeft(right: string) {
    return localStorage.getItem('hidden') === right
  }
}
