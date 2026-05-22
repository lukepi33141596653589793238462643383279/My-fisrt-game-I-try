const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

const player = new Player(
    100,
    100,
    15,
    "yellow"
)

function update() {

    player.velocity.x = 0
    player.velocity.y = 0

    if (keys.w) {
        player.velocity.y = -player.speed
    }

    if (keys.s) {
        player.velocity.y = player.speed
    }

    if (keys.a) {
        player.velocity.x = -player.speed
    }

    if (keys.d) {
        player.velocity.x = player.speed
    }

    player.update()
}

function render() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    )

    player.draw(ctx)

    drawScore(ctx)
}

function gameLoop() {

    update()

    render()

    requestAnimationFrame(gameLoop)
}

gameLoop()
