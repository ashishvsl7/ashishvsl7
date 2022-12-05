/**
 * KiS Framework, Created by Fabry on 25/01/2017.
 */

function ExternalWildReel(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var showWildReel=false;
    var shiftWildReelPos_=[];

    wildClass_.showWild = function () {
        var play_ = false;

        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if (wildClassObject_.wildReelSmb_[i].pos[0] != undefined) {
                for (var a in wildClassObject_.wildReelSmb_[i].pos) {
                    if (game_.cache.checkImageKey("wildReel") == true && wildClassObject_.wildReelSmb_[i].anim[a] == undefined && wildClassObject_.wildReelSmb_[i].pos[a] != undefined) {
                        wildClassObject_.wildReelSmb_[i].anim[a] = game_.add.sprite(wildClassObject_.wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildClassObject_.wildReelSmb_[i].pos[a].y + (  ReelConfig.icon.height / 2-10), "wildReel");
                        wildClassObject_.wildReelSmb_[i].anim[a].animations.add("anim");
                        wildClassObject_.wildReelSmb_[i].anim[a].animations.play("anim", 24, false);
                        wildClassObject_.wildReelSmb_[i].anim[a].anchor.set(.5, .5);
                        wildClassObject_.wildReelSmb_[i].anim[a].scale.x=1.1;
                        wildClassObject_.wildReelSmb_[i].anim[a].scale.y=1.1;
                        shiftWildReelPos_[i]=true;
                        var ind=0;
                        for (var r in wildClassObject_.wildReelSmb_[i].substOnreel) {
                            if( wildClassObject_.wildReelSmb_[i].substOnreel[r]!=undefined) {
                                setTimeout(hideIcons, 400 - 100 * (Number(ind)), wildClassObject_.wildReelSmb_[i].substOnreel[r]);
                                ind++;
                            }
                        }
                        showWildReel = true;
                        wildClassObject_.mainGroup_.add(wildClassObject_.wildReelSmb_[i].anim[a]);
                        play_ = true;
                    }
                }
            }
        }
        if (play_)soundManager_.playSound("wildReel");

    }

    wildClass_.wildReelWinAnim=function(reel){
        for (var a in wildClassObject_.wildReelSmb_[reel].anim) {
            if(wildClassObject_.wildReelSmb_[reel].anim[a]!=null && wildClassObject_.wildReelSmb_[reel].anim[a].scale.x==1.1)TweenMax.to(wildClassObject_.wildReelSmb_[reel].anim[a].scale,.2 ,{x:1.2,y:1.2,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildClassObject_.wildReelSmb_[reel].anim[a]]})
        }
    }

    function backWR_(obj){
        TweenMax.to(obj.scale,.2 ,{x:1.1,y:1.1,Ease:Sine.EaseOut});
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
        if (wildClassObject_.wildReelSmb_!=undefined && wildClassObject_.wildReelSmb_[i]!=undefined && wildClassObject_.wildReelSmb_[i].simbolReference!=undefined && wildClassObject_.wildReelSmb_[i].simbolReference[a]!=undefined ){
            wildClassObject_.wildReelSmb_[i].simbolReference[a].visible = true;
        }
        if (wildClassObject_.wildReelSmb_!=undefined && wildClassObject_.wildReelSmb_[i]!=undefined && wildClassObject_.wildReelSmb_[i].anim!=undefined && wildClassObject_.wildReelSmb_[i].anim[a]!=undefined ){
            wildClassObject_.wildReelSmb_[i].anim[a]=null;
        }
    }

    wildClass_.clearWild = function () {
        var rollBack=false;
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if(wildClassObject_.wildReelSmb_[i]!=null){
                for (var a in wildClassObject_.wildReelSmb_[i].smbNum) {
                    if (wildClassObject_.wildReelSmb_[i].anim[a]) {
                        if (wildClassObject_.wildReelSmb_[i].sticky == "0") {
                            rollBack = true;
                            shiftWildReelPos_[i]=false;
                            var pos=new Phaser.Point(wildClassObject_.wildReelSmb_[i].anim[a].x,wildClassObject_.wildReelSmb_[i].anim[a].y);
                            wildClassObject_.wildReelSmb_[i].anim[a].visible=false;
                            wildClassObject_.wildReelSmb_[i].anim[a]=null;
                            wildClassObject_.wildReelSmb_[i].anim[a] = game_.add.sprite(pos.x , pos.y , "wildReelBack");
                            wildClassObject_.wildReelSmb_[i].anim[a].animations.add("anim");
                            wildClassObject_.wildReelSmb_[i].anim[a].anchor.set(.5, .5);
                            wildClassObject_.wildReelSmb_[i].anim[a].scale.x=1.1;
                            wildClassObject_.wildReelSmb_[i].anim[a].scale.y=1.1;
                            wildClassObject_.wildReelSmb_[i].anim[a].animations.play("anim", 48, false, true, subst_, [i,a]);//todo parametric loop
                            var ind=0;
                            for (var r in wildClassObject_.wildReelSmb_[i].substOnreel) {
                                if(wildClassObject_.wildReelSmb_[i].substOnreel[r]!=undefined) {
                                    setTimeout(sghowIcons, 400 + 150 * (Number(ind)), wildClassObject_.wildReelSmb_[i].substOnreel[r]);
                                    ind++;
                                }
                            }
                        }
                    }
                }
            }
        }
        if(rollBack){
            soundManager_.playSound("wildReelOut");
        }else{
            for (var a in wildClassObject_.mainGroup_){
                wildClassObject_.mainGroup_.remove(a);
            }
        }
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

    wildClass_.resumeWildReel=function(){
        var index = 0;
        var a = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        for (i = 0; i < ReelConfig.numReels; i++) {
            if (wildClassObject_!=undefined) {
                wildClassObject_.wildReelSmb_[i] = {};
                wildClassObject_.wildReelSmb_[i].simbolReference = [];
                wildClassObject_.wildReelSmb_[i].substOnreel = [];
                wildClassObject_.wildReelSmb_[i].smbNum = [];
                wildClassObject_.wildReelSmb_[i].pos = [];
                wildClassObject_.wildReelSmb_[i].reel = [];
                if (wildClassObject_.wildReelSmb_[i].anim == undefined) wildClassObject_.wildReelSmb_[i].anim = [];
                if (wildClassObject_.wildReelSmb_[i].sticky == undefined) wildClassObject_.wildReelSmb_[i].sticky = 0;
            }
        }

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                if (wildManager_.getTriggerIcon().indexOf(resumeJson[i].smb[0].smb)>=0) {
                    var ind=0;
                    wildClassObject_.wildReelSmb_[i].smbNum.push(wildManager_.getTriggerIcon());
                    wildClassObject_.wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
                    wildClassObject_.wildReelSmb_[i].pos.push(reels[i].getPos(a));
                    wildClassObject_.wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                    wildClassObject_.wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                    wildClassObject_.wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                    if (wildClassObject_.wildReelSmb_[i].sticky=="0")wilSimbsNum_++;
                    wildClassObject_.wildReelSmb_[i].sticky=((resumeJson[i].smb[0].stick!=null)?"1":"0");
                    wildClassObject_.wildReelSmb_[i].anim[0] = game_.add.sprite(wildClassObject_.wildReelSmb_[i].pos[ind].x + ReelConfig.icon.width / 2, wildClassObject_.wildReelSmb_[i].pos[ind].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2-10), "resumeWildReel");
                    wildClassObject_.wildReelSmb_[i].anim[0].anchor.set(.5, .5);
                    wildClassObject_.wildReelSmb_[i].anim[0].scale.x=1.1;
                    wildClassObject_.wildReelSmb_[i].anim[0].scale.y=1.1;
                    shiftWildReelPos_[i]=true;
                    for (var r in wildClassObject_.wildReelSmb_[i].substOnreel) {
                        if( wildClassObject_.wildReelSmb_[i].substOnreel[r]!=undefined) {
                            setTimeout(hideIcons, 400 - 100 * (Number(ind)), wildClassObject_.wildReelSmb_[i].substOnreel[r]);
                            ind++;
                        }
                    }
                    showWildReel = true;
                    wildClassObject_.mainGroup_.add(wildClassObject_.wildReelSmb_[i].anim[0]);
                    play_ = true;

                }
            }
        }
        if (wildClassObject_!=undefined) winManager_.setWildSimbs(wildClassObject_.wildReelSmb_);
    }

    return wildClass_;

}