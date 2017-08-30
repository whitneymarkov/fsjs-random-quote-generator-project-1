// declare variables
let quote = '';
let viewedQuotes = [];

//selects a random quote object from the quotes array
// returns the randomly selected quote objects
// does not display quote more than once until entire array is cycled through
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let splicedQuote = quotes.splice(randomNumber, 1)[0];
    viewedQuotes.push(splicedQuote);
    if (viewedQuotes.length === 7) {
        quotes = viewedQuotes;
        viewedQuotes = [];
    }
    return splicedQuote;
}

//selects a random hex number up to 255
function randomRGB() {
    let colour = Math.floor(Math.random() * 256);
    return colour;
}

// returns random rgb colour
function randomColour() {
    let red = randomRGB();
    let green = randomRGB();
    let blue = randomRGB();
    const rgbColour = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return rgbColour;
}

// changes inner HTML of quote box
function display(message) {
    let output = document.getElementById('quote-box');
    output.innerHTML = quote;
}

function printQuote() {
    // calls the getRandomQuote function
    // constructs a string using the different properties of the quote object
    let print = getRandomQuote();
    quote = '<p class="quote">' + print.quote + '</p>';
    quote +='<p class="source">' + print.source;
    //doesn't add citation if missing
    if ( print.citation ) {
        quote += '<span class="citation">' + print.citation + '</span>';
    } else {
        quote += '';
    }
    //doesn't add year if missing
    if ( print.year ) {
        quote += '<span class="year">' + print.year + '</span>';
    } else {
        quote += '';
    }
    quote += '</p>';

    display(quote);
    // the new value for the background colour
    let rgbColour = randomColour();
    document.body.style.backgroundColor = rgbColour;
}

// run printQuote when button is clicked
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
// run printQuote every 5 seconds
setInterval(function(){
  printQuote();
}, 5000);
