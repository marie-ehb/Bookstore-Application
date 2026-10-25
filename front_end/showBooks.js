const bookTitles = [
    'middlemarch',
    'beloved',
    'ulysses',
    '1984',
    'anna-karenina',
    'bleak-house',
    'emma',
    'in-search-of-lost-time',
    'jane-eyre',
    'madame-bovary',
    'moby-dick',
    'mrs-dalloway',
    'one-hundred-years-of-solitude',
    'persuasion',
    'pride-and-prejudice',
    'the-great-gatsby',
    'the-life-and-opinion-of-tristram-shandy-gentleman',
    'to-the-lighthouse',
    'war-and-peace',
    'wuthering-heights'
]

const moreBooks = document.querySelector(".more");
const books = document.querySelector(".books");

let startIndex = 3;

function addBooks(startIndex)
{
    if (startIndex <= bookTitles.length-3)
    {
        books.innerHTML += `
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex]}" src="assets/${bookTitles[startIndex]}.png" alt="">
          </a>
        </li>
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex+1]}" src="assets/${bookTitles[startIndex+1]}.png" alt="">
          </a>
        </li>
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex+2]}" src="assets/${bookTitles[startIndex+2]}.png" alt="">
          </a>
        </li>`;
        startIndex += 3;
        return startIndex;
    }
    else if (startIndex == bookTitles.length-2)
    {
        books.innerHTML += `
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex]}" src="assets/${bookTitles[startIndex]}.png" alt="">
          </a>
        </li>
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex+1]}" src="assets/${bookTitles[startIndex+1]}.png" alt="">
          </a>
        </li>`;
        moreBooks.style.visibility = 'hidden';
        return;
    }
    else if (startIndex == bookTitles.length-1)
    {
        books.innerHTML += `
        <li>
          <a href="product.html"><img class="cover ${bookTitles[startIndex]}" src="assets/${bookTitles[startIndex]}.png" alt="">
          </a>
        </li>`;
        moreBooks.style.visibility = 'hidden';
        return;
    }
    else
    {
        moreBooks.style.visibility = 'hidden';
        return;
    }
}

moreBooks.addEventListener('click', ()=>
{
  startIndex = addBooks(startIndex);
})
