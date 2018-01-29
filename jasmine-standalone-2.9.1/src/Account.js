function Account() {
  this.balance = 0;
}

Account.prototype.credit = function(amount) {
  this.balance += amount;
}

Account.prototype.debit = function(amount) {
  if(this.balance - amount < 0) {
    throw new Error("You do not have enough funds in your account")
  } else {
    this.balance -= amount;
  }
}

Account.prototype = (function() {
    var private_stuff = function() {
        // Private code here
    };

    return {

        constructor:Account,

        use_restroom:function() {
            private_stuff();
        }

    };
})();
