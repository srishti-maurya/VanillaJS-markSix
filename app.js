
var inputTranslate = document.querySelector("#translate-input");
var btnTranslate = document.querySelector("#translate-btn");
var outputTranslate = document.querySelector("#translate-output");
var UrlServer = "https://api.funtranslations.com/translate/yoda.json"

function buildURL(text){
    return UrlServer+"?"+"text="+text
 }
 
function clickHandler() {
  var textInput = inputTranslate.value;
  fetch(buildURL(textInput))
    .then(res=>res.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputTranslate.innerHTML = translatedText;
    })
}

btnTranslate.addEventListener("click", clickHandler);

