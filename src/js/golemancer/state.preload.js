Golemancer.Preload = function(game){
  this.game = game;
};

Golemancer.Preload.prototype = {
  preload: function(){
    this.preloadBar = this.add.sprite(356, 370, 'preloaderBar');
    this.load.setPreloadSprite( this.preloadBar );
    this.game.stage.backgroundColor = '#000'; // set to black
  },
  create: function(){
   this.game.state.start('Load');
  }
};
