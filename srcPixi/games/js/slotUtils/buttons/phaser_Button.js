function Phaser_Button (scene, key, x, y, up, over, down, upCb, overCB, downCB){
    var btn;
    function initClass_(scene,key,x,y,up,over,down,upCb,overCB,downCB) {
        //check if config contains a scene
        if (!up) {
            up = 0;
        }
        //if there is no down in config use up
        if (!down) {
            down = up;
        }
        //if there is no over in config use up
        if (!over) {
            over = up;
        }

        if (phaserVer_==2){
            btn=new Phaser.Button(scene,x,y,key,downCB ,up, over, down, 0 );
        }else if (phaserVer_==-1){//pixi
            if (key!= undefined){
                btn= new PIXI.Sprite(game._loader.resources[key].texture);
            }else{
                btn=new PIXI.Sprite();
            }
            btn.x=x;
            btn.y=y;
        }else {
            btn = spriteManager_.addSprite(x, y, key, null, null, 0, 0, 1, 1);
            btn.setInteractive();
            create_(scene, key, x, y, up, over, down, upCb, overCB, downCB);
            btn.setFrame(up);
        }
        btn.setAnchor=function (x,y) {
            if (phaserVer_==2){
                btn.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                btn.anchor.set(x,y);
            }else{
                btn.setOrigin(x,y);
            }
        }
        btn.add_Child=function (child) {
            if (phaserVer_==2){
                btn.addChild(child);
            }else if (phaserVer_==-1){//pixi
                btn.addChild(child);
            }else{
                btn.add(child);
            }
        }
        return btn;
    }

    function create_(scene,key,x,y,up,over,down,upCb,overCB,downCB){
        btn.on('pointerup',up_,function(){
            console.log("up " + up);
            btn.setFrame(up);
        });
        btn.on('pointerover',function (){
            console.log("over " + over);
            btn.setFrame(over);
        });
        btn.on('pointerout',function (){
            console.log("out 0" );
            btn.setFrame(up);
        });
        btn.on('pointerdown',function (){
            console.log("down " + down);
            btn.setFrame(down);
            if (downCB!=null) {
                downCB();
            }
        });



    }

    function up_(obj){
        btn.setFrame(up);
    }
    function onOver_(obj){
        btn.setFrame(over);
    }




    var me = {
        create:create_
    };

    return initClass_(scene,key,x,y,up,over,down,upCb,overCB,downCB);
    return me;

}