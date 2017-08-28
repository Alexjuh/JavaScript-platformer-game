define(["Class"],function(Class){

  var keys = [];

  var KeyManager = Class.extend({
    init:function(){},
    tick:function(){
      this.up = keys[38]; // is 87 w
      this.down = keys[40]; // is 83 s
      this.left = keys[37]; // is 65 a
      this.right = keys[39]; // is 68 d
      }
    });

    window.onkeydown = function(e){
      keys[e.keyCode] = true;
    }
    window.onkeyup = function(e){
      keys[e.keyCode] = false;
    }

  return KeyManager;

});
