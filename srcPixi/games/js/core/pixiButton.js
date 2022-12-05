function PixiButton(game,x, y, spriteName, clickEvent, over, down,up,noOverOut) {
    var textureButton;
    var textureButtonOver;
    var textureButtonDown;
    var button;
    var clickEvent_;
    var noOverOutEvt;

    function initClass_(game,x, y, spriteName, clickEvent, a,b,c,noOverOut) {
        if (a!=null) {
            textureButton = game.loader.resources[spriteName].textures[a];
            textureButtonDown = game.loader.resources[spriteName].textures[b];
            textureButtonOver = game.loader.resources[spriteName].textures[c];
        }else{
            textureButton = game.loader.resources[spriteName].texture;
        }
        noOverOutEvt=noOverOut;
        button = new PIXI.Sprite(textureButton);
        button.anchor.set(0.5);
        button.x = x;
        button.y = y;
        clickEvent_ = clickEvent
        button.clicked=false;
        button.interactive = true;
        if (a!=null) {
            button
                .on('pointerdown', onButtonDown)
                .on('pointerup', onButtonUp)
                .on('pointerupoutside', onButtonUp)
                .on('pointerover', onButtonOver)
                .on('pointerout', onButtonOut)
                .on('touchend', onButtonUp)
                .on('touchendoutside', onButtonUp);
        }else{

            //dummy fake transparent button with no states, just click
            button
                .on('pointerdown', onButtonDown);
        }

        button.selectFrame=function(frame){
            if (frame==0){
                this.texture = textureButton;
            }else if (frame==1){
                this.texture = textureButtonOver;
            }else if (frame==2){
                this.texture = textureButtonDown;
            }
        }
        button.setAnchor=function (x,y) {
            if (phaserVer_==2){
                button.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                button.anchor.set(x,y);
            }else{
                button.setOrigin(x,y);
            }
        }
        button.setScale=function (x,y) {
            if (phaserVer_==2){
            }else if (phaserVer_==-1){//pixi
                button.scale.set(x,y);
            }else{
            }
        }
        button.add_Child=function(child){
            button.addChild(child);
        }

        return button;
    }

    function reset_(){
        button.clicked=false;
    }

    function onButtonDown() {
        if (button.clicked==true)return;
        this.isdown = true;
        if(textureButtonDown) {
            this.texture = textureButtonDown;
        }
        clickEvent_(this);
        button.clicked=true;
        setTimeout(reset_,200);
    }

    function onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = textureButtonOver;
        } else {
            this.texture = textureButton;
        }
    }

    function onButtonOver() {
        if(noOverOut)return;
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = textureButtonOver;
    }

    function onButtonOut() {
        if(noOverOut)return;
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = textureButton;
    }

    function getCache_(key) {
        if (phaserVer_ == 2) {
            return game.cache.checkImageKey(key);
        } else if (phaserVer_ == -1) {//pixi
            return game.loader.resources;
        } else {
            var ret = game.textures.get(key);
            if (ret == false) {

            }
            return ret
        }
    }

    function getSpritePath_(key) {
        if (phaserVer_ == 2) {
            return game.cache.getImage(key).src;
        } else if (phaserVer_ == -1) {//pixi
            return game.loader.resources[key].url
        } else {
            return game.cache.obj.entries.get(key);
        }
    }


    return initClass_(game,x, y, spriteName, clickEvent, over, down,up,noOverOut);
}