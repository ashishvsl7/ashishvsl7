/**
 * KiS Framework, Created by Fabry on 08/09/2017.
 */

function WildShiftingReel(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var animFrameSeq_=[];
    var revAnimFrameSeq_=[];
    var showWildReel=false;
    var shiftWildReelPos_=[];
    var tweens_=[];
    var play_=false;
    wildReelSmb_=[];
    for (i = 0; i < ReelConfig.numReels; i++) {
        if (wildClassObject_!=undefined) {
            shiftWildReelPos_[i]=false;
            wildReelSmb_[i] = {};
            wildReelSmb_[i].simbolReference = [];
            wildReelSmb_[i].substOnreel = [];
            wildReelSmb_[i].smbNum = [];
            wildReelSmb_[i].pos = [];
            wildReelSmb_[i].reel = [];
            if (wildReelSmb_[i].anim == undefined) wildReelSmb_[i].anim = [];
            if (wildReelSmb_[i].shift == undefined) wildReelSmb_[i].shift = 0;
        }
    }

    wildClass_.showWild = function (wild) {
        wildReelSmb_=wild;
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if (wildReelSmb_ !=null){
                if (wildReelSmb_[i] != null) {
                    if (wildReelSmb_[i].pos != null) {
                        if (wildReelSmb_[i].pos[0] != undefined) {
                            for (var a in wildReelSmb_[i].pos) {
                                if (wildReelSmb_[i].anim[a] == undefined && wildReelSmb_[i].pos[a] != undefined && wildReelSmb_[i].shift == "0" && shiftWildReelPos_[i]==false) {
                                    shiftWildReelPos_[i]=true;
                                    wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y +  ReelConfig.icon.height / 2, "anim11");
                                    wildReelSmb_[i].anim[a].animations.add("anim");
                                    wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,false,expandingWild_,[i,a]);
                                    wildReelSmb_[i].anim[a].anchor.set(.5, .5);
                                    wildReelSmb_[i].simbolReference[a].visible = false;

                                    wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a]);
                                    play_=true;
                                }
                            }
                        }
                    }
                }
            }
        }
         if (play_)soundManager_.playSound("stickyWild");
        //if (wildClassObject_!=undefined) gameClass_.setWildSimbs(wildReelSmb_);
    }

    function expandingWild_(params){
        var i= params[0];
        var a= params[1];
        var x=wildReelSmb_[i].anim[a].x;
        var y=wildReelSmb_[i].anim[a].y+ReelConfig.icon.height;

        wildClassObject_.mainGroup_.remove(wildReelSmb_[i].anim[a]) ;
        wildReelSmb_[i].anim[a]=null;

        if (game_.cache.checkImageKey("shiftWildReel") == true ){
            wildReelSmb_[i].anim[a] = game_.add.sprite(x,y, "shiftWildReel");
            wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
            wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false);
            wildReelSmb_[i].anim[a].anchor.set(.5, .5);
        }else if (game_.cache.checkImageKey("shiftWildReel_0") == true){
            wildReelSmb_[i].anim[a] = game_.add.sprite(x, y, "shiftWildReel_0");
            wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
            wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,true,nextPart_,[i,a]);
            wildReelSmb_[i].anim[a].anchor.set(.5, .5);
        }
        animFrameSeq_ = [];
        revAnimFrameSeq_ = [];
        for (var b = 1;b <= wildReelSmb_[i].anim[a].animations._outputFrames.length; b++) {
            animFrameSeq_.push(b);
            revAnimFrameSeq_.push(b);
        }
        revAnimFrameSeq_.reverse();

        wildReelSmb_[i].shift = "1";

        wildReelSmb_[i].simbolReference[a].visible = false;
        var ind = 0;
        for (var r in wildReelSmb_[i].substOnreel) {
            if (wildReelSmb_[i].substOnreel[r] != undefined) {
                setTimeout(hideIcons, (gameClass_.getCompulsivePlayer()) ? 100 : 700 + 100 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                ind++;
            }
        }
        showWildReel = true;
        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a]);
        if (play_)soundManager_.playSound("fsWildReel");
        play_=false;
    }

    wildClass_.wildReelWinAnim=function(reel){
        for (var a in wildReelSmb_[reel].anim) {
            if(wildReelSmb_[reel].anim[a]!=null && wildReelSmb_[reel].anim[a].scale.x==1)TweenMax.to(wildReelSmb_[reel].anim[a].scale,.2 ,{x:1.1,y:1.1,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildReelSmb_[reel].anim[a]]})
        }
    }

    function nextPart_(par){
        var i= par[0];
        var a= par[1];

        wildReelSmb_[i].anim[a]= game_.add.sprite(wildReelSmb_[i].anim[a].x , wildReelSmb_[i].anim[a].y, "shiftWildReel_1");
        wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
        wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer())?48:24, false);
        wildReelSmb_[i].anim[a].anchor.set(.5, .5);
        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a]);
    }

    function backWR_(obj){
        TweenMax.to(obj.scale,.2 ,{x:1,y:1,Ease:Sine.EaseOut});
    }

    function hideIcons(icon) {
        icon.visible = false;
    }

    function sghowIcons(icon) {
        icon.visible = true;
        showWildReel=false;
    }

    function subst_(par){
        var i= par[0];
        var a =par[1];
        // if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i].simbolReference!=undefined && wildReelSmb_[i].simbolReference[a]!=undefined ){
        //     wildReelSmb_[i].simbolReference[a].visible = false;
        //     wildReelSmb_[i].simbolReference[a]=null;
        // }
        // if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i].anim!=undefined && wildReelSmb_[i].anim[a]!=undefined ){
        //     wildReelSmb_[i].anim[a]=null;
        // }
    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;
        wildReelSmb_=wild;

        if (wildReelSmb_!=null) {
            for (var i = 0; i < spinManager_.getReels().length; i++) {
                if (wildReelSmb_[i] != null && shiftWildReelPos_[i]==true) {
                    for (var a in wildReelSmb_[i].anim) {
                        if (wildReelSmb_[i].anim[a]  ) {
                            if (wildReelSmb_[i].shift == "0" || i == 0 || freeSpinsManager_.getIsInFs()==false) {
                                rollBack = true;
                                wildReelSmb_[i].anim[a].animations.add("anim", revAnimFrameSeq_);
                                wildReelSmb_[i].anim[a].animations.play("anim", 120, false, true, subst_, [i, a]);//todo parametric loop
                                var ind = 0;
                                for (var r in wildReelSmb_[i].substOnreel) {
                                    if (wildReelSmb_[i].substOnreel[r] != undefined) {
                                        setTimeout(sghowIcons, (gameClass_.getCompulsivePlayer()) ? 300 : 400 + 150 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                        ind++;
                                    }
                                }
                                TweenMax.to(spinManager_.getReels()[i].getAllIcons(),.5,{alpha:1});
                                spinManager_.getReels()[i].getAllIcons().alpha=1;
                            } else {
                                tweens_[i]=TweenMax.to(wildReelSmb_[i].anim[a], 1, {x: ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * (i - 1) + ReelConfig.icon.width / 2)});
                                wildReelSmb_[(i - 1)] = wildReelSmb_[i];
                                //wildReelSmb_[i] = null;
                                shiftWildReelPos_[i-1]=true;
                            }
                            shiftWildReelPos_[i]=false;
                        }
                    }
                }
            }
            setTimeout(moveFinish_,500);
            if (rollBack) {
                soundManager_.playSound("wildReelOut");
            } else {

            }
            if (wildClassObject_!=undefined) gameClass_.setWildSimbs(wildReelSmb_);
        }
    }

    function moveFinish_(){
        //set visibile to the prev reel , and invisible to the target one
        var bNew=false;
        for (var i = 0; i < 5; i++) {
            if(shiftWildReelPos_[i]==true){
                TweenMax.to(spinManager_.getReels()[i].getAllIcons(),.5,{alpha:0});
            }else{
                TweenMax.to(spinManager_.getReels()[i].getAllIcons(),.5,{alpha:1});
            }
        }

        tweens_[i]=null;
    }

    wildClass_.hasWildReel=function(){
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if (shiftWildReelPos_[i]==true) {
                return true;
            }
        }
        return false
    }

    wildClass_.isReelWilded=function(num){
        var ret=false;

        if (shiftWildReelPos_[num]!=undefined) {
            ret=shiftWildReelPos_[num];
        }
        return ret;
    }

    wildClass_.resumeWildReel=function(){
        var index = 0;
        var a = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                if ([11].indexOf(resumeJson[i].smb[0].smb)>=0) {
                    var ind=0;
                    wildReelSmb_[i].smbNum.push([11]);
                    wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
                    wildReelSmb_[i].pos.push(reels[i].getPos(a));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                    if (wildReelSmb_[i].shift=="0")wilSimbsNum_++;
                    wildReelSmb_[i].shift=  "1";
                    shiftWildReelPos_[i]=true;

                    wildReelSmb_[i].anim[0] = game_.add.sprite(reels[i].getPos(a).x + ReelConfig.icon.width / 2, reels[i].getPos(a).y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "shiftWildReel_1");
                    wildReelSmb_[i].anim[0].animations.add("anim", animFrameSeq_);
                    wildReelSmb_[i].anim[0].animations.play("anim", 48, false);
                    wildReelSmb_[i].anim[0].anchor.set(.5, .5);

                    for (var r in wildReelSmb_[i].substOnreel) {
                        if( wildReelSmb_[i].substOnreel[r]!=undefined) {
                            setTimeout(hideIcons, 400 - 100 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                            ind++;
                        }
                    }
                    showWildReel = true;
                    wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[0]);
                    play_ = true;

                }
            }
        }
        if (wildClassObject_!=undefined) gameClass_.setWildSimbs(wildReelSmb_);
    }

    return wildClass_;

}
