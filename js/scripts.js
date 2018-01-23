//business logic
function BankAccount (firstDeposit, balance) {
  this.firstDeposit = firstDeposit;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  return (this.balance + amount);
}

BankAccount.prototype.withdrawal = function(amount) {
  return (this.balance - amount);
}




//user interface logic
