const gamePrint = require("./gamePrint")
const gameProcess = require("./gameProcess")
const keypress = require('keypress')

process.stdin.setRawMode(true);

const loop = (game, height, width) => {
    setTimeout(() => {

        process.stdin.removeAllListeners('keypress')

        console.clear()
        gamePrint(game, height, width)

        keypress(process.stdin)

        process.stdin.on('keypress', (ch, key) => {
            if (key && key.name === 'a') {
                console.log('你按下了 "a" 键！');
            }
            process.stdin.resume();
        });

        
        


        gameProcess(game, height, width)
        loop(game, height, width)
    }, 2000);
}

module.exports = loop