//business logic
function BankAccount (owner, firstDeposit, balance) {
  this.owner = owner;
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
$(document).ready(function(){
  $("#registerForm").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#init-deposit").val());
    console.log(name);
    console.log(initialDeposit);
  });

  $("#transactionForm").submit(function(event){
    event.preventDefault();

    var deposit = $("input#deposit").val();
    var withdrawal = $("input#withdrawal").val();
    console.log(deposit);
    console.log(withdrawal);
  });

});
