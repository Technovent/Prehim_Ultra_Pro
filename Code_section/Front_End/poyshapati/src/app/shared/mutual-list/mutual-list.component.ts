import { Component } from '@angular/core';
import {BaseService} from "../services/base.service";

@Component({
  selector: 'app-mutual-list',
  templateUrl: './mutual-list.component.html',
  styleUrls: ['./mutual-list.component.scss']
})
export class MutualListComponent {
  mutualFundData: any[];
  constructor(private base: BaseService) {
  }
  ngOnInit() {
    this.base.mutualFundData.subscribe((data)=> {
      this.mutualFundData = data
    })
  }
}
