class Ghost {

    constructor(x, y, radius, color, speed) {

        this.x = x
        this.y = y

        this.radius = radius
        this.color = color

        this.speed = speed

        this.velocity = {
            x: speed,
            y: 0
        }
    }

    draw(ctx) {

        ctx.beginPath()

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        )

        ctx.fillStyle = this.color
        ctx.fill()

        ctx.closePath()
    }

    update() {

        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}
