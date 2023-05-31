const generatePositivityBtn = document.querySelector(".generate-positivity-btn");
const positiveImage = document.querySelector(".positivity-quote img");
const positiveQuote = document.querySelector(".positivity-quote .positive-quote");
const quoteAuthor = document.querySelector(".positivity-quote .quote-author");

const generatePositivityQuote = () => {
  console.log("generatePositivityQuote");
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
}

generatePositivityBtn.addEventListener("click", generatePositivityQuote);