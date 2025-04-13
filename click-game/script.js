const clickButton = document.getElementById("click-btn")
const bestTimeDisplay = document.getElementById("best-time")
const startButton = document.getElementById("start-btn")
const time = document.getElementById("time")

let bestTime = Infinity
let start = null

document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', () => {
        clickButton.textContent = "Wait..."
        start = null
        setTimeout(() => {
            clickButton.textContent = "Click !!"
            start = Date.now()
        }, Math.random() * 3000)
    })

    clickButton.addEventListener('click', () => {
        let end = Date.now()
        clickTime = end - start
        time.textContent = "⏱️" + clickTime + "ms"

        if (bestTime > clickTime) {
            bestTime = clickTime
            bestTimeDisplay.textContent = "🏆" + bestTime + "ms"
        }

        start = null
        startButton.textContent = "Start again"
    })
})
