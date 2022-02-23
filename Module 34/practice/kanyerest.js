const loadQuotes = async () => {
  const url = 'https://api.kanye.rest/'
  const res = await fetch(url);
  const data = await res.json();
  displayQuotes(data)
  
  // fetch('https://api.kanye.rest/')
  // .then(res => res.json())
  // .then(data => displayQuotes(data))
}

const displayQuotes = (data) =>{
  const quotesContainer = document.getElementById('quotes-container');
  quotesContainer.innerHTML = "";
  const quoteDiv = document.createElement('p')
  quoteDiv.innerHTML =`${data.quote}`
  quotesContainer.appendChild(quoteDiv);
}