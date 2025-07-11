/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board = ["", "", "", "", "", "", "", "", ""]
let turn = "X"
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const sqrElem = document.querySelectorAll(".sqr")
const msgElem = document.querySelector("#message")
/*-------------------------------- Functions --------------------------------*/
function init() {
  console.log(render)
}
function render() {}
function updateBoard() {
  board.forEach()
}
/*----------------------------- Event Listeners ----------------------------*/

sqrElem.forEach((sqr) => {
  sqr.addEventListener("click", () => {
    console.log("sqr clicked")
    sqr.textContent = "X"
  })
})

document.addEventListener("DOMContentLoaded", init)
