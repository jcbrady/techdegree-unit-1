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
    year: "1980's"
  },
  {
    quote: "I never studied anything, really. I didn't study the drums. I joined bands and made all the mistakes on stage.",
    source: "—Ringo Starr"
  },
  {
    quote: "Each generation wants new symbols, new people, new names. They want to divorce themselves from their predecessors.",
    source: "—Jim Morrison"
  },
  {
    quote: "When the power of love overcomes the love of power, the world will know peace.",
    source: "—Jimi Hendrix"
  },
  {
    quote: "There are two basic motivating forces: fear and love. When we are afraid, we pull back from life.",
    source: "—John Lennon",
    year: "1960's"
  }
]

//console.log(quotes)
//console.log(quotes[0].quote)
//console.log(quotes[0].source)
//console.log(Object.keys(quotes))
//console.log(Object.values(quotes))
//console.log(Object.keys(year))

// for in loop - logs all keys and values
// for (let propName in quotes) {
//   console.log(propName)
//   console.log(quotes[propName])
// }

const student = [
  {
    name: "Quincy",
    grades: [60, 85, 90, 71]
  },
  {
    name: "Casey",
    grades: [70, 95, 95, 81]
  }
]

for (i = 0; i < student.length; i++) {
  let arr = student[i]
  console.log(arr)
  for (let propName in arr) {
    console.log(`In the "for in" loop: ${arr[propName]}`)
  }
}
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
