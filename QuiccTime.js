Math.random.range = function(range) {
  return Math.floor(Math.random()*range);
}
var started = false;
var str = String;
var message = {
  name: "<font style='color:skyblue'>Quick Reaction Time Bot",
  text: "<font style='color:yellow'>Solve %question% Before anyone else to get %levels% level(s)!",
  textTime: true,
  answer: 0,
  levelReward: 0
};
var levels;
var answer;
function run() {
    if (started == false) {
        started = true;
  levels = Math.random.range(3)+1
   message.text = message.text.replace("%levels%", levels);
  var one = Math.random.range(1600);
  var two = Math.random.range(10000);
  var string = str(one) + "+" + str(two);
  answer = one + two;
  message.levelReward = levels;
  message.answer = answer;

  message.text = message.text.replace("%question%", string);
  messagesRef.push(message);
    }
}
function stop(data) {
  if (started == true) {
  started = false;
  }
}
function win(levels, name) {
  messagesRef.push({name: "<font style='color:skyblue'>Quick Reaction Time Bot",
  text: "<font style='color:yellow'>"+name + " Has Completed the question and gained " + levels + "Levels! <script> started = false; </script>"});
  stop();
  started = false;
  // messagesRef.push({ name: "no", text:" <script> started = false;"})
  expAndLevel.level = parseInt(expAndLevel.level)+levels;
  saveLevel();
}