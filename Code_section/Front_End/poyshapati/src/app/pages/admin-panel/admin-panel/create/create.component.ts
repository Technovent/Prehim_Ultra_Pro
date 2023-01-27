import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../../../shared/services/base.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  public customerForm: FormGroup
  customerData: any[];

  constructor(private fb: FormBuilder, private base:BaseService) {
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      companyName: ['',[Validators.required]],
      grossProfit: ['',[Validators.required]],
      netProfit: ['',[Validators.required]],
      valuation: ['', [Validators.required]],
      equitySalePrice: ['', [Validators.required]]
    })

    this.base.companyData.subscribe((data)=> {
      this.customerData = data
    })
  }

  $onCreateNewCustomer(customerForm: FormGroup) {
      if(customerForm.status === "VALID") {
        this.customerData.push(customerForm.value)
        this.base.companyData.next(this.customerData);
      }
  }

}
