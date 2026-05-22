const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

function update() {

}

function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

}

function gameLoop() {

    update()
    render()

    requestAnimationFrame(gameLoop)
}

gameLoop()
