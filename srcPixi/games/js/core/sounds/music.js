/**
 * KiS Framework, Created by Fabry on 10/03/2016.
 */
function Music(gameRef,soundManager,name,loop,volume,useMarker,objConfig){
    var game_=gameRef;
    var soundManager_=soundManager;
    var music_;
    var name_=name;
    var volume_=volume;
    var initVol_=volume;
    var loop_=loop;
    var intFadeOut_;
    var intFadeIn_;
    var targetVol_;
    var ua = window.navigator.userAgent;
    var IE;
    var firstMarkerReached_=false;
    var marker_=useMarker;
    var bCanPlay_=true;
    var object_=objConfig;
    var timer_;

    function initClass_(){
        if (phaserVer_==3) {
            music_ = game_.sound.add(name_);
        }else if (phaserVer_==-1) {
            if(game_.loader.resources[name_]==undefined)return
            music_= game_.loader.resources[name_].sound; // game_.sound.add(name_);
        }else{
            if (marker_) {
                music_=game_.add.audioMarker(name_);
                music_.addMarker("first", 1, 0);//just fake in order to make the markers working
            }else{
                music_=game_.add.sound(name_);
            }
        }

        music_.usingAudioTag=true;
        music_.loop=loop_;
        IE=(/Trident.*rv[ :]*11\./.test(navigator.userAgent))?true:false;  //Microsoft IE doesn't allow volum higher than 1!!!
        volume_=volumeCheck_(volume_);
        music_.volume=volume_;
    }

    function play_(pos){
        if (soundManager_.getCanPlayBg() || isSoundEffect_()) {
            if (phaserVer_ == 3) {
                music_.play();
            }else if (phaserVer_==-1) {

                if (marker_){
                    var d= new Date().getTime()/1000;
                    timer_= pos +d ;
                    music_.play(pos);
                }else{
                    music_.play();
                }
            } else {
                if (marker_) {
                    music_.addMarker("first", 1, 0);//just fake in order to make the markers working
                    music_.play("first", 1, music_.volume, true, true, this);
                } else {
                    music_.loopFull();
                }
            }
        }
    }

    function stop_(){
        timer_=null;
        music_.stop();
    }

    function fadeOutBgSound_(duration,cb){
        //fade music out
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        volume_=music_.volume;
        var steps= volume_/(duration/100);
        intFadeOut_=setInterval(decreaseVolume_,100,steps,cb);
    }

    function fadeInBgSound_(duration,vol){
        //fade mousic in
        if (initVol_==0)return;
        if (soundManager_.getCanPlayBg()==false && isSoundEffect_()==false)return;
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        volume_=0;
        if (vol!=null){
            targetVol_=vol;
        }else{
            targetVol_=initVol_;
        }
        music_.volume=volumeCheck_(volume_);
        play_();
        var steps= (targetVol_)/(duration/100);
        intFadeIn_=setInterval(increaseVolume_,100,steps);
    }

    function decreaseVolume_(vol,cb){
        //slowly decrease music vol
        volume_=Number(volume_-parseFloat(vol));
        music_.volume=volumeCheck_(volume_);
        if (volume_<=0){
            volume_=0;
            stop_();   //stopping sound with marker end in a mess
            music_.volume=0;
            clearInterval(intFadeOut_);
           if(cb!=null)cb();
        }
    }

    function immediateDecreaseVolume_(){
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        volume_=0;
        stop_();   //stopping sound with marker end in a mess
        music_.volume=0;
    }

    function increaseVolume_(vol){
        //slowly inccrease music vol
        volume_=volume_+vol;
        music_.volume=volumeCheck_(volume_);
        if (volume_+0.0001>=initVol_){
            music_.volume=initVol_;
            clearInterval(intFadeIn_);
        }
    }

    function increaseVolumeExt_(vol){
        //slowly inccrease music vol
        volume_=volume_+vol;
        music_.volume=volumeCheck_(volume_);
        if (volume_ +0.0001>=targetVol_ ){
            music_.volume=targetVol_;
            clearInterval(intFadeIn_);
        }
    }

    function volumeCheck_(vol){
        if (!IE){
            if (vol<0)return 0;
            if (vol>2)return 2; //never know
            return vol;
        }
        if (vol<0)return 0;
        if (vol>1)return 1;
        return vol;
    }

    function increaseVolExternal_(duration){
        //fade mousic in
        if (soundManager_.getCanPlayBg()==false && isSoundEffect_()==false)return;
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        targetVol_=initVol_;
        console.log("increaseVolExternal_ "+volume_ + " "+ targetVol_)
        music_.volume=Math.min(volumeCheck_(volume_),targetVol_)
        var steps= (targetVol_)/(duration/100);
        intFadeIn_=setInterval(increaseVolume_,100,steps);
    }

    function increaseVolumeExternalSync_(duration,marker){
        //fade mousic in
        if (soundManager_.getCanPlayBg()==false && isSoundEffect_()==false)return;
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        targetVol_=initVol_;
        music_.play("fade", marker, 0, true, true, gameClass_);
        music_.volume=Math.min(volumeCheck_(volume_),targetVol_)
        var steps= (targetVol_)/(duration/100);
        intFadeIn_=setInterval(increaseVolumeExt_,100,steps);
    }

    function increaseVolumeExternal_(duration){
        //fade mousic in
        if (soundManager_.getCanPlayBg()==false && isSoundEffect_()==false)return;
        clearInterval(intFadeOut_);
        clearInterval(intFadeIn_);
        music_.volume=Math.min(volumeCheck_(volume_),targetVol_);
        var steps= (initVol_)/(duration/100);
        intFadeIn_=setInterval(increaseVolumeExt_,100,steps);
    }

    function fadeOutBgSoundExternal_(duration,vol, cb){
        if (soundManager_.getCanPlayBg() || isSoundEffect_()) {
            console.log("start decresing vol "+ name_ + " from " + music_.volume)
            //fade music out
            clearInterval(intFadeOut_);
            clearInterval(intFadeIn_);

            var steps = (volume_ - vol) / (duration / 100);
            intFadeOut_ = setInterval(decreaseVolumeExternal_, 100, vol, steps, cb);
        }
    }

    function fadeInBgSoundExternal_(duration,vol, marker_,duration_,cb){
        //fade music out
        if (soundManager_.getCanPlayBg()|| isSoundEffect_()) {
            console.log("start incresing vol "+name_);
            if (phaserVer_==3) {
                var marker = [];
                marker.name = "first";
                marker.start = 0;
                marker.loop = true;
                music_.addMarker(marker);

                marker.name="fade";
                marker.start=marker_;
                marker.volume=0;
                marker.loop=false;
                music_.addMarker(marker);
                volume_ = 0;
                music_.play("fade", marker, 0, true, true, gameClass_);
                initVol_=vol;
                music_.on('complete', function (){
                    music_.play("first",1,0,0)
                });

            }else{
                music_.addMarker("first", 1, 0, 0);//used to loop after the first marker execution when started from a marker
                music_.addMarker("fade", marker_, duration_, 0);
                music_.play("fade", marker_, 0, true, true, gameClass_);
                music_.onMarkerComplete.add(function () { // This will only fire once, and the sound will NOT loop after heading into the loop section under any circumstances, whether loop is set to true or false on the marker or play function itself
                    firstMarkerReached_ = true;
                }, this);
            }

            targetVol_ = volumeCheck_(vol);
            increaseVolumeExternal_(duration);
        }
    }

    function fadeInBgSoundExternalJustVolSync_(duration,vol,marker){
        //fade music out
        if (soundManager_.getCanPlayBg()|| isSoundEffect_()) {
            targetVol_ = vol;
            increaseVolumeExternalSync_(duration,marker);
        }
    }

    function fadeInBgSoundExternalJustVol_(duration,vol){
        //fade music out
        if (soundManager_.getCanPlayBg()|| isSoundEffect_()) {
            targetVol_ = vol;
            increaseVolumeExternal_(duration);
        }
    }


    function decreaseVolumeExternal_(v,vol,cb){
        //slowly decrease music vol
        if (music_.volume>v) {
            console.log("start decresing ext vol "+ name_ + " " + music_.volume + " > "+ volumeCheck_(Number(volume_ - parseFloat(vol))));
            volume_ = volumeCheck_(Number(volume_ - parseFloat(vol)));
            targetVol_ = volume_;
            music_.volume = volume_;

            if (volume_ <= v) {
                music_.volume = v;
                clearInterval(intFadeOut_);
                if (cb != null) cb();
            }
        }
    }

    function getSound_() {
        return music_;
    }

    function isSoundEffect_() {
        // when loop bg music is used as effect it should start if the background genral setting is off
        if (soundManager_.getCanPlay()==true && object_.effect==true)return true;
        return false;
    }

    function getPosition_() {
        var d= new Date().getTime()/1000;
        return d-timer_;
    }

    var me={
        play:play_,
        stop:stop_,
        immediateDecreaseVolume:immediateDecreaseVolume_,
        decreaseVolume:decreaseVolume_,
        increaseVolume:increaseVolume_,
        fadeOutBgSound:fadeOutBgSound_,
        fadeInBgSound:fadeInBgSound_,
        increaseVolExternal:increaseVolExternal_,
        fadeOutBgSoundExternal:fadeOutBgSoundExternal_,
        fadeInBgSoundExternal:fadeInBgSoundExternal_,
        fadeInBgSoundExternalJustVol:fadeInBgSoundExternalJustVol_,
        fadeInBgSoundExternalJustVolSync:fadeInBgSoundExternalJustVolSync_,
        getPosition:getPosition_,
        getSound:getSound_,
        resetVolume:function(){
            music_.volume=volumeCheck_(initVol_);
        }
    }
    initClass_();
    return me;
}
