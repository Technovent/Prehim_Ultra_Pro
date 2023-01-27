import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../../shared/services/base.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  companyData: any[];
  constructor(private base: BaseService) {
  }
  ngOnInit() {
    this.base.companyData.subscribe((data)=> {
      this.companyData = data
    })
  }
}
