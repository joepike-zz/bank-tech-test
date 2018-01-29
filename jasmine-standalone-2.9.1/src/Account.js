function Account() {
  this.balance = 0;
}

Account.prototype.credit = function(amount) {
  this.balance += amount;
  // possibly add a private method for changing balance
}

Account.prototype.debit = function(amount) {
  this.balance -= amount;
}
