import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  companyData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      companyName: "chaldal",
      grossProfit: "1000",
      netProfit: "1000",
      valuation: "1000",
      equitySalePrice: "1000"
    }
  ])
  constructor() { }
}
