const express = require("express")
const app = express()

const { quotes } = require("./data")
const { getRandomElement } = require("./utils")

const PORT = process.env.PORT || 4001

app.use(express.static("public"))

app.get("/api/quotes/random", (req, res) => {
  res.send({ quote: getRandomElement(quotes) })
})

app.get("/api/quotes", (req, res) => {
  const person = req.query.person

  if (person !== undefined) {
    res.send({ quotes: quotes.filter((q) => person === q.person) })
  } else {
    res.send({ quotes })
  }
})

app.post("/api/quotes", (req, res) => {
  const quote = {
    quote: req.query.quote,
    person: req.query.person,
  }

  if (quote.quote && quote.person) {
    quotes.push(quote)
    res.send({ quote })
  } else {
    res.status(400).send()
  }
})

app.delete("/api/quotes/:id/delete", (req, res) => {
  const quoteToDelete = quotes.filter((quote) => quote.id === req.params.id)[0]

  if (quoteToDelete) {
    quotes.splice([quotes.indexOf(quoteToDelete)], 1)
    res.send({ quote: quoteToDelete })
  } else {
    res.status(404).send()
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
