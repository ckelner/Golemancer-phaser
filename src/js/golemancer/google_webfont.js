//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {
  //  'active' means all requested fonts have finished loading
  active: function() {
    Golemancer.game.time.events.add( Phaser.Timer.SECOND, fontReady, this );
  },

  //  The Google Fonts we want to load
  google: {
    families: ['Revalia']
  }
};

function fontReady() {
  // dumb but this is required, really lame
  this.text = Golemancer.game.add.text(
    Golemancer.game.world.centerX,
    Golemancer.game.world.centerY,
    "."
  );
  this.text.anchor.setTo(0.5);
  this.text.font = 'Revalia';
  this.text.fontSize = 1;
  this.text.fill = '#000';
  Golemancer.google_font_ready = true;
}
