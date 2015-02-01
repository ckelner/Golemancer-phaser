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
    this.text = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      Golemancer.game.world.centerY,
      "Golemancer"
    );
    this.text.anchor.setTo( 0.5 );
    this.text.font = 'Kaushan Script';
    this.text.fontSize = 60;
    this.text.fill = '#fff'; // TODO: Snazz it up?
    this.text.stroke = "#000"; // @ckelner: needed to fit outside the "box"
    this.text.strokeThickness = 80;
    this.text.align = 'center'; // center horiz and vert
    this.text.y = 100; // 100 from top
    this.text.inputEnabled = true;
    this.text.input.enableDrag();
    this.text.events.onInputOver.add( Golemancer.Menu.prototype.menuOver, this );
    this.text.events.onInputOut.add( Golemancer.Menu.prototype.menuOut, this );
  },
  menuOut: function() {
    this.text.fill = '#fff';
  },
  menuOver: function() {
    this.text.fill = '#ff00ff';
  }
};