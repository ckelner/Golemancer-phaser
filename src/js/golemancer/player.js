Golemancer.Player = function( game ) {
  this.game = game;
  this.sprite = null;
  this.tile_x = 0; // player x position
  this.tile_y = 0; // player y position
  this.w_key; // up
  this.s_key; // down
  this.a_key; // left
  this.d_key; // right
  this.speed = 160;
};

Golemancer.Player.prototype = {
  preload: function() {
    this.game.load.spritesheet(
      'player',
      'assets/sprites/hero.png',
      Golemancer.tile_size,
      Golemancer.tile_size + 16, // 16 extra pixels high
      16,
      0
    );
  },
  create: function() {
    // sets up arrow keys
    this.cursor = this.game.input.keyboard.createCursorKeys();

    //Setup w,s,a,d keys
    this.w_key = this.game.input.keyboard.addKey( Phaser.Keyboard.W );
    this.s_key = this.game.input.keyboard.addKey( Phaser.Keyboard.S );
    this.a_key = this.game.input.keyboard.addKey( Phaser.Keyboard.A );
    this.d_key = this.game.input.keyboard.addKey( Phaser.Keyboard.D );

    this.sprite = this.game.add.sprite(
      ( this.tile_x * Golemancer.tile_size ) - ( Golemancer.tile_size / 2 ),
      ( this.tile_y * Golemancer.tile_size ) + ( Golemancer.tile_size / 2 ),
      'player'
    );
    
    this.sprite.anchor.setTo( 0.5, 0.5 );
    this.game.physics.p2.enable( this.sprite );
    this.sprite.body.fixedRotation = true;

    //hitbox
    this.sprite.body.clearShapes();
    this.sprite.body.addRectangle(
      23, // width
      43, // height
      1, // offset x
      0 // offset y
    );

    this.sprite.direction = 'down';
    this.sprite.animations.add(
      'down', // name
      [ 0, 1, 2, 3 ], // frames
      6, // frames per second
      true // loop
    );
    this.sprite.animations.add(
      'up',
      [ 12, 13, 14, 15 ],
      6,
      true
    );
    this.sprite.animations.add(
      'right',
      [ 8, 9, 10, 11 ],
      6,
      true
    );
    this.sprite.animations.add(
      'left',
      [ 4, 5, 6, 7 ],
      6,
      true
    );
  },
  update: function() {
    this.movements();
    this.updateCamera();
  },
  updateCamera: function() {
    if(this.tweening) {
      return;
    }
    this.tweening = true;
    var make_move = false;

    if(this.sprite.y > Golemancer.game.camera.y + Golemancer.height) {
      Golemancer.camera.y += 1;
      make_move = true;
    }
    else if(this.sprite.y < Golemancer.game.camera.y) {
      Golemancer.camera.y -= 1;
      make_move = true;
    }
    else if(this.sprite.x > Golemancer.game.camera.x + Golemancer.width) {
      Golemancer.camera.x += 1;
      make_move = true;
    }
    else if(this.sprite.x < Golemancer.game.camera.x) {
      Golemancer.camera.x -= 1;
      make_move = true;
    }

    if(make_move) {
      var _tween = this.game.add.tween( this.game.camera ).to(
        {
          x: ( Golemancer.camera.x * Golemancer.width ),
          y: ( Golemancer.camera.y * Golemancer.height )
        },
        400
      );
      _tween.start();
      _tween.onComplete.add(
        function(){
          this.tweening = false;
        },
        this
      );
    }
    else {
      this.tweening = false;
    }
  },
  reposition: function() {
    this.sprite.x = this.tile_x * Golemancer.tile_size - ( Golemancer.tile_size / 2 );
    this.sprite.y = this.tile_y * Golemancer.tile_size + ( Golemancer.tile_size / 2 );
  },
  movements:  function() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    if(this.tweening) {
      this.sprite.body.velocity.x = 0;
      this.sprite.body.velocity.y = 0;
    } else {
      if( this.cursor.left.isDown || this.a_key.isDown ) {
        this.sprite.body.velocity.x = -this.speed;
        this.sprite.direction = 'left';
        this.sprite.animations.play('left');
      }
      else if( this.cursor.right.isDown || this.d_key.isDown ) {
        this.sprite.body.velocity.x = this.speed;
        this.sprite.direction = 'right';
        this.sprite.animations.play('right');
      }
      else if( this.cursor.up.isDown || this.w_key.isDown ) {
        this.sprite.body.velocity.y = -this.speed;
        this.sprite.direction = 'up';
        this.sprite.animations.play('up');
      }
      else if( this.cursor.down.isDown || this.s_key.isDown ) {
        this.sprite.body.velocity.y = this.speed;
        this.sprite.direction = 'down';
        this.sprite.animations.play('down');
      }
      else {
        if (this.sprite.direction === 'up') {
          this.sprite.frame = 12;
        }
        else if (this.sprite.direction === 'down') {
          this.sprite.frame = 0;
        }
        else if (this.sprite.direction === 'right') {
          this.sprite.frame = 8;
        }
        else if (this.sprite.direction === 'left') {
          this.sprite.frame = 4;
        }
        this.sprite.animations.stop();
      }
    } 
  },
};
