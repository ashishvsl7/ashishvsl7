/**
 * KiS Framework, Created by Fabry on 02/08/2016.
 */
function JusticeBonus(gameRef, gameClass,config,parent,name) {
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
        "preTotWin":0,
        "baseMult":0,
        "stake":0
    };

    var gameWidth = 1920;
    var gameHeight = 1080;

    var teamMembers = ["blazer", "chain", "challange", "demon", "diviner", "talisman", "titan"];
    var teamArr = [];
    // diff order for bonus round//
    var bonusTeam = ["chain", "challange", "blazer",  "demon", "titan", "diviner", "talisman"];
    var bonusTeamX = [133, 250, 400, 500, 620, 798, 937];
    // anoying because the attacks are a differnt size.. so more positioning :/
    var bonusTeamAttX = [[130, 712], [204, 701], [356, 703], [510, 700], [623, 697], [755, 700], [872, 698]];

    var enemyTeam = [
        // screen1
        ["megabot1", "drone", "demonWarr", "soldier"],
        // screen2
        ["megabot3", "drone", "demonWarr", "soldier"],
        // screen3
        ["megabot2", "drone", "demonWarr", "soldier"]
    ];
    var enemyPos = [
        // screen1
        [[472,230],[650,200],[721,225],[340,250]],
        // screen2
        [[60,260],[890,300],[540,290],[555,330]],
        // screen3
        [[1000,300],[450,250],[31,300],[320,160]]
    ];

    var explodePos = [
        // screen1
        [[400,150],[540,100],[645,175],[210,195]],
        // screen2
        [[60,260],[750,200],[275,220],[425,225]],
        // screen3
        [[900,250],[320,180],[-40,260],[175,70]]
    ];
    var BonusScreen;
    var numClicked=0;
    var enCLick=-1;
    //var allowBonusClicks = false;

    var bonusSelectHeros = [];
    var bonusSelectEnemy = [];

    var resumeBonus;
    var resumeFlag=false;
    var bonJson;
    var this_ = this;
    var currHero;

    var totWinText;
    var totWinTitle;
    var totWin = 0;
    
    //gameParams.lang

    function initClass_(){
        console.log("init JusticeBonus class");
        var index=0;
        bonusGroup_= displayManager_.getGroup(bonusName_);
        bonusButtonsOnOff(false);
        bonusGroup_.removeAll(true);

    }

    function stopAnimations_(){
    }

    function startAnimations_(init){
        framework.updateSmallMessageText( Translate.do("Good luck"));
        // get bonus group
        var bonusGroup =  displayManager_.getGroup("JusticeBonus");

        // hide bottom bar


        //bonusGroup.game = game_;
        bonusButtonsOnOff(false);

        bonusGroup.y = 0 - gameHeight;
        bonusGroup.visible = true;
        // which screen to use
        BonusScreen = Math.ceil(Math.random() * 3);
        console.log("doBonus, 1-3:"+BonusScreen);
        // add background
        var bonBG = game_.add.sprite(0, 0, "bonusBG"+BonusScreen);
        bonusGroup.addChild(bonBG);


        var enSpr = [];
        // reset
        bonusSelectHeros = [];
        bonusSelectEnemy = [];


        // add ememies //enemyTeam enemyPos
        for( var i = 0; i < enemyTeam[0].length; i++) {
            var enemyM = game_.add.sprite(enemyPos[BonusScreen-1][i][0], enemyPos[BonusScreen-1][i][1], enemyTeam[BonusScreen-1][i]);
            console.warn(enemyTeam[BonusScreen-1][i])
            //enemyM.anchor.y = 1;



            var anim = enemyM.animations.add('loop');
            enemyM.soundStr = enemyTeam[BonusScreen-1][i];

            // attach sound on loop.
            if( enemyM.soundStr !== "drone") {
                anim.onStart.add(playBonusSound, this);
                anim.onLoop.add(playBonusSound, this);
            }


            enemyM.animations.play("loop", 30, true);

            // get a random start point so they dont loop the same.
            var randFr = Math.round(Math.random() * 29);
            enemyM.animations.currentAnim.setFrame( randFr );

            // add to bonus screen
            bonusGroup.addChild(enemyM);
            enSpr.push(enemyM);

            bonusSelectEnemy.push(enemyM);
        }

        // add masker
        var bonMsk = game_.add.sprite(0, 0, "bonusMask"+BonusScreen);
        bonusGroup.addChild(bonMsk);

        // need to rearange things a bit for certain screens
        if( BonusScreen === 1) {
            bonusGroup.addChild(enSpr[0]);
            bonusGroup.addChild(enSpr[1]);
            bonusGroup.addChild(enSpr[2]);
        } else if( BonusScreen === 2) {
            //
            bonusGroup.addChild(enSpr[1]);
            enSpr[2].scale.x = -0.8;
            enSpr[2].scale.y = 0.8;
            enSpr[3].scale.x = enSpr[3].scale.y = 0.8;
            bonusGroup.addChild(enSpr[2]);
        } else {
            bonusGroup.addChild(enSpr[0]);
            bonusGroup.addChild(enSpr[1]);
            bonusGroup.addChild(enSpr[2]);
            enSpr[3].scale.x = enSpr[3].scale.y = 0.6;
        }


        // add team
        for( var i = 0; i < teamMembers.length; i++) {
            var teamM = game_.add.sprite(bonusTeamX[i], 700, bonusTeam[i]+"Loop");

            teamM.anchor.y = 1;

            teamArr.push(teamM);

            var anim = teamM.animations.add('loop');
            teamM.animations.play("loop", 30, true);

            // get a random start point so they dont loop the same.
            var randFr = Math.round(Math.random() * 20);
            teamM.animations.currentAnim.setFrame( randFr );

            // add to bonus screen
            bonusGroup.addChild(teamM);

            // add a invis button above the hero
            var invisButton = game_.add.button(bonusTeamX[i], 700, bonusTeam[i]+"Loop", bonusChoice, this);
            invisButton.anchor.y = 1;
            invisButton.alpha = 0;

            invisButton.heroNum = i;
            invisButton.linkedHero = teamM;

            bonusGroup.addChild(invisButton);


            bonusSelectHeros.push(invisButton);
        }



        // tween in
        TweenMax.to(bonusGroup, 0.6, {y:0, onComplete:doBonusText})


        console.warn(bonusGroup.children.length);
    }


    function initBonus_(resume){
        console.log("initBonus_:");
        console.warn(resume);
        var botBar = displayManager_.getGroup("buttonFg");
        botBar.alpha = 0;
        resumeBonus = resume;

        bonusGroup_.visible = false;

        //console.warn(Game)
        numClicked = 0;
        //totalWin = 0;

        currHero = -1;

        totWin = 0;

        picks_=[];
        obj_=[];
        state_.close=false;
        state_.collect=false;
        state_.double=false;

        if (music_!=null && music_!="") {
            soundManager_.mixBgSound(music_, 1000, 1000);
        }

        // disable buttons/
        buttonManager_.applyHide();
        console.log("doBonusWin");

        soundManager_.playSound("bonus");
        soundManager_.mixBgSound("bgDashBonus", 1000, 1000);


        if (introBonusGroup_!=null){
            showIntro_(resumeFlag);
            setTimeout(enableBonus_,(resumeFlag==false)?2500:0);
        }else{
            enableBonus_();
        }

    }

    function enableBonus_(){
        //re-enable buttons and balls
        //state_.canPick=true;
        bonusGroup_.alpha=0;
        bonusGroup_.visible=true;
        TweenMax.to(bonusGroup_,.5,{alpha:1,onComplete:startBonus_});
        //bonusButtonsOnOff(true);
    }

    function startBonus_(){
        setTimeout(startAnimations_,200);
    }

    function showIntro_(resume){
        if (!resume) {
            soundManager_.playSound("intro" + bonusName_);

        }
    }


    function doClick_(){
        if (state_.canPick==false)return;
        if (picks_[this.id]!=null){
            return;
        }
        state_.canPick=false;
        //numClicked++

        // chose an item to click
        var click = returnClickableEnemy(); //picks_
        console.log("clickChosen:"+click)
        enCLick = click;
        //can be forced with mode=bonus&pick=1&manualVal=8
        bonusManager_.sendRequest(click);
    }

    function returnClickableEnemy() {

        var click = 0;
        // randomise.
        var nums = [1,2,3,4];
        nums.sort(function() {
            return .5 - Math.random();
        });

        for( var i=0; i < nums.length; i++) {
            click = nums[i];
            if( !bonusSelectEnemy[click-1].active ) {
                break;
            }

        }
        return click;
    }

    function parse_(json){
        console.log("-------------parse_-------------")
        getValues_(json.bonus);

        bonJson = json.bonus;
        console.warn(bonJson)
        // continue with bonus choice.

        if (json.bonus.totalMult!=null) {
            // grab previous.
            state_.preTotWin = state_.totMult;
            // update current.
            state_.totMult = json.bonus.totalMult;
        }

        if (json.bonus.totalWin!=null){
            state_.totWinCash = Number(json.bonus.totalWin) / 100;
            state_.totWin= state_.totWinCash/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }

        if (json.baseMult!=null)state_.baseMult = json.baseMult;
        if (json.stake!=null)state_.stake = Number(json.stake)/100;
        //if (json.bonus.state.indexOf("play")>=0)state_.canPick = true;
        if (json.bonus.state.indexOf("collect")>=0)state_.collect = true;
        if (json.bonus.state.indexOf("double")>=0)state_.double_ = true;
        if (state_.canPick== false)state_.close=true;

        if( !resumeFlag ) {
            openPick_(json.bonus.pick,false);
        }

        console.log("state_.totWin:"+state_.totWin)

    }

    function getValues_(json){
        for (var a in json.picks){
            picks_[json.picks[a].id]=(json.picks[a].value>0)?json.picks[a].value:"END";
        }
    }

    function writePrize_(str){
        displayManager_.getText("txtMultBonus").setText("x" + state_.totMult);
    }

    function startDrop_(color,x,y){
    }

    function openPick_(a,resume){
        console.log("openPick_:"+resumeFlag)
        if (resumeFlag){
            // chose a button at random and
            var randHero = bonusSelectHeros[Math.floor(Math.random()*bonusSelectHeros.length)];
            bonusChoice(randHero)
        } else {
            onLoadShoot();
        }
        //numClicked ++;
    }

    function clearBonus_(chest){
        bonusManager_.closeBonus(bonusName_,state_);
        soundManager_.playSound("winPanel");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        displayManager_.getGroup("buttonFg").alpha=0;

        //stopAnimations_();

    }

    function hideBonus_(){
        //introBonusGroup_.visible = false;
        bonusGroup_.visible=false;
        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: 0, ease: Bounce.easeOut});
        }else {
            TweenMax.to(displayManager_.getGroup("logo"), .3, {y: 0, ease: Bounce.easeOut});
        }
        //for (var a in obj_){
        // obj_[a].destroy();
        //}

    }










    ////////////////////////////////////////////////////////
    
    function styleText(txtOb) {
        
        // do gradient for non english text.
        //  Here we create a linear gradient on the Text context.
        var grd = txtOb.context.createLinearGradient(0, 0, 0, txtOb.height);

        //  Add in 3 color stops
           
        grd.addColorStop(0, '#fff998');
        grd.addColorStop(1, '#f7b80f');
        
        txtOb.fill = grd;
        
        //	Stroke color and thickness
        txtOb.stroke = '#000000';
        txtOb.strokeThickness = 4;
        
    }

    function showTotWin(amm) {
        var winsGroup =  displayManager_.getGroup("specialWins");
        if( totWinText ) {
            winsGroup.remove(totWinText);
            winsGroup.remove(totWinTitle);
        }

        totWin += amm;
        
        
        
        
        
        if( gameParams.lang == "en") {
            totWinText = new Phaser.BitmapText(game_, (gameWidth /2) , 100,"bmpFont", "X"+totWin ,85,"center");
        } else {
            totWinText = new Phaser.Text(game_, (gameWidth /2) , 100, "X"+totWin , { font: "60px FuturaPT-Heavy", fill:"white", align: "center"} );
            styleText(totWinText);
        }

        
        //txt.x -= txt.width /2;
        //txt.y -= txt.height /2;
        totWinText.anchor.setTo(0.5,0.5);
        totWinText.scale.setTo(0.3,0.3);
        totWinText.alpha = 0;

        var del = 1.5;

        TweenMax.to(totWinText, 0.35, {alpha:1, delay:del, ease:Power2.easeOut});
        TweenMax.to(totWinText.scale, .35, {x:1, y:1, delay:1, ease:Power2.easeOut});

        winsGroup.add(totWinText);

        //totWinTitle = new Phaser.BitmapText(game_, (gameWidth /2)-50 , 50,"bmpFont", Translate.do("bonusEnd") ,40,"center");
        if( gameParams.lang == "en") {
            totWinTitle = new Phaser.BitmapText(game_, (gameWidth /2)-50 , 50,"bmpFont", Translate.do("bonusEnd") ,40,"center");
        } else {
            totWinTitle = new Phaser.Text(game_, (gameWidth /2)-50 , 50, Translate.do("bonusEnd") , { font: "40px FuturaPT-Heavy", fill:"white", align: "center"} );
            styleText(totWinTitle);
        }
        
        
        totWinTitle.anchor.setTo(0.5,0.5);
        totWinTitle.alpha = 0;
        winsGroup.add(totWinTitle);
        TweenMax.to(totWinTitle, 0.35, {alpha:1, x:(gameWidth /2), delay:del, ease:Power2.easeOut});

        //txt.x -= txt.width /2;


    }


    function doBonusText() {
        var winsGroup =  displayManager_.getGroup("specialWins");

        var bonusGroup =  displayManager_.getGroup("JusticeBonus");
        console.warn(bonusGroup);

        var bonusTime = new TimelineMax({paused:false, onComplete:bonusSetUpComplete});
        // show background
        var bg = drawBG(0.6);
        winsGroup.add(bg);
        bonusTime.add( new TweenMax(bg.scale, 0.5, {y:1, ease:Power2.easeOut}), 0);

        // show shoot text
        var txt;
        
        if( gameParams.lang == "en") {
            txt = new Phaser.BitmapText(game_, (gameWidth /2) , (gameHeight /2) - 50,"bmpFont", Translate.do("bonusEmemies") ,120,"center");
        } else if( gameParams.lang == "de" ) {
             txt = new Phaser.Text(game_, (gameWidth /2) , (gameHeight /2) - 50, Translate.do("bonusEmemies") , { font: "75px FuturaPT-Heavy", fill:"white", align: "center"} );
            styleText(txt);     
        } else {
            txt = new Phaser.Text(game_, (gameWidth /2) , (gameHeight /2) - 50, Translate.do("bonusEmemies") , { font: "100px FuturaPT-Heavy", fill:"white", align: "center"} );
            styleText(txt);
        }
        
        
        
        
        //txt.x -= txt.width /2;
        //txt.y -= txt.height /2;
        txt.anchor.setTo(0.5,0.5);
        txt.scale.setTo(0.3,0.3);
        txt.alpha = 0;
        winsGroup.add(txt);
        bonusTime.add( new TweenMax(txt.scale, 0.3, {y:1, x:1, ease:Power2.easeOut}), 0.5);
        bonusTime.add( new TweenMax(txt, 0.3, {alpha:1, ease:Power2.easeOut}), 0.5);
        // show coin total (random numbers and then finish on win)


        bonusTime.add( new TweenMax(txt, 0.3, {alpha:0, onComplete:removeSprite, onCompleteParams:[txt]}), 4);
        bonusTime.add( new TweenMax(bg.scale, 0.5, {y:0, ease:Power2.easeOut, onComplete:removeSprite, onCompleteParams:[bg]}), 4);

    }

    function bonusSetUpComplete() {
        // call this to check any resumes etc
        console.log("bonusSetUpComplete")


        if( resumeBonus.picks ) {
            if (resumeBonus.picks.length>0){
                //
                console.log("bonus round partial completed, rebuild.")
                resumeFlag=true;
                getValues_(resumeBonus);
                for (var a in picks_){
                    openPick_(a,true);
                }
                state_.totMult=resumeBonus.totalMult;
                // need to activate the buttons after rebuild
                var ob = {x:1};
                TweenMax.to(ob, 2, {x:2, onComplete:bonusButtonsOnOff, onCompleteParams:[true]})
            }
        } else{
            displayManager_.getText("txtMultBonus").setText("");
            //startAnimations_(true);
        }

        // update previous coin win before moving on as the sent value is a total.
        if( resumeFlag ) {
            console.warn("resumed:", state_.totMult, resumeBonus.picks)
            state_.preTotWin = (state_.totMult -resumeBonus.picks[resumeBonus.picks.length-1]);

        }

        resumeFlag = false;

        bonusButtonsOnOff(true);

    }



    function playBonusSound(snd) {
        //console.log("play bonus sound:"+snd.soundStr)
        //console.warn(snd);
        soundManager_.playSound(snd.soundStr);
    }

    function bonusButtonsOnOff(onOff) {
        console.log("!bonusButtonsOnOff:"+onOff)
        //allowBonusClicks = onOff;
        state_.canPick = onOff;
        /*
        for( var i = 0; i < teamMembers.length; i++) {
            var teamM = bonusSelectHeros[i];
            teamM.inputEnabled = onOff;
        }
        */

    }

    // when a hero is chosen shoot a random enemy.
    function bonusChoice(hero) {
        //
        //if( !currHero) {
        // currHero = {heroNum:-1}
        //}
        //console.warn(currHero.heroNum)
        //
        //if( currHero.heroNum != hero.heroNum ) {
        if( state_.canPick || (!state_.canPick && resumeFlag)) {

            currHero = hero;
            console.warn("currHero:"+currHero.heroNum+", canpick:"+state_.canPick);
            // hide current anim and show attack.
            var teamaAtt = game_.add.sprite(bonusTeamAttX[currHero.heroNum][0], bonusTeamAttX[currHero.heroNum][1], bonusTeam[currHero.heroNum]+"Attack");
            teamaAtt.anchor.y = 1;
            teamaAtt.heroNum = currHero.heroNum;
            teamaAtt.linkedHero = currHero.linkedHero;

            var bonusGroup =  displayManager_.getGroup("JusticeBonus");


            var anim = teamaAtt.animations.add('loop');
            anim.onComplete.add(bonusAnimAttackReset, this);
            teamaAtt.animations.play("loop", 30, false);


            currHero.linkedHero.visible = false;

            bonusGroup.addChild(teamaAtt);

            // play sound
            soundManager_.playSound(String("bonusHero"+(currHero.heroNum+1)));
            soundManager_.playSound("bonusHit");

            // kill buttons while we update.
            //bonusButtonsOnOff(false);
            //hero.inputEnabled = false;

            if( !resumeFlag ) {
                doClick_();
            } else {
                onLoadShoot()
            }


        }
        //}

    }

    function onLoadShoot() {

        var teamaAtt = game_.add.sprite(bonusTeamAttX[currHero.heroNum][0], bonusTeamAttX[currHero.heroNum][1], bonusTeam[currHero.heroNum]+"Attack");

        var randEnemy; // = Math.floor(Math.random() * enemyTeam[0].length);
        for( var i = 0; i < 1; i++) {

            if( !resumeFlag ) {
                randEnemy = enCLick-1;
            } else {
                // do resume shot
                randEnemy = (resumeBonus.picks[numClicked].id -1); //Math.floor(Math.random() * enemyTeam[0].length);
            }
            console.warn(enCLick)
            console.warn(bonusSelectEnemy)
            console.log("onLoadShoot:"+randEnemy+", numclick:"+numClicked);

            //bonusSelectEnemy[randEnemy].win = resumeBonus[numClicked]
            if( !bonusSelectEnemy[randEnemy].active ) {
                console.log("shoot "+randEnemy);
                bonusSelectEnemy[randEnemy].active = true;
            } else {
                //console.log("Enemy chosen already dead, reloop")
                i --;
            }
        }
        // shoot enemy
        bonusShootAnim(randEnemy, teamaAtt);



        //var cWin = state_.totMult;
        var cWin;
        if( resumeFlag ) {
            cWin = resumeBonus.picks[numClicked].value;
        } else {
            console.warn(bonJson);
            //cWin = bonJson.coins;
            cWin = bonJson.value;
        }

        //
        numClicked++;
        console.log("numClicked:"+numClicked)

        // do coin win.
        bonusCoinWinAnim(cWin, enemyPos[BonusScreen-1][randEnemy][0], enemyPos[BonusScreen-1][randEnemy][1]);
    }


    function bonusShootAnim(enemy, teamaAtt) {
        var target = bonusSelectEnemy[enemy];
        var bonusGroup =  displayManager_.getGroup("JusticeBonus");
        // explosion
        var explo = game_.add.sprite(explodePos[BonusScreen-1][enemy][0], explodePos[BonusScreen-1][enemy][1], "expode");
        //console.warn(explodePos[BonusScreen-1][enemy]);

        bonusGroup.addChild(explo);

        // if certain rounds add team on top
        if( BonusScreen === 2) {
            for( var i = 0; i < teamArr.length; i++) {
                //console.warn(teamArr[i])
                //bonusGroup.addChild(teamArr[i]);
                moveToTop(teamArr[i], bonusGroup);
            }
            moveToTop(teamaAtt, bonusGroup);

        }





        var anim = explo.animations.add('bang');
        explo.animations.play("bang", 30, false);

        // remove enemy
        TweenMax.to(bonusSelectEnemy[enemy], 0.25, {alpha:0, delay:1, onComplete:removeSprite, onCompleteParams:[bonusSelectEnemy[enemy]]});

        // check if complete.
        bonusCheckComplete()
    }


    function bonusCheckComplete() {
        //
        var isComplete = true;
        for( var i = 0; i < bonusSelectEnemy.length; i++ ) {
            if( !bonusSelectEnemy[i].active ) {
                isComplete = false;
                break;
            }
        }

        if( isComplete ) {
            // end bonus
            console.log("all shot end bonus");
            bonusButtonsOnOff(false);
            // tween something to make sure last shot is not skipped after fabs changes.
            var ob = {x:0};
            TweenMax.to(ob,3, {x:1, onComplete:doBonusEnd})
            //doBonusEnd();
        } else {
            // not complete
            // wait to reactivate.
            var ob = {x:1};
            TweenMax.to(ob, 2, {x:2, onComplete:bonusButtonsOnOff, onCompleteParams:[true]})
        }
    }

    function bonusAnimAttackReset(hero) {
        // heroNum
        hero.linkedHero.visible = true;
        hero.visible = false;
        removeSprite(hero)
    }

    function bonusCoinWinAnim(coinWin, x, y) {
        // adjust to save making more vars.
        x = x + 100;
        y = y + 75;

        //
        var cWin = new Phaser.BitmapText(game_, x , y ,"bmpFont", "X"+coinWin ,75,"center");
        cWin.anchor.setTo(0.5,0.5);
        cWin.scale.setTo(0.3,0.3);
        cWin.alpha = 0;


        var cWinTime = new TimelineMax({paused:false});

        var bonusGroup =  displayManager_.getGroup("JusticeBonus");

        cWinTime.add( new TweenMax(cWin.scale, 0.3, {y:1, x:1, ease:Power2.easeOut, onstart:moveToTop, onStartParams:[cWin, bonusGroup], onComplete:moveToTop, onCompleteParams:[cWin,bonusGroup]}), 0.5);
        cWinTime.add( new TweenMax(cWin, 1, {alpha:1, y:y - 100, ease:Power2.easeOut}), 0.8);
        cWinTime.add( new TweenMax(cWin, 2, {alpha:0, y:y - 250, onComplete:removeSprite, onCompleteParams:[cWin]}), 1.8);


        // add prize
        //setTimeout(writePrize_,160,txt,picks_[a]);

        showTotWin(coinWin)
    }


    // end bonus
    function doBonusEnd() {

        // kill buttons/
        bonusButtonsOnOff(false);
        // cursor problems.
        game_.canvas.style.cursor = "default";
        afterBonus();



    }

    // kill bonus screen after tween out
    function afterBonus() {
        console.log("bonus complete, remove old items.");
        var winsGroup =  displayManager_.getGroup("specialWins");
        if( totWinText ) {
            winsGroup.remove(totWinText);
            winsGroup.remove(totWinTitle);

        }

        clearBonus_();
        // stop all anims?

        var bonusGroup =  displayManager_.getGroup("JusticeBonus");
        // remove screen
        //TweenMax.to(bonusGroup, 0.3, {y:0-gameHeight, ease:Power2.easeOut}); //, onComplete:removeSprite, onCompleteParams:[bonusGroup] });
        TweenMax.to(bonusGroup, 0.3, {y:gameHeight+gameHeight, ease:Power2.easeOut, onComplete:emptyBonus});

        // enable spin button
    }

    function emptyBonus() {
        var bonusGroup =  displayManager_.getGroup("JusticeBonus");
        console.log("-------------------------emptyBonus:"+bonusGroup.children.length+"-------------------------------------")

        bonusGroup.removeAll(true)
    }



    /// Graphical Utils.
    function drawBG (alpha) {
        var bg = game_.add.graphics(0, 0);
        //graphics.lineStyle(2, 0x000000, 1);

        bg.lineStyle(0);
        bg.beginFill(0x000000, alpha);
        bg.drawRect(0, 0, gameWidth, gameHeight);
        bg.endFill();
        bg.scale.y = 0;

        return bg;
    }

    // simple remove sprite call.
    function removeSprite(spr) {
        spr.destroy();
    }


    function moveToTop(item, parent) {
        if (parent && parent.addChild!=null)parent.addChild(item);
    }



    // adds a remove call to the animation once complete.
    function addRemoveAnim(spr, anim) {
        anim.onComplete.add(removeSprite, this);
    }

    function addLoopAnim(anim, loopNum) {
        anim.loopNum = loopNum;
        anim.onLoop.add(finishLoop, this);

    }

    function finishLoop(spr, anim, loopNum) {
        console.log("finishLoop:"+anim.loopNum+", loopCount:"+anim.loopCount)
        if (anim.loopCount >= anim.loopNum) {
            // loop.
            anim.loop = false;
            console.log("loop done.");
        }
    }


    function roundTo(n, digits) {
        var negative = false;
        if (digits === undefined) {
            digits = 0;
        }
        if( n < 0) {
            negative = true;
            n = n * -1;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        n = (Math.round(n) / multiplicator).toFixed(2);
        if( negative ) {
            n = (n * -1).toFixed(2);
        }
        return n;
    }












    var me={
        initBonus:initBonus_,
        hideBonus:hideBonus_,
        parse:parse_,
        getState:function(){
            return state_;
        }
    }
    // init
    initClass_();

    return me;
}