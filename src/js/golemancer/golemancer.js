/*
  Initializes custom Golemancer game object
*/
var Golemancer = {};
// setup Golemancer game properites
Golemancer.rows = 20;
Golemancer.cols = 24;
Golemancer.tile_size = 32;
Golemancer.width = Golemancer.tile_size * Golemancer.cols;
Golemancer.height = Golemancer.tile_size * Golemancer.rows;
Golemancer.camera = { x:0, y:0 };
Golemancer.scene = 1;
Golemancer.load_progress = 0; // set to value 0 through 100
Golemancer.google_font_ready = false;
