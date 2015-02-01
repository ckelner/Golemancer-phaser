Golemancer.Preload = function( game ) {
  this.game = game;
};

Golemancer.Preload.prototype = {
  preload: function() {
    this.preload_bar = this.add.sprite(
      // position center minus half the width/height of bar
      (Golemancer.width/2)-351,
      (Golemancer.height/2)-16,
      'progress_bar'
    );
    this.game.load.setPreloadSprite( this.preload_bar );
    // load google webfonts script
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.game.load.audio( 'title_music', 'assets/music/title.mp3' );
    Golemancer.title_music = this.game.add.sound( 'title_music' );
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
