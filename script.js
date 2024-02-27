

const data = {}

const initializeVariables = (data) => {
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    data.player1 = "X"
    data.player2 = "O"
    data.round = "0"
    data.currentPlayer = "X"
    data.gameOver = "false"

}

const addEventListenerToGame = (data) => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', (event) => {
            playMove(event.target, data)
        })
    })
}

const initializeGame = (data) => {

    initializeVariables(data)

    addEventListenerToGame(data)
}

const playMove = (cell, data) => {
    console.log(cell, data)
}

initializeGame(data)