const container = document.querySelector(".container")

function spanDiv() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div")
        square.setAttribute("class","square");
        square.textContent = i;

        square.addEventListener("mouseover", function()  { this.classList.add("square-hover") })
        square.addEventListener("mouseout", function()  {this.classList.remove("square-hover")})

        container.appendChild(square)
    }
}

function changeGridSize() {
    let gridSize = prompt("Type the number of squares per side for the new grid:")
    
    removeOldSquares()
    
    for (let i = 0; gridSize < i; i++) {
        let square = document.createElement("div")
    }
}

function removeOldSquares() {
    let squaresNodeList = document.querySelectorAll(".square")
    squaresNodeList.forEach(function(square) {
        square.remove()
    })
}
spanDiv()