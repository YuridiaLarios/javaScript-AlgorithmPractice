
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

var questionsRight = [];
var questionsWrong = [];
var quiz =[
["How many states are in the United States?", "50"],
["How many legs does a fly has?", "6"],
["How many continents are there?", "7"]

];

for(var i=0; i<quiz.length; i++){
  var answer = prompt(quiz[i][0]);
  if(quiz[i][1] === answer){
   questionsRight.push(i);
  }
  else
    questionsWrong.push(i);   
}

function buildList(arr){
 var listHTML = "<ol>";
 for(var i=0; i<arr.length; i++){
   listHTML += "<li> " + quiz[arr[i]][0] + " </li>";   
 } 
  listHTML += "</ol>";
  return listHTML;
}

html = "You got " + questionsRight.length + " question(s) right. ";
html += "<h2>You got these questions correct: </h2>";
html += buildList(questionsRight);
html += "<h2> You got these questions wrong: </h2>";
html += buildList(questionsWrong);
print(html);




