//selects a random quote object from the quotes array
// returns the randomly selected quote objects
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    return randomQuote;
}

//selects a random hex number up to 256
function randomRGB() {
    let color = Math.floor(Math.random() * 256);
    return color;
}

function printQuote() {
    //random background colour
    let red = randomRGB();
    let green = randomRGB();
    let blue = randomRGB();
    const rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    // calls the getRandomQuote function
    // constructs a string using the different properties of the quote object
    let print = getRandomQuote();
    let quote = '<p class="quote">' + print.quote + '</p>';
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

    // the new value for the background colour
    document.body.style.backgroundColor = rgbColor;
    // stores the returned quote object in a variable.
    document.getElementById('quote-box').innerHTML = quote;
}

document.getElementById('loadQuote').addEventListener('click', printQuote, false);
