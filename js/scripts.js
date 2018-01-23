//business logic
function BankAccount (owner, firstDeposit, balance) {
  this.owner = owner;
  this.firstDeposit = firstDeposit;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  return (parseFloat(this.balance) + parseFloat(amount));
}

BankAccount.prototype.withdrawal = function(amount) {
  return (parseFloat(this.balance) - parseFloat(amount));
}




//user interface logic
$(document).ready(function(){
  $("#registerForm").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseFloat($("input#init-deposit").val()).toFixed(2);
    var newBankAccount = new BankAccount(name, initialDeposit, initialDeposit)

    $(".balance").text(newBankAccount.balance);
  // });

  $("#transactionForm").submit(function(event){
    event.preventDefault();

    var depositAmount = parseFloat($("input#deposit").val()).toFixed(2);
    var withdrawalAmount = parseFloat($("input#withdrawal").val()).toFixed(2);

    if ((depositAmount !== "NaN") && (withdrawalAmount !== "NaN")) {
      alert("Only fill in one field per transaction.")
    } else if (depositAmount !== "NaN"){
      var newBalance = newBankAccount.deposit(depositAmount);
      $(".balance").text(newBalance.toFixed(2));
    } else if (withdrawalAmount !== "NaN") {
      var newBalance = newBankAccount.withdrawal(withdrawalAmount);
      $(".balance").text(newBalance.toFixed(2));
      console.log("withdrawal")
    } else {
       console.log("transaction error");
       return ("transaction error");
     }
  });
  });

});
