const randomInt = require("./randomInt")

const alpha = "abcdefghijklmnopqrstuvwxyz"

const isBlank = str => {
    let l = str.length
    for (i = 0; i < l; i++) {
        if (str.substring(i, i + 1) != " ") return false
    }
    return true
}

const gameProcess = (game, height, width, key, grade) => {

    // Falling down
    for (let i = height - 1; i >= 1; i--) {
        game[i] = game[i - 1]
    }
    const str = new Array(width).fill(" ")
    str[randomInt(0, width)] = (randomInt(0, 4) == 0) ? alpha[randomInt(0, 26)] : " "
    game[0] = str.join("")

    // Evaluate

    if (key == "") return grade
    else {
        for (let i = height - 1; i >= 0; i--) {
            if (!isBlank(game[i])) {
                if (game[i].includes(key)) {
                    game[i] = (Array(width).fill(" ")).join("")
                    grade+=10
                }
                break
            }
        }
        return grade
    }

}

module.exports = gameProcess