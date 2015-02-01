/*
  - Initializes Phaser and Golemancer game objects
  - Starts the Golemancer game
*/

// setup custom Golemancer game object
Golemancer.width = tile_size * cols;
Golemancer.height = tile_size * rows;
Golemancer.camera = { x:0, y:0 };
Golemancer.scene = 1;
Golemancer.load_progress = 0; // set to value 0 through 100

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

// start the game
Golemancer.game.state.start( 'Boot' );
