const gamePrint = require("./gamePrint");
const gameProcess = require("./gameProcess");

const loop = (game, height, width) => {
    setTimeout(() => {
        console.clear()
        gamePrint(game, height, width)
        gameProcess(game, height, width)
        loop(game, height, width)
    }, 200);
}

module.exports = loop