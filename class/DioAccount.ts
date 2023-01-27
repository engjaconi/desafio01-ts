export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  setBalance = (value: number) => {
    this.balance = value;
  }

  getBalance = (): number => {
    return this.balance;
  }

  setStatus = (value: boolean): void => {
    this.status = value;
  }

  deposit = (value: number): void => {
    if (!this.validateValue(value)) {
      return;
    }

    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Deposito de R$ ${value} realizado com sucesso`);
    }
  }

  withdraw = (value: number): void => {
    if (!this.validateValue(value)) {
      return;
    }

    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Saque de R$ ${value} realizado com sucesso`);
    } else {
      console.log('Saldo insuficiente');
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    console.log('Conta inválida');
    return false;
  }

  validateValue = (value: number): boolean => {
    if (value <= 0) {
      console.log('O valor informado é inválido para essa operação, tente novamente.');
      return false;
    }
    return true;
  }
}
