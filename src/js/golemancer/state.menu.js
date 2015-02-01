Golemancer.Menu = function( game ) {
  this.game = game;
};

Golemancer.Menu.prototype =  {
  create: function() {
    // add menu text
  },
  update: function() {
    if( this.game.input.activePointer.isDown ) {
      //this.game.state.start( 'Workshop' );
      // stop any ongoing music
      if( Golemancer.game.music ) {
        Golemancer.game.music.stop();
      }
      // start title music
      Golemancer.game.music = Golemancer.title_music;
      Golemancer.game.music.volume = 0.5;
      /* arguements:
        marker? (leave blank ''), start position (0),
        volume (full volume), loop (true)
      */
      Golemancer.game.music.play( '' , 0, 1, true );
    }
  }
};