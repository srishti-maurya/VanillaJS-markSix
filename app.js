
var inputTranslate = document.querySelector("#translate-input");
var btnTranslate = document.querySelector("#translate-btn");
var outputTranslate = document.querySelector("#translate-output");
var UrlServer = "https://api.funtranslations.com/translate/yoda.json"

function buildURL(text){
    return UrlServer+"?"+"text="+text
 }
 
function handleError(err){
    console.log("an error occured",err);
    alert("There is something wrong with the server! Please try again later")
}

function clickHandler() {
  var textInput = inputTranslate.value;
  fetch(buildURL(textInput))
    .then(res=>res.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputTranslate.innerHTML = translatedText;
    })
    .catch(handleError)
}

btnTranslate.addEventListener("click", clickHandler);

