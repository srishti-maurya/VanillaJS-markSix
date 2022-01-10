let inputTranslate = document.querySelector("#translate-input");
let btnTranslate = document.querySelector("#translate-btn");
let outputTranslate = document.querySelector("#translate-output");
let UrlServer = "https://api.funtranslations.com/translate/yoda.json";

const buildURL = (text) => UrlServer + "?" + "text=" + text;

const handleError = (err) => {
  console.log("an error occured", err);
  alert("There is something wrong with the server! Please try again later");
};

const clickHandler = () => {
  let textInput = inputTranslate.value;
  fetch(buildURL(textInput))
    .then((res) => res.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputTranslate.innerHTML = translatedText;
    })
    .catch(handleError);
};

btnTranslate.addEventListener("click", clickHandler);
