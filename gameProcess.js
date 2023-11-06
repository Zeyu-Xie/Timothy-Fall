const randomInt = require("./randomInt")

const alpha = "abcdefghijklmnopqrstuvwxyz"

const gameProcess = (game, height, width) => {
    for(let i=height-1; i>=1;i--) {
        game[i] = game[i-1]
    }
    const str = new Array(width).fill(" ")
    str[randomInt(0, width)] = (randomInt(0, 4) == 0) ? alpha[randomInt(0,26)]: " "
    game[0]=str.join("")
    return game
}

module.exports = gameProcess