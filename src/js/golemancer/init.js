/*
  - Initializes Phaser
  - Starts the Golemancer game
*/
// create phaser game object
Golemancer.game = new Phaser.Game(
  Golemancer.width,
  Golemancer.height,
  Phaser.CANVAS,
  'golemancer'
);

// game states
Golemancer.game.state.add( 'Boot', Golemancer.Boot );
Golemancer.game.state.add( 'Preload', Golemancer.Preload );
Golemancer.game.state.add( 'Menu', Golemancer.Menu );
Golemancer.game.state.add( 'Level_One', Golemancer.LevelOne );

// start the game
Golemancer.game.state.start( 'Boot' );
