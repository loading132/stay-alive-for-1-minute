def on_countdown_end():
    game.game_over(True)
    game.set_game_over_effect(True, effects.dissolve)
    game.set_game_over_message(True, "help arrived!")
info.on_countdown_end(on_countdown_end)

game.show_long_text("your stuck here help will arrive in 1 minute",
    DialogLayout.BOTTOM)
game.show_long_text("more updates soon btw", DialogLayout.BOTTOM)
info.start_countdown(60)
Render.set_view_mode(ViewMode.RAYCASTING_VIEW)
tiles.set_current_tilemap(tilemap("""
    level
    """))
Render.toggle_view_mode()