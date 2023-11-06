const randomInt = require("./randomInt")
const gamePrint = require("./gamePrint")
const gameProcess = require("./gameProcess")

game = new Array(10).fill(new Array(20).fill(" ").join(""))

for(let i=0;i<10;i++) {
    const str = game[i].split("")
    str[randomInt(0, 20)] = (randomInt(0,2) == 0) ? "b" : ""
    game[i]=str.join("")
}

for(let i=0;i<1000;i++) {
    gamePrint(game, 10, 20)
    game = gameProcess(game, 10, 20)
}