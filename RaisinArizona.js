
const raisinAlarm = function(cookie) {
  for (let food of cookie) {
    if (food === "🍇") return "Raisin alert!";
    else continue;
  }
  return "All is good!"
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookies) {
  let res = [];

  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[0].length; j++) {
      if (cookies[i][j] === "🍇") {
        res.push("Raisin alert!");
        break;
      } 
      if (j === cookies[0].length - 1) res.push('All is good!');
    }
  }
  return res;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));