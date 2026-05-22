function drawScore(ctx) {

    ctx.font = "24px Arial"
    ctx.fillStyle = "white"

    ctx.fillText(
        `Score: ${score}`,
        20,
        30
    )
}
