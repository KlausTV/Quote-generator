// Fetch quotes from the API
async function fetchQuotes() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}

// Function to set a random quote and person
function setRandomQuote() {
  fetchQuotes()
    .then((quotes) => {
      if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex].text;
        const person = quotes[randomIndex].author || "Unknown";

        document.querySelector(".quote").textContent = `"${quote}"`;
        document.querySelector(".person").textContent = person;
      }
    })
    .catch((error) => {
      console.error("Error setting random quote:", error);
    });
}

// Event listener for the "New Quote" button
document.querySelector("#new-quote").addEventListener("click", setRandomQuote);

// Load a random quote on page load
setRandomQuote();
