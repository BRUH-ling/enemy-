input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
let Enemy_3: game.LedSprite = null
let Player: game.LedSprite = null
let Enemy = game.createSprite(randint(0, 10), randint(0, 10))
Player = game.createSprite(0, 0)
let Enemy_2 = game.createSprite(randint(0, 10), randint(0, 10))
Enemy_2.delete()
if (game.score() > 5) {
    Enemy_2 = game.createSprite(randint(0, 10), randint(0, 10))
}
if (game.score() > 10) {
    Enemy_3 = game.createSprite(randint(0, 10), randint(0, 10))
}
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        Player.delete()
        Enemy.delete()
        Enemy_2.delete()
        Enemy_3.delete()
        game.addScore(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.pause()
        basic.showNumber(game.score())
        game.resume()
        Player = game.createSprite(0, 0)
        basic.pause(1000)
        Enemy = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_2 = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_3 = game.createSprite(randint(0, 10), randint(0, 10))
    }
    if (Player.isTouching(Enemy_2)) {
        Player.delete()
        Enemy.delete()
        Enemy_2.delete()
        Enemy_3.delete()
        game.addScore(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.pause()
        basic.showNumber(game.score())
        game.resume()
        Player = game.createSprite(0, 0)
        basic.pause(1000)
        Enemy = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_2 = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_3 = game.createSprite(randint(0, 10), randint(0, 10))
    }
    if (Player.isTouching(Enemy_3)) {
        Player.delete()
        Enemy.delete()
        Enemy_2.delete()
        Enemy_3.delete()
        game.addScore(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.pause()
        basic.showNumber(game.score())
        game.resume()
        Player = game.createSprite(0, 0)
        basic.pause(1000)
        Enemy = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_2 = game.createSprite(randint(0, 10), randint(0, 10))
        Enemy_3 = game.createSprite(randint(0, 10), randint(0, 10))
    }
})
