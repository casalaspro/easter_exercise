console.log("Hapy Easter!");

// CIFRARIO

// ciclare la parola
  // per ogni vocale intercettata uniamo la stringa f e ripetiamo la vocale stessa
  // reintroduciamo all'interno della stringa la stringa generata

const word = "marco";
let newWordArray = [];
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function isVowel(letter){
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let response = false;
  for(let i=0; i<vowels.length; i++){
    if(letter === vowels[i]){
      response = true;
    }
  }
  return response;
}

for(let i=0; i<word.length; i++){
  if(isVowel(word[i])){
    const newString = word[i] + "f" + word[i];
    newWordArray.push(newString);
  }else{
    newWordArray.push(word[i]);
  }
}

const newWordString = newWordArray.join("");

console.log(newWordString);

// STRINGA "INFINITA"

// creare una funzione che accetti i due estremi della stringa che ci interessa
  // scoprire a cosa equivale la partenza
  // scoprire a cosa equivale la fine
  // scoprire quante volte ciclare l'array
  // stampare il risultato

  const infiniteString = "ABCDE";

  const firstNumber = 13;
  const secondNUmber = 16;