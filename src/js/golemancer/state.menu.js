Golemancer.Menu = function( game ) {
  this.game = game;
};

Golemancer.Menu.prototype =  {
  create: function() {
    this.setupMenu();
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
  },
  update: function() {
    if( this.game.input.activePointer.isDown ) {
      //this.game.state.start( 'Workshop' );
    }
  },
  setupMenu: function() {
    // Game title
    this.game_title = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      Golemancer.game.world.centerY,
      "Golemancer"
    );
    this.game_title.anchor.setTo( 0.5 );
    this.game_title.font = 'Kaushan Script';
    this.game_title.fontSize = 60;
    this.game_title.fill = '#fff'; // TODO: Snazz it up?
    this.game_title.stroke = "#000"; // @ckelner: needed to fit outside the "box"
    this.game_title.strokeThickness = 80;
    this.game_title.align = 'center'; // center horiz and vert
    this.game_title.y = 100; // 100 from top

    // Menu
    this.new_game = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      Golemancer.game.world.centerY,
      "New Game"
    );
    this.new_game.anchor.setTo( 0.5 );
    this.new_game.font = 'Merriweather Sans';
    this.new_game.fontSize = 25;
    this.new_game.fill = '#fff'; // TODO: Snazz it up?
    this.new_game.stroke = "#000"; // @ckelner: needed to fit outside the "box"
    this.new_game.strokeThickness = 30;
    this.new_game.align = 'center'; // center horiz and vert
    this.new_game.y = 200; // 100 from top
    this.new_game.inputEnabled = true;
    this.new_game.input.enableDrag();
    this.new_game.events.onInputOver.add(
      function() { this.new_game.fill = '#00CC00'; },
      this
    );
    this.new_game.events.onInputOut.add(
      function() { this.new_game.fill = '#fff'; },
      this
    );
  }
};