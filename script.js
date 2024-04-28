const mainContainer = document.querySelector("#main-container");
const buttonSubmit = document.querySelector("#submit");
const footer = document.querySelector("footer");
const btnLetters = document.querySelector("#button-letters");
const btnNumbers = document.querySelector("#button-numbers");
const btnWord = document.querySelector("#button-words");
const btnCapitalLettres = document.querySelector("#button-Cletters");
const inputContainer = document.querySelector("#input-container");
const output = document.getElementById("result");

buttonSubmit.addEventListener("click", (event) => {
  // event.preventDefault();
  // event.stopPropagation();  // prevent reloadPage() work and buttons

  const input = document.getElementById("input-text").value;
  if (input === "") {
    output.innerText = "Enter your text or numbers";
    return 0;
  }
  switch (inputContainer.dataset.action) {  // 
    case "letters":
      let count = countLetters(input); // function countWords doing the count
      output.innerText = `The count of letters ${count}`;
      break;
    case "Numbers":
     
      let countNumbers = ExtractAndCountNumbers(input);
      output.innerText = `The count of Numbers ${countNumbers}`;
      break;
    case "CapitalLetters":
      let capitalLetters = countCapitalLetters(input);
      output.innerText = `The count of capital letters are ${capitalLetters}`;
      break;
    case "Word":
      let countword = countWord(input);
      output.innerText = `The count of words in the text ${countword}`;
      break;
  }
});

//----- EventListener for each button ----//
btnLetters.addEventListener("click", (event) => {
  inputContainer.style.visibility = "visible";  // visible the input 
  inputContainer.dataset.action = "letters";
  output.innerText = "Enter your text or numbers"; // Reset the output
  // event.stopPropagation();
});
btnNumbers.addEventListener("click", (event) => {
  inputContainer.style.visibility = "visible";
  inputContainer.dataset.action = "Numbers";
  output.innerText = "Enter your text or numbers"; // Reset the output
  // event.stopPropagation();
});
btnCapitalLettres.addEventListener("click", (event) => {
  inputContainer.style.visibility = "visible";
  inputContainer.dataset.action = "CapitalLetters";
  output.innerText = "Enter your text or numbers"; // Reset the output
  // event.stopPropagation();
});
btnWord.addEventListener("click", (event) => {
  inputContainer.style.visibility = "visible";
  inputContainer.dataset.action = "Word";
  output.innerText = "Enter your text or numbers"; // Reset the output
  // event.stopPropagation();
});

//-------------functions-----------------//

function countLetters(text) {
  let removedWhiteSpace = removeWhiteSpace(text);
  let countCharacters = removedWhiteSpace.length;
  return countCharacters;
}
// function to Extract and count numbers in the text
function ExtractAndCountNumbers(text) {
  let removedWhiteSpace = removeWhiteSpace(text);
  let countNumbers = removedWhiteSpace.match(/\d/gi)
  let countNumber = countNumbers? countNumbers.length:0
  return countNumber;
}

function countCapitalLetters(text) {
  let removedWhiteSpace = removeWhiteSpace(text);
  let findCapitalLetters = removedWhiteSpace.match(/[A-Z]/g)
  let countCapitalletters = findCapitalLetters ? findCapitalLetters.length : 0

  return countCapitalletters;
}

function countWord(text) {
  let words = text.split(/\s+/);
  let count = words.length;

  return count;
}
function removeWhiteSpace(text) {
  return text.replace(/\s/g, "");
}

// footerDate function is to update the date year.
function footerDate() {
  const currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
  });
  footer.textContent = `© Copyright ${formattedDate}, By ME`;
}
footerDate();

function randomColor() {
  // Math.random to generate random number and toString to convert hexadecimals
  const color = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + color;
  color.innerHTML = "#" + randomColor;
}
const btnRandomColor = document.querySelector("#random-color");
btnRandomColor.addEventListener("click", randomColor);

function reloadPage() {
  if (inputContainer.style.visibility !== "hidden") {
    document.location.reload();
  } else {
    inputContainer.style.visibility = "hidden";
  }
}

// document.addEventListener("click", (event) => {
//   if (
//     event.target.tagName !== "BUTTON" &&
//     event.target !== inputContainer &&
//     event.target !== output
//   ) {
//     reloadPage();
//   }
// });

document.addEventListener("click", (event) => {
  // Prevent reload when clicking inside the inputContainer
  if (
    !inputContainer.contains(event.target) &&
    event.target.tagName !== "BUTTON"
  ) {
    reloadPage();
  }
});
