input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Chessboard)
sprite = game.createSprite(0, 0)
basic.forever(function () {
	
})
