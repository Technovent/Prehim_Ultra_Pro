import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() companyTitle: string;
  @Input() companyRevenue: string;
  @Input() companyImage: string;

}
