//Glue b\w vies & Model
//Controller: UI -> O/P View Layer
//Data Exchange b|w View & Model

import productOperations from "../services/product-operations.js";

async function loadPizzas(){
    const pizza = await productOperations.loadProducts();
    console.log('Pizzas are ', pizza);
}

loadPizzas();


function preparePizzaCard(){
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem";
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = '';
    img.className = 'card-image-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    document.createElement('p');
}






