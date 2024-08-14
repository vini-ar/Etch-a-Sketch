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

function changeDivColor() {

}

spanDiv()