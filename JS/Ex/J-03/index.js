console.log("hello");

const input1 = document.querySelector("#text1")
const input2 = document.querySelector("#text2")

const copyText = (e) =>{       
 input2.value = input1.value
}

input1.addEventListener("input", copyText)

const numberInput = document.getElementById("numberInput")
const numberCell = document.getElementById("numberCell")
const squareCell = document.getElementById("squareCell")
const cubeCell = document.getElementById("cubeCell")

numberInput.addEventListener("input", () => {
    const number = numberInput.value
    numberCell.textContent = number
    squareCell.textContent = Math.pow(number, 2)
    cubeCell.textContent = Math.pow(number, 3)
})


const cells = [
    document.getElementById("cell1"),
    document.getElementById("cell2"),
    document.getElementById("cell4"),
    document.getElementById("cell3"),
];
const moveButton = document.getElementById("moveButton")

let currentPosition = 0;

moveButton.addEventListener("click", () => {
    cells[currentPosition].classList.remove("blue-square")
    currentPosition = (currentPosition - 1 + cells.length) % cells.length
    cells[currentPosition].classList.add("blue-square")
});


// EXO Galerie

const mainImg = document.querySelector("#mainImg")
const figCaption = document.querySelector("#figcaption")
const sidesImg = document.querySelectorAll(".sideImg")

const changeImg = (e) => {
    mainImg.src = e.target.src
    figCaption.innerText = e.target.alt 
}

sidesImg.forEach(sideImg => {sideImg.addEventListener("click", changeImg)})
