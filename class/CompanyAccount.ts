import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (!this.validateValue(value)) {
      return;
    }

    if (this.validateStatus()) {
      console.log(`Voce pegou um empréstimo de ${value}`);
      this.deposit(value);
    }
  }
}
