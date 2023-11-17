// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Array to store quotes and jokes
let quotes = [
  {
    text: "“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”",
    author: "John Woods"
  },
  {
    text: "“Programming isn't about what you know; it's about what you can figure out.”",
    author: "Chris Pine"
  },
  // ... other quotes
  {
    text: "“First, solve the problem. Then, write the code.”",
    author: "John Johnson"
  },
  {
    text: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
    author: "Martin Fowler"
  },
  {
    text: "“Don't worry if it doesn't work right. If everything did, you'd be out of a job.”",
    author: "Mosher’s Law of Software Engineering"
  },
  {
    text: "“The best way to predict the future is to invent it.”",
    author: "Alan Kay"
  },
  {
    text: "“The most disastrous thing that you can ever learn is your first programming language.”",
    author: "Alan Kay"
  },
  {
    text: "“The best thing about a boolean is even if you are wrong, you are only off by a bit.”",
    author: "Anonymous"
  },
  {
    text: "“Coding is not just about what you create, but what you learn in the process.”",
    author: "Unknown"
  },
  {
    text: "“The computer was born to solve problems that did not exist before.”",
    author: "Bill Gates"
  },
];
let jokes = [
  "Why do programmers prefer dark mode? Because the light attracts bugs!",
  "Why don't programmers like nature? It has too many bugs.",
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!",
  "Why did the developer go broke? Because he used up all his cache.",
  "What did the server say when it got stuck? This is unresponsive!",
  "Why did the developer go to therapy? Because he had too many issues.",
  "Why do programmers prefer using dark themes? Because light attracts bugs!",
  "Why was the programming team disbanded? They couldn't merge their conflicts.",
  "Why do programmers hate nature? It has too many bugs.",
  "What is a programmer's favorite hangout place? Foo Bar.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct(31) == Dec(25)!",
  "Why do programmers like dark mode? Because the light attracts bugs.",
  "Why was the JavaScript developer sad? Because he didn't know how to deal with promises.",
  "Why don't programmers like nature? It has too many bugs.",
  "Why was the developer unhappy at work? He wanted arrays, but all he got was pointers.",
  "Why don't programmers like to play hide and seek? Because good players are always caught!",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the programmer quit his job? Because he didn't get arrays of appreciation.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why did the programmer go to art school? To get better at drawing rectangles.",
  "Why was the programming language cold? It left its if statement outside.",
  "Why do programmers hate nature walks? Too many bugs.",
];

// Endpoint to get a random quote or joke
app.get('/random', (req, res) => {
  const randomQuote = getRandomQuoteOrJoke();
  res.json(randomQuote);
});

// Endpoint to get a quote by index
app.get('/quotes/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < quotes.length) {
    res.json(quotes[index]);
  } else {
    res.status(404).json({ error: 'Quote not found' });
  }
});

// Endpoint to get a joke by index
app.get('/jokes/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < jokes.length) {
    res.json({ joke: jokes[index] });
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
});

// Endpoint to add a new quote
app.post('/quote', (req, res) => {
  const { quote } = req.body;

  if (!quote) {
    return res.status(400).json({ error: 'Quote text is required' });
  }

  quotes.push({ text: quote });
  res.status(201).json({ message: 'Quote added successfully', quote: { text: quote } });
});

function getRandomQuoteOrJoke() {
  const randomIndex = Math.floor(Math.random() * (quotes.length + jokes.length));
  if (randomIndex < quotes.length) {
    return quotes[randomIndex];
  } else {
    return { joke: jokes[randomIndex - quotes.length] };
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
