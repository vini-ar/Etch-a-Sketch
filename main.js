const container = document.querySelector(".container")

function spanDiv() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div")
        square.setAttribute("class","square");
        square.textContent = "Hello World"
        container.appendChild(square)
    }
}

spanDiv()