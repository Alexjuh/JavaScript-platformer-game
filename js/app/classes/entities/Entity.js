define(['Class','Rectangle'],function(Class,Rectangle){

  var Entity = Class.extend({
    init:function(_handler,_x,_y,_width,_height){
      this.handler = _handler;
      this.x = _x;
      this.y = _y;
      this.width = _width;
      this.height = _height;
      this.bounds = new Rectangle(0,0,_width,_height);
    },
    tick:function(){
      throw("Entities must have a tick function");
    },
    render:function(){
      throw("Entities must have a render function");
    },
    click:function(){
      throw("Entities must have a click function");
    },
    //Getters
    getX:function(){
      return this.x;
    },
    getY:function(){
      return this.y;
    },
    getWidth:function(){
      return this.width;
    },
    getHeight:function(){
      return this.height;
    },
    getCollisionBounds:function(xOffset,yOffset){
      return new Rectangle(parseInt(this.x+this.bounds.x + xOffset),
      parseInt(this.y+this.bounds.y + yOffset),
      this.bounds.width,this.bounds.height);
    },
    checkEntityCollisions:function(xOffset,yOffset){
      var candidates =  this.handler.getWorld().getSpatialGrid().retrieve(new Rectangle(this.x + this.bounds.x + xOffset,this.y + this.bounds.y + yOffset, this.bounds.width,this.bounds.height),this);
      // console.log(candidates.length); //log for collisions with entities
      for(var i=0;i<candidates.length;i++){
        var e = candidates[i];
        if(e!=this){
          if(e.getCollisionBounds(0,0).intersects(this.getCollisionBounds(xOffset,yOffset))){
            return true;
          }
        }
      }
      return false;
    },

    //Setters
    setX:function(_x){
      this.x = _x;
    },
    setY:function(_y){
      this.y = _y;
    },
    setWidth:function(_width){
      this.width = _width;
    },
    setHeight:function(_height){
      this.height = _height;
    }
  });

  return Entity;

});
