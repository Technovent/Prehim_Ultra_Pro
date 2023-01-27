import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../../../shared/services/base.service";

@Component({
  selector: 'app-mutual-create',
  templateUrl: './mutual-create.component.html',
  styleUrls: ['./mutual-create.component.scss']
})
export class MutualCreateComponent implements OnInit{
  public mutualForm: FormGroup
  mutualData: any[];

  constructor(private fb: FormBuilder, private base:BaseService) {
  }

  ngOnInit() {
    this.mutualForm = this.fb.group({
      mutualFundName: ['',[Validators.required]],
      avgAnnualCompoundReturn: ['',[Validators.required]],
      latestNav: ['',[Validators.required]],
      risk: ['', [Validators.required]],
      minApplicationAmount: ['', [Validators.required]],
      investorReturn: ['', [Validators.required]]
    })

    this.base.companyData.subscribe((data)=> {
      this.mutualData = data
    })
  }

  $onCreateNewCustomer(customerForm: FormGroup) {
    if(customerForm.status === "VALID") {
      this.mutualData.push(customerForm.value)
      this.base.mutualFundData.next(this.mutualData);
    }
  }
}
