// Player's turn
let playerValue = 1;
// Whether the game is over
let gameOver = false;
// The current board state (empty at start)
let board = Array(9).fill(null);

// When a button is clicked, do this
// cellNumber: the button number that was clicked on
function cellClicked(cellNumber) {
    // Find the clicked button in the document
    let clickedButton = document.querySelector(`button[data-id="${cellNumber}"]`);

    // If the current cell is empty or the game is over, don't do anything
    if(board[cellNumber] != null || gameOver) {
        return
    }


    if(playerValue === 1) { // If player turn is X/1
        // Set the text value of the button we found
        clickedButton.textContent = "X";
        // Put the current value into the board array
        board[cellNumber] = "X";
        // Check for a winner
        checkWinner();
        // Switch the player to O
        playerValue = 2;
        // Set the player item to O
        document.getElementById("player").textContent = "O";
    } else { // If the player turn is O/2
        clickedButton.textContent = "O";
        board[cellNumber] = "O";
        checkWinner();
        playerValue = 1;
        document.getElementById("player").textContent = "X";
    }
}

// Check for a winner!
function checkWinner() {
    // If player value is X/1, use X, else use O
    let player = playerValue === 1 ? "X" : "O";

    // Check the board
    if(board[0] === board[1] && board[1] === board[2] && board[0] != null) { // 0-2
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[3] === board[4] && board[4] === board[5] && board[3] != null) { // 3-5
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[6] === board[7] && board[7] === board[8] && board[6] != null) { // 6-8
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[0] === board[3] && board[3] === board[6] && board[0] != null) { // Left column
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[1] === board[4] && board[4] === board[7] && board[1] != null) { // Center column
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[2] === board[5] && board[5] === board[8] && board[2] != null) { // Right column
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[0] === board[4] && board[4] === board[8] && board[0] != null) { // Crossways, top left to bottom right
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    } else if(board[2] === board[4] && board[4] === board[6] && board[2] != null) { // Crossways, top right to bottom left
        document.getElementById("status").textContent = "Winner: " + player;
        gameOver = true;
    }
}