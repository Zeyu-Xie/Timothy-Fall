// A function to generate a random integer in the range of [a,b)

const randomInt = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

module.exports = randomInt