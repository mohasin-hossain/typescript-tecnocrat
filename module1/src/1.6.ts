{

    
// Normal Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;


// Object --> function --> method

const poorUser = {
    name: "Mohasin",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance + balance}`;
    }
}


// Array
const prices: number[] = [45, 25, 22, 66];

const newSquaredPrices: number[] = prices.map((element: number): number => element * element);








}