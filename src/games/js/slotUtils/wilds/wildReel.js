/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function WildReel(gameRef, gameClass) {
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
                        if (game_.cache.checkImageKey("wildReel") == true){
                            wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel");
                            if(ReelConfig.wildReelOrigin_Y_Offset!=null){
                                wildReelSmb_[i].anim[a].y=wildReelSmb_[i].anim[a].y +ReelConfig.wildReelOrigin_Y_Offset;
                            }
                            if(ReelConfig.wildReelOrigin_X_Offset!=null){
                                wildReelSmb_[i].anim[a].x=wildReelSmb_[i].anim[a].x +ReelConfig.wildReelOrigin_X_Offset;
                            }
                            wildReelSmb_[i].anim[a].animations.add("anim");
                            if (ReelConfig.wilTextAnimOnly!=true) {
                                wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false);
                            }else{
                                wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,false,placeImages_,[i,a]);
                            }

                        }else if (game_.cache.checkImageKey("wildReel_0") == true){
                            wildReelSmb_[i].anim[a] = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_0");
                            if(ReelConfig.wildReelOrigin_Y_Offset!=null){
                                wildReelSmb_[i].anim[a].y=wildReelSmb_[i].anim[a].y +ReelConfig.wildReelOrigin_Y_Offset;
                            }
                            if(ReelConfig.wildReelOrigin_X_Offset!=null){
                                wildReelSmb_[i].anim[a].x=wildReelSmb_[i].anim[a].x +ReelConfig.wildReelOrigin_X_Offset;
                            }
                            wildReelSmb_[i].anim[a].animations.add("anim");
                            wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer())?48:24, false,true,nextPart_,[i,a]);
                        }
                        shiftWildReelPos_[i]=true;
                        animFrameSeq_ = [];
                        revAnimFrameSeq_ = [];

                        for (var b = 1;b < wildReelSmb_[i].anim[a].animations._outputFrames.length; b++) {
                            animFrameSeq_.push(b);
                            revAnimFrameSeq_.push(b);
                        }
                        revAnimFrameSeq_.reverse();
                        wildReelSmb_[i].anim[a].anchor.set(.5, .5);
                        // wildReelSmb_[i].anim[a].width = displayManager.groups.wild.width;
                        // wildReelSmb_[i].anim[a].height = displayManager.groups.wild.height;
                        wildReelSmb_[i].simbolReference[a].visible = false;
                        var ind=0;
                        if (ReelConfig.wildReelOrigin==1) {//frpmo the top
                            for (var r=0; r<= wildReelSmb_[i].substOnreel.length;r++) {
                                if (wildReelSmb_[i].substOnreel[r] != undefined) {
                                    setTimeout(hideIcons, (gameClass_.getCompulsivePlayer()) ? 100 : 300 + 100 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                    ind++;
                                }
                            }
                        }else{
                            for (var r=wildReelSmb_[i].substOnreel.length; r>= 0;r--) {
                                if (wildReelSmb_[i].substOnreel[r] != undefined) {
                                    setTimeout(hideIcons, (gameClass_.getCompulsivePlayer()) ? 100 : 300 + 100 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                    ind++;
                                }
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
            if (ReelConfig.wilTextAnimOnly!=true) {
                if(wildReelSmb_[reel].anim[a]!=null && wildReelSmb_[reel].anim[a].scale.x==1)TweenMax.to(wildReelSmb_[reel].anim[a].scale,.2 ,{x:1.1,y:1.1,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildReelSmb_[reel].anim[a]]})
            }else{
                if(wildReelSmb_[reel].anim[a].text!=null && wildReelSmb_[reel].anim[a].text.scale.x==1)TweenMax.to(wildReelSmb_[reel].anim[a].text.scale,.2 ,{x:1.1,y:1.1,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildReelSmb_[reel].anim[a].text]})
            }
        }
    }

    function placeImages_(par){
        var i= par[0];
        var a= par[1];

        wildReelSmb_[i].anim[a].bg= game_.add.sprite(wildReelSmb_[i].anim[a].x , wildReelSmb_[i].anim[a].y, "wildBg");
        wildReelSmb_[i].anim[a].bg.anchor.set(.5, .5);
        wildReelSmb_[i].anim[a].visible=false;
        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].bg);

        wildReelSmb_[i].anim[a].text= game_.add.sprite(wildReelSmb_[i].anim[a].x  , wildReelSmb_[i].anim[a].y, "wildText");
        wildReelSmb_[i].anim[a].text.anchor.set(.5, .5);
        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].text);
    }

    function nextPart_(par){
        var i= par[0];
        var a= par[1];

        wildReelSmb_[i].anim[a]= game_.add.sprite(wildReelSmb_[i].anim[a].x , wildReelSmb_[i].anim[a].y, "wildReel_1");
        wildReelSmb_[i].anim[a].animations.add("anim", animFrameSeq_);
        if (ReelConfig.wilTextAnimOnly!=true) {
            wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false);
        }else{
            wildReelSmb_[i].anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,false,placeImages_,[i,a]);
        }
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
        if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i].simbolReference!=undefined && wildReelSmb_[i].simbolReference[a]!=undefined ){
            wildReelSmb_[i].simbolReference[a].visible = true;
        }
        if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i].anim!=undefined && wildReelSmb_[i].anim[a]!=undefined ){
            wildReelSmb_[i].anim[a]=null;
        }
    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;

        wildReelSmb_=wild;
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if(wildReelSmb_[i]!=null){
                for (var a in wildReelSmb_[i].smbNum) {
                    if (wildReelSmb_[i].anim[a]) {
                        if (wildReelSmb_[i].sticky == "0") {
                            rollBack = true;
                            shiftWildReelPos_[i]=false;
                            if (ReelConfig.wilTextAnimOnly==true) {
                                if(wildReelSmb_[i].anim[a].bg!=undefined)wildReelSmb_[i].anim[a].bg.visible=false;
                                if(wildReelSmb_[i].anim[a].text!=undefined)wildReelSmb_[i].anim[a].text.visible=false;
                                wildReelSmb_[i].anim[a].visible=true;
                                wildClassObject_.mainGroup_.remove(wildReelSmb_[i].anim[a].bg);
                                wildClassObject_.mainGroup_.remove(wildReelSmb_[i].anim[a].text);
                                wildReelSmb_[i].anim[a].bg=null;
                                wildReelSmb_[i].anim[a].text=null;
                            }

                            wildReelSmb_[i].anim[a].animations.add("anim", revAnimFrameSeq_);
                            wildReelSmb_[i].anim[a].animations.play("anim", 48, false, true, subst_, [i,a]);//todo parametric loop
                            var ind=0;

                            if (ReelConfig.wildReelOrigin==1) {//frpmo the top
                                for (var r=0; r<= wildReelSmb_[i].substOnreel.length;r++) {
                                    if (wildReelSmb_[i].substOnreel[r] != undefined) {
                                        setTimeout(sghowIcons,  (ReelConfig.rollbackBaseTime!=undefined)?ReelConfig.rollbackBaseTime:400 + 150 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                        ind++;
                                    }
                                }
                            }else{
                                for (var r=wildReelSmb_[i].substOnreel.length; r>= 0;r--) {
                                    if (wildReelSmb_[i].substOnreel[r] != undefined) {
                                        setTimeout(sghowIcons, (ReelConfig.rollbackBaseTime!=undefined)?ReelConfig.rollbackBaseTime:400 + 150 * (Number(ind)), wildReelSmb_[i].substOnreel[r]);
                                        ind++;
                                    }
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
            //remove 
        }
    }

    wildClass_.resumeWildReel=function(){
        var index = 0;
        var a = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                if (wildManager_.getTriggerIcon().indexOf(resumeJson[i].smb[0].smb)>=0) {
                    var ind=a;
                    wildReelSmb_[i].smbNum.push(wildManager_.getTriggerIcon());
                    wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
                    wildReelSmb_[i].pos.push(reels[i].getPos(a));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                    if (wildReelSmb_[i].sticky=="0")wilSimbsNum_++;
                    wildReelSmb_[i].sticky=((resumeJson[i].smb[0].stick!=null)?"1":"0");
                    wildReelSmb_[i].anim[0] = game_.add.sprite(reels[i].getPos(a).x + ReelConfig.icon.width / 2, reels[i].getPos(a).y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_1");

                    if(ReelConfig.wildReelOrigin_Y_Offset!=null){
                        wildReelSmb_[i].anim[0].y=wildReelSmb_[i].anim[0].y +ReelConfig.wildReelOrigin_Y_Offset;
                    }
                    if(ReelConfig.wildReelOrigin_X_Offset!=null){
                        wildReelSmb_[i].anim[0].x=wildReelSmb_[i].anim[0].x +ReelConfig.wildReelOrigin_X_Offset;
                    }

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