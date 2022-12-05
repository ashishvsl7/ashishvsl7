function LoaderManager(gameRef) {
    var game=gameRef;


    function initClass_() {
    }

    function loadAudio_(name,path){
        if (phaserVer_==2) {
            game.load.audio(name, path);
        }else if (phaserVer_==-1){//pixi
            game.add(name,path);
        }else{
            game.load.audio(name,path);
        }
    }

    function loadImage_(name,path){
        if (phaserVer_==2){
            game.load.image(name,path);
        }else if (phaserVer_==-1){//pixi
            game.add(name,path);
        }else{
            game.load.image(name,path);
        }

    }

    function loadAtlas_(name,sprite,json){
        if (phaserVer_==2){
            game.load.atlas(name,sprite,json);
        }else if (phaserVer_==-1){//pixi
            game.add(name,json);
        }else{
            game.load.atlas(name,sprite,json,{ frameWidth: 64, frameHeight: 64, endFrame: 23 });
        }

    }


    function loadJson_(name,path){
        if (phaserVer_==2){
            game.load.json(name,path);
        }else if (phaserVer_==-1){//pixi
            game.add(name,path);
        }else{
            game.load.json(name,path);
        }

    }

    function loadSpine_(name,path){
        if (phaserVer_==2){
        }else if (phaserVer_==-1){//pixi
            game.add(name,path);
        }else{
        }
    }

    function loadBmpFont_(name,sprite,font){
        if (phaserVer_==2){
            game.load.bitmapFont(name,sprite,font);
        }else if (phaserVer_==-1){//pixi
            game.add(name,font);
        }else{
            game.load.bitmapFont(name,sprite,font);
        }
    }



    var me = {
        loadAudio:loadAudio_,
        loadImage:loadImage_,
        loadAtlas:loadAtlas_,
        loadJson:loadJson_,
        loadBmpFont:loadBmpFont_,
        loadSpine:loadSpine_
    };

    initClass_;
    return me;
}