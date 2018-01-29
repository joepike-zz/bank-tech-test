describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  })

  describe("Create Account", function() {

    it("should allow the user to create a bank account", function() {
      expect(account).toEqual(jasmine.any(Object));
    })

    it("should instantiate the account with a balance of 0", function() {
      expect(account.balance).toEqual(0);
    })
  })

  describe("Account Transactions", function() {

    it("should allow the user to credit an amount into their account", function() {
      account.credit(1000);
      expect(account.balance).toEqual(1000);
    })

    it("should allow the user to debit an amount from their account", function() {
      account.credit(1000);
      account.debit(500);
      expect(account.balance).toEqual(500)
    })

    it("should allow the user to see the correct balance after multiple transactions", function() {
      account.credit(1000);
      account.credit(2000);
      account.debit(500);
      expect(account.balance).toEqual(2500)
    })

    it("should not allow the user to debit an amount they do not have in the account", function() {
      expect(function() { account.debit(500) }).toThrowError("You do not have enough funds in your account");
    })

  })

  describe("Transactions record", function() {

    it("should allow the user to record a credit transaction", function() {
      account.credit(1000);
      expect(account.record[1]).toEqual("29/01/2018 || 1000 || || 1000");
    })

    it("should allow the user to record a debit transaction", function() {
      account.credit(1000);
      account.debit(500);
      expect(account.record[2]).toEqual("29/01/2018 || || 500 || 500");
    })

    it("should show a history of transactions", function() {
      account.credit(1000);
      account.debit(500);
      expect(account.record[1]).toEqual("29/01/2018 || 1000 || || 1000");
      expect(account.record[2]).toEqual("29/01/2018 || || 500 || 500");
    })
  })

});
