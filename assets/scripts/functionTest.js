const startBtn = document.getElementById("startBtn")
const playBtn = document.getElementById("playBtn")
const pauseBtn = document.getElementById("pauseBtn")
const stopBtn = document.getElementById("stopBtn")

// rest parameter 
// destructuring 
// spread operator
// must always be last parameter
const sum = (resultHandler,a,b,...numbers) => {
    // function within function
    const validate = (number) => {

        // isNaN("asdfk") outputs true
        // isNan("34") outputs false
        // 5-"4" // "5"-4 outputs 1
        // 5+"4" // "5"+4 outputs 9
        // To convert a number-string to integer +"5", outputs 5
        // -"5", outputs -5
        return isNaN(number) ? 0 : +number 
    }
    let sum = 0
    for (const num of numbers){
        sum += validate(num)
    }
    resultHandler(sum)
}

// function statement
// built in array-like variable 'arguments'
// only within functions declared with function keyword
function subtract(){
    let value = 0
    console.log(arguments)
    for (const num of arguments){
        value -= num
    }
    return value
}

// function within function
// static functions(methods) are only available in class
function OuterFun(x){
    function InnerFun (y) {
        console.log(x+y)
    }
    return InnerFun // ***IMPORTANT
}

// storing in object
const game = {
    stopGame : ()=>{
        console.log("Stoping game")
    }
}

// anonymous function called indirectly
// callback function
startBtn.addEventListener('click',()=>{
    console.log("Game is starting")
})

// custom callback function
const showResult = (result) => {
    console.log("The result is ",result)
}

// call directly
playGame()      // "Playing Game"
    try {
        pauseGame()     // cannot access before initialization 
        continueGame()  // continueGame is not a function  
    } catch (error) {
        throw error        
    } finally{
        game.stopGame()
        sum(showResult,12,34,"45",12,15,53,23)
        console.log(subtract(98,12,11,34,2,1,6))
        OuterFun(3)(2)
    }


// function declaration 
// function statement
// hoisted to top by js engine
// can be use any where even before declaration
function playGame () {
    console.log("Playing game")
}

// function expression
// hoisted only declaration but not initialization
// cannot be use before definition 
const pauseGame = () => {
    console.log("Pausing game")
}

// storing in a variable 
// use const and let 
// don't use var
var continueGame = function continueGame(){
    console.log("Continuing game")
}



