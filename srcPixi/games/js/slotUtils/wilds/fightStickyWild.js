/**
 * KiS Framework, Created by Fabry on 11/11/2017.
 * version 1.0.0
 * handle the fight sticky wild battles
 */

function FightStickyWild(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var showWildReel = false;
    var expWildPos_ = [];
    var revAnimFrameSeq_ = [];

    wildReelSmb_ = [];
    for (i = 0; i < 5; i++) {
        wildReelSmb_[i] = [];
        expWildPos_[i] = [];
        for (a = 0; a < 3; a++) {
            wildReelSmb_[i][a] = {};
            expWildPos_[i][a] = false;
        }
    }

    wildClass_.showWild = function (wild) {
        //remove moving animations
    }


    var sequencer=[];
    sequencer[0]=[];
    sequencer[1]=[];
    sequencer[2]=[];
    sequencer[3]=[];
    sequencer[4]=[];
    sequencer[11]=[];
    sequencer[12]=[];

    var spawn={};
    var move={};
    var fight={};


    wildClass_.spinAnim = function (wild) {
        var play_ = false;
        var delay=0;
        var xCorr=0;
        var yCorr=-5;
        var leftKnBgCorr_X;
        var leftKnBgCorr_Y;
        var leftKnAnimCorr_X;
        var leftKnAnimCorr_Y;
        wildReelSmb_ = wild;


        for (var a = 0; a < 3; a++) {
            displayManager_.getGroup("bgFS1")["knL" + a].children[0].scale.x=.5;
            displayManager_.getGroup("bgFS1")["knL" + a].children[0].scale.y=.5;
            displayManager_.getGroup("bgFS1")["knR" + a].children[0].scale.x=.5;
            displayManager_.getGroup("bgFS1")["knR" + a].children[0].scale.y=.5;
            TweenMax.to(displayManager_.getGroup("bgFS1")["knL" + a].children[0], .5, {alpha:1});
            TweenMax.to(displayManager_.getGroup("bgFS1")["knR" + a].children[0], .5, {alpha:1});
        }

        for (var i = 0; i < spinManager_.getReels().length; i++) {
            for (var a = 0; a < 3; a++) {
                if (wildReelSmb_[i][a].animBg) wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].animBg);
                if (wildReelSmb_[i][a].anim) wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim);
                if (wildReelSmb_[i][a].animVSBg) wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].animVSBg);
                if (wildReelSmb_[i][a].animVS) wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].animVS);
            }
        }

        for (var i = 0; i < spinManager_.getReels().length; i++) {
            for (var a = 0; a < 3; a++) {
                var sp = wildReelSmb_[i][a];
                if (sp != undefined) {
                    if ((sp.prevReel < 0  || sp.prevReel>4) && sp.prevReel<6 && sp.placed==false) {// knight from the left
                        //make the knight from thed appears on  side disappears anthe first reel
                        var kn;

                        if(sp.prevReel < 0) {
                            kn = displayManager_.getGroup("bgFS1")["knL" + a].children[0];
                            xCorr=10;
                        }else{
                            kn = displayManager_.getGroup("bgFS1")["knR" + a].children[0];
                            xCorr=-10;
                        }
                        //add cool animation here todo
                        TweenMax.to(kn.scale, .5, {x:.8,y:.8});
                        TweenMax.to(kn, .5, {delay:.3,alpha:0});
                        sp.placed=true;

                        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x + xCorr , wildReelSmb_[i][a].simbolReference.y+ yCorr , "icon"+wildReelSmb_[i][a].iconNum);
                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                        wildReelSmb_[i][a].anim.alpha = 0;
                        TweenMax.to(wildReelSmb_[i][a].anim, .3, {delay:.8,alpha:1});

                        //var smb = spinManager_.getReels()[i].getSymbol(wildReelSmb_[i][a].simbolReference.smbToRemove);
                        //smb.visible = false;

                        // revAnimFrameSeq_ = []
                        // for (var b = 1; b <= wildReelSmb_[i][a].anim.animations._outputFrames.length; b++) {
                        //     if (b % 2 == 0) revAnimFrameSeq_.push(b);
                        // }
                        // revAnimFrameSeq_.reverse();

                        expWildPos_[i][a] = true;
                        showWildReel = true;
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                        play_ = true;
                        gameClass_.setStickyWildSimbs(wildReelSmb_);

                        spawn.x=wildReelSmb_[i][a].simbolReference.x;
                        spawn.y=wildReelSmb_[i][a].simbolReference.y;
                        sequencer[wildReelSmb_[i][a].iconNum].push(spawn);

                    }else if (sp.prevReel>=0 && sp.prevReel<5 && sp.moved==false){
                        sp.moved=true;
                        var moveFirst=true;
                        //move or fight
                        if (wildReelSmb_[i][a].iconNum == 12) {
                            xCorr=8;
                            if (sp.fight==true ){
                                if (sp.prevReel==3){
                                    moveFirst=false;
                                    //place loosing enemy on reel 0 (was there the prev spin) and fight, than move
                                    wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width), wildReelSmb_[i][a].simbolReference.y, "leftBgKnight");
                                    wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animBg.alpha = 1;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);

                                    wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "leftKnight");
                                    wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].anim.alpha = 1;
                                    wildReelSmb_[i][a].anim.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                                    wildReelSmb_[i][a].anim.animations.add("anim");

                                    wildReelSmb_[i][a].animVSBg= game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i)  ), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                    wildReelSmb_[i][a].animVSBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVSBg.alpha = 1;
                                    wildReelSmb_[i][a].animVSBg.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVSBg);

                                    wildReelSmb_[i][a].animVS= game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "rightKnight");
                                    wildReelSmb_[i][a].animVS.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVS.alpha = 1;
                                    wildReelSmb_[i][a].animVS.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVS);

                                    fight.reel=sp.prevReel;
                                    fight.vs=i;
                                    fight.smb=a;
                                    sequencer[wildReelSmb_[i][a].iconNum].push(fight);

                                }else{
                                    if (i==1 && sp.prevReel==0){
                                        wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width ), wildReelSmb_[i][a].simbolReference.y, "leftBgKnight");
                                        wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                        wildReelSmb_[i][a].animBg.alpha = 1;
                                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);

                                        wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "leftKnight");
                                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                        wildReelSmb_[i][a].anim.alpha = 1;
                                        wildReelSmb_[i][a].anim.added=true;
                                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);


                                        wildReelSmb_[i][a].animVSBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel+1) ), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                        wildReelSmb_[i][a].animVS = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel+1) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "rightKnight");

                                        moveFirst=false;

                                        fight.reel=sp.prevReel;
                                        fight.vs=sp.prevReel+1;
                                        fight.smb=a;
                                        sequencer[wildReelSmb_[i][a].iconNum].push(fight);


                                    }else{
                                        wildReelSmb_[i][a].animVSBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i+1)  ), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                        wildReelSmb_[i][a].animVS = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i+1) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "rightKnight");


                                        fight.reel=sp.prevReel;
                                        fight.vs=sp.prevReel+1;
                                        fight.smb=a;
                                        sequencer[wildReelSmb_[i][a].iconNum].push(fight);


                                    }
                                    //looking for the looser Kinght and place it on the reels
                                    wildReelSmb_[i][a].animVSBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVSBg.alpha = 1;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVSBg);

                                    wildReelSmb_[i][a].animVS.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVS.alpha = 1;
                                    wildReelSmb_[i][a].animVS.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVS);

                                }
                            }

                            if (moveFirst) {
                                wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width )-1, wildReelSmb_[i][a].simbolReference.y-3, "leftBgKnight");
                                wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                wildReelSmb_[i][a].animBg.alpha = 1;
                                wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);
                                wildReelSmb_[i][a].animBg.animations.add("anim",[18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]);
                                wildReelSmb_[i][a].animBg.animations.play("anim", 24, false);

                                wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2)+11, wildReelSmb_[i][a].simbolReference.y-34, "leftKnight");
                                wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                wildReelSmb_[i][a].anim.alpha = 1;
                                wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);

                                TweenMax.to(wildReelSmb_[i][a].anim, 1, {
                                    delay: .5,
                                    x: ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i) + ReelConfig.icon.width / 2),
                                    Ease: Sine.EaseInOut,
                                    onComplete: endKnightMoveL_,
                                    onCompleteParams: [i, a]
                                })
                            }else{
                                //fight then move
                                wildReelSmb_[i][a].anim.animations.add("anim");
                                wildReelSmb_[i][a].animVS.animations.add("anim");
                                wildReelSmb_[i][a].anim.animations.play("anim", 24, false,false,endFightAndMove_,[i,a]);
                                wildReelSmb_[i][a].animVS.animations.play("anim", 24, false,true);
                            }
                            delay=2;


                        } else if (wildReelSmb_[i][a].iconNum == 11) {

                            if (sp.fight==true ){
                                if (sp.prevReel==1){
                                    moveFirst=false;
                                    //place loosing enemy on reel 0 (was there the prev spin) and fight, than move
                                    wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel)), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                    wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animBg.alpha = 1;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);

                                    wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "rightKnight");
                                    wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].anim.alpha = 1;
                                    wildReelSmb_[i][a].anim.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);

                                    wildReelSmb_[i][a].animVSBg= game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i)+ ReelConfig.icon.width ), wildReelSmb_[i][a].simbolReference.y, "leftBgKnight");
                                    wildReelSmb_[i][a].animVSBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVSBg.alpha = 1;
                                    wildReelSmb_[i][a].animVSBg.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVSBg);


                                    wildReelSmb_[i][a].animVS= game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "leftKnight");
                                    wildReelSmb_[i][a].animVS.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVS.alpha = 1;
                                    wildReelSmb_[i][a].animVS.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVS);
                                }else{
                                    if (i==3 && sp.prevReel==4){
                                        wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel)), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                        wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                        wildReelSmb_[i][a].animBg.alpha = 1;
                                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);

                                        wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "rightKnight");
                                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                        wildReelSmb_[i][a].anim.alpha = 1;
                                        wildReelSmb_[i][a].anim.added=true;
                                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);

                                        wildReelSmb_[i][a].animVSBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel-1) + ReelConfig.icon.width ), wildReelSmb_[i][a].simbolReference.y, "leftBgKnight");
                                        wildReelSmb_[i][a].animVS = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel-1) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "leftKnight");

                                        moveFirst=false;
                                    }else{
                                        wildReelSmb_[i][a].animVSBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i-1) + ReelConfig.icon.width ), wildReelSmb_[i][a].simbolReference.y, "leftBgKnight");
                                        wildReelSmb_[i][a].animVS = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i-1) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y, "leftKnight");

                                    }

                                    //looking for the looser Kinght and place it on the reels
                                    wildReelSmb_[i][a].animVSBg.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVSBg.alpha = 1;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVSBg);

                                    wildReelSmb_[i][a].animVS.anchor.set(.5, .5);
                                    wildReelSmb_[i][a].animVS.alpha = 1;
                                    wildReelSmb_[i][a].animVS.added=true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animVS);
                                }

                            }


                            if (moveFirst) {
                                wildReelSmb_[i][a].animBg = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel)), wildReelSmb_[i][a].simbolReference.y, "rightBgKnight");
                                wildReelSmb_[i][a].animBg.anchor.set(.5, .5);
                                wildReelSmb_[i][a].animBg.alpha = 1;
                                wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].animBg);
                                wildReelSmb_[i][a].animBg.animations.add("anim",[18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]);
                                wildReelSmb_[i][a].animBg.animations.play("anim", 24, false);

                                wildReelSmb_[i][a].anim = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (sp.prevReel) + ReelConfig.icon.width / 2), wildReelSmb_[i][a].simbolReference.y+ yCorr, "rightKnight");
                                wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                                wildReelSmb_[i][a].anim.alpha = 1;
                                wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);


                                TweenMax.to(wildReelSmb_[i][a].anim, 1, {
                                    delay: .5,
                                    x: ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i) + ReelConfig.icon.width / 2),
                                    Ease: Sine.EaseInOut,
                                    onComplete: endKnightMoveR_,
                                    onCompleteParams: [i, a]
                                })
                            }else{
                                //fight and then move
                                wildReelSmb_[i][a].anim.animations.add("anim");
                                wildReelSmb_[i][a].animVS.animations.add("anim");
                                wildReelSmb_[i][a].anim.animations.play("anim", 24, false,false,endFightAndMove_,[i,a,i]);
                                wildReelSmb_[i][a].animVS.animations.play("anim", 24, false,true);
                            }
                            delay=2;



                        }
                    }else{

                    }

                }
            }
        }
        if (play_) soundManager_.playSound("stickyWild");
        setTimeout(spinManager_.setResponseReceived,delay);
    }

    function endFightAndMove_(par){
        //remove losing knight and move
        var r=par[0];
        var s=par[1];

        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animVSBg);

        TweenMax.to(wildReelSmb_[r][s].anim, 1, {
            delay: .5,
            x: ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (r) + ReelConfig.icon.width / 2),
            Ease: Sine.EaseInOut,
            onComplete: endKnightMoveAfterFight_,
            onCompleteParams: [r, s]
        })

        wildReelSmb_[r][s].animBg.animations.add("anim",[18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]);
        wildReelSmb_[r][s].animBg.animations.play("anim", 24, false);

    }

    function endKnightMoveAfterFight_(r,s){
        //remove winning knight
        wildReelSmb_[r][s].anim.visible=false;
        wildReelSmb_[r][s].animBg.visible=false;
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].anim);
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animBg);
        wildReelSmb_[r][s].anim = null;
        wildReelSmb_[r][s].animBg = null;
    }

    function backWR_(obj) {
        TweenMax.to(obj.scale, .2, {x: 1, y: 1, Ease: Sine.EaseOut});
    }

    function updateFight_(par){
        var r=par[0];
        var s=par[1];

        //called by the winning  kinght, vs is the looser reel
        wildReelSmb_[r][s].anim.visible=false;
        wildReelSmb_[r][s].animBg.visible=false;
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].anim);
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animBg);
        wildReelSmb_[r][s].anim = null;
        wildReelSmb_[r][s].animBg = null;

        wildReelSmb_[r][s].animVS.visible=false;
        wildReelSmb_[r][s].animVSBg.visible=false;
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animVS);
        wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animVSBg);
        wildReelSmb_[r][s].animVS = null;
        wildReelSmb_[r][s].animVSBg = null;

    }

    function endKnightMoveL_(r,s) {
        console.log("reel " + r +  " smb "+ s + " move comlete L, fight "+ wildReelSmb_[r][s].fight)

        if (wildReelSmb_[r][s].fight==true) {
            //get the Knight on the Right to start the fight
            if (wildReelSmb_[r]!=undefined && wildReelSmb_[r][s].animVS!=null){
                wildReelSmb_[r][s].animVS.animations.add("anim");
                wildReelSmb_[r][s].animVS.animations.play("anim", 24, false);
            }

            if (wildReelSmb_[r][s].anim!=null){
                wildReelSmb_[r][s].anim.animations.add("anim");
                wildReelSmb_[r][s].anim.animations.play("anim", 24, false, true, updateFight_,[r,s,(r+1)]);
            }

        }else{
            wildReelSmb_[r][s].anim.visible=false;
            wildReelSmb_[r][s].animBg.visible=false;
            wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].anim);
            wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animBg);
            wildReelSmb_[r][s].anim = null;
            wildReelSmb_[r][s].animBg = null;

        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);
    }

    function endKnightMoveR_(r,s) {
        console.log("reel " + r +  " smb "+ s + " move comlete R, fight "+ wildReelSmb_[r][s].fight)

        if (wildReelSmb_[r][s].fight==true) {
            //get the Knight on the Right to start the fight
            if (wildReelSmb_[r]!=undefined && wildReelSmb_[r][s].animVS!=null) {
                wildReelSmb_[r][s].animVS.animations.add("anim");
                wildReelSmb_[r][s].animVS.animations.play("anim", 24, false);
            }
            wildReelSmb_[r][s].anim.animations.add("anim");
            wildReelSmb_[r][s].anim.animations.play("anim", 24, false, true, updateFight_,[r,s]);
        }else{
            wildReelSmb_[r][s].anim.visible=false;
            wildReelSmb_[r][s].animBg.visible=false;
            wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].anim);
            wildClassObject_.mainGroup_.remove(wildReelSmb_[r][s].animBg);
            wildReelSmb_[r][s].anim = null;
            wildReelSmb_[r][s].animBg = null;
        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);
    }

    function hideIcons(icon) {
        icon.visible = false;
    }

    function sghowIcons(icon) {
        icon.visible = true;
        showWildReel = false;
    }

    function subst_(par) {
        var i = par[0];
        var a = par[1];
        if (wildReelSmb_ != undefined && wildReelSmb_[i] != undefined && wildReelSmb_[i][a] != undefined && wildReelSmb_[i][a].simbolReference != undefined) {
            wildReelSmb_[i][a].simbolReference.visible = true;
        }
        if (wildReelSmb_ != undefined && wildReelSmb_[i] != undefined && wildReelSmb_[i][a] != undefined && wildReelSmb_[i][a].anim != undefined) {
            wildReelSmb_[i][a].anim = null;
        }
    }

    wildClass_.clearWild = function (wild) {
        return;
        //this is not really clearwild, more like move wild
        var rollBack = false;
        var placed = [];

        wildReelSmb_ = wild;
        if (freeSpinsManager_.getIsInFs() == true) {
            for (var i = 0; i < spinManager_.getReels().length; i++) {
                if (wildReelSmb_[i] != null) {
                    for (var a = 0; a < 3; a++) {
                        if (wildReelSmb_[i][a].anim != undefined && wildReelSmb_[i][a].anim != null ) {
                            wildReelSmb_[i][a].prevReel=null;

                        }

                        /*
                                                if (wildReelSmb_[i][a].prevReel != null) {
                                                    var sp = wildReelSmb_[i][a].prevReel;
                                                    if (sp != undefined && sp != "" ) {
                                                        if (sp.split("-")[0].indexOf("done") >= 0) {
                                                            if (placed.indexOf(i.toString() + a.toString()) < 0) {
                                                                rollBack = true;
                                                                if (wildReelSmb_[i][a].anim != undefined) {

                                                                    if (wildReelSmb_[i][a].prevReel != 0) {
                                                                        //place fight animations here and play them
                                                                    }else if (wildReelSmb_[i][a].fight != 0) {
                                                                        //fight only
                                                                    }


                                                                    wildReelSmb_[i][a].anim.animations.add("anim", revAnimFrameSeq_);
                                                                    wildReelSmb_[i][a].anim.animations.play("anim", 48, false, true, subst_, [i, a]);//todo parametric loop
                                                                }
                                                                wildReelSmb_[i][a].special = "";
                                                                expWildPos_[i][a] = false;
                                                            }
                                                        } else if (sp.split("-")[0].indexOf("stage") >= 0 && sp.split("-")[1] != "") {

                                                            //add first symbol to the reels
                                                            var reel = sp.split("-")[1].split(",")[1];
                                                            var smb = Number(sp.split("-")[1].split(",")[0]);

                                                            wildReelSmb_[reel][smb].simbolReference = spinManager_.getReels()[reel].getSymbol(smb);
                                                            wildReelSmb_[reel][smb].simbolReference.smbToRemove = smb;

                                                            var x = wildReelSmb_[reel][smb].simbolReference.x;
                                                            var y = wildReelSmb_[reel][smb].simbolReference.y;

                                                            if (wildReelSmb_[reel][smb].anim != undefined) {
                                                                wildReelSmb_[reel][smb].anim.visible = false;
                                                                wildReelSmb_[reel][smb].anim = null;
                                                            }
                                                            placed.push(reel.toString() + smb.toString());
                                                            wildReelSmb_[reel][smb].anim = game_.add.sprite(x, y, "stickyWild");
                                                            wildReelSmb_[reel][smb].anim.animations.add("anim");
                                                            wildReelSmb_[reel][smb].anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 128 : 24, false);
                                                            wildReelSmb_[reel][smb].anim.anchor.set(.5, .5);
                                                            wildReelSmb_[reel][smb].anim.alpha = 1;

                                                            if (wildReelSmb_[reel][smb].simbolReference != undefined) wildReelSmb_[reel][smb].simbolReference.visible = false;

                                                            wildReelSmb_[i][a].special = "";
                                                            wildReelSmb_[reel][smb].special = "";
                                                            expWildPos_[reel][smb] = true;
                                                            rollBack = true;
                                                            showWildReel = true;
                                                            wildClassObject_.mainGroup_.add(wildReelSmb_[reel][smb].anim);
                                                            gameClass_.setStickyWildSimbs(wildReelSmb_);
                                                        }
                                                    }
                                                }

                                                */


                    }
                }
            }
        }
        //
        // if (rollBack) {
        //     soundManager_.playSound("stickyWild");
        // } else if (showWildReel) {
        //     showWildReel = false;
        //     //FS END, restore the wild icons if there and remove wild animations
        //     for (var i = 0; i < spinManager_.getReels().length; i++) {
        //         if (wildReelSmb_[i] != null) {
        //             for (var a = 0; a < 3; a++) {
        //                 expWildPos_[i][a] = false;
        //                 if (wildReelSmb_[i][a].anim != undefined) {
        //                     wildReelSmb_[i][a].anim.alpha = 0;
        //                     if (wildReelSmb_[i][a].anim.bgAnim) wildReelSmb_[i][a].anim.bgAnim = null;
        //                     wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim.alpha);
        //                     wildReelSmb_[i][a].anim = null;
        //                 }
        //                 if (wildReelSmb_[i][a].simbolReference != undefined) {
        //                     wildReelSmb_[i][a].simbolReference.visible = true;
        //                 }
        //             }
        //         }
        //     }
        //
        //     //removing
        //     for (var a in wildClassObject_.mainGroup_.children) {
        //         wildClassObject_.mainGroup_.remove(wildClassObject_.mainGroup_.children[a]);
        //     }
        // }
    }

    wildClass_.resetWilds = function () {
        for (var i = 0; i < 5; i++) {
            for (var a = 0; a < 3; a++) {

                expWildPos_[i][a] = false;
                wildReelSmb_[i][a].special = null;
            }
        }
    }

    wildClass_.hasWildReel = function () {
        for (var i = 0; i < 5; i++) {
            for (var a = 0; a < 3; a++) {
                if (expWildPos_[i][a] == true) {
                    return true;
                }
            }
        }
        return false
    }

    wildClass_.isSymbolWilded = function (reel, smb) {
        return expWildPos_[reel][smb];
    }

    wildClass_.wildReelWinAnim = function (reel, smb) {
        if (wildReelSmb_[reel][smb].anim != null && wildReelSmb_[reel][smb].anim.scale.x == 1) {
            wildReelSmb_[reel][smb].anim.alpha = 1;
            if (wildReelSmb_[reel][smb].anim.bgAnim != undefined) wildReelSmb_[reel][smb].anim.bgAnim.alpha = 1;
            TweenMax.to(wildReelSmb_[reel][smb].anim.scale, .2, {
                x: 1.2,
                y: 1.2,
                Ease: Sine.EaseInOut,
                onComplete: backWR_,
                onCompleteParams: [wildReelSmb_[reel][smb].anim]
            })
        }
    }

    wildClass_.resumeWildReel = function () {
        var index = 0;
        var wilSimbsNum_ = 0;
        var reels = spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.reels != null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for (var a = 0; a < 3; a++) {
                    if ([10].indexOf(resumeJson[i].smb[a].smb) >= 0) {
                        var smb_ = spinManager_.getReels()[i].getSymbol(a);
                        smb_.visible = false;

                        wildReelSmb_[i][a].simbolReference = smb_;
                        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x, wildReelSmb_[i][a].simbolReference.y, "animW10");
                        wildReelSmb_[i][a].anim.animations.add("anim");
                        wildReelSmb_[i][a].anim.animations.play("anim", 48, false);
                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                        wildReelSmb_[i][a].special = (resumeJson[i].smb[a].special != "n/a" ? resumeJson[i].smb[a].special : "done");
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                        expWildPos_[i][a] = true;
                    }
                }
            }
        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);
    }

    return wildClass_;

}