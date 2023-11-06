const randomInt = require("./randomInt")
const gamePrint = require("./gamePrint")
const gameProcess = require("./gameProcess")
const loop = require("./loop")

const height = 10
const width = 30

game = new Array(height).fill(new Array(width).fill(" ").join(""))

loop(game, height, width)