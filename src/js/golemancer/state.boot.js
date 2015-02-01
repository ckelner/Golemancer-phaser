Golemancer.Boot = function(game){
  this.game = game;
};

Golemancer.Boot.prototype = {
  preload: function(){
    this.load.image( 'progress_bar', 'assets/ui/progress_bar.png' );
    this.game.stage.backgroundColor = '#000'; // set to black
  },
  create: function(){
   this.game.state.start('Preload');
  }
};
