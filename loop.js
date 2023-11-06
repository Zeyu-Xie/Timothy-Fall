const gamePrint = require("./gamePrint")
const gameProcess = require("./gameProcess")
const keypress = require('keypress')

process.stdin.setRawMode(true);

const loop = (game, height, width, k, grade) => {

    // Refresh the game
    grade = gameProcess(game, height, width, k, grade)

    // Remove outdated listeners
    process.stdin.removeAllListeners('keypress')

    // Clear the screen
    console.clear()

    // Reset k
    k=""

    // Print the game
    gamePrint(game, height, width)
    console.log("")
    console.log("Score: "+grade)

    // Start event listening
    keypress(process.stdin)
    process.stdin.on('keypress', (ch, key) => {
        if (key) {
            k = key.name
            // console.log(k)
        }
    })

    setTimeout(() => {
        // Recurse
        loop(game, height, width, k, grade)
    }, 200);
}

module.exports = loop