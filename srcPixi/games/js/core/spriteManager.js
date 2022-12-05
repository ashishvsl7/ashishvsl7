function SpriteManager(gameRef) {
    var game=gameRef;

    function initClass_() {
    }

    function addSpriteSheetAnimation_(x,y,spriteName,width,height,anchorX,anchorY,scaleX,scaleY){
        var obj;
        if (phaserVer_==-1){//pixi
            obj = new PIXI.Sprite(game.loader.resources[spriteName].textures[0]);
            obj.x=x;
            obj.y=y;
            if (scaleX!=null || scaleY!=null){
                if(scaleX!=null)obj.scale.x=scaleX;
                if(scaleY!=null)obj.scale.y=scaleY;
            }else if (width!=null || height!=null){
                if(width!=null )obj.width=width;
                if(height!=null )obj.height=height;
            }
            obj.anchor.set((anchorX!=null)?anchorX:0,(anchorY!=null)?anchorY:0)
        }

        obj.setAnchor=function (x,y) {
            if (phaserVer_==-1){//pixi
                obj.anchor.set(x,y);
            }
        }
        obj.name_=spriteName;
        return obj
    }

    function addSprite_(x,y,spriteName,width,height,anchorX,anchorY,scaleX,scaleY){
        var obj;
        if (phaserVer_==2){
            obj= game.add.sprite( x, y, spriteName);
            if (width != null)obj.width = width;
            if (height != null)obj.height = height;
            obj.anchor.set((anchorX != undefined) ? anchorX : 0, (anchorY != undefined) ? anchorY : 0);
        }else if (phaserVer_==-1){//pixi
            if (Array.isArray(spriteName)) {//multipack
                obj = new PIXI.Sprite(game.loader.resources[spriteName[0]].textures[spriteName[1]]);
            }else{
                obj = new PIXI.Sprite(game.loader.resources[spriteName].texture);
            }
            obj.x=x;
            obj.y=y;
            if (scaleX!=null || scaleY!=null){
                if(scaleX!=null)obj.scale.x=scaleX;
                if(scaleY!=null)obj.scale.y=scaleY;
            }else if (width!=null || height!=null){
                if(width!=null )obj.width=width;
                if(height!=null )obj.height=height;
            }
            obj.anchor.set((anchorX!=null)?anchorX:0,(anchorY!=null)?anchorY:0)
        }else{
            obj= game.add.sprite( x, y, spriteName);
            if (scaleX!=null || scaleY!=null){
                obj.setScale((scaleX!=null)?scaleX:(scaleY!=null)?scaleY:1);
            }else if (width!=null || height!=null){
                if(width!=null )obj.width=width;
                if(height!=null )obj.height=height;
            }
            obj.setOrigin((anchorX!=null)?anchorX:0,(anchorY!=null)?anchorY:0)
        }

        obj.setAnchor=function (x,y) {
            if (phaserVer_==2){
                obj.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                obj.anchor.set(x,y);
            }else{
                obj.setOrigin(x,y);
            }
        }
        obj.setScale=function (x,y) {
            if (phaserVer_==2){
            }else if (phaserVer_==-1){//pixi
                obj.scale.set(x,y);
            }else{
            }
        }

        obj.name_=spriteName;
        return obj
    }

    function addButton_(x,y,spriteName, clickEvent, over,down){
        const textureButton  = new PIXI.Sprite(game.loader.resources[spriteName].textures[0]);
        const textureButtonDown = new PIXI.Sprite(game.loader.resources[spriteName].textures[over]);
        const textureButtonOver =new PIXI.Sprite(game.loader.resources[spriteName].textures[down]);
        const buttons = [];


    }

    function addSpine_(x,y,spriteName,anchorX,anchorY,scale){
        var obj;
        if (phaserVer_==2){
        }else if (phaserVer_==-1){//pixi
            obj=new PIXI.spine.Spine(game.loader.resources[spriteName].spineData);
            if (ReelConfig.premultiply!=null && ReelConfig.premultiply ==true) {
                for (var a in game.loader.resources[spriteName].spineAtlas.pages) {
                    game.loader.resources[spriteName].spineAtlas.pages[0].baseTexture.alphaMode = 2;
                }
            }
            obj.name=spriteName;
            obj.loopNumber=0;
            obj.loopCount=0;
            obj.x=x;
            obj.y=y;
            if (scale!=undefined){
                obj.scale.x=scale;
                obj.scale.y=scale;
            }
            if (anchorX!=null || anchorY!=null) {
                obj.anchor.set((anchorX != null) ? anchorX : .5,(anchorY != null) ? anchorY : .5);
            }
        }else{


            obj= game.add.spine( x, y, spriteName,animation,true);


            if (scaleX!=null || scaleY!=null){
                obj.setScale((scaleX!=null)?scaleX:(scaleY!=null)?scaleY:1);
            }else if (width!=null || height!=null){
                if(width!=null )obj.width=width;
                if(height!=null )obj.height=height;
            }
            //obj.setOrigin((anchorX!=null)?anchorX:0,(anchorY!=null)?anchorY:0)
        }

        obj.setOrigin=function (x,y) {
            //spine doesn't have anchor points
            if(x!= undefined) {
                if (x == 0) {
                    obj.x = obj.x -obj.width / 2;
                }
                if (x == 0.5) {
                }
                if (x == 1) {
                    obj.x = obj.x +obj.width / 2;
                }
            }
            if(y!= undefined) {
                if(y ==0){
                    obj.y=obj.y-obj.height/2;
                }
                if(y ==0.5){
                }
                if(y ==1){
                    obj.y=obj.y+obj.height/2;
                }

            }

        }

        obj.setAnchor=function (x,y) {
            if (phaserVer_==2){
                obj.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                obj.setOrigin(x,y);
            }else{
                obj.setOrigin(x,y);
            }
        }

        obj.play=function(frame,loop,cb,args,delay){
            console.log(obj.name + " "+ frame+" playanimation " + loop + " "+ cb);
            if (obj.listener!=null){
                obj.state.removeListener(obj.listener);
            }
            obj.listener=null;

            if (loop==true){
                obj.loopNumber=-1;
            }else if (loop==false){
                obj.loopNumber=0
            }else{
                obj.loopNumber=loop;
                loop=false;
            }
            obj.loopCount=0;
            obj.state.setAnimation(0, frame,loop);
            if (args!=undefined){
                obj.args=args;
            }
            if (cb!=undefined){
                onComplete=function (entry){
                    console.log(obj.name + " "+ frame+" animation completed evt ")
                    obj.loopCount++;

                    if (obj.loopNumber==0) {
                        //not loop, event
                        obj.state.removeListener(obj.listener); //removes the listener because it fires multiple times!!!
                        if (delay == undefined) {
                            cb(args); //any other callbaks rather than the one used to kill the spin
                            return;
                        } else {
                            setTimeout(cb, delay, args); //the delay on timeout, usd to dispose the spine animation (kill it) needs a delay not to trigger rendering errors!
                        }
                    }else if (obj.loopNumber==-1) {
                        //loop event, not a thing so far
                        obj.state.setAnimation(0, frame,loop);
                    }else{
                        //play number, event
                        if (obj.loopCount>=obj.loopNumber){
                            obj.state.removeListener(obj.listener); //removes the listener because it fires multiple times!!!
                            if (delay == undefined) {
                                cb(args); //any other callbaks rather than the one used to kill the spin
                                return;
                            } else {
                                setTimeout(cb, delay, args); //the delay on timeout, usd to dispose the spine animation (kill it) needs a delay not to trigger rendering errors!
                            }
                        }else{
                            obj.state.setAnimation(0, frame,loop);
                        }
                    }
                }
                obj.listener= {complete:onComplete};
                obj.state.addListener(obj.listener);


            }else{
                onComplete=function (entry){
                    console.log( obj.name + " "+ frame);
                    obj.loopCount++;
                    if (obj.loopNumber==0) {
                        //not loop no evnt
                        obj.state.removeListener(obj.listener); //removes the listener because it fires multiple times!!!
                        console.log( obj.name + " "+ frame+"  ended with no loop!");
                        return
                    }else if (obj.loopNumber==-1) { //loop no evt
                        console.log( obj.name + " "+ frame+"  ended with no loop!");
                        return
                    }else{ //number play no evt
                        if (obj.loopCount>=obj.loopNumber){
                            console.log( obj.name +" ended with loops "+ obj.loopCount);
                            obj.state.removeListener(obj.listener); //removes the listener because it fires multiple times!!!
                            //removes the listener because it fires multiple times!!!
                        }else{
                            console.log( obj.name +" looping: " + obj.loopCount);
                            obj.state.setAnimation(0, frame,loop);
                        }
                    }
                }
                obj.listener= {complete:onComplete};
                obj.state.addListener(obj.listener);


            }
        }
        obj.name_=spriteName;
        return obj
    }

    function fakeEvt(){
    }

    function addText_(x,y,text,anchorX,anchorY,attr){
        var obj;
        if (anchorX==null)anchorX=0;
        if (anchorY==null)anchorY=0;
        if (phaserVer_==2){
            obj=new Phaser.Text( game, x, y, text, attr);
        }else if (phaserVer_==-1){//pixi
            var style = new PIXI.TextStyle(attr);
            obj=new PIXI.Text(text,style);
            obj.x=x;
            obj.y=y;

            obj.anchor.set((anchorX!=undefined)?anchorX:0,(anchorY!=undefined)?anchorY:1);

        }else{
            if (attr.fontWeight==undefined){
                attr.fontWeight="normal";
            }
            if (attr.fontVariant==undefined){
                attr.fontVariant="normal";
            }
            obj= game.add.text( x, y, text,attr).setOrigin(anchorX, anchorY);
        }
        obj.setAnchor=function (x,y) {
            if (phaserVer_==2){
                obj.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                obj.anchor.set(x,y);
            }else{
                obj.setOrigin(x,y);
            }
        }
        obj.setScale=function (x,y) {
            if (phaserVer_==2){
                obj.scale.x=x;
                obj.scale.y=y!=undefined?y:x;
            }else if (phaserVer_==-1){//pixi
                obj.scale.x=x;
                obj.scale.y=y;
            }else{
                obj.setScale(x,y);
            }
        }
        if (phaserVer_==-1) {//pixi
            obj.setText=function (value) {
                obj.text=value;
            }
        }
        return obj
    }

    function addBMPText_(x,y,font_,text,size_,align_){
        if (phaserVer_==2){
            var txt= new Phaser.BitmapText(game, x,y, font_, text, size_, align_);
        }else if (phaserVer_==-1){//pixi
            var txt=new PIXI.BitmapText(text,{font:size_ +"px " +font_});
            txt.x=x;
            txt.y=y;
            if (align_)txt.align=align_;
        }else {
            var txt= game.add.dynamicBitmapText(x,y, font_, text, size_, align_);
        }
        txt.setAnchor=function (x,y) {
            if (phaserVer_==2){
                txt.anchor.set(x,y);
            }else if (phaserVer_==-1){//pixi
                txt.anchor.set(x,y);
            }else{
                txt.setOrigin(x,y);
            }
        }
        if (phaserVer_==-1) {//pixi
            txt.setText=function (value) {
                txt.text=value;
            }
        }
        return txt;
    }

    function getCache_(key){
        if (phaserVer_==2){
            return game.cache.checkImageKey(key);
        }else if (phaserVer_==-1){//pixi
            return game.loader.resources;
        }else{
            var ret=game.textures.get(key);
            if (ret==false){

            }
            return ret
        }
    }

    function getSpritePath_(key){
        if (phaserVer_==2) {
            return game.cache.getImage(key).src;
        }else if (phaserVer_==-1){//pixi
            return game.loader.resources[key].url
        }else{
            return  game.cache.obj.entries.get(key);
        }
    }


    var me = {
        addBMPText:addBMPText_,
        addSprite:addSprite_,
        addSpriteSheetAnimation:addSpriteSheetAnimation_,
        addSpine:addSpine_,
        addText:addText_,
        getCache:getCache_,
        getSpritePath:getSpritePath_,
        Button:addButton_
    };

    initClass_;
    return me;
}