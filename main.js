const container = document.querySelector(".container")

function spanDiv() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div")
        square.setAttribute("class","square");

        square.addEventListener("mouseover", function()  { this.classList.add("square-hover") })
        square.addEventListener("mouseout", function()  {this.classList.remove("square-hover")})

        container.appendChild(square)
    }
}

function changeGridSize() {
    let gridSize = prompt("Type the number of squares per side for the new grid:")

    while (gridSize < 0 || isNaN(gridSize)) {
        gridSize = prompt("Incorrect value entered, please type the number of squares per side for the new grid:")
    }
    
    removeOldSquares()
    let squareBorderSize = (100 / gridSize)
    squareBorderSize = squareBorderSize.toString() + "%"
    
    for (let i = 0; gridSize > i; i++) {
        for (let i = 0; gridSize > i; i++) {
            let square = document.createElement("div")
            square.setAttribute("class", "square")
            square.style.width =  squareBorderSize
            square.style.height = squareBorderSize
            console.log(typeof square)
            container.appendChild(square)
        }
    }
}

function removeOldSquares() {
    let squaresNodeList = document.querySelectorAll(".square")
    squaresNodeList.forEach(function(square) {
        square.remove()
    })
}
spanDiv()