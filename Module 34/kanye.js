const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.jason())
  .then(data => displayQuote(data));
}
const displayQuote = quote => {
  const quoteElement = document.getElementById('quote')
  quoteElement.innerHTML = quote.quote; 
}