define(['Tile','GrassTile','DirtTile','StoneTile','WaterTile'],function(Tile,GrassTile,DirtTile,StoneTile,WaterTile){ //hierin blijf je de gelijknamige bestanden inladen tussen de haken.
  Tile.grassTile = new GrassTile(0); // 0 is het id
  Tile.dirtTile = new DirtTile(1);
  Tile.stoneTile = new StoneTile(2);
  Tile.waterTile = new WaterTile(3);

  return Tile;
});
