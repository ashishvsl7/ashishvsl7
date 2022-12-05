/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function TumblingWildReel(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var animFrameSeq_=[];
    var revAnimFrameSeq_=[];
    var showWildReel=false;
    var shiftWildReelPos_=[];
    wildReelSmb_ = [];
    for (i = 0; i < ReelConfig.numReels; i++) {
        wildReelSmb_[i] = {};
        wildReelSmb_[i].simbolReference = [];
        wildReelSmb_[i].substOnreel = [];
        wildReelSmb_[i].smbNum = [];
        wildReelSmb_[i].pos = [];
        wildReelSmb_[i].reel = [];
        if (wildReelSmb_[i].anim == undefined) wildReelSmb_[i].anim = [];
        if (wildReelSmb_[i].sticky == undefined) wildReelSmb_[i].sticky = 0;
    }

    wildClass_.showWild = function (wild) {
        var play_ = false;

        wildReelSmb_=wild;
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if (wildReelSmb_[i].pos[0] != undefined) {
                for (var a in wildReelSmb_[i].pos) {
                    if ( wildReelSmb_[i].anim[a] == undefined && wildReelSmb_[i].pos[a] != undefined) {

                        var correction =((ReelConfig.wildReelAnimOffset!=undefined)?ReelConfig.wildReelAnimOffset:0);
                        if (game_.cache.checkImageKey("wildReel") == true){
                            wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y , "wildReel");
                            wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
                            wildReelSmb_[i].anim[a].animations.play("anim",24, false,true, lastPart_, [i, a]);
                            if (ReelConfig.wildReelOrigin_X_Offset!=undefined){
                                wildReelSmb_[i].anim[a].x=wildReelSmb_[i].anim[a].x+ReelConfig.wildReelOrigin_X_Offset;
                            }
                        }else if (game_.cache.checkImageKey("wildReel_0") == true){
                            wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y  ,"wildReel_0");
                            wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
                            wildReelSmb_[i].anim[a].animations.play("anim", 24, false,true,nextPart_,[i,a]);
                        }
                        //wildReelSmb_[i].anim[a].x=wildReelSmb_[i].anim[a].x+.5;
                        shiftWildReelPos_[i]=true;
                        animFrameSeq_ = [];
                        revAnimFrameSeq_ = [];

                        for (var b = 1;b <= wildReelSmb_[i].anim[a].animations._outputFrames.length; b++) {
                            animFrameSeq_.push(b);
                            revAnimFrameSeq_.push(b);
                        }
                        revAnimFrameSeq_.reverse();
                        wildReelSmb_[i].anim[a].anchor.set(.5, .5);
                        // wildReelSmb_[i].anim[a].width = displayManager.groups.wild.width;
                        // wildReelSmb_[i].anim[a].height = displayManager.groups.wild.height;
                       // wildReelSmb_[i].simbolReference[a].visible = false;
                        var ind=0;
                        for (var r in wildReelSmb_[i].substOnreel) {
                            if( wildReelSmb_[i].substOnreel[r]!=undefined) {
                                setTimeout(hideIcons, (gameClass_.getCompulsivePlayer())?100:300 + 100 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                ind++;
                            }
                        }
                        showWildReel = true;
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a]);
                        play_ = true;
                    }
                }
            }
        }
        if (play_)soundManager_.playSound("wildReel");

    }

    wildClass_.wildReelWinAnim=function(reel){
        for (var a in wildReelSmb_[reel].anim) {
            if(wildReelSmb_[reel].anim[a]!=null && wildReelSmb_[reel].anim[a].scale.x==1)TweenMax.to(wildReelSmb_[reel].anim[a].scale,.2 ,{x:1.1,y:1.1,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildReelSmb_[reel].anim[a]]})
        }
    }

    function nextPart_(par){
        try {
            var i = par[0];
            var a = par[1];
            var offSet = 0;
            if (ReelConfig.wildAnimOffset != undefined) offSet = ReelConfig.wildAnimOffset * ReelConfig.icon.height;
            wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + offSet, "wildReel_1");
            wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
            wildReelSmb_[i].anim[a].animations.play("anim", 24, false, true, lastPart_, [i, a]);
            wildReelSmb_[i].anim[a].anchor.set(.5, .5);
            wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a]);
        }catch(e){
            lastPart_, [i, a];  //sometimes when tabbed away the object in wildReelSmb_[i].pos[a] is null so i call lastpart to end the animation
        }
    }

    function lastPart_(par){
        var i= par[0];
        var a= par[1];
        var reels=spinManager_.getReels();

        for (var a =0 ; a<4 ; a++){//todo 4
            var pos=(reels[i].getPos(a));
            if (game_.cache.checkImageKey("icon"+ (14+Number(a)))==true) {
                reels[i].swapSmb(14 + Number(a), a);
            }
        }
    }

    function backWR_(obj){
        TweenMax.to(obj.scale,.2 ,{x:1,y:1,Ease:Sine.EaseOut});
    }

    function hideIcons(icon) {
        icon.visible = false;
    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;

        wildReelSmb_ = [];
        for (i = 0; i < ReelConfig.numReels; i++) {
            wildReelSmb_[i] = {};
            wildReelSmb_[i].simbolReference = [];
            wildReelSmb_[i].substOnreel = [];
            wildReelSmb_[i].smbNum = [];
            wildReelSmb_[i].pos = [];
            wildReelSmb_[i].reel = [];
            wildReelSmb_[i].anim = [];
            wildReelSmb_[i].sticky = 0;
        }
        winManager_.setWildSimbs(wildReelSmb_);
    }

    wildClass_.resumeWildReel=function(){
        var index = 0;
        var a = 3;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                if (wildManager_.getTriggerIcon().indexOf(resumeJson[i].smb[0].smb)>=0) {
                    var ind=0;
                    wildReelSmb_[i].smbNum.push(wildManager_.getTriggerIcon());
                    wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
                    wildReelSmb_[i].pos.push(reels[i].getPos(a));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(3));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                    if (wildReelSmb_[i].sticky=="0")wilSimbsNum_++;
                    wildReelSmb_[i].sticky=((resumeJson[i].smb[0].stick!=null)?"1":"0");
                    wildReelSmb_[i].anim[0] = game_.add.sprite(wildReelSmb_[i].pos[ind].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[ind].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2-10), "wildReel_1");
                    wildReelSmb_[i].anim[0].animations.add("anim");
                    wildReelSmb_[i].anim[0].animations.play("anim", 24, false);
                    wildReelSmb_[i].anim[0].anchor.set(.5, .5);

                    wildReelSmb_[i].anim[0].scale.x=1;
                    wildReelSmb_[i].anim[0].scale.y=1;
                    shiftWildReelPos_[i]=true;
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
        winManager_.setWildSimbs(wildReelSmb_);
    }


    wildClass_.hasWildReel=function(){
        return showWildReel;
    }

    wildClass_.isReelWilded=function(num){
        var ret=false;

        if (shiftWildReelPos_[num]!=undefined) {
            ret=shiftWildReelPos_[num];
        }
        return ret;
    }

    return wildClass_;

}