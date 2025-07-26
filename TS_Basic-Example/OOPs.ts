export abstract class Account  {

    ownerName: string;
    accountNumber: number;
    #balance: number;

    constructor(ownerName: string, accountNumber: number, balance: number) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Invalid amount.");
        }
    }

    getBalance(): number {
        return this.#balance;
    }

    setBalance(amount: number): void {
        this.#balance = amount;
    }


  upiCharge(charge: number) {
    this.#balance -= charge;
  }
    
 
}



export class SavingsAccount extends Account {
    interestRate: number;

    constructor(ownerName: string, accountNumber: number, balance: number, interestRate: number) {
        super(ownerName, accountNumber, balance);
        this.interestRate = interestRate;
    }

    addInterest(): void {
        const interest = this.getBalance() * (this.interestRate / 100);
        this.deposit(interest);
    }
}


export class CurrentAccount extends Account {
    overdraftLimit: number;

    constructor(ownerName: string, accountNumber: number, balance: number, overdraftLimit: number) {
        super(ownerName, accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        const currentBalance = this.getBalance();


        if (amount > 0 && amount <= currentBalance + this.overdraftLimit) {
            this.setBalance(currentBalance - amount);
        } else {
            console.log("Invalid amount.");
        }
    }

}


// const hardik = new SavingsAccount('Hardik', 8598, 10000, 0.04);

// hardik.deposit(1000);
// console.log(`After deposit : ${hardik.getBalance()}`);

// hardik.withdraw(6000);
// console.log(`After withdraw : ${hardik.getBalance()}`);


// hardik.addInterest();
// console.log(`Total Balance : ${hardik.getBalance()}`);





// const Mukesh = new CurrentAccount('Mukesh', 1234, 20000, 20000);

// Mukesh.deposit(1000);
// console.log(`After deposit : ${Mukesh.getBalance()}`);

// Mukesh.withdraw(6000);
// console.log(`After withdraw : ${Mukesh.getBalance()}`);

// console.log(`overdraftLimit : ${Mukesh.overdraftLimit}`);
// Mukesh.withdraw(30000);
// console.log(`Balance After withdrawal: ${Mukesh.getBalance()}`);




// const Subham = new SavingsAccount('Subham', 2233, 10000, 0.04);

// Subham.deposit(1000);
// console.log(`After deposit : ${Subham.getBalance()}`);

// Subham.withdraw(6000);
// console.log(`After withdraw : ${Subham.getBalance()}`);

// Subham.addInterest();
// console.log(`Total Balance : ${Subham.getBalance()}`);





// const Meet = new CurrentAccount('Meet', 3311, 10000, 10000);

// Meet.deposit(1000);
// console.log(`After deposit : ${Meet.getBalance()}`);

// Meet.withdraw(6000);
// console.log(`After withdraw : ${Meet.getBalance()}`);

// console.log(`overdraftLimit : ${Meet.overdraftLimit}`);
// Meet.withdraw(5000);
// console.log(`Balance After withdrawal: ${Meet.getBalance()}`);





// const Maulik = new SavingsAccount('Maulik', 2137, 10000, 0.04);

// Maulik.deposit(1000);
// console.log(`After deposit : ${Maulik.getBalance()}`);

// Maulik.withdraw(6000);
// console.log(`After withdraw : ${Maulik.getBalance()}`);

// Maulik.addInterest();
// console.log(`Total Balance : ${Maulik.getBalance()}`);

