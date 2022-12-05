/**
 * KiS Framework, Created by Fabry on 02/08/2016.
 */
function BubblePickBonus(gameRef, gameClass,config,parent,name) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var bonusManager_=parent;
    var config_=config;
    var buttons=[];
    var chestAnim=[];
    var bonusName_=name;
    var lastChestTout_;
    var music_="";
    var chestSounds_=[];
    var emitter_=[];
    var bonusGroup_;
    var introBonusGroup_;
    var splat_;
    var pickObj=[];
    var tw=[];
    var picks_=[];
    var obj_=[];
    var state_={
        "canPick":false,
        "close":false,
        "collect":false,
        "double":false,
        "baseMult":0,
        "totMult":0,
        "totWinCash":0,
        "totWin":0,
        "baseMult":0,
        "stake":0
    };
    
    function initClass_(){
        var index=0;
        bonusGroup_= displayManager_.getGroup(bonusName_);
        introBonusGroup_=(displayManager_.getGroup("intro"+bonusName_))?displayManager_.getGroup("intro"+bonusName_):null;
        splat_ = game_.add.group();
        bonusGroup_.add(splat_);

        for (var a in config_.buttons) {
            buttons[a] = new Button(game_,gameClass_,bonusName_,config_.buttons[a],chestClick_,null,null,false);
            chestAnim[a]=config_.buttons[a].anim;
        }
        music_=config_.configuration.bgMusic;
        lastChestTout_=config_.configuration.tOutLastChest;
        chestSounds_=config_.configuration.chestSounds;
        for (var a in displayManager.groups[bonusName_].graphFrame) {
            var sp;
            sp = new Phaser.Sprite(game_, displayManager.groups[bonusName_].graphFrame[a].x, displayManager.groups[bonusName_].graphFrame[a].y, displayManager.groups[bonusName_].graphFrame[a].name);
            if (displayManager.groups[bonusName_].graphFrame[a].width != null)sp.width = displayManager.groups[bonusName_].graphFrame[a].width;
            if (displayManager.groups[bonusName_].graphFrame[a].height != null)sp.height = displayManager.groups[bonusName_].graphFrame[a].height;
            sp.anchor.set((displayManager.groups[bonusName_].graphFrame[a].anchorX != undefined) ? displayManager.groups[bonusName_].graphFrame[a].anchorX : 0, (displayManager.groups[bonusName_].graphFrame[a].anchorY != undefined) ? displayManager.groups[bonusName_].graphFrame[a].anchorY : 0);
            bonusGroup_.add(sp);
            if (displayManager.groups[bonusName_].graphFrame[a].visible!=null)sp.visible=displayManager.groups[bonusName_].graphFrame[a].visible;
            if (displayManager.groups[bonusName_].graphFrame[a].alpha!=null)sp.alpha=displayManager.groups[bonusName_].graphFrame[a].alpha;
        }

        for (var a in displayManager.groups[bonusName_].graphObj) {
            var sp= new Phaser.Button(game_, displayManager.groups[bonusName_].graphObj[a].x, displayManager.groups[bonusName_].graphObj[a].y, displayManager.groups[bonusName_].graphObj[a].name, doClick_);
            if (displayManager.groups[bonusName_].graphObj[a].width != null)sp.width = displayManager.groups[bonusName_].graphObj[a].width;
            if (displayManager.groups[bonusName_].graphObj[a].height != null)sp.height = displayManager.groups[bonusName_].graphObj[a].height;
            sp.anchor.set((displayManager.groups[bonusName_].graphObj[a].anchorX != undefined) ? displayManager.groups[bonusName_].graphObj[a].anchorX : 0, (displayManager.groups[bonusName_].graphObj[a].anchorY != undefined) ? displayManager.groups[bonusName_].graphObj[a].anchorY : 0);
            bonusGroup_.add(sp);
            if (displayManager.groups[bonusName_].graphObj[a].visible!=null)sp.visible=displayManager.groups[bonusName_].graphObj[a].visible;
            if (displayManager.groups[bonusName_].graphObj[a].alpha!=null)sp.alpha=displayManager.groups[bonusName_].graphObj[a].alpha;
            sp.range = displayManager.groups[bonusName_].graphObj[a].range;
            sp.id=a;
            sp.id_=index;
            sp.bx = displayManager.groups[bonusName_].graphObj[a].x;
            sp.by = displayManager.groups[bonusName_].graphObj[a].y;
            pickObj[a]=sp;
            index++;
        }

        // //
         mask_ = game_.add.graphics(0, 0);
         mask_.beginFill(0xffffff);
         mask_.drawRect(232, 140,809,450);
         splat_.mask = mask_;


    }

    function stopAnimations_(){
        for (var a in pickObj ){
            TweenMax.killTweensOf(pickObj[a]);
            pickObj[a].visible=false;
        }
    }

    function startAnimations_(init){
        for (var a in pickObj ){
            randomizePos_(pickObj[a]);
            if (init)pickObj[a].visible=true
        }
    }

    function randomizePos_(smb){
        do {
            var x = Util.getRandomInt(smb.bx - smb.range, smb.bx + smb.range);
            var y = Util.getRandomInt(smb.by - smb.range, smb.by + smb.range);
        }while(Math.abs(Math.abs(smb.x)-x)>10 || Math.abs(Math.abs(smb.y)-y)>10)

        var sX=Util.getRandomInt(105,115)/100;
        var sY=Util.getRandomInt(85,95)/100;

         var time =Util.getRandomInt(400,1000)/1000;
         tw[smb]=TweenMax.to(smb,time,{x:x,y:y,onComplete:randomizePos_,onCompleteParams:[smb],ease: RoughEase.ease.config({ template: Linear.easeOut, strength: 0.2, points: 10, taper: "both", randomize: false, clamp: false})})
    }

    function initBonus_(resume){
        var resumeFlag=false;
        picks_=[];
        obj_=[];
        state_.close=false;
        state_.collect=false;
        state_.double=false;
        if(displayManager_.getGroup("buttonFg"))displayManager_.getGroup("buttonFg").visible=false;

        if (music_!=null && music_!="")soundManager_.mixBgSound(music_, 1000, 1000);
        if (resume.picks.length>0){
            resumeFlag=true;
            getValues_(resume);
            for (var a in picks_){
                openPick_(a,true);
            }
            state_.totMult=resume.totalMult;

        }else{
            displayManager_.getText("txtMultBonus").setText("");
            startAnimations_(true);
        }

        if (introBonusGroup_!=null){
            showIntro_(resumeFlag);
            setTimeout(enableBonus_,(resumeFlag==false)?2500:0);
        }else{
            enableBonus_();
        }

        for (var a in displayManager.groups[bonusName_].emitters){
            var anim=epsy_.loadSystem(displayManager[bonusName_].emitters[a][0], 500, 500);
            displayManager.groups[bonusName_].emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
    }

    function enableBonus_(){
        //re-enable buttons and balls
        state_.canPick=true;
        bonusGroup_.alpha=0;
        bonusGroup_.visible=true;
        TweenMax.to(bonusGroup_,.5,{alpha:1,onComplete:startBonus_});
    }

    function startBonus_(){
        setTimeout(startAnimations_,200);
    }

    function showIntro_(resume){
        if (!resume) {
            soundManager_.playSound("intro" + bonusName_);
            introBonusGroup_.visible = true;
            for (var a in displayManager.groups["intro" + bonusName_].intro) {
                var sp = new Phaser.Sprite(game_, displayManager.groups["intro" + bonusName_].intro[a].x, displayManager.groups["intro" + bonusName_].intro[a].y, displayManager.groups["intro" + bonusName_].intro[a].name);
                introBonusGroup_.add(sp);
                obj_.push(sp);
                sp.scale.x = (displayManager.groups["intro" + bonusName_].intro[a].scaleX != null) ? displayManager.groups["intro" + bonusName_].intro[a].scaleX : 1;
                sp.scale.y = (displayManager.groups["intro" + bonusName_].intro[a].scaleY != null) ? displayManager.groups["intro" + bonusName_].intro[a].scaleY : 1;
                sp.animations.add("anim");
                sp.animations.play("anim", 20, false, false);
            }
            if (freeRoundsManager_.getIsInFr()==true){
                TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: -200, ease: Bounce.easeIn});
            }else {
                TweenMax.to(displayManager_.getGroup("logo"), .3, {y: -200, ease: Bounce.easeIn});
            }
        }else{
            introBonusGroup_.visible = true;
            for (var a in displayManager.groups["intro" + bonusName_].intro) {
                var sp = new Phaser.Sprite(game_, displayManager.groups["intro" + bonusName_].intro[a].x, displayManager.groups["intro" + bonusName_].intro[a].y, displayManager.groups["intro" + bonusName_].intro[a].name);
                introBonusGroup_.add(sp);
                obj_.push(sp);
                sp.scale.x = (displayManager.groups["intro" + bonusName_].intro[a].scaleX != null) ? displayManager.groups["intro" + bonusName_].intro[a].scaleX : 1;
                sp.scale.y = (displayManager.groups["intro" + bonusName_].intro[a].scaleY != null) ? displayManager.groups["intro" + bonusName_].intro[a].scaleY : 1;
                sp.animations.add("anim");
                sp.animations.play("anim", 48, false, false);
            }
            if (freeRoundsManager_.getIsInFr()==true) {
                TweenMax.to(displayManager_.getGroup("freeRounds"), .0, {y: -200, ease: Bounce.easeIn});
            }else{
                TweenMax.to(displayManager_.getGroup("logo"), .0, {y: -200, ease: Bounce.easeIn});
            }
        }
    }


    function doClick_(){
        if (state_.canPick==false)return;
        if (picks_[this.id]!=null){
            return;
        }
        state_.canPick=false;
        //can be forced with mode=bonus&pick=1&manualVal=8
        bonusManager_.sendRequest(this.id);
    }

    function parse_(json){
        getValues_(json.bonus);
        if (json.bonus.totalMult!=null)state_.totMult = json.bonus.totalMult;
        if (json.bonus.totalWin!=null){
            state_.totWinCash = Number(json.bonus.totalWin) / 100;
            state_.totWin= state_.totWinCash/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }
        if (json.baseMult!=null)state_.baseMult = json.baseMult;
        if (json.stake!=null)state_.stake = Number(json.stake)/100;
        if (json.bonus.state.indexOf("play")>=0)state_.canPick = true;
        if (json.bonus.state.indexOf("collect")>=0)state_.collect = true;
        if (json.bonus.state.indexOf("double")>=0)state_.double_ = true;
        if (state_.canPick== false)state_.close=true;
        openPick_(json.bonus.pick,false);
    }

    function getValues_(json){
        for (var a in json.picks){
            picks_[json.picks[a].id]=(json.picks[a].value>0)?"x"+ json.picks[a].value:"END";
        }
    }

    function writePrize_(txt,str){
        txt.setText(str);
        splat_.add(txt);
        obj_.push(txt);
        displayManager_.getText("txtMultBonus").setText("x" + state_.totMult);
    }

    function startDrop_(color,x,y){
        var sp = new Phaser.Sprite(game_, x+Util.getRandomInt(-25,25), y+Util.getRandomInt(-35,35),  color+"Drop");
        splat_.add(sp);
        obj_.push(sp);
        sp.scale.x=Util.getRandomInt(40,85)/100 ;
        sp.scale.y=Util.getRandomInt(70,100)/100 ;
        sp.animations.add("anim");
        sp.animations.play("anim", Util.getRandomInt(10,15), false, false);
    }

    function openPick_(a,resume){
        pickObj[a].visible=false;

        var s = new Phaser.Sprite(game_, pickObj[a].x , pickObj[a].y,pickObj[a].key.substr(0,pickObj[a].key.indexOf("#"))+"Splat");
        s.anchor.set(.5,.5);
        s.scale.x=1.4;
        s.scale.y=1.4;
        splat_.add(s);
        obj_.push(s);
        var txt = new Phaser.BitmapText(game_,pickObj[a].x, pickObj[a].y+20,"multiBmpFont",'',45, "center" );
        txt.anchor.set(.5,.5);

        if (resume){
            setTimeout(writePrize_,10,txt,picks_[a]);
        }else {
            soundManager_.playSound(chestSounds_[a]);
            setTimeout(startDrop_, 100, pickObj[a].key.substr(0, pickObj[a].key.indexOf("#")), pickObj[a].x, pickObj[a].y);
            var randNum = Util.getRandomInt(1, 100);
            if (randNum > 50) {
                setTimeout(startDrop_, 120, pickObj[a].key.substr(0, pickObj[a].key.indexOf("#")), pickObj[a].x, pickObj[a].y);
            }
            if (randNum > 90) {
                setTimeout(startDrop_, 140, pickObj[a].key.substr(0, pickObj[a].key.indexOf("#")), pickObj[a].x, pickObj[a].y);
            }
            setTimeout(writePrize_,160,txt,picks_[a]);
        }
        if (state_.close==true){
            setTimeout(clearBonus_,lastChestTout_);
        }
    }

    function clearBonus_(chest){
        bonusManager_.closeBonus(bonusName_,state_);
        soundManager_.playSound("winPanel");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        if(displayManager_.getGroup("buttonFg"))displayManager_.getGroup("buttonFg").visible=true;

        stopAnimations_();
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
    }

    function hideBonus_(){
        introBonusGroup_.visible = false;
        bonusGroup_.visible=false;
        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: 0, ease: Bounce.easeOut});
        }else {
            TweenMax.to(displayManager_.getGroup("logo"), .3, {y: 0, ease: Bounce.easeOut});
        }
        for (var a in obj_){
            obj_[a].destroy();
        }
    }

    var me={
        initBonus:initBonus_,
        hideBonus:hideBonus_,
        parse:parse_,
        getState:function(){
            return state_;
        }
    }
    initClass_();
    return me;
}