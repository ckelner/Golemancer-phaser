Golemancer.Preload = function(game){
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
    this.game.load.audio( 'title_music', 'assets/music/title.mp3' );
  },
  create: function(){
    //Load menu
    //this.game.state.start('Load');
  }
};
