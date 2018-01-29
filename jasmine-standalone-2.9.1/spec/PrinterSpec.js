describe("Printer", function() {
  var printer;
  var account;

  beforeEach(function() {
    printer = new Printer();
  })

  describe("Printer defaults", function() {

    it("should set the headers as the first row of the printed statement", function() {
      expect(printer.statement[0]).toEqual("date || credit || debit || balance")
    })

  })

  // describe("Printing full statements", function() {
  //
  //   it("should print a statement detailing a single crediting transaction for an account", function() {
  //     account = new Account();
  //     account.credit(1000);
  //     printer(account);
  //     expect(printer.)
  //   })
  // })

})
