function Account() {
  this.balance = 0;
  this.record = ["date || credit || debit || balance"];
}

Account.prototype.credit = function(amount) {
  this.balance += amount;
  this.record_transaction(amount, false);
}

Account.prototype.debit = function(amount) {
  if(this.balance - amount < 0) {
    throw new Error("You do not have enough funds in your account")
  } else {
    this.balance -= amount;
    this.record_transaction(false, amount);
  }
}

Account.prototype.record_transaction = function(credit_amount, debit_amount) {
  var date = this.getDate();
  if(credit_amount) {
    var string = date + " || " + credit_amount.toString() + " || " + "|| " + this.balance.toString();
  } else {
    var string = date + " || " + "|| " + debit_amount.toString() + " || " + this.balance.toString();
  }
  this.record.push(string)
}

Account.prototype.print_statement = function() {
  for(var i = 0; i < this.record.length; i++) {
    this.record[i] + "\n";
  }
}

Account.prototype.getDate = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
    mm = '0'+mm
  }
  today = dd + '/' + mm + '/' + yyyy;
  return today;
}
