enchant();



window.onload = function() {
    //game object creation
    var game = new Core(320, 320);
    //image loading
    game.preload('chara0.png');
    //execution once the image has loaded completely
    game.onload = function() {
        //Sprite creation
        var bear = new Sprite(32, 32);
        bear.image = game.assets['chara0.png'];
        //frame loop to move the bear every frame
        bear.addEventListener(Event.ENTER_FRAME, function() {
            this.x += 1; //move by 3 pixels
        });
        //add the bear to the display object tree
        game.rootScene.addChild(bear);
    };
    game.start();
};