function Gameboard() {
    this.gameboard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    this.markBoard = (char, i, j) => this.gameboard[i][j] = char;
    this.resetBoard = function() {
        for(let i=0; i<this.gameboard.length; i++) {
            for(let j=0; j<this.gameboard.length[0]; j++) {
                this.gameboard[i][j] = null;
            }
        }
    };
    this.getWinner = function getWinner(board) {
        const size = board.length; // 3 for a 3x3 board
        // Check rows
        for (let i = 0; i < size; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return board[i][0];
            }
        }
        // Check columns
        for (let j = 0; j < size; j++) {
            if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
                return board[0][j];
            }
        }
        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
        return null; // No winner yet
    }
}

function Player() {
    this.symbol = null;   
}


function Game() {
    this.togglePlayer = function (prevPlayerSymbol) {
        if (prevPlayerSymbol === 'X') {
            prevPlayerSymbol = '0';
        } else {
            prevPlayerSymbol = 'X';
        }
    };
    this.game = function () {
        const playerA = new Player();
        playerA.playerSymbol = 'X';
        const gameboardObj = new Gameboard();
        gameboardObj.resetBoard();
        const gameboard = gameboardObj.gameboard;
        console.log("gameboard: ", gameboard);
        // const playerB = new Player();
        // playerB.playerSymbol = '0';
        //! let prevPlayerSymbol = '0';
        let symbol;
        while (!gameboardObj.getWinner(gameboard)) {
            //! prevPlayerSymbol = togglePlayer(prevPlayerSymbol);
            const input = prompt("Enter a Symbol, the i value & the j value");
            console.log(input);
            [symbol, i, j] = input.split(" ");
            console.log({symbol, i, j});
            gameboardObj.markBoard(symbol, i, j);
            console.log("gameboard: ", gameboard);
        }
        if (symbol === 'X') {
            console.log("Player A wins");
        } else {
            console.log("Player B wins");
        }
    }
}

const gameObj = new Game();
gameObj.game();