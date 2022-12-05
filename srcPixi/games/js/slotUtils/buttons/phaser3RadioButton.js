function Phaser3RadioButton (scene,key,x,y,downCB){
    var btn;
    function initClass_(scene,key,x,y,downCB) {
        btn= spriteManager_.addSprite(x,y,key,null,null,0,0,1,1);
        btn.setInteractive();
        create_(scene,key,x,y,downCB);
        return btn;
    }

    function create_(scene,key,x,y,downCB){
        btn.on('pointerdown',function (){
            if (downCB!=null) {
                downCB(this);
            }
        });



    }

    var me = {
        create:create_
    };

    return initClass_(scene,key,x,y,downCB);
    return me;

}