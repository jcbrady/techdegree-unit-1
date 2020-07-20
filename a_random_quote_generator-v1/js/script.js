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
//console.log(quotes)

// SOME DIFFERENT WAYS OF LOOPING THROUGH THE ARRAY OF OBJECTS:
// outputs text
// for (i = 0; i < quotes.length; i++) {
//   let arr = quotes[i]
//   for (let propName in arr) {
//     console.log(arr[propName])
//   }
// }

// outputs {objects}
// for (let propName in quotes) {
//   console.log(quotes[propName])
// }

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randomNumber]
  // console.log("randomNumber inside getRandomQuote function: " + randomNumber)
  // console.log("randomQuote: " + randomQuote.quote + " " + randomQuote.source)
  // console.log({ quote: randomQuote })

  // console.log(randomQuote)

  return randomQuote
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  let rando = getRandomQuote()
  let html = `
  <p class="quote">${rando.quote}</p>
  <p class="source">${rando.source}
  `
  if (rando.citation) {
    console.log("citation")
    //html +=   `<span class="citation"> quote citation </span>
    // <span class="year"> quote year </span>
    //</p>`
  }
  if (rando.year) {
    console.log("year")
  }
  if (rando.living) {
    console.log("yes, they are still alive!")
  } else {
    console.log("They have passed away.")
  }

  console.log(rando)
  console.log(html)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false)

//console.log(getRandomQuote())
