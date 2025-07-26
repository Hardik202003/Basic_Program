import { Account, SavingsAccount, CurrentAccount } from "./OOPs";

class Employee {
    
  constructor(public account: Account) {
  
    this.account = account;
  }

  updateBalance() {
    this.account.deposit(1000);    
    this.account.upiCharge(100);    
    if (this.account instanceof SavingsAccount) {
      this.account.addInterest();  
    }
  }

  getBalance(): number {
    return this.account.getBalance();
  }
}
const employeesData: Employee[] = [
  new Employee(new SavingsAccount('Hardik', 1111, 5000, 1)),
  new Employee(new CurrentAccount('Meet', 2222, 10000, 1000)),
  new Employee(new SavingsAccount('Subham', 3333, 15000, 1)),
];

employeesData.forEach(emp => emp.updateBalance());

const employeeBalances = employeesData.map(emp => ({
  name: emp.account.ownerName,
  balance: emp.getBalance()
}));

console.log(employeeBalances);
