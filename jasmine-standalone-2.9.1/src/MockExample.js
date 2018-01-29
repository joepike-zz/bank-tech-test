var MyApp = function() {
  var flag = false;

  var setFlag = function() {
    flag = true;
  };

  return {
    flag: flag,
    setFlag: setFlag
  };
};
