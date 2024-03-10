const $body = document.querySelector('body');
const API = 'https://api.escuelajs.co/api/v1/products?offset=5&limit=15';
import logo from './assets/volleyball.svg';
import './styles/styles.css'; // no se ponen nombre de archivo porque no se hace referencia dentro del documento pero si se hace el import para que rollup lo tome en cuenta y sus plugins hagan su trabajo

const main = async () => {
  const response = await fetch(API);
  const products = await response.json();
  const output = products.map((product) => {
    return `
      <article class="Card">
        <img src="${product.images[0]}" alt="Fake store" />
        <h2>${product.title} <small>Precio $${product.price}</small></h2>
        <p>$ 100</p>
        <button type="button">Buy</button>
      </article>
    `;
  }).join('');

  const newItem = document.createElement('section');
  newItem.classList.add('Items');
  newItem.innerHTML = output;

  const newHeader = document.createElement('header');
  const newImage = document.createElement('img');
  newImage.src = logo;

  newHeader.appendChild(newImage);
  $body.appendChild(newHeader);
  $body.appendChild(newItem);
};

main();
