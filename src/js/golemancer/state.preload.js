Golemancer.Preload = function( game ) {
  this.game = game;
};

Golemancer.Preload.prototype = {
  preload: function() {
    var style = { font: "45px Arial", fill: "#fff", align: "center" };
    var loading_text = this.game.add.text(
      this.game.world.centerX,
      this.game.world.centerY - 75,
      "Loading...",
      style
    );
    loading_text.anchor.set( 0.5 );
    this.preload_bar = this.add.sprite(
      // position center minus half the width/height of bar
      (Golemancer.width/2)-351,
      (Golemancer.height/2)-16,
      'progress_bar'
    );
    this.game.load.setPreloadSprite( this.preload_bar );
    // load google webfonts script
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    // Music
    this.game.load.audio( 'title_music', 'assets/music/title.mp3' );
    Golemancer.title_music = this.game.add.sound( 'title_music' );
    // Json
    this.game.load.tilemap(
      'level_one',
      'json/level.one.json',
      null,
      Phaser.Tilemap.TILED_JSON
    );
    // Sprites
    /* level.one */
    this.game.load.spritesheet(
      'level_one',
      'assets/sprites/level.one.png',
      Golemancer.tile_size,
      Golemancer.tile_size,
      10
    );

    /* player */
    //Golemancer.player = new Golemancer.Player(this.game);
    //Golemancer.player.preload(); 

  },
  create: function() {
    /*
      @ckelner: any delay created by this should "disappear"
      once more assets are being loaded
    */
    // check if google fonts are ready
    if( Golemancer.google_font_ready ) {
      // @ckelner: "this" gets lost through using setTimeout, use global scope
      Golemancer.game.state.start('Menu');
    } else {
      // if not ready, try again in 0.15 seconds
      setTimeout( Golemancer.Preload.prototype.create, 150 );
    }
  }
};
