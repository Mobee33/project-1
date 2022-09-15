// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"The way to get started is to quit talking and begin doing"`,
   person: `-Walt Disney`},
   {quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall. "`,
   person: `-Nelson Mandela`},
   {quote: `"If life were predictable it would cease to be life, and be without flavor."`,
   person: `-Eleanor Roosevelt`},
   {quote: `"Life is what happens when you're busy making other plans."`,
   person: `-John Lennon`},
   {quote: `"You will face many defeats in life, but never let yourself be defeated."`,
   person: `-Maya Angelou`},
   {quote: `"Life is either a daring adventure or nothing at all"`,
   person: `-Helen Keller`},
   {quote: ` "The purpose of our lives is to be happy."`,
   person: `-Dalai Lama`},
   {quote: `"You only live once, but if you do it right, once is enough."`,
   person: `-Mae West`},
   {quote: ` "Life is really simple, but we insist on making it complicated."`,
   person: `-Confucius`},
   {quote: ` "Life is ours to be spent, not to be saved."`,
   person: `-D. H. Lawrence`},
   {quote: ` "Life is a long lesson in humility."`,
   person: `-James M. Barrie`},
   {quote: ` "Love the life you live. Live the life you love."`,
   person: `-Bob Marley`},
   {quote: ` "Life is made of ever so many partings welded together."`,
   person: `-Charles Dickens`},
];

btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() *quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})
