async function fetchData() {
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  return data;
}

/**
 * @param {object} cardData
 * @param {number} cardData.id
 * @param {string} cardData.title
 * @param {string} cardData.src
 * @param {number} cardData.likes
 */
function createMyCard(cardData) {
  const divEl = document.createElement('div');
  divEl.className = 'my-card';
  divEl.dataset.cardId = cardData.id;
  
  const imgEl = document.createElement('img');
  imgEl.src = cardData.src;

  const h2El = document.createElement('h2');
  h2El.innerText = cardData.title;

  const spanEl = document.createElement('span');
  spanEl.innerText = cardData.likes + ' likes';

  divEl.append(imgEl, h2El, spanEl);

  return divEl;
}

fetchData().then((cardsData) => {
  for (const cardData of cardsData) {
    document.body.appendChild(createMyCard(cardData));
  }
});
