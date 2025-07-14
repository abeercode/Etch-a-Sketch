
//variables :
const container = document.querySelector("#container")
const width = container.clientWidth
const grid = document.querySelector("#grid")
let input = 0;
let gridSize = 16

//logic code
gridmaker(gridSize)

grid.addEventListener("click", () => {
    input = prompt("a grid between 1-100");
    if (input > 0 && input < 100) {
        gridSize = parseFloat(input)
        gridmaker(gridSize)
    }
})

function gridmaker(gridSize) {


    resetContainer()
    for (let i = 0; i < gridSize * gridSize; i++) {

        let div1 = document.createElement("div")
        div1.style.height = (width / gridSize).toString() + "px"
        div1.style.width = (width / gridSize).toString() + "px"
        container.appendChild(div1)
    }

}

function resetContainer() {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
