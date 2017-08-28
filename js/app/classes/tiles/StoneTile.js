define(['Tile'],function(Tile){

  var StoneTile = Tile.extend({
    init:function(_id){
      this._super(Tile.assets.stone,_id);
    },
    isSolid:function(){
      return true;
    }
  });
  return StoneTile;
});

//dit bestand communiceerd met een stuk uit Assets.
 // we overschrijven in de isSolid function de default gezet in tile.js om te zorgen dat stenen wel solid zijn in tegenstelling tot gras.
