Golemancer.LevelOne = function(game) {
  this.game = game;
};

Golemancer.LevelOne.prototype = {
  create: function() {
    this.game.physics.startSystem( Phaser.Physics.P2JS );
    this.game.physics.p2.setBoundsToWorld( true, true, true, true, false );
    Golemancer.camera = { x: 0, y: 1 };
    this.game.camera.x = Golemancer.camera.x * Golemancer.width; 
    this.game.camera.y = Golemancer.camera.y * Golemancer.height;

    this.game.world.setBounds( 0, 0 , Golemancer.width , Golemancer.height );
    this.map = this.game.add.tilemap( 'level_one' );
    this.map.addTilesetImage( 'level_one' );
    this.level_layer = this.map.createLayer( 'level_one' );
    this.level_layer.resizeWorld();

    // setup collision
    this.map.setCollision(5); //wall
    this.map.setCollision(1); //wall

    this.physics.p2.convertTilemap( this.map, this.cabin_layer );

    //Golemancer.player.tile_x = 4;
    //Golemancer.player.tile_y = 4;
    //Golemancer.player.create();
  },
  update: function() {
    //Golemancer.player.update();
  },
  render: function() {
    //Golemancer.player.sprite.body.debug = true;
  }
};
