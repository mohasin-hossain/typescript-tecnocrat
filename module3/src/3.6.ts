{
  // Getter and Setter
  /////

  // class BankAccount {
  //     public readonly id: number;
  //     public name: string;
  //     // private _balance: number; // private property can only be accessible inside the class
  //     protected _balance: number; // if we want to access the property from the child of class then we can use the protected property

  //     constructor(id: number, name: string, balance: number) {
  //         this.id = id;
  //         this.name = name;
  //         this._balance = balance;
  //     }

  //     // addDeposit(amount: number) {
  //     //     this._balance = this._balance + amount;
  //     // } // by default every function is public but we can explicitly define it too

  //     public addDeposit(amount: number) {
  //         this._balance = this._balance + amount;
  //     }

  //     public getBalance() {
  //         return this._balance;
  //     }
  // }

  // class StudentAccount extends BankAccount {
  //     test() {
  //         // this._balance // here we are getting access to _balance as we set it to protected
  //     }
  // }

  // const account1 = new BankAccount(111, "Mr Selim", 2000);
  // // account1.id = 222; // Now we can not change that bcz it is readonly
  // // account1.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount'.

  // account1.addDeposit(40);

  // const myBalance = account1.getBalance();
  // console.log(myBalance);

  ////////////////////
  // In the above example we need to call the function every time to get the balance, to update the balance etc. If we want to avoid that we can use getter and setter
  ////////////////////////////////

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }

    // with setter
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }

    // public getBalance() {
    //     return this._balance;
    // }

    // With getter
    get balance() {
      return this._balance;
    }
  }


  const account1 = new BankAccount(111, "Mr Selim", 2000);

   // account1.addDeposit(40);
   account1.deposit = 40;


  // const myBalance = account1.getBalance();
  // console.log(myBalance);

  const myBalance = account1.balance; // now here we are using a function like a property with the help of getter
  console.log(myBalance);











  //
}
