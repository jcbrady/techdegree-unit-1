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
    source: "David Bowie"
  },
  {
    quote: "I never studied anything, really. I didn't study the drums. I joined bands and made all the mistakes on stage.",
    source: "Ringo Starr"
  },
  {
    quote: "Each generation wants new symbols, new people, new names. They want to divorce themselves from their predecessors.",
    source: "Jim Morrison"
  },
  {
    quote: "When the power of love overcomes the love of power, the world will know peace.",
    source: "Jimi Hendrix"
  },
  {
    quote: "There are two basic motivating forces: fear and love. When we are afraid, we pull back from life.",
    source: "John Lennon"
  }
]

console.log(quotes)

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false)
