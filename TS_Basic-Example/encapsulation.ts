// class BankAccount {
//   // Private: Only accessible within this class
//   private balance: number;

//   // Protected: Accessible within this class and derived classes
//   protected accountNumber: string;

//   // Public: Accessible from outside
//   public ownerName: string; 

//   constructor(ownerName: string, accountNumber: string, balance: number) {
//     this.ownerName = ownerName;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   // Public method to access private balance (encapsulation)
//   public getBalance(): number {
//     return this.balance;
//   }

//   // Public method to modify balance safely
//   public deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   public withdraw(amount: number): void {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       console.log("Insufficient funds or invalid amount");
//     }
//   }

//   // Private method - not accessible outside
//   private logTransaction(type: string, amount: number) {
//     console.log(`${type} of $${amount} was made.`);
//   }
// }

// // Subclass to show use of protected
// class BusinessAccount extends BankAccount {
//   public displayAccountNumber(): void {
//     // Can access protected member
//     console.log("Account Number: " + this.accountNumber);
//   }
// }

// // ----- Usage -----
// const acc = new BankAccount("John Doe", "123456", 5000);

// acc.deposit(1000);            // Public method
// acc.withdraw(200);            // Public method
// console.log(acc.getBalance()); // Access private field via public method
// console.log(acc.ownerName);   // Directly access public field

// // Not allowed (will error in TypeScript)
// // console.log(acc.balance);       ❌
// // console.log(acc.accountNumber); ❌
// // acc.logTransaction("Deposit", 1000); ❌

// const bizAcc = new BusinessAccount("Acme Corp", "987654", 10000);
// bizAcc.displayAccountNumber(); // Accesses protected property


// // Base class: Account
// class Account {
//   public accountNumber: string;
//   public ownerName: string;
//   #balance: number;

//   constructor(accountNumber: string, ownerName: string, initialBalance: number) {
//     this.accountNumber = accountNumber;
//     this.ownerName = ownerName;
//     this.#balance = initialBalance;
//   }

//   deposit(amount: number): void {
//     if (amount > 0) {
//       this.#balance += amount;
//     } else {
//       console.error("Deposit amount must be positive.");
//     }
//   }

//   withdraw(amount: number): void {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//     } else {
//       console.error("Insufficient funds or invalid amount.");
//     }
//   }

//   getBalance(): number {
//     return this.#balance;
//   }

//   protected setBalance(amount: number): void {
//     this.#balance = amount;
//   }
// }

// // Derived class: SavingsAccount
// class SavingsAccount extends Account {
//   public interestRate: number;

//   constructor(accountNumber: string, ownerName: string, initialBalance: number, interestRate: number) {
//     super(accountNumber, ownerName, initialBalance);
//     this.interestRate = interestRate;
//   }

//   addInterest(): void {
//     const interest = this.getBalance() * this.interestRate;
//     this.deposit(interest);
//   }
// }

// // Derived class: CurrentAccount
// class CurrentAccount extends Account {
//   public overdraftLimit: number;

//   constructor(accountNumber: string, ownerName: string, initialBalance: number, overdraftLimit: number) {
//     super(accountNumber, ownerName, initialBalance);
//     this.overdraftLimit = overdraftLimit;
//   }

//   override withdraw(amount: number): void {
//     const currentBalance = this.getBalance();
//     if (amount > 0 && amount <= currentBalance + this.overdraftLimit) {
//       this.setBalance(currentBalance - amount);
//     } else {
//       console.error("Overdraft limit exceeded or invalid amount.");
//     }
//   }
// }
