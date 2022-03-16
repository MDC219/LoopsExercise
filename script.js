for (i = 1; i <= 7; i++) {
  console.log(i);
}

//2
for (i = 5; i <= 25; i += 4) {
  console.log(i);
}

//3

const wizards = [`Harry Potter`, `Hermione Granger`, `Ron Weasley`];
console.log(wizards);
for (list of wizards) {
  console.log(list);
}
//4 Far of Loop
//------------------------------------------------------------------------------
// 4a.
let HarryPotterMovies = 0;

while (HarryPotterMovies < 8) {
  // console.log(HarryPotterMovies);     //runs inside the while loop (console log)
  HarryPotterMovies++;
}

//5a
const hogwartsHouses = [`Gryffindor`, `Hufflepuff`, `Ravenclaw`, `Slytherin`];
//----------------------------------------------------------------

for (category of hogwartsHouses) {
  // names should match before of in the "for" arguement
  for (letters of category) {
    console.log(letters);
  }
  console.log("=========================");
}

// 4c.
const quote = [`Yer`, `A`, `Wizard`, `Harry`];


//let hagridQuote = quote.join('');
//console.log(hagridQuote);
//let magicQuote = ``;

// OR

for (let i = 0; i < quote.length; i++) {

  magicQuote += `${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

//Bonus #7

for (i = 1; i <=25; i++) {

  



}