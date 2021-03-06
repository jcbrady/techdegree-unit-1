/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array - Stores data in an array of objects. Note that some objects
 * have more properties than others. This makes adding content optional and more flexible for the
 * content creator.
 ***/

const quotes = [
  {
    quote: "The truth of course is that there is no journey. We are arriving and departing all at the same time.",
    source: "David Bowie",
    year: "1980's",
    citation: "Brainyquote.com"
  },
  {
    quote: "I never studied anything, really. I didn't study the drums. I joined bands and made all the mistakes on stage.",
    source: "Ringo Starr",
    year: "1960's",
    citation: "Brainyquote.com",
    tag: " — Yes, he's still alive!"
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
    source: "John Lennon",
    year: "1960's"
  }
]

/***
 * `getRandomQuote` function - Generates a random number and returns a random
 * object from the quotes array.
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randomNumber]
  return randomQuote
}

/***
 * `printQuote` function - calls the getRandomQuote() function and puts the
 * return results in a variable. Builds an html object and uses condiional logic
 * based on whether or not the array contains the ressults.
 ***/

function printQuote() {
  let randomNum = getRandomQuote()
  let html = `
  <p class="quote">${randomNum.quote}</p>
  <p class="source">${randomNum.source}
  `
  // Display only if the object contains any of these optional properties: citation, year, or tag
  if (randomNum.citation) {
    html += `<span class="citation">${randomNum.citation}</span>`
  }
  if (randomNum.year) {
    html += `<span class="year">${randomNum.year}</span>`
  }
  if (randomNum.tag) {
    html += `<span class="year">${randomNum.tag}</span>`
  }

  html += `</p>`
  document.getElementById("quote-box").innerHTML = html

  changeColor()
}

function changeColor() {
  let range = 256
  const randomNumber1 = Math.floor(Math.random() * range)
  const randomNumber2 = Math.floor(Math.random() * range)
  const randomNumber3 = Math.floor(Math.random() * range)
  document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`
}

setInterval(function () {
  changeColor()
  printQuote()
}, 15000)

/***
 * click event listener for the print quote button - Listens for user interaction button click
 * to add a new quote to the viewable html page
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false)
