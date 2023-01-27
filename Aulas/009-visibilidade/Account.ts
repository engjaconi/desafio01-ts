// Classe abstrata não permite que seja instanciado objetos diretamente dela, apenas de suas classes filhas. 
export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = ():string => {
        return this.name;
    }

    setName = (name:string): void => {
        this.name = name;
    }

    deposit = (): void => {
        if(this.validateStatus()) {
            console.log('Você depositou');
        }
    }

    withdraw = (): void => {
        console.log('Você sacou');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    private validateStatus = ():boolean => {
        if(this.status) {
            return this.status;
        }
        throw new Error('Conta inválida');
    }
}