
let guesses=[];

let correctNumber=getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    
}
function displayResult(userGuess){
  if(userGuess>correctNumber){
    showNumberAbove();
  }
  else if(userGuess<correctNumber){
    showNumberBelow();
  }
  else{
    showYouWon();
  }
}

function playGame(){
  
  let numberGuess=document.getElementById('number-guess').value;
  
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();

}


function initGame(){
 
  guesses=[];
  correctNumber=getRandomNumber();
  document.getElementById("result").innerHTML='';
  displayHistory();
 
}


function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
 
  let correctNumber=Math.floor(Math.random()*100)+1;
  return(correctNumber);
}


function saveGuessHistory(guess) {
 
  guesses.unshift(guess);
}

function displayHistory() {
  let index=guesses.length;
  let list = "<ul class='list-group' id='list-group-content'>";
  
  for(var i=0;i<index;i++){
    list+="<li>"+"Your guess is "+guesses[i]+"</li>";
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}




function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  
  dialog=getDialog("won",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  
  dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  
  dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
