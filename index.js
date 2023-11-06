const randomInt = require("./randomInt")
const gamePrint = require("./gamePrint")
const gameProcess = require("./gameProcess")
const loop = require("./loop")

const height = 20
const width = 50

let grade = 0

game = new Array(height).fill(new Array(width).fill(" ").join(""))

loop(game, height, width, "", grade)