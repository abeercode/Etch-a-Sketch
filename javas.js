const container = document.querySelector("#container")

for( let i = 0 ; i < 256; i++){

    let div1= document.createElement("div")
    div1.style.height="16px"
    div1.style.width="16px"
    container.appendChild(div1)
}

