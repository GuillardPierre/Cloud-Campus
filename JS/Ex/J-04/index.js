console.log("coucou");

// PART 1

const form = document.querySelector("#superForm")
const calculate = (e) => {
    e.preventDefault()   
    const a = parseInt(e.target[0].value)
    const b = parseInt(e.target[2].value)
    const operator = e.target[1].value  
    
    let result = ""
    switch (operator) {
        case "+":
            result = a + b
            break
        case "-":
            result = a - b
            break
        case "*":
            result = a * b
            break
        case "/":
            result = a / b
            break
    }

    alert(`ATTENTION CECI EST UN RESULTAT : ${a} ${operator} ${b} = ${result}`)
    
}

form.addEventListener("submit", calculate)

// PART 2

const appearBtn = document.querySelector("#appear")
const disappearBtn = document.querySelector("#disappear")

appearBtn.addEventListener("click", () => {
    form.classList.remove("invisible")
})
disappearBtn.addEventListener("click", () => {
    form.classList.add("invisible")
})

// PART 3

const input1 = document.querySelector("#number1")
const input2 = document.querySelector("#number2")
const input3 = document.querySelector("#selector")

const info1 = document.querySelector(".info1")
const info2 = document.querySelector(".info2")
const info3 = document.querySelector(".info3")

input1.addEventListener("mouseover", (e) => {
    info1.classList.remove("invisible")
})
input2.addEventListener("mouseover", (e) => {
    info2.classList.remove("invisible")
})
input3.addEventListener("mouseover", (e) => {
    info3.classList.remove("invisible")
})

input1.addEventListener("mouseout", (e) => {
    info1.classList.add("invisible")
})
input2.addEventListener("mouseout", (e) => {
    info2.classList.add("invisible")
})
input3.addEventListener("mouseout", (e) => {
    info3.classList.add("invisible")
})


function duplicateEncode(word){
    const letters = word.split("")
    console.log(letters);
    
    let result = []
    let once = true
    for (let i = 0; i < letters.length; i++) {
        console.log("dd");
        l = letters[i]
        letters.forEach(letter => {
            if(letter === l)  {
                once = false
            }
        })
        once ? result.push(")") : result.push('(')
        once = true
        console.log(result);
        
    }
       console.log(result.join(""))
      return result.join("");
  }
  
  duplicateEncode("abc")