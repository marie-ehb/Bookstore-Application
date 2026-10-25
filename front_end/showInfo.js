// if click cover on index html, content changes on product.html

let book = 'beloved';

let books = [
    {
        title: 'Middlemarch',
        author: 'George Eliot',
        description: 'Following the lives and loves of the inhabitants of a provincial English town in the middle of the 19th century, Eliot\'s sixth novel is widely recognised as her masterpiece. Though she originally planned to write two separate books, Eliot merged them to create an intricately patterned epic that explores work and marriage, ambition and creativity, selfishness and community spirit against a background of political, social and technological change. An immediate bestseller, it has shaped literature in English ever since; few will be surprised to see it at the top of our list. As Emily Dickinson wrote: "What do I think of Middlemarch? What do I think of glory?"',
        price: 20,
        isInStock: true,
        cover: 'middlemarch.png'
    },
    {
        title: 'Beloved',
        author: 'Toni Morrison',
        description: 'Winner of the Pulitzer prize for fiction, Morrison\'s devastating account of formerly enslaved people after the American civil war was loosely based on the life of Margaret Garner, who killed her own daughter to spare her from being forced back into slavery. The novelist described Beloved as a story about "the pitched battle between remembering and forgetting". This uncanny, literally haunted portrait of both physical and psychological violence remains one of the most banned and challenged books in American libraries, and one of the most cherished. In 1993, Morrison became the first Black woman to be awarded the Nobel prize in literature.',
        price: 15,
        isInStock: true,
        cover: 'beloved.png'
    },
    {
        title: 'Ulysses',
        author: 'James Joyce',
        description: 'The modernist behemoth that mapped one day in Dublin - 16 June 1904 - and changed literature for ever. Originally conceived as a short story for his collection Dubliners, written over a seven-year period and banned in the US and the UK for obscenity before it was even published as a complete book, Joyce\'s sprawling, stream-of-consciousness take on Homer\'s Odyssey is one of the most challenging and rewarding novels written in English.',
        price: 20,
        isInStock: false,
        cover: 'ulysses.png'
    }
]

const title = document.querySelector("h1");
const author = document.querySelector(".author");
const description = document.querySelector(".description");
const price = document.querySelector(".price");
const cartBtn = document.querySelector(".add-to-cart");
const cover = document.querySelector(".cover");


let bookIndex;
for (let index = 0; index < books.length; index++) {
    if (book === books[index].title.toLowerCase())
    {
        bookIndex = index;
    }
}

function changeContent(bookIndex)
{
    if (bookIndex)
    {
        title.innerHTML = books[bookIndex].title;
        author.innerHTML = books[bookIndex].author;
        description.innerHTML = books[bookIndex].description;
        price.innerHTML = "€ " + books[bookIndex].price;
        cartBtn.style.visibility = books[bookIndex].isInStock?'visible':'hidden';
        cover.src = `assets/${books[bookIndex].cover}`;
        cover.alt = `${books[bookIndex].title} by ${books[bookIndex].author}`;
    }
    else
    {
        title.innerHTML = "Book not found!";
        author.innerHTML = "";
        description.innerHTML = "";
        price.innerHTML = "";
        cartBtn.style.visibility = 'hidden';
        cover.src = ``;
        cover.alt = "";

    }
}

changeContent(bookIndex);
