// console.log("working");
// var userName= prompt("give me username");
// var welComeMessage = "this is working " + userName;
// alert(welComeMessage);
//querysector(i m asking u this thing) take the elemnt with id given .......addEventListner whne this happen add the click event(these are predefined) and do this
//api----we talk to program via cli or gui..now api application programming interface......if u want to program a application do this
//read about browser event



var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector('#text-input');
// console.log(btnTranslate)
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("working")
    })
//--another val by using call back-----  
function clickEventHandler()
{
console.log("working")
console.log("input" , textInput.value);
 }
btnTranslate.addEventListener("click", clickEventHandler)
