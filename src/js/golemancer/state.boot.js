Golemancer.Boot = function( game ) {
  this.game = game;
};

Golemancer.Boot.prototype = {
  preload: function() {
    // progress bar
    this.load.image( 'progress_bar', 'assets/ui/progress_bar.png' );
    // bg color
    this.game.stage.backgroundColor = '#000';
  },
  create: function() {
   this.game.state.start('Preload');
  }
};
