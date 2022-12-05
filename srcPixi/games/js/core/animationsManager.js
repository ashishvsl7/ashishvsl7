function AnimationsManager(gameRef) {
    var game=gameRef;

    function initClass_() {
    }

    function create_(obj,spriteName){
        if (phaserVer_==2){
            obj.animations.add(frameName);
        }else if (phaserVer_==-1){//pixi spritesheet animation
            var frames = [];

            var i=0
            for (var i in  game.loader.resources[spriteName].textures) {
                // magically works since the spritesheet was loaded with the pixi loader
                frames.push(game.loader.resources[spriteName].textures[i]);
            }
            obj.animation = {};
            obj.animation.frames=frames;
            obj.animation.len=i;
            obj.animation.frame=0;

            obj.playBack=function(frame){
                obj.texture=obj.animation.frames[frame];
            }

            obj.play=function(speed,loop,cb,pars){
                this.cb_=cb;
                this.pars_=pars;
                var s=(speed!=undefined)?speed:24;
                this.animation.frame=0;
                this.animation.interval=1000/s
                this.loop=(loop!=undefined)?loop:false;
                this._interval=setTimeout(changeframe,1000/s,this);
            }
            changeframe=function(obj){
                clearTimeout(obj._interval);
                if (obj.animation.frame<obj.animation.len){
                    obj.animation.frame++;
                    obj.texture=obj.animation.frames[obj.animation.frame];
                    obj._interval=setTimeout(changeframe,obj.animation.interval,obj);
                }else if (obj.loop) {
                    obj.animation.frame=0;
                    obj.texture=obj.animation.frames[obj.animation.frame];
                    obj._interval=setTimeout(changeframe,obj.animation.interval,obj);
                }else{
                    if (obj.cb_!=undefined)obj.cb_(obj.pars_);
                    obj._interval=-1;
                }
            }

        }else{

            game.anims.create({
                key: obj.name_+"_"+frameName,
                frames: game.anims.generateFrameNames(obj.name_),
                frameRate: (speed)?speed:24,
                repeat: (loopOrNumber==false)?0:(loopOrNumber==true)?-1:(loopOrNumber!=undefined)?loopOrNumber:false,
                hideOnComplete:(kill!=undefined)?kill:true
            });

        }
        return obj;
    }

    function play_(obj,frameName,speed,loopOrNumber,kill,cb,cbPar){
        if (phaserVer_==2){
            obj.animations.play(frameName, speed, loopOrNumber, kill,cb,cbPar);
        }else if (phaserVer_==-1){//pixi
            obj.frame=0;
            obj._interval=setInterval(changeframe,1000/speed);

            changeframe=function(){
                if (obj.frame<=obj.len){
                    obj.frame++;
                    obj.texture= PIXI.Sprite(obj.frames[obj.frame]);
                }else{
                    clearInterval(interval);
                    obj._interval=-1;
                }
            }



        }else{
            obj.play(obj.name_+"_"+frameName);
            if (cb) obj.on('animationcomplete', cb,cbPar);

        }
    }

    function setFrame_(obj,frame){
        if (phaserVer_==2) {
        }else if (phaserVer_==-1){//pixi
        }else{
            obj.anims.pause(obj.anims.currentAnim.frames[frame]);


            //obj.anims.setFrame(frame);
        }
    }

    function pause_(obj,frame){
        if (phaserVer_==2) {
        }else if (phaserVer_==-1){//pixi
        }else{
            obj.anims.pause();


            //obj.anims.setFrame(frame);
        }
    }

    function setScale_(obj,x,y){
        if (phaserVer_==2) {
            obj.scale.x = x;
            obj.scale.y = y;
        }else if (phaserVer_==-1){//pixi
        }else{

        }
    }

    function setAnchor_(obj,x,y){
        if (phaserVer_==2){
            obj.setAnchor(x,y);
        }else if (phaserVer_==-1){//pixi
        }else{

        }
    }

    var me = {
        create:create_,
        play:play_,
        pause:pause_,
        setFrame:setFrame_,
        setScale:setScale_,
        setAnchor:setAnchor_
    };

    initClass_;
    return me;
}