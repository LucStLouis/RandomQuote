
// first, an array with object literals for my quotes themselves//
var quotes = [
  {
    quote : "You miss 100% of the shots you don't take.",
  source : "Wayne Gretzky",
  year : 1983,
  sub : "hockey legend"
},

{ 
  quote : "It doesn't mean that much to me to mean that much to you",
  source : "Neil Young",
  year : 1972,
  sub : 'album - Harvest'
},

  { 
    quote : "Just remember you are probably in the most boring and monotonous part right now.",
    source : "Brent Michalski",
    year : 2020,
    sub : "My dad"
  },

  {
    quote : "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    source : "Henry David Thoreau",
    year : 1845,
    sub : "Philosopher, author, botanist"
  },

  {
    quote : "Alone here in the kitchen I feel there's something missing. I'd beg for some forgiveness, but begging's not my business.",
    source : "Squeeze",
    year : 1979, 
    sub :  "Christopher Henry Difford / Glenn Martin Tilbrook",
  },

  {
    quote : "True love will find you in the end.",
    source : "Daniel Johnston",
    year : 1985,
    sub : "album - 'Retired Boxer'"

  }
]

/***
create a function to generate and return a random number within the parameters of the length of my array
***/
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  
  
    var randomQuote = array[quoteIndex];
   
  return randomQuote;
}


/***
call to print the function's return to the web page
***/
function printQuote() {
  var result = getRandomQuote(quotes); // Calls and stores the getRandomQuote in a variable
  var message = '<p class = "quote">' + result.quote + '</p>';
  if (result.source) {
  message += '<p class = "source">' + result.source + '</p>'};
  if (result.year) {
  message += '<p span = "year">' + result.year + '</p>'};
  if (result.sub){
  message += '<p span = "citation">' + result.sub + '</p>'};

  document.getElementById('quote-box').innerHTML = message; 

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
