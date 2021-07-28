//variables
var btnTranslate = document.querySelector(".btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

//function to get api url
function getTranslateHandleUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

//function for handling error
function errorHandler(error) {
  console.log("error occured", error);
}

//translating
function clickEventHandler() {
  var inputText = textInput.value; //taking input

  //calling server for processing
  fetch(getTranslateHandleUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translaedText = json.contents.translated;
      textOutput.innerHTML = translaedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
