/**
 * KiS Framework, Created by Fabry on 04/03/2016.
 */
function SoundManager(gameRef,gameClass){
    var game_ = gameRef;
    var gameClass_=gameClass;
    var sounds=[];
    var bgSounds=[];
    var canPlay=true;
    var canPlayBg=true;
    var currentBgSoundPlaying_="";
    var additionalBgSoundPlaying_=[];
    var btnVolDuration=400;

    var isMuted = false;

    function initClass_(){
        //init sounds and music classes
        for ( var a in gameAssets.importantSounds){
            sounds[a]=new Sound(game_,me,a,(gameAssets.importantSounds[a].loop!=null)?gameAssets.importantSounds[a].loop:false,gameAssets.importantSounds[a].volume);
        }

        for (a in gameAssets.bgImportantSounds) {
            bgSounds[a]=new Music(game_,me,a,true,gameAssets.bgImportantSounds[a].volume,(gameAssets.bgImportantSounds[a].marker)?true:false,gameAssets.bgImportantSounds[a]);
        }

        if (gameParams.channel === 'mobile') {

            canPlay=(localStorageGetItem('slots__sound')=="false")?false:true;
            canPlayBg=(localStorageGetItem('slots__sound')=="false")?false:true;
            
        }
        else {
            canPlay=(localStorageGetItem(gameParams.gameName + '__effects__on')=="false")?false:true;
            canPlayBg=(localStorageGetItem(gameParams.gameName + '__bg__on')=="false")?false:true;

        }
    }

    function startSounds_(){
        //init sounds and music classes
        for ( var a in gameAssets.sounds){
            sounds[a]=new Sound(game_,me,a,(gameAssets.sounds[a].loop!=null)?gameAssets.sounds[a].loop:false,gameAssets.sounds[a].volume);
            if (gameAssets.sounds[a].multiple!=null){
                for ( var b in gameAssets.sounds[a].multiple){
                    sounds[gameAssets.sounds[a].multiple[b]]=new Sound(game_,me,a,(gameAssets.sounds[a].loop!=null)?gameAssets.sounds[a].loop:false,gameAssets.sounds[a].volume);
                }
            }
        }
        for (a in gameAssets.bgSounds) {
            bgSounds[a]=new Music(game_,me,a,true,gameAssets.bgSounds[a].volume,false, gameAssets.bgSounds[a]);
        }

    }

    function getSound_(sound){
        return sounds[sound];
    }

    function getBGSound_(sound){
        return bgSounds[sound];
    }

    function mixBgSound_(sound1,duration,duration1,cb,vol){
        //mixes BGsounds in a duration perdiod
        if(currentBgSoundPlaying_==sound1)return;
        if(bgSounds[sound1]==null)return;
        if (currentBgSoundPlaying_!="") {
            bgSounds[currentBgSoundPlaying_].fadeOutBgSound(duration, cb);
            currentBgSoundPlaying_ = sound1;
        }else{
            currentBgSoundPlaying_ = sound1;
        }
        bgSounds[sound1].fadeInBgSound(duration1,vol);
    }

    function stopSound_(sound){
        if(sounds[sound]!=null) {
            sounds[sound].fadeOutBgSound(200);
        }
    }

    function playSound_(sound,rep_){
        logger("try to play sounds"+sound);
        if(sounds[sound]!=null) {
            sounds[sound].play();
        }
    }

    function resumeAll_(){
        isMuted = false;
        if (canPlayBg)resumeBgSound_();
        if (canPlay)resumeEffects_();

        //If not "NEW_UI" or game ID > x
        if (!ReelConfig.newUI) {
            $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOnBtn);
        }

        //New UI
        else {
            window.newUI.sound().state = 'ON'
        }
        gcmCalls_("MUTE",false,true);
        clientMessageSend("audio-enable");

        if (framework.getMenu()!=undefined) {
            var s = framework.getMenu().getSoundSwitch();
            s.doSwitch(true);
            s = framework.getMenu().getMusicSwitch();
            s.doSwitch(true);
        }
    }

    function resumeAllFocus_(){
        if (!framework.isTouch())return; // was interrupting bg on desktops
        if(isMuted)return;
        if (canPlayBg){
            if (currentBgSoundPlaying_!=""){
                bgSounds[currentBgSoundPlaying_].fadeOutBgSound(btnVolDuration);
            }
            for (var a in additionalBgSoundPlaying_){
                if (additionalBgSoundPlaying_[a]!=""){
                    bgSounds[additionalBgSoundPlaying_[a]].fadeOutBgSound(btnVolDuration);
                }
            }
            resumeBgSound_();
        }
        if (canPlay)resumeEffects_();
    }

    function playBgSound_(sound){
        logger("try to play "+sound);
        if(bgSounds[sound]!=null) {
            logger ("play")
            currentBgSoundPlaying_ = sound;
            bgSounds[sound].play();
        }
    }

    function playOtherBgSound_(sound){
        logger("try to play "+sound);
        if(bgSounds[sound]!=null) {
            logger ("play other bg")
            bgSounds[sound].play();
            additionalBgSoundPlaying_.push(sound);
        }
    }

    function playAdditionalBgSound_(sound){
        if(bgSounds[sound]!=null) {
            additionalBgSoundPlaying_.push(sound);
        }
    }

    function stopBgSound_(){
        if (currentBgSoundPlaying_!=""){
            bgSounds[currentBgSoundPlaying_].fadeOutBgSound(btnVolDuration);
        }

        for (var a in additionalBgSoundPlaying_){
            if (additionalBgSoundPlaying_[a]!=""){
                bgSounds[additionalBgSoundPlaying_[a]].fadeOutBgSound(btnVolDuration);
            }
        }
        canPlayBg=false;

        localStorageSetItem(gameParams.gameName + '__bg__on', false);

        if (canPlay==false){
            isMuted=true;
            gcmCalls_("MUTE",true,true);
            clientMessageSend("audio-disable");

            if (ReelConfig.newUI!=true){
                $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOffBtn);
            }else{
                window.newUI.sound().state = 'OFF'
            }
        }

    }

    function stopAll_(){
        for (var a in sounds)
            sounds[a].stop();

        if (currentBgSoundPlaying_!=""){
            bgSounds[currentBgSoundPlaying_].fadeOutBgSound(btnVolDuration);
        }


        for (var a in additionalBgSoundPlaying_){
            if (additionalBgSoundPlaying_[a]!=""){
                bgSounds[additionalBgSoundPlaying_[a]].fadeOutBgSound(btnVolDuration);
            }
        }

        //If not "NEW_UI" or game ID > x
        if (!ReelConfig.newUI) {
            $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOffBtn);
        }

        //New UI
        else {
            window.newUI.sound().state = 'OFF'
        }
        gcmCalls_("MUTE",true,true);
        clientMessageSend("audio-disable");
        isMuted = true;

        logger("canPlayBg: " + canPlayBg + " canPlay: " + canPlay);


        if (framework.getMenu()!=undefined) {
            var s = framework.getMenu().getSoundSwitch();
            s.doSwitch(false);
            s = framework.getMenu().getMusicSwitch();
            s.doSwitch(false);
        }

    }

    function stopAllFocus_(){
        if (!framework.isTouch())return; // was interrupting bg on desktops
        for (var a in sounds)
            sounds[a].stop();

        if (currentBgSoundPlaying_!=""){
            bgSounds[currentBgSoundPlaying_].fadeOutBgSound(btnVolDuration);
        }


        for (var a in additionalBgSoundPlaying_){
            if (additionalBgSoundPlaying_[a]!=""){
                bgSounds[additionalBgSoundPlaying_[a]].fadeOutBgSound(btnVolDuration);
            }
        }
    }

    function stopEffects_(){
        canPlay=false;
        for (var a in sounds)
            sounds[a].stop();

        localStorageSetItem(gameParams.gameName + '__effects__on', false);

        if (canPlayBg==false){
            isMuted = true;
            gcmCalls_("MUTE",true,true);
            clientMessageSend("audio-disable");
            framework.getSettings().getSounds().allSounds=false;
            if (ReelConfig.newUI!=true) {
                $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOffBtn);
            } else{
                window.newUI.sound().state = 'OFF';
            }
        }

    }

    function resumeBgSound_(){
        canPlayBg=true;
        isMuted = false;
        framework.getSettings().getSounds().allSounds=true;
        gcmCalls_("MUTE",false,true);
        clientMessageSend("audio-enable");
        if (ReelConfig.newUI!=true){
            $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOnBtn);
        }else{
            window.newUI.sound().state = 'ON';
        }

        if (currentBgSoundPlaying_!="") {
            bgSounds[currentBgSoundPlaying_].fadeInBgSound(btnVolDuration);
        }

        localStorageSetItem(gameParams.gameName + '__bg__on', true);


    }

    function resumeEffects_(){
        canPlay=true;
        isMuted = false;
        framework.getSettings().getSounds().allSounds=true;

        localStorageSetItem(gameParams.gameName + '__effects__on', true);
        gcmCalls_("MUTE",false,true);
        clientMessageSend("audio-enable");
        if (ReelConfig.newUI!=true){
            $("#soundButton img").attr("src", frameworkAssets.assets.menuSoundOnBtn);
        }else{
            window.newUI.sound().state = 'ON';
        }
    }

    function startBgSound_(){

        //need to restart the background music
    }

    var me ={
        getSound:getSound_,
        getBGSound:getBGSound_,
        mixBgSound:mixBgSound_,
        playSound:playSound_,
        stopSound:stopSound_,
        resumeAll:resumeAll_,
        resumeAllFocus:resumeAllFocus_,
        stopEffects:stopEffects_,
        playBgSound:playBgSound_,
        playOtherBgSound:playOtherBgSound_,
        playAdditionalBgSound_:playAdditionalBgSound_,
        stopBgSound:stopBgSound_,
        resumeBgSound:resumeBgSound_,
        resumeEffects:resumeEffects_,
        stopAll:stopAll_,
        stopAllFocus:stopAllFocus_,
        startBgSound:startBgSound_,
        startSounds:startSounds_,
        getCanPlay:function(){
            return canPlay&&!isMuted;
        },
        getCanPlayBg:function(){
            return canPlayBg&&!isMuted;
        },
        resetVolume:function (sound) {
            if(bgSounds[sound]!=null)bgSounds[sound].resetVolume();
        }

    }
    initClass_();
    return me;
}
