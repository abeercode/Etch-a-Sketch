//variables :
const container = document.querySelector("#container")
const width = container.clientWidth
const grid = document.querySelector("#grid")
const clearB = document.querySelector("#clear");

let input = 0;
let gridSize = 16

//logic code
gridmaker(gridSize)
colorGrid()
grid.addEventListener("click", () => {
    input = prompt("a grid between 1-100");
    if (input > 0 && input < 100) {
        gridSize = parseFloat(input)
        gridmaker(gridSize)
    }
})

clearB.addEventListener("click", () => {
    clearGrid()
})

function colorGrid() {
    let divs = getDivs()
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor
        })
    })
}
function gridmaker(gridSize) {

    resetContainer()
    for (let i = 0; i < gridSize * gridSize; i++) {

        let div1 = document.createElement("div")
        div1.style.height = (width / gridSize).toString() + "px"
        div1.style.width = (width / gridSize).toString() + "px"
        container.appendChild(div1)
    }
    colorGrid()
}

function resetContainer() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function clearGrid() {
    let divs = getDivs()
    divs.forEach(div => {
        div.style.backgroundColor = "white";

    })

}

function getDivs(){
    return document.querySelectorAll("#container div")
}