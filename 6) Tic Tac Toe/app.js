const allSquares = document.querySelectorAll('.board__square')
const title = document.querySelector('.board__title')
const restartBtn = document.querySelector(".restart")

let currentPlayer = 'X'
let gameOver = false
let board = new Array(9)


allSquares.forEach((square, i) => { // Looping through all the buttons
    /*Many thinggs need to happen after the user makes a move.
    they must be in the order that they are because of how the 
    game of tic tac toe works.    
    */
    square.addEventListener("click", () => {
       
        if (square.innerHTML || gameOver) { //Putting square.innerHTML here sees if its true in other words if theres text in it.
            return    //This code block checks to see if the game is over if so return the code stop the rest of the code from executing
        }

        square.innerHTML = currentPlayer 
        board[i] = currentPlayer


       if(checkWin()) { //Means that if check win is true then run the following code
        title.innerHTML = `${currentPlayer} Has Won The Game!`
        gameOver = true
        return // Used return because it'll change it again from the code below changing the SAME variable
       }

       if(checkDraw()) {
        title.innerHTML = "It's a draw"
        return
       }

        currentPlayer = currentPlayer ==='X' ? 'O' : 'X'//This swaps the current player from "X" to "O"
                                                        //Basicall if the current player is X make it O else (if the player is O) make it X.
        title.innerHTML = `${currentPlayer}'s Turn`
    })
    
})

restartBtn.addEventListener("click", () => { //This function is just resetting Everything important for the game to restart
    gameOver = false
    currentPlayer = 'X'
    title.innerHTML = `${currentPlayer}'s Turn`

    allSquares.forEach(square => {
        square.innerHTML = ""
    })    
    board = new Array(9)
})

function checkDraw() {                  
   for(let i = 0; i < board.length; ++i){
    if(!board[i]) {     //If board returns false (If its empty) then return false bcuz the game is still going. Otherwise return true
        return false    
    }}
   return true          //Then if you look up we see that if checkDraw is true then say its a draw
}
//This is what the board looks like
{/*board = ["X","O","X","X","o"] */}

function checkWin() {
    const winningIndicies = [
        // Horizontal wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical Wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal Wins
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < winningIndicies.length; ++i){
        const matchingIndicies = winningIndicies[i]

        let symbol1 = board[matchingIndicies[0]] //This code is having the other array 'board' look this array at the same index '[0]'.
        let symbol2 = board[matchingIndicies[1]] //We are mapping these numbers to the the "X" and "O" that are in the board array
        let symbol3 = board[matchingIndicies[2]]

        

        if(!symbol1 || !symbol2 || !symbol3){  //If any of them are empty (false) then continue. That way it wont say theres a winner.
            continue                           //Because they are empty they equal each other. So this stops that.
        }

        if(symbol1 === symbol2 && symbol2 === symbol3) { //Checks the board array and sees if the possible winning combinations are all either "X" or "O"
            console.log('Winner at', matchingIndicies)   //Because they may be filled but if they arent the same then there isnt a winner. 
            return true
        }
    }

}

