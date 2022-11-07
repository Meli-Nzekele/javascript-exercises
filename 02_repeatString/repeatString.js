const repeatString = function (word, numOfTimes) {
  if (numOfTimes < 0) return "ERRORnpm test repeatString.spec.js";
  let str = "";
  for (let i = 0; i < numOfTimes; i++) {
    str += word;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
