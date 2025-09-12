function Gameboard() {
    const gameboard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    const markBoard = (char, i, j) => {
        gameboard[i][j] = char;
    }
    const resetBoard = function () {
        for (let i = 0; i < gameboard.length; i++) {
            for (let j = 0; j < gameboard[i].length; j++) {
                gameboard[i][j] = null;
            }
        }
    };
    const getWinner = function getWinner(board) {
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

    function displayGameBoard(gameboard, ) {
        const gameboardContainer = document.createElement("div");
        gameboardContainer.style.marginRight = "32em";
        gameboardContainer.style.marginLeft = "32em";
        for (let i = 0; i < gameboard.length; i++) {
            const gameboardRowContainer = document.createElement("div");
            gameboardRowContainer.style.display = "flex";
            for (let j = 0; j < gameboard[i].length; j++) {
                const cell = document.createElement("button");
                const playGame = gameObj.playGame;
                cell.addEventListener("click", (event) => {
                    console.log(event);
                    playGame(event)
                })
                cell.textContent = "";
                cell.style.border = "1px solid black";
                cell.style.height = "2em";
                cell.style.width = "2em";
                cell.id = `${i}${j}`
                gameboardRowContainer.append(cell);
            }
            gameboardContainer.append(gameboardRowContainer);
        }
        const body = document.querySelector("body")
        body.appendChild(gameboardContainer);
    }

    return { gameboard, markBoard, resetBoard, getWinner, displayGameBoard }
}

function Players() {
    const players = [];
    const getPlayers = function() {
        return players;
    }
    const setPlayer = function(player) {
        debugger;
        players.push(player)
    }
    return { getPlayers, setPlayer, players }
}

function Player() {
    const symbol = null;
    let names = null;
    const setPlayerName = function(playerName) {
        names = playerName;
    }
    const getPlayerNames = function() {
        return names;   
    }
    return { symbol, setPlayerName, getPlayerNames }
}


function Game() {
    const togglePlayer = function (prevPlayerSymbol) {
        if (prevPlayerSymbol === 'X') {
            prevPlayerSymbol = '0';
        } else {
            prevPlayerSymbol = 'X';
        }
        return prevPlayerSymbol;
    };
    const togglePlayerV2 = function(currentPlayer) {
        if (currentPlayer === playerA) {
            return playerB;
        }
        return playerA;
    }
    const toggleSymbol = function(symbol) {
        if (symbol === "X") {
            return "0"
        } 
        return "X";
    }
    this.currentSymbol = 'X';
    const gameboardObj = Gameboard();
    // const game = function () {
    //     const gameboardObj = Gameboard();
    //     gameboardObj.resetBoard();
    //     const gameboard = gameboardObj.gameboard;
    //     console.log("gameboard: ", gameboard);
    //     let currentPlayer = playerA;
    //     while (!gameboardObj.getWinner(gameboard)) {
    //         const input = prompt("Enter the i value & the j value of the Symbol.");
    //         const symbol = currentPlayer.symbol;
    //         console.log(input);
    //         [i, j] = input.split(" ");
    //         console.log({ i, j });
    //         // gameboardObj.markBoard(symbol, parseInt(i, 10), parseInt(j, 10));
    //         const cellLocation = document.querySelector(`${i, j}`)
    //         cellLocation.textContent = symbol;
    //         console.log("gameboard: ", gameboard);
    //         currentPlayer = togglePlayerV2(currentPlayer);
    //     }
    //     console.log(`${currentPlayer} is the winner`);
    // }
    const playGame = function(event) {
        console.log("->", event);
        const [i, j] = event.target.id.split("");
        console.log({ eventId: event.target.id });
        
        console.log({gameboardObj})
    
        event.target.textContent = this.currentSymbol;
        console.log({i, j})
        gameboardObj.markBoard(currentSymbol, parseInt(i, 10), parseInt(j, 10));
        console.log({event});
        event.srcElement.disabled = true;
        const winner = gameboardObj.getWinner(gameboardObj.gameboard);
        console.log({winner});
        const playersObj = Players();
        const players = playersObj.getPlayers()
        console.log({players})
        if (winner) {
            console.log("winner: ", winner)
        }
        currentSymbol = toggleSymbol(currentSymbol);

    }
    return { togglePlayer, playGame };
}


const gameObj = Game();

const gameboard = Gameboard();

gameboard.displayGameBoard(gameboard.gameboard, gameObj);

const addPlayerNamesButton = document.querySelector("#add-player-names");
const addPlayerDialog = document.querySelector("#add-player-dialog");
const submitPlayer = document.querySelector("#submit-player");

addPlayerNamesButton.addEventListener("click", () => {
  addPlayerDialog.showModal();
});

submitPlayer.addEventListener("click", (event) => {
    console.log(event.target);
    event.preventDefault(); // Prevent default form submission
    const form = document.querySelector('#add-player-form');
    console.log({ form })
    // const formData = new FormData(form);
    // for (let [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    // }
    const playerAName = document.getElementById('player-a').value;
    const playerBName = document.getElementById('player-b').value;
    console.log('Name:', playerAName);
    console.log('Email:', playerBName);
    const players = Players();
    const playerA = Player();
    // playerA.name = playerAName;
    playerA.setPlayerName(playerAName);
    playerA.symbol = "X";
    const playerB = Player();
    // playerB.name = playerBName;
    playerB.setPlayerName(playerBName);
    playerB.symbol = "0";
    debugger;
    players.setPlayer(playerA);
    players.setPlayer(playerB);
    console.log({players})
    addPlayerDialog.close();
})



// gameObj.game();

