export interface IProducts {
  id: string;
  bankName: string | undefined;
  productName: string;
  isFavor: boolean;
  loanType: string;
  rateAvg: string;
  rateType: string;
}

export interface IProduct {
  id: string;
  title: string;
  bank: string;
  interestRate: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}
