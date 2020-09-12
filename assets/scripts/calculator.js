let DEFAULT_VAR1 = 5

//calculator
const handleCalculate = (event) => {
    const val = event.target.value
    const inputValue = inputBox.value
    const currentCalStr = currentCalculation.innerHTML
    
    currentResult.innerHTML == "0" ? setIntoCurrentCalculation(currentCalStr+inputValue+event.target.value) : setIntoCurrentCalculation(currentResult.innerHTML+event.target.value)
    
    switch(val) {
        case "=" : {
            setIntoCurrentCalculation("")
            inputValue == "" ? currentResult.innerHTML = eval( currentCalStr.slice(0,-1)) : currentResult.innerHTML = eval( currentCalStr+inputValue)
        }
        break
        case "C" : {
            clearCalculation()
        }
    }
}
const setIntoCurrentCalculation = (str) => {
    currentCalculation.innerHTML = str
    inputBox.value = ""
    inputBox.focus()
} 
const clearCalculation = () => {
    inputBox.value = ""
    inputBox.focus()
    currentCalculation.innerHTML = ""
    currentResult.innerHTML = "0"
}

//operator_test

preAdd.addEventListener('click',()=>alert(++DEFAULT_VAR1))
postAdd.addEventListener('click',()=>alert(DEFAULT_VAR1++))

