## **Cifrario - Facile**

Data una stringa, restituire la versione in alfabeto farfallino (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)

Esempio:

```js
stringa = “marco”;
// risultato mafarcofo
```

## **Stringa "infinita" - Difficile**

*Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita, restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi.*

Esempio:

```jsx
stringa = "ABCDE";
start = 13;
end = 16;
// risultato DEAB
```

## **Array**

### Facile

*Dato un array di numeri interi, restituire un array con solo i numeri pari*

Esempio:

```jsx
array = [1,3,5,2,10,6,4,9]
// risultato [2,10,6,4]
```

### Medio

*Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)*

Esempio:

```jsx
array = [1,3,5,2,10,6,4,9]
even = true
// risultato [2,10,6,4]

array = [1,3,5,2,10,6,4,9]
even = false
// risultato [1,3,5,9]
```

### Medio - versione 2

*Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato*

Esempio:

```jsx
userNumber = 5
array = [1,3,5,2,10,6,4,9]
// risultato [5,10]
```

### Difficile

*Dato un array di oggetti, ordinare l'array in base al valore di una proprietà degli oggetti (es. name: “Marco”, age: 22)*

Esempio:

```jsx
array = [
	{ name: "Marco", age: 22 },
	{ name: "Anna", age: 24 },
	{ name: "Luca", age: 17 },
	{ name: "Gianni", age: 53 }
];
// risultato
// [
//     { name: "Luca", age: 17 },
//     { name: "Marco", age: 22 },
//     { name: "Anna", age: 24 },
//     { name: "Gianni", age: 53 }
// ]
```

## **Sherlock Snack - Difficile**

*La sfida di questi snack è che non è presente nessuna traccia da seguire. Avrete come esempi solo i dati di INPUT e di OUTPUT che dovrete gestire nelle vostre funzioni.
Prima di scrivere il codice assicuratevi di comprendere bene la relazione fra INPUT e OUTPUT.*

### Snack 1

INPUT: `[1,2,3,4,5,6,7]` 
OUTPUT: `14` 

INPUT: `[5,10,15,20]` 
OUTPUT: `25` 

INPUT: `[10,10]` 
OUTPUT: `10`

### Snack 2

INPUT: `1, "Ciao"` 
OUTPUT: `"oaiC"` 

INPUT: `26, "Test"` 
OUTPUT: `"Test"` 

INPUT: `117, "Vue"` 
OUTPUT: `"euV"`

*NOTA: i parametri in ingresso per la funzione sono 2*

### Snack 3

INPUT: `"cane","gatto"` 
OUTPUT: `"a"` 

INPUT: `"troppo", "poco"` 
OUTPUT: `""` 

INPUT: `"sempre", "mamp"` 
OUTPUT: `"mp"`

*NOTA: i parametri in ingresso per la funzione sono 2*

### Snack 4

INPUT: `"maammmmp"` 
OUTPUT: `"mamp"` 

INPUT: `"ciaooooooooo"` 
OUTPUT: `"ciao"` 

INPUT: `"ppppprrrrrrrrroovvvvvvvaaaaaaaaaaaaa"` 
OUTPU: `"prova"`

### Snack 4 - Difficile

INPUT: `"maammmmp"` 
OUTPUT: `"ma2m4p"` 

INPUT: `"ciaooooooooo"` 
OUTPUT: `"ciao9"` 

INPUT: `"ppppprrrrrrrrroovvvvvvvaaaaaaaaaaaaa"` 
OUTPU: `"p5r9o2v7a13"`
