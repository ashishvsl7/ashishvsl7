/**
 * KiS Framework, Created by Fabry on 13/09/2017.
 */

function ExpandingStickyWild(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var showWildReel=false;
    var expWildPos_=[];
    var revAnimFrameSeq_=[];

    wildReelSmb_ = [];
    for (i = 0; i < 5; i++) {
        wildReelSmb_[i] = [];
        expWildPos_[i]=[];
        for (a = 0; a < 3; a++) {
            wildReelSmb_[i][a] = {};
            expWildPos_[i][a]=false;
        }
    }

    wildClass_.showWild = function (wild) {
        var play_ = false;

        wildReelSmb_=wild;
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            for (var a =0;a<3;a++){
                var sp=wildReelSmb_[i][a].special;
                if (sp!=undefined) {
                    if (sp.split("-")[0].indexOf("stage1") >= 0) {
                        if (wildReelSmb_[i][a].anim!=undefined){
                            wildReelSmb_[i][a].anim.visible = false;
                            wildReelSmb_[i][a].anim = null;
                        }
                        //this should just animate the wild
                        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x, wildReelSmb_[i][a].simbolReference.y, "animW10");
                        wildReelSmb_[i][a].anim.animations.add("anim");
                        wildReelSmb_[i][a].anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 128 : 24, false);
                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                        wildReelSmb_[i][a].anim.alpha = 1;
                        var smb = spinManager_.getReels()[i].getSymbol(wildReelSmb_[i][a].simbolReference.smbToRemove);
                        smb.visible=false;

                        revAnimFrameSeq_ = []
                        for (var b = 1;b <= wildReelSmb_[i][a].anim.animations._outputFrames.length; b++) {
                            if(b%2==0)revAnimFrameSeq_.push(b);
                        }
                        revAnimFrameSeq_.reverse();

                        expWildPos_[i][a]=true;
                        showWildReel = true;
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                        play_ = true;
                        gameClass_.setStickyWildSimbs(wildReelSmb_);
                    }
                }
            }
        }
        if (play_)soundManager_.playSound("stickyWild");

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
        if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i][a]!=undefined && wildReelSmb_[i][a].simbolReference!=undefined ){
            wildReelSmb_[i][a].simbolReference.visible = true;
        }
        if (wildReelSmb_!=undefined && wildReelSmb_[i]!=undefined && wildReelSmb_[i][a]!=undefined && wildReelSmb_[i][a].anim!=undefined ){
            wildReelSmb_[i][a].anim=null;
        }
    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;
        var placed=[];

        wildReelSmb_=wild;
        if (freeSpinsManager_.getIsInFs()==true){
            for (var i = 0; i < spinManager_.getReels().length; i++) {
                if(wildReelSmb_[i]!=null){
                    for (var a =0;a<3;a++){
                        if (wildReelSmb_[i][a].anim!=undefined ){
                            wildReelSmb_[i][a].anim.alpha=1;
                        }
                        if (wildReelSmb_[i][a].special!=null) {
                            var sp = wildReelSmb_[i][a].special;
                            if (sp != undefined && sp != "") {
                                if (sp.split("-")[0].indexOf("done") >= 0) {
                                    if (placed.indexOf(i.toString()+a.toString())<0) {
                                        rollBack = true;
                                        if (wildReelSmb_[i][a].anim != undefined) {
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
                                    wildReelSmb_[reel][smb].simbolReference.smbToRemove=smb;

                                    var x = wildReelSmb_[reel][smb].simbolReference.x;
                                    var y = wildReelSmb_[reel][smb].simbolReference.y;

                                    if (wildReelSmb_[reel][smb].anim != undefined) {
                                        wildReelSmb_[reel][smb].anim.visible = false;
                                        wildReelSmb_[reel][smb].anim = null;
                                    }
                                    placed.push(reel.toString()+smb.toString());
                                    wildReelSmb_[reel][smb].anim = game_.add.sprite(x, y, "stickyWild");
                                    wildReelSmb_[reel][smb].anim.animations.add("anim");
                                    wildReelSmb_[reel][smb].anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 128 : 24, false);
                                    wildReelSmb_[reel][smb].anim.anchor.set(.5, .5);
                                    wildReelSmb_[reel][smb].anim.alpha = 1;

                                    if (wildReelSmb_[reel][smb].simbolReference != undefined) wildReelSmb_[reel][smb].simbolReference.visible = false;

                                    wildReelSmb_[i][a].special = "";
                                    wildReelSmb_[reel][smb].special = "";
                                    expWildPos_[reel][smb]=true;
                                    rollBack = true;
                                    showWildReel = true;
                                    wildClassObject_.mainGroup_.add(wildReelSmb_[reel][smb].anim);
                                    gameClass_.setStickyWildSimbs(wildReelSmb_);
                                }
                            }
                        }
                    }
                }
            }
        }

        if(rollBack){
            soundManager_.playSound("stickyWild");
        }else if (showWildReel){
            showWildReel=false;
            //FS END, restore the wild icons if there and remove wild animations
            for (var i = 0; i < spinManager_.getReels().length; i++) {
                if (wildReelSmb_[i] != null) {
                    for (var a = 0; a < 3; a++) {
                        expWildPos_[i][a]=false;
                        if (wildReelSmb_[i][a].anim != undefined) {
                            wildReelSmb_[i][a].anim.alpha = 0;
                            if(wildReelSmb_[i][a].anim.bgAnim)wildReelSmb_[i][a].anim.bgAnim=null;
                            wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim.alpha );
                            wildReelSmb_[i][a].anim=null;
                        }
                        if (wildReelSmb_[i][a].simbolReference != undefined) {
                            wildReelSmb_[i][a].simbolReference.visible = true;
                        }
                    }
                }
            }

            //removing
            for (var a in wildClassObject_.mainGroup_.children){
                wildClassObject_.mainGroup_.remove(wildClassObject_.mainGroup_.children[a]);
            }
        }
    }

    wildClass_.resetWilds=function () {
        for (var i = 0; i < 5; i++) {
            for (var a =0;a <3;a++) {
                expWildPos_[i][a] = false;
                wildReelSmb_[i][a].special=null;
            }
        }
    }

    wildClass_.hasWildReel=function(){
        for (var i = 0; i < 5; i++) {
            for (var a =0;a <3;a++) {
                if (expWildPos_[i][a] == true) {
                    return true;
                }
            }
        }
        return false
    }

    wildClass_.isSymbolWilded=function (reel,smb){
        return expWildPos_[reel][smb];
    }

    wildClass_.wildReelWinAnim=function(reel,smb){
        if(wildReelSmb_[reel][smb].anim!=null && wildReelSmb_[reel][smb].anim.scale.x==1){
            wildReelSmb_[reel][smb].anim.alpha=1;
            if (wildReelSmb_[reel][smb].anim.bgAnim!=undefined)wildReelSmb_[reel][smb].anim.bgAnim.alpha=1;
            TweenMax.to(wildReelSmb_[reel][smb].anim.scale,.2 ,{x:1.2,y:1.2,Ease:Sine.EaseInOut,onComplete:backWR_,onCompleteParams:[wildReelSmb_[reel][smb].anim]})
        }
    }

    wildClass_.resumeWildReel=function(){
        var index = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for  (var a =0;a<3 ;a++){
                    if ([10].indexOf(resumeJson[i].smb[a].smb)>=0) {
                        var smb_ = spinManager_.getReels()[i].getSymbol(a);
                        smb_.visible=false;

                        wildReelSmb_[i][a].simbolReference=smb_;
                        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x , wildReelSmb_[i][a].simbolReference.y , "animW10");
                        wildReelSmb_[i][a].anim.animations.add("anim");
                        wildReelSmb_[i][a].anim.animations.play("anim", 48, false);
                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                        wildReelSmb_[i][a].special=(resumeJson[i].smb[a].special!="n/a"?resumeJson[i].smb[a].special:"done");
                        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                        expWildPos_[i][a]=true;
                    }
                }
            }
        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);
    }

    return wildClass_;

}