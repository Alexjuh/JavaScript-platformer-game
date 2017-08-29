define(['Class','ImageLoader','SpriteSheet','Animation'],function(Class,ImageLoader,SpriteSheet,Animation){
  var DEFAULT_WIDTH = 32, DEFAULT_HEIGHT = 32;
  var assets = {};

  var Assets = Class.extend({
    init: function (_name, _path, _width, _height) {
        assets[_name] = this;
        this.name = _name;
        this.path = _path;
        this.width = _width;
        this.height = _height;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        this.animations = {};
    },
		addAnimation:function(_name,_animation){
			this.animations[_name] = _animation;
		}
  });

  Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
  Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
  Assets.getAssets = function(_name){
    return assets[_name];
  }

  // create player assets
  var player = new Assets("player","res/textures/link.png",120,130);

  //Build frames
  var framespeed = 75,
  // walk right/left/up/down frames
  wrframes = [],
  wlframes = [],
  wuframes = [],
  wdframes = [],
  // walk right/left/up/down row
  wrrow = 7,
  wlrow = 5,
  wurow = 6,
  wdrow = 4;
  for(var i = 0;i<10;i++){
    wrframes.push({
      frame:player.sheet.crop(player.width * i,player.height * wrrow,player.width,player.height),
      speed:framespeed
    });
    wlframes.push({
      frame:player.sheet.crop(player.width * i,player.height * wlrow,player.width,player.height),
      speed:framespeed
    });
    wuframes.push({
      frame:player.sheet.crop(player.width * i,player.height * wurow,player.width,player.height),
      speed:framespeed
    });
    wdframes.push({
      frame:player.sheet.crop(player.width * i,player.height * wdrow,player.width,player.height),
      speed:framespeed
    });
  }

  var idleframes = [
  {frame:player.sheet.crop(0,0,player.width,player.height),speed:framespeed*80},
  {frame:player.sheet.crop(player.width,0,player.width,player.height),speed:framespeed},
  {frame:player.sheet.crop(player.width * 2,0,player.width,player.height),speed:framespeed},
  ];

  //create animations
  player.addAnimation("walk_right",new Animation(wrframes));
	player.addAnimation("walk_left",new Animation(wlframes));
	player.addAnimation("walk_up",new Animation(wuframes));
	player.addAnimation("walk_down",new Animation(wdframes));
	player.addAnimation("idle",new Animation(idleframes));

  //726,798
  //tree assets
  var tree = new Assets("tree","res/textures/tree_01.png",726,798);
  tree.redwood = tree.sheet.crop(0,0,726,798);

  //Tile asset
  var tiles = new Assets("tiles","res/textures/tiles.png",30,30);
  tiles.dirt = tiles.sheet.crop(0,tiles.height*10,tiles.width,tiles.height); //de 0 (eerste cijfer) is de colom, de 10 (tweede cijfer) staat voor de 10e rij op het plaatje. op deze manier kan je ze uitknippen.
  tiles.grass = tiles.sheet.crop(0,tiles.height,tiles.width,tiles.height);
  tiles.stone = tiles.sheet.crop(0,tiles.height*7,tiles.width,tiles.height);
  tiles.water = tiles.sheet.crop(0,tiles.height*9,tiles.width,tiles.height);
  // deze tile codes zijn nodig om de bestanden die in de map tiles zitten, aan te sturen.
  return Assets;
});
