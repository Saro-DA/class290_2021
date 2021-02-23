

function one() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "one");
    })
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 4000, "two");
    })
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, "three");
    })
}

module.exports = {one, two, three};