function newSetInterval (callbackFunction, millisecond) {
    function inner() {
        callbackFunction()
        setTimeout(inner, millisecond)
    }
    inner()
}

// setInterval(() => {
//     console.log(1)
// }, 1000)
newSetInterval(() => {
    console.log(1)
}, 1000)
