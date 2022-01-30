
//Empty Array 
var quotes = [];

//Empty Object
quotes = [{},{},{},{},{},{},{}];

//Store the individual properties of the quotes
quotes = [{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
            source:"Nelson Mandela"},

        {quote:"May the Force be with you.",
        source:"Obi-Wan Kenobi",
        citation:"Star Wars",
        year:"1977"},
    
        {quote:"I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
        source:"Bill Gates",},
    
        {quote:"It is better to fail in originality than to succeed in imitation.",
        source:"Herman Melville"},

        {quote:"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
        source:"J.K. Rowling",
        year:"2008"},

        {quote:"Don't cry because it's over. Smile because it happened.",
        source:"Dr. Seuss"},

        {quote:"To thine own self be true.",
        source:"William Shakespeare",
        citation:"Hamlet",
        year:"1603"}]



//getRandomQuote function
function getRandomQuote()
{
    // variable that generates a random number between zero and the last index in the quotes array
    var randomeNumber = Math.floor(Math.random()*quotes.length);

    //storing random object from the quotes array
    var randomObject = quotes[randomeNumber];

    //Returning the variable storing the random quote object
    return randomObject;
    
}



//printQuote function

function printQuote()
{
    //Call getRandomQuote method
    var randomQuote = getRandomQuote();

    //Add the quote and source to an html String
    var ptoHTML1 = "<p class='quote'>" + randomQuote.quote + "<p class='source'>" + randomQuote.source;
    console.log(randomQuote.quote);
    console.log(randomQuote.source);

    //If citation exists concatenate it to ptoHTML1 html string
    if(randomQuote.citation)
    {
        ptoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
        console.log(randomQuote.citation);
    }

    //If year exists concatenate it to ptoHTML1 html string
    if(randomQuote.year)
    {
        ptoHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
        console.log(randomQuote.year);
    }

    ptoHTML1 += "</p>";

    
     //Set the innerHTML of the quote-box div to the complete HTML string
     document.getElementById('quote-box').innerHTML = ptoHTML1;

}

//Click event listener for the print quote button
console.log(document.getElementById("load-quote"));
document.getElementById('load-quote').addEventListener("click",printQuote);


