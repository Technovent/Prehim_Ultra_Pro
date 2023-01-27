import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  companyData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      companyName: "Chaldal",
      grossProfit: "$120 million",
      netProfit: "$40 million",
      valuation: "$40 million",
      equitySalePrice: "50000"
    },
    {
      companyName: "Praava Health",
      grossProfit: "$2.2 billion",
      netProfit: "$10.6 million",
      valuation: "$10.6 million",
      equitySalePrice: "30000"
    },
    {
      companyName: "Priyo Shop",
      grossProfit: "$50 million",
      netProfit: "$15 million",
      valuation: "$30 million",
      equitySalePrice: "40000"
    },
    {
      companyName: "Maya Health",
      grossProfit: "$35 million",
      netProfit: "$5 million",
      valuation: "$3.7 million",
      equitySalePrice: "10000"
    },
    {
      companyName: "Sindabad",
      grossProfit: "$35 million",
      netProfit: "$5.7 million",
      valuation: "$8.3 million",
      equitySalePrice: "20000"
    }

  ])

  mutualFundData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      mutualFundName: "IDLC Mutual Fund",
      avgAnnualCompoundReturn: "9.31",
      latestNav: "8",
      risk: "security risk",
      minApplicationAmount: "10000",
      investorReturn: "8000"

    },
    {
      mutualFundName: "Ekushe Mutual Fund",
      avgAnnualCompoundReturn: "56.2",
      latestNav: "12.22",
      risk: "money risk",
      minApplicationAmount: "12000",
      investorReturn: "10000"

    }

  ])

  constructor() {
  }
}
