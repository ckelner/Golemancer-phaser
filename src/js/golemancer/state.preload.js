Golemancer.Preload = function(game){
  this.game = game;
};

Golemancer.Preload.prototype = {
  preload: function(){
    this.preload_bar = this.add.sprite( 1404, 66, 'progress_bar' );
    this.preload_bar.anchor.setTo( 0.5, 0.5 );
    this.load.setPreloadSprite( this.preload_bar );
  },
  create: function(){
    //Load menu
    //this.game.state.start('Load');
  }
};
