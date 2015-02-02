Golemancer.Cabin = function(game) {
  this.game = game;
};

Golemancer.Cabin.prototype = {
  create: function() {
    this.game.physics.startSystem( Phaser.Physics.P2JS );
    this.game.physics.p2.setBoundsToWorld( true, true, true, true, false );
    Golemancer.camera = { x: 0, y: 1 };
    this.game.camera.x = Golemancer.camera.x * Golemancer.width; 
    this.game.camera.y = Golemancer.camera.y * Golemancer.height;

    this.game.world.setBounds( 0, 0 , Golemancer.width , Golemancer.height );
    this.map = this.game.add.tilemap( 'cabin' );
    this.map.addTilesetImage( 'cabin' );
    this.cabin_layer = this.map.createLayer('cabin');
    this.cabin_layer.resizeWorld();

    // setup collision
    this.map.setCollision(5); //wall
    this.map.setCollision(1); //wall

    this.physics.p2.convertTilemap( this.map, this.cabin_layer );
  },
  update: function() {

  }
};
