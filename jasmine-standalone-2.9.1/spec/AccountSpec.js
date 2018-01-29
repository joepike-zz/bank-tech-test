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
      account.debit(500);
      expect(account.balance).toEqual(-500)
    })
  })

});
