const isLoggedIn = true;

let products = [
    {
        title: 'Middlemarch',
        author: 'George Eliot',
        price: 20,
        amount: 1,
        cover: 'middlemarch.png',
        amountinStock: 20
    },
    {
        title: 'Ulysses',
        author: 'James Joyce',
        price: 20,
        amount: 2,
        cover: 'ulysses.png',
        amountinStock: 3
    }
]

const cart = document.querySelector('.cart');
const cartTableBody = document.querySelector('.cart-table-body');
const cartTableFooter = document.querySelector('.cart-table-footer');
const qty = document.querySelector('.qty');

function showProducts()
{
    let totalPrice = 0;
    if (products.length === 0)
    {
      cart.innerHTML = `
        <h2>Your cart is empty!</h2>
        <a class="go-back" href="index.html">GO BACK</a>
        `;
    }
    else
    {
    for (const product of products)
    {
    totalPrice += product.amount * product.price;
    cartTableBody.innerHTML += `
        <tr>
          <td>
            <div class="book">
              <a href="product.html"><img class="cover ${product.title}" src="assets/${product.cover}" alt="${product.title} cover"></a>
              <div>
                <p class="title">${product.title.toUpperCase()}</p>
                <p class="author">${product.author}</p>
              </div>
            </div>
          </td>
          <td class="col-price big">€ ${product.price}</td>
          <td class="col-amount"><input class="qty" type="number" min="1" max="${product.amountinStock}" value="${product.amount}" data-title="${product.title}" aria-label="Amount of ${product.title}"></td>
          <td class="col-subtotal big">€ ${product.amount*product.price}</td>
          <td class="col-remove">
            <button type="button" class="trash" data-title="${product.title}" aria-label="Remove ${product.title}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6l1 2h5v2H3V4h5zM5 8h14l-1.200 14H6.200zm4 2v10h2V10zm4 0v10h2V10z"/></svg>
            </button>
          </td>
        </tr>`
    }
    cartTableFooter.innerHTML = `
        <tr>
          <td><a class="go-back" href="index.html">GO BACK</a></td>
          <th scope="row" class="col-price total-label">TOTAL PRICE</th>
          <td class="col-amount total-value">€ ${totalPrice}</td>
          <td class="col-subtotal"><a href="account.html"><button type="button" class="pay">PAY</button></a></td>
          <td></td>
        </tr>`    

    }
}

function removeProduct(title)
{
    for (let i = 0; i < products.length; i++)
    {
        if (products[i].title === title)
        {
            products.splice(i, 1);
        }
    }
    return products;
}



showProducts();

cartTableBody.addEventListener('click', (e) =>
{
    const btn = e.target.closest('.trash');
    if (!btn) return;

    products = removeProduct(btn.dataset.title);
    cartTableBody.innerHTML = '';
    cartTableFooter.innerHTML = '';
    showProducts();
});

function getTotal()
{
    return products.reduce((sum, p) => sum + p.price * p.amount, 0);
}

function updateTotal()
{
    // Query at call time: the footer gets replaced when showProducts() re-renders
    document.querySelector('.total-value').textContent = `€ ${getTotal()}`;
}

cartTableBody.addEventListener('input', (e) =>
{
    const input = e.target.closest('.qty');
    if (!input) return;

    const amount = parseInt(input.value, 10);
    if (!Number.isInteger(amount) || amount < 1) return; // ignore empty/invalid while typing

    const product = products.find(p => p.title === input.dataset.title);
    product.amount = amount;

    // Update this row's subtotal
    input.closest('tr').querySelector('.col-subtotal').textContent = `€ ${product.price * amount}`;

    updateTotal();
});