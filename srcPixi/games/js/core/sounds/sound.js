/**
 * KiS Framework, Created by Fabry on 10/03/2016.
 */
function Sound(gameRef,soundManager,name,loop,volume){
    var game_=gameRef;
    var soundManager_=soundManager;
    var sound_;
    var name_=name;
    var volume_=volume;
    var initVol_=volume;
    var loop_=loop;
    var canPlay_=true;
    var intFadeOut_;
    var intFadeIn_;
    var breake_=false;
    var ua = window.navigator.userAgent;
    var IE;

    var initClass_=function(){
        if(game_.loader.resources[name_]==undefined)return

        sound_= game_.loader.resources[name_].sound; // game_.sound.add(name_);
        sound_.loop=loop_;
        IE=(/Trident.*rv[ :]*11\./.test(navigator.userAgent))?true:false;  //Microsoft IE doesn't allow volum higher than 1!!!
        sound_.volume=volumeCheck_(volume_);
    }

    var play_= function(){
        breake_=true;
        if (soundManager_.getCanPlay()){
            logger("play sounds"+name_ + " "+soundManager_.getCanPlay());
            sound_.play({loop: sound_.loop});
        }

    }

    var stop_= function(){
        sound_.stop();
    }

    var fadeOutBgSound_=function(duration,cb){
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        volume_=sound_.volume;
        var steps= volume_/(duration/100);
        intFadeOut_=setInterval(decreaseVolume_,200,steps,cb);
        breake_=false;
    }

    var fadeInBgSound_=function(duration){
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        volume_=0;
        sound_.volume=0;
        play_();
        var steps= (initVol_)/(duration/100);
        intFadeIn_=setInterval(increaseVolume_,200,steps);
    }

    var decreaseVolume_= function(vol,cb){
        if (breake_==true){
            sound_.volume=volumeCheck_(initVol_);
            clearInterval(intFadeOut_);
            return;
        }
        volume_=Number(volume_-parseFloat(vol));
        sound_.volume=volumeCheck_(volume_);
        if (volume_<=0){
            sound_.stop();
            sound_.volume=volumeCheck_(initVol_);
            clearInterval(intFadeOut_);
            if(cb!=null)cb();
        }
    }

    function volumeCheck_(vol){
        logger(ua + "  "+ IE.toString() + vol)
        if (!IE)return vol;
        if (vol<0)return 0;
        if (vol>1)return 1;
        return vol;
    }

    var increaseVolume_= function(vol){
        volume_=Number(volume_+parseFloat(vol));
        sound_.volume=volumeCheck_(volume_);
        if (volume_>=initVol_)clearInterval(intFadeIn_);
    }
    
    var setLoop_=function(val){
        sound_.loop=val;
    }

    function getSound_() {
        return sound_;
    }

    var me={
        play:play_,
        stop:stop_,
        setLoop:setLoop_,
        decreaseVolume:decreaseVolume_,
        increaseVolume:increaseVolume_,
        fadeOutBgSound:fadeOutBgSound_,
        fadeInBgSound:fadeInBgSound_,
        setVolume:function(vol){
            sound_.volume=vol;
        },
        getVolume:function(){
            return sound_.volume;
        },
        getBaseVolume:function(){
            return initVol_;
        },
        getSound:getSound_
    }
    initClass_();
    return me;
}