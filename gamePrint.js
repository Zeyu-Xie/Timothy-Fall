const gamePrint = (game, height, width) => {
    for(let i=0;i<height;i++) {
        console.log(game[i])
    }
    let str = new Array(width).fill("=")
    console.log(str.join(""))
}

module.exports = gamePrint