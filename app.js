document.addEventListener('DOMContentLoaded', () =>{

const displayCurrentPlayer = document.querySelector('.currentPlayer')
const player1 = "red";
const player2 = "yellow";
currentPlayer = player1;
displayCurrentPlayer.textContent = currentPlayer
const grid = document.querySelector('.grid')
const row = 6
const col = 7
// Create Array
const fieldArray = new Array(6*7)


createBoard()


function createBoard(){

    for (let i = 0; i < row*col; i++){
        
        const field = document.createElement('div')
        field.setAttribute('data-id', i)
        field.classList.add('white')
        field.addEventListener('click', insertCoin)
        fieldArray[i] = field
        grid.appendChild(field)
    }
}

function insertCoin(){
    const fieldId = parseInt(this.getAttribute('data-id'))
    
    if(fieldId > 34){
        if(currentPlayer === player1){
            this.classList.add('red')
            this.removeEventListener('click', insertCoin)
            currentPlayer = player2
            displayCurrentPlayer.textContent = currentPlayer
        }
        else if (currentPlayer === player2){
            this.classList.add('yellow')
            this.removeEventListener('click', insertCoin)
            currentPlayer = player1
            displayCurrentPlayer.textContent = currentPlayer
        }
    }
    
    else if(fieldId <= 34 && (fieldArray[fieldId + col].classList.contains('red') === true) || 
            (fieldArray[fieldId + col].classList.contains('yellow') === true)){
        if(currentPlayer === player1){
            this.classList.remove('white')
            this.classList.add('red')
            this.removeEventListener('click', insertCoin)
            currentPlayer = player2
            displayCurrentPlayer.textContent = currentPlayer
        }
        else if (currentPlayer === player2){
            this.classList.add('yellow')
            this.removeEventListener('click', insertCoin)
            currentPlayer = player1
            displayCurrentPlayer.textContent = currentPlayer
        }
    } 
    checkForWin()
    }

function checkForWin(){
    // Winning Array
    let winningArray = [ 
        [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
        [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
        [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
        [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
        [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
        [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
        [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
        [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
        [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
        [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
        [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
        [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
        [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
        [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
        [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
        [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
        [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
        [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
        [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
        [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
        [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
        [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
        ]; 
    
    // take the 4 values in each winningArray
    for(let i = 0; i < winningArray.length; i++){
        const field1 = fieldArray[winningArray[i][0]]
        const field2 = fieldArray[winningArray[i][1]]
        const field3 = fieldArray[winningArray[i][2]]
        const field4 = fieldArray[winningArray[i][3]]
    
    
    // check arrays if they all have the class of red
    if(field1.classList.contains('red') &&
    field2.classList.contains('red') &&
    field3.classList.contains('red') &&
    field4.classList.contains('red')){
    displayCurrentPlayer.textContent = `${player1} wins`
    for(let field of fieldArray){
        field.removeEventListener('click', insertCoin)
    }
    }

     // check arrays if they all have the class of red
     else if(field1.classList.contains('yellow') &&
     field2.classList.contains('yellow') &&
     field3.classList.contains('yellow') &&
     field4.classList.contains('yellow')){
     displayCurrentPlayer.textContent = `${player2} wins`
     for(let field of fieldArray){
        field.removeEventListener('click', insertCoin)
    }
     }
    }
}


});