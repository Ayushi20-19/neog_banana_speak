// console.log("working");
// var userName= prompt("give me username");
// var welComeMessage = "this is working " + userName;
// alert(welComeMessage);
//querysector(i m asking u this thing) take the elemnt with id given .......addEventListner whne this happen add the click event(these are predefined) and do this
//api----we talk to program via cli or gui..now api application programming interface......if u want to program a application do this
//read about browser event

var btnTranslate = document.querySelector(".btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";
// console.log(btnTranslate)
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("working")
//     })
//--another val by using call back-----it is given as an input to another function

function getTranslateHandleUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
}
function clickEventHandler() {
  // console.log("working")
  // console.log("input" , textInput.value);
  // textOutput.innerHTML = "heyy"
  var inputText = textInput.value; //taking input
  //calling server for processing
  fetch(getTranslateHandleUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translaedText = json.contents.translated;
      textOutput.innerHTML = translaedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickEventHandler);
