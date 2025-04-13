const cases = document.getElementsByClassName("case")
const resetBtn = document.getElementById("reset-btn")
const turnBtn = document.getElementById("turn-btn")
let turn = "X"

document.addEventListener('DOMContentLoaded', () => {
    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < cases.length; i++) {
            cases[i].textContent = ""
        }
        turn = "X"
        turnBtn.textContent = `${turn}'s turn`
    })

    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener('click', () => {
            if (cases[i].textContent === "") {
                cases[i].textContent = turn
            }
        })
    }

    turnBtn.addEventListener('click', () => {
        turn = turn === "X" ? "O" : "X"
        turnBtn.textContent = `${turn}'s turn`
    })
});
