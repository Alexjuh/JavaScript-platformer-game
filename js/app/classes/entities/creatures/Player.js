define(['Creature','Assets'],function(Creature,Assets){

  var Player = Creature.extend({
    init:function(_handler,_x,_y){
      this._super(_handler,_x,_y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
      this.assets = Assets.getAssets("player");
      this.bounds.x = 5;
      this.bounds.y = 25;
      this.bounds.width = 15;
      this.bounds.height = 15;
    },
    tick:function(_dt){
      this.getInput(_dt);
      this.move();
      this.handler.getGameCamera().centerOnEntity(this);
      this.assets.animations.walk_right.tick();
      this.assets.animations.walk_left.tick();
      this.assets.animations.walk_up.tick();
      this.assets.animations.walk_down.tick();
      this.assets.animations.idle.tick();
    },
    render:function(_g){
      _g.myDrawImage(this.assets.animations.walk_right.getCurrentFrame(),this.x - this.handler.getGameCamera().getxOffset(),this.y - this.handler.getGameCamera().getyOffset(),this.width,this.height);
    },
    getInput:function(_dt){
      this.xMove=0;
      this.yMove=0;
      if(this.handler.getKeyManager().up){
        this.yMove = -this.speed * _dt;
      }
      if(this.handler.getKeyManager().down){
        this.yMove = this.speed * _dt;
      }
      if(this.handler.getKeyManager().left){
        this.xMove = -this.speed * _dt;
      }
      if(this.handler.getKeyManager().right){
        this.xMove = this.speed * _dt;
      }
    },
    getCurrentAnimationFrame:function(){
      if(this.xMove<0){
        return this.assets.animations.walk_left.getCurrentFrame();
      }
    }

  });

  return Player;
});
