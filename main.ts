controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 10
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 f 3 3 3 3 f 3 3 3 3 . . 
    . 3 3 3 f f 3 3 3 f f 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 f 3 3 3 f 3 3 3 3 3 . . 
    . . 3 3 3 f f f 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
