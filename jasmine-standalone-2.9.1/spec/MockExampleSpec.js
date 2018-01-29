describe("Testing spies", function() {

  it("should skip over the function being spied on", function() {

    var myApp = new MyApp();
    spyOn(myApp, "setFlag");

    myApp.setFlag();

    expect(myApp.flag).toEqual(false);
  })
})
