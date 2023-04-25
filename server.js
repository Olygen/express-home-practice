const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    res.send(`<h1>Hello, ${req.params.name} !</h1>`);
  });

app.get('/tip/:total/:tipPercentage', (req, res) => {

    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);

    const tipAmount = total * (tipPercentage / 100);

console.log(req.params);
res.send(`Total amount is ${req.params.total}, you should leave ${tipAmount} if percentage is ${req.params.tipPercentage}%`);
});

// toFixed(n) - just to explore later how to use

const magic = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
  ];

app.get('/magic/:question', (req, res) => {

    const randomIndex = Math.floor(Math.random() * magic.length);
    const answer = magic[randomIndex]

    res.send(`<h1>The answer to your question "${req.params.question}" is "${answer}"</h1>`);
  });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });