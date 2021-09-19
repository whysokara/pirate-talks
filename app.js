//Reads the input or refers to the specific html tags
var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputData = document.querySelector("#txt-output");

//URL to fetch the API
var serverURL = "https://api.funtranslations.com/translate/pirate.json";

//Add the parameters to the URL
function getTranslatedURL(value) {
  return serverURL + "?text=" + value;
}

//Error handling function
function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with the server, try again later.");
}

//Processing - what happens when the button is clicked
function buttonClicked() {
  console.log("clicked");
  var textValue = textData.value;
  outputData.innerText = "Translation in progress...";
  fetch(getTranslatedURL(textValue))
    .then((response) => response.json())
    .then((json) => (outputData.innerText = json.contents.translated))
    .catch(errorHandler);
}

//Listen to the event - when the button is clicked
btnTranslate.addEventListener("click", buttonClicked);
