// richiamare l'elemento griglia creato su html;
const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

// richiamare l'elemento bottone start per la generazione della griglia
const btnDOMElement = document.getElementById('play-btn');
console.log(btnDOMElement);

// al click su start generare una griglia 10x10
btnDOMElement.addEventListener('click', function() {
    gridDOMElement.innerHTML = ''; //se click più volte sul btn start non genera altre griglie.

    const bombs = getArrayRandomNumber(1, 100, 16);
    console.log(bombs);

    //creare 100 caselle in ciclo for
    for (let i = 0; i < 100; i++) {
    const n = i + 1;
    // console.log(n);

    //creare le caselle inserendo l'index con template literal html
    const htmlCell = `<div class="cell">${n}</div>`
    // console.log(htmlCell);

    // riassegnare le caselle alla griglia con la ripetizione +=
    gridDOMElement.innerHTML += htmlCell
    }

    // richiamare tutte le caselle "cell". Occhio che deve stare dentro la funzione del btn
   const cellDOMElements = document.querySelectorAll('.cell');
//    console.log(cellDOMElements);
   
       
    //aggiungo eventListnener click a tutte le caselle
    for (let i = 0; i < cellDOMElements.length; i++) {
        const currentCell = cellDOMElements[i];
        // console.log(currentCell);

        // stampare il valore index delle caselle clickate
        currentCell.addEventListener('click', function() {
        // console.log('Click sulla casella num:', (i + 1));
        
         //verifica numero casella;
        const cellNumber = parseInt(currentCell.innerHTML);
        console.log(cellNumber, bombs);
        // le caselle clickate diventano blu, aggiungendo la  classe da css
        // currentCell.classList.add('bg-blue');

        // IF numero è presente nell'array;
        if (bombs.includes(cellNumber)) {
            // aggiungere la classe bg-red;
            // game over
            console.log("Hai trovato una bomba!")
            currentCell.classList.add('bg-red');
            alert("GAME OVER!!")
        } else {
            // ELSE 
            // aggiungere la classe bg-blue;
            console.log("Sei salvo.. per il momento")
            currentCell.classList.add('bg-blue');
        }
       
        
        // IF utente ha vinto;
            // mess 'hai vinto' con punteggio.
        })
    }
})

function isBomb(number, bombs) {
    if (bombs.includes(number)) {
        return true
    } return false
}

// generazione di numeri casuali, dove andranno le bombe
function getRandomNumberInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione di generazione di un array vuoto con range e numero massimo di bombe
function getArrayRandomNumber(rangeMin, rangeMax, arrayLenght) {
    const bombsArray = [];
    
    while (bombsArray.length < arrayLenght) {
        const randNum = getRandomNumberInclusive(rangeMin, rangeMax);
        // console.log(randNum);
        
        // condizione se il numero non è presente, lo pusho nell'array. Altrimenti non pushare il numero.
        if (!bombsArray.includes(randNum)) { //occhio al NOT a inizio
            bombsArray.push(randNum);
        }
    }
    return bombsArray
}