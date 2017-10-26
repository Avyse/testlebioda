// Define game object
let game;

// Define basic Phaser functions
function preload() {
  game.load.image('bg_granite_1', './assets/bg/granite_1.jpg');
}

function create() {
  game.add.sprite(0, 0, 'bg_granite_1');
}

function update() {}

// Add properties to game object with width = 800, height = 600,
// detect if WEBGL/Canvas and load basic Phaser functions
game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload,
  create,
  update,
});
