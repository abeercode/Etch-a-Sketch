const container = document.querySelector("#container")
const width = container.clientWidth
console.log(width)
const user = parseFloat("33")

for (let i = 0; i < user * user; i++) {

    let div1 = document.createElement("div")
    div1.style.height = (width / user).toString() + "px"
    div1.style.width = (width / user).toString() + "px"
    container.appendChild(div1)
}

