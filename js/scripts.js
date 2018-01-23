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
    var initialDeposit = parseFloat($("input#init-deposit").val()).toFixed(2);
    var newBankAccount = new BankAccount(name, initialDeposit, initialDeposit)

    $(".balance").text(newBankAccount.balance);
  });

  $("#transactionForm").submit(function(event){
    event.preventDefault();

    var deposit = parseFloat($("input#deposit").val()).toFixed(2);
    var withdrawal = parseFloat($("input#withdrawal").val()).toFixed(2);

    if ((deposit !== "NaN") && (withdrawal !== "NaN")) {
      alert("Only fill in one field per transaction.")
    } else if (deposit !== "NaN"){
      console.log("deposit")
    } else if (withdrawal !== "NaN") {
      console.log("withdrawal")
     else {
       console.log("transaction error");
       return ("transaction error");
     }
  });

});
