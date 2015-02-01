Golemancer.Menu = function( game ) {
  this.game = game;
};

Golemancer.Menu.prototype =  {
  create: function() {
    this.setupMenu();
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
  },
  setupMenu: function() {
    if( Golemancer.google_font_ready ) {
      this.text = Golemancer.game.add.text(
        Golemancer.game.world.centerX,
        Golemancer.game.world.centerY,
        "- phaser -\nrocking with\ngoogle web fonts"
      );
      this.text.anchor.setTo(0.5);

      this.text.font = 'Revalia';
      this.text.fontSize = 60;

      this.text.fill = '#0000ff';

      this.text.align = 'center';
      this.text.stroke = '#000000';
      this.text.strokeThickness = 2;
      this.text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

      this.text.inputEnabled = true;
      this.text.input.enableDrag();

      this.text.events.onInputOver.add( this.menuOver, this );
      this.text.events.onInputOut.add( this.menuOut, this ); 
    } else {
      setTimeout( this.setupMenu, 500 );
    }
  },
  menuOut: function() {
    this.text.fill = '#0000ff';
  },
  menuOver: function() {
    this.text.fill = '#ff00ff';
  }
};