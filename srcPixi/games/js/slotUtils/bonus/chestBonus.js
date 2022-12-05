/**
 * KiS Framework, Created by Fabry on 04/04/2016.
 */
function ChestBonus(gameRef, gameClass,config,parent,name) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var bonusManager_=parent;
    var config_=config;
    var buttons=[];
    var chestAnim=[];
    var bonusName_=name;
    var lastChestTout_;
    var triggerIcon_=9;
    var minNumTriggerIcon_=4;
    var music_="";
    var chestSounds_=[];
    var emitter_=[];

    function initClass_(){
        for (var a in config_.buttons) {
            buttons[a] = new Button(game_,gameClass_,bonusName_,config_.buttons[a],chestClick_,null,null,false);
            chestAnim[a]=config_.buttons[a].anim;
        }
        music_=config_.configuration.bgMusic;
        lastChestTout_=config_.configuration.tOutLastChest;
        chestSounds_=config_.configuration.chestSounds;
    }

    function initBonus_(resume){
        if (music_!=null && music_!="")soundManager_.mixBgSound(music_, 1000, 1000);
        if (resume){

        }else{
            for (var a in config_.buttons) {
                buttons[a].enable();
            }
        }
        for (var a in displayManager.groups.chestBonus.emitters){
            var anim=epsy_.loadSystem(displayManager.groups.chestBonus.emitters[a][0], 500, 500);
            displayManager.groups.chestBonus.emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }

    }

    function chestClick_(btn){
        //todo send bonus chest open request
        //this will be called by response parsing code
        var chest= btn._key;
        if (chestSounds_[chest]!=null && chestSounds_[chest]!="")soundManager_.playSound(chestSounds_[chest]);
        buttons["chest"+chest].getButton().visible=false;
        chestAnim["chest"+chest]  = new Phaser.Sprite(game_,config_.buttons["chest"+chest].x , config_.buttons["chest"+chest].y, config_.buttons["chest"+chest].anim+Util.getRandomInt(1,3));
        displayManager_.getGroup(bonusName_).add(chestAnim["chest"+chest]);
        chestAnim["chest"+chest].anchor.x = .5;
        chestAnim["chest"+chest].anchor.y = .5;
        chestAnim["chest"+chest].animations.add("anim");
        chestAnim["chest"+chest].animations.play("anim", 10, false,false,finishChest_,chest);//todo parametric loop
    }

    function clearBonus_(chest){
        //todo check if Fs for bg sound
        if (music_!=null && music_!="")soundManager_.mixBgSound("bgSlot", 1000, 1000);
        displayManager_.getText("txtChest"+chest).setText("");
        chestAnim["chest"+chest].visible=false;
        chestAnim["chest"+chest].destroy();
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
    }

    function finishChest_(chest){
        displayManager_.getText("txtChest"+chest).setText("x"+bonusManager_.getMultiplier());
        setTimeout(bonusManager_.closeBonus,lastChestTout_,bonusName_);
        setTimeout(clearBonus_,lastChestTout_,chest);
    }

    var me={
        initBonus:initBonus_,
        getTriggerIcon:function(){
            return (triggerIcon_!=null)?triggerIcon_:999;
        },
        getMinNumTriggerIcon:function(){
            return minNumTriggerIcon_;
        }
    }
    initClass_();
    return me;
}