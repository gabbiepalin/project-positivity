let text = "my quote";
let author = "my author";

quote = {
  text: text,
  author: author,
}

console.log(quote.text);

let text2= "my quote2";
let author2= "my author2";

quote2 = {
  text: text2,
  author: author2
}
console.log(quote2.text);

quote3 = {
  text: "my quote 3",
  author: "Rodger Steel"
}
console.log(quote3.text, quote3.author);

let quotes = [];

quotes.push(quote);
quotes.push(quote2);
quotes.push(quote3);

// Node server 
for(let i=0; i < quotes.length; i++)
{
  console.log(quotes[i]);
}
quotes.forEach(quote => console.log(quote));



// console.log(text);