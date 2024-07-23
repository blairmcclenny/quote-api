const submitButton = document.getElementById("submit-quote")
const deletedQuoteContainer = document.getElementById("deleted-quote")

submitButton.addEventListener("click", () => {
  const id = document.getElementById("id").value
  deletedQuoteContainer.innerHTML = ""

  fetch(`/api/quotes/${id}/delete`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text)
        })
      }
      return response.json()
    })
    .then(({ quote }) => {
      const deletedQuote = document.createElement("div")
      deletedQuote.innerHTML = `
      <h3>Congrats, your quote was deleted!</h3>
      <div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>
      <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
      deletedQuoteContainer.appendChild(deletedQuote)
    })
    .catch((err) => {
      const deletedQuote = document.createElement("div")
      deletedQuote.innerHTML = `<p>${err.message}</p>`
      deletedQuoteContainer.appendChild(deletedQuote)
    })
})
