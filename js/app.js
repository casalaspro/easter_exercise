console.log("Happy Easter!");

// CIFRARIO

// ciclare la parola
  // per ogni vocale intercettata uniamo la stringa f e ripetiamo la vocale stessa
  // reintroduciamo all'interno della stringa la stringa generata

// const word = "marco";
// let newWordArray = [];
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function isVowel(letter){
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let response = false;
//   for(let i=0; i<vowels.length; i++){
//     if(letter === vowels[i]){
//       response = true;
//     }
//   }
//   return response;
// }

// for(let i=0; i<word.length; i++){
//   if(isVowel(word[i])){
//     const newString = word[i] + "f" + word[i];
//     newWordArray.push(newString);
//   }else{
//     newWordArray.push(word[i]);
//   }
// }

// const newWordString = newWordArray.join("");

// console.log(newWordString);

// STRINGA "INFINITA"

// // creare una funzione che accetti i due estremi della stringa che ci interessa
//   // scoprire a cosa equivale la partenza
//   // scoprire a cosa equivale la fine
//   // scoprire quante volte ciclare l'array
//   // stampare il risultato

//   const infiniteString = "ABCDE";

//   const firstNumber = 13;
//   const secondNumber = 16;

//   const stringArray = [];

//   const firstLetter = infiniteString[Math.floor(firstNumber/infiniteString.length)+(firstNumber%infiniteString.length) -2];

//   let indice = Math.floor(firstNumber/infiniteString.length)+(firstNumber%infiniteString.length) -2;

//   console.log(indice);

//   for(let i = firstNumber; i<=secondNumber; i++){
//     if(indice<infiniteString.length -1){
//       stringArray.push(infiniteString[indice]);
//       console.log("indice nel range")
//       console.log(stringArray);
//       indice++
//     }else if(indice === infiniteString.length -1){
//       stringArray.push(infiniteString[indice]);
//       indice = 0;
//       console.log("reset indice");
//     }
//   }

//   const stringResult = stringArray.join("");

//   console.log(stringResult);

  // ARRAY FACILE

//   const inputArray = [1,3,5,2,10,6,4,9];
//   const outputArray = [];
//   const filterPair = false;
//   const divisorNUmber = 5;

//   // inputArray.forEach((element)=>{
//   //   if(element%2 === 0){
//   //     outputArray.push(element);
//   //   }
//   // })

//   // ARRAY MEDIO

//   // inputArray.forEach((element)=>{
//   //   let controlNumber = 0;
//   //   if(filterPair === false){
//   //     controlNumber = 1;
//   //   }
//   //     if(element%2 === controlNumber){
//   //       outputArray.push(element);
//   //     }
//   //   })

//   // ARRAY MEDIO 2

//   inputArray.forEach((element)=>{
    
//     if(element%divisorNUmber === 0){
//       outputArray.push(element);
//     }
//     })


// console.log(outputArray);

// ARRAY DIFFICILE

let object = [
	{ name: "Marco", age: 22 },
	{ name: "Anna", age: 24 },
	{ name: "Luca", age: 17 },
	{ name: "Gianni", age: 53 }
];


let continueCycle = true;

while(continueCycle){

  continueCycle = false;

  for(let i = 0; i<object.length-1; i++){
    
    if(object[i].age > object[i+1].age){
      const temp = object[i];
      object[i] = object[i+1];
      object[i+1] = temp;
      console.log("Ho effettuato uno scambio");
      continueCycle = true;
    }
  }
}

console.log(object);