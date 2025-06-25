info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.dissolve)
    game.setGameOverMessage(true, "help arrived!")
})
game.showLongText("your stuck here help will arrive in 1 minute", DialogLayout.Bottom)
game.showLongText("more updates soon btw", DialogLayout.Bottom)
info.startCountdown(60)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`level`)
Render.toggleViewMode()
forever(function () {
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
})
