const repeatString = function (str, num) {
  if (num < 0) return "ERROR";
  if ((num = 0)) return str;
  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
