{
// Access Modifiers
/////

class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; // private property can only be accessible inside the class
    protected _balance: number; // if we want to access the property from the child of class then we can use the protected property

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // } // by default every function is public but we can explicitly define it too

    public addDeposit(amount: number) {
        this._balance = this._balance + amount;
    } 

    public getBalance() {
        return this._balance;
    }
}


class StudentAccount extends BankAccount {
    test() {
        // this._balance // here we are getting access to _balance as we set it to protected
    }
}


const account1 = new BankAccount(111, "Mr Selim", 2000);
// account1.id = 222; // Now we can not change that bcz it is readonly
// account1.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount'.

account1.addDeposit(40);

const myBalance = account1.getBalance();
console.log(myBalance);






















   // 
}