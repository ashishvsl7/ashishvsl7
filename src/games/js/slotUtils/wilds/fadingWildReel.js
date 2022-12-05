/**
 * KiS Framework, Created by Fabry on 28/02/2019.
 */
function FadingWildReel(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var animFrameSeq_=[];
    var revAnimFrameSeq_=[];
    var showWildReel=false;
    var shiftWildReelPos_=[];
    var fw=[];

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
                        wildReelSmb_[i].anim[a]= {};

                        wildReelSmb_[i].anim[a].a = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_a_0");
                        wildReelSmb_[i].anim[a].b = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_b");
                        wildReelSmb_[i].anim[a].f = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2)+270, "fworks");
                        wildReelSmb_[i].anim[a].c = game_.add.sprite(wildReelSmb_[i].pos[a].x + ReelConfig.icon.width / 2, wildReelSmb_[i].pos[a].y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_c");


                        wildReelSmb_[i].anim[a].a.animations.add("anim");
                        wildReelSmb_[i].anim[a].b.animations.add("anim");
                        wildReelSmb_[i].anim[a].c.animations.add("anim");
                        wildReelSmb_[i].anim[a].f.animations.add("anim");

                        wildReelSmb_[i].anim[a].a.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,true,nextPart_,[i,a]);
                        wildReelSmb_[i].anim[a].b.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,false);
                        wildReelSmb_[i].anim[a].c.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 48 : 24, false,false);

                        shiftWildReelPos_[i]=true;

                        wildReelSmb_[i].anim[a].a.anchor.set(.5, .5);
                        wildReelSmb_[i].anim[a].b.anchor.set(.5, .5);
                        wildReelSmb_[i].anim[a].c.anchor.set(.5, .5);
                        wildReelSmb_[i].anim[a].f.anchor.set(.5, .5);

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
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].c);
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].f);
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].b);
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].a);


                        play_ = true;
                    }
                }
            }
        }
        if (play_)soundManager_.playSound("wildReel");

    }

    wildClass_.wildReelWinAnim=function(reel){
        for (var a in wildReelSmb_[reel].anim) {
            wildReelSmb_[reel].anim[a].a.animations.play("anim", 24,false,false);
        }
    }

    function placeImages_(par){
        return;
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

        wildReelSmb_[i].anim[a].f.play("anim",24,false,true);

        //fw.push(f);

        wildReelSmb_[i].anim[a].a= game_.add.sprite(wildReelSmb_[i].anim[a].a.x , wildReelSmb_[i].anim[a].a.y, "wildReel_a_1");
        wildReelSmb_[i].anim[a].a.animations.add("anim");
        wildReelSmb_[i].anim[a].a.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 64 : 24, false,false,placeImages_,[i,a]);
        wildReelSmb_[i].anim[a].a.anchor.set(.5, .5);
        wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[a].a);

        animFrameSeq_ = [];
        revAnimFrameSeq_ = [];
        for (var b = 1;b < wildReelSmb_[i].anim[a].a.animations._outputFrames.length; b++) {
            animFrameSeq_.push(b);
            revAnimFrameSeq_.push(b);
        }
        revAnimFrameSeq_.reverse();

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
                            if (ReelConfig.wilTextAnim==true) {

                                if(wildReelSmb_[i].anim[a].bg!=undefined)wildReelSmb_[i].anim[a].bg.visible=false;
                                if(wildReelSmb_[i].anim[a].text!=undefined)wildReelSmb_[i].anim[a].text.visible=false;

                                wildReelSmb_[i].anim[a].a.visible=true;
                                if (wildReelSmb_[i].anim[a].b!=null){
                                    wildReelSmb_[i].anim[a].b.visible=true;
                                    wildClassObject_.mainGroup_.remove(wildReelSmb_[i].anim[a].b);
                                    wildReelSmb_[i].anim[a].b=null;
                                }
                                if (wildReelSmb_[i].anim[a].c!=null){
                                    wildReelSmb_[i].anim[a].c.visible=true;
                                    wildClassObject_.mainGroup_.remove(wildReelSmb_[i].anim[a].c);
                                    wildReelSmb_[i].anim[a].c=null;
                                }
                            }

                            wildReelSmb_[i].anim[a].a.animations.add("anim", revAnimFrameSeq_);
                            wildReelSmb_[i].anim[a].a.animations.play("anim", 48, false, true, subst_, [i,a]);//todo parametric loop
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
            for (var a in fw){
                displayManager_.getGroup("fireworks").remove(fw[a]);
            }
            fw=[];
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
                    wildReelSmb_[i].anim[0]={};
                    wildReelSmb_[i].anim[0].a = game_.add.sprite(reels[i].getPos(a).x + ReelConfig.icon.width / 2, reels[i].getPos(a).y + ( ReelConfig.icon.height + ReelConfig.icon.height / 2), "wildReel_a_1");


                    wildReelSmb_[i].anim[0].a.animations.add("anim");
                    wildReelSmb_[i].anim[0].a.animations.play("anim", 24, false);
                    wildReelSmb_[i].anim[0].a.anchor.set(.5, .5);

                    wildReelSmb_[i].anim[0].a.scale.x=1;
                    wildReelSmb_[i].anim[0].a.scale.y=1;
                    shiftWildReelPos_[i]=true;
                    for (var r in wildReelSmb_[i].substOnreel) {
                        if( wildReelSmb_[i].substOnreel[r]!=undefined) {
                            hideIcons( wildReelSmb_[i].substOnreel[r]);
                            ind++;
                        }
                    }
                    showWildReel = true;
                    wildClassObject_.mainGroup_.add(wildReelSmb_[i].anim[0].a);
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