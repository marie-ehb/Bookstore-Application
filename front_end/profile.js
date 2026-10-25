const isLoggedIn = true;
const listOfBooks = [
    {
        title: 'Middlemarch',
        author: 'George Eliot',
        review: '★★★☆☆',  
        dueDate: '22/06/2025',
        didArrive: true,
        cover: 'middlemarch.png'
    },
    {
        title: 'Beloved',
        author: 'Toni Morrison',
        dueDate: '02/11/2026',
        didArrive: false,
        cover: 'beloved.png'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        dueDate: '01/01/1900',
        didArrive: false,
        cover: 'moby-dick.png'
    }
]

const orders = document.querySelector('.orders');
const showAllBooksBtn = document.querySelector('.more');

let showAllBooks = false;


showAllBooksBtn.addEventListener('click', ()=>
{
    showAllBooks ^= true;
    orders.innerHTML = '';   
    addBookToProfile();   
})


function addReview(book)
{
    if (book.review !== undefined) {
        return `
            <p class="stars" role="img" aria-label="x out of 5 stars">${book.review}</p>
            <a class="text-link" href="#">READ REVIEW</a>`;
    } else {
        return '<a class="text-link add-review" href="#">ADD REVIEW</a>';
    }
}

function arrivalDate(book)
{
    if (!book.didArrive)
    {
        return `<p class="delivery">Will arrive on <time datetime="${book.dueDate}">${book.dueDate}</time></p>` 
    }
    else
    {
        return `<p class="delivery">Has arrived on <time datetime="${book.dueDate}">${book.dueDate}</time></p>` 
    }
}

function addBookToProfile()
{
    let num = listOfBooks.length;
    if (!showAllBooks)
    {
        showAllBooksBtn.innerHTML = 'SHOW ALL BOOKS';   
        num = 2;
    }
    else
    {
        showAllBooksBtn.innerHTML = 'SHOW LESS';   
    }
    for (let i = 0; i < num; i++) {
 
        orders.innerHTML +=`
        <li class="order">
        <a href="product.html"><img class="cover ${listOfBooks[i].title.toLowerCase()}" src="assets/${listOfBooks[i].cover}" alt="${listOfBooks[i].title} cover"></a>
        <div class="order-info">
            <div>
            <h2>${listOfBooks[i].title.toUpperCase()}</h2>
            <p class="author">${listOfBooks[i].author}</p>
            ${addReview(listOfBooks[i])}
            </div>
            ${arrivalDate(listOfBooks[i])}
        </div>
        </li>`;    
    }
}

addBookToProfile();
