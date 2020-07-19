/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: "The truth is of course is that there is no journey. We are arriving and departing all at the same time.",
    source: "—David Bowie",
    year: "1980's",
    citation: "Brainyquote.com",
    living: false
  },
  {
    quote: "I never studied anything, really. I didn't study the drums. I joined bands and made all the mistakes on stage.",
    source: "—Ringo Starr",
    year: "1960's",
    citation: "Brainyquote.com",
    living: true
  },
  {
    quote: "Each generation wants new symbols, new people, new names. They want to divorce themselves from their predecessors.",
    source: "—Jim Morrison",
    living: false
  },
  {
    quote: "When the power of love overcomes the love of power, the world will know peace.",
    source: "—Jimi Hendrix",
    living: false
  },
  {
    quote: "There are two basic motivating forces: fear and love. When we are afraid, we pull back from life.",
    source: "—John Lennon",
    year: "1960's",
    living: false
  }
]

// outputs the raw array and objects to the console
console.log(quotes)

// SOME DIFFERENT WAYS OF LOOPING THROUGH THE ARRAY OF OBJECTS:
// outputs text
for (i = 0; i < quotes.length; i++) {
  let arr = quotes[i]
  for (let propName in arr) {
    console.log(arr[propName])
  }
}

// outputs {objects}
for (let propName in quotes) {
  console.log(quotes[propName])
}

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {}

/***
 * `printQuote` function
 ***/
let count = 0
function printQuote() {
  console.log(count++)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false)
