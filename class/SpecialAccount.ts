import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (!this.validateValue(value)) {
            return;
        }
        let valueDeposit = value + 10;
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + valueDeposit);
            console.log(`Deposito de R$ ${valueDeposit} realizado com sucesso`);
        }
    }
}