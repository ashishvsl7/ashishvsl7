/**
 * KiS Framework, Created by Fabry on 26/02/2018.
 */

function WaikikiPopUpWild(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var game_ = gameRef;
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var showWildReel=false;
    var expWildPos_=[];
    var revAnimFrameSeq_=[];
    var indexFlower_=0;

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
        var index=0;

        for (var aa = 0; aa < 3; aa++) {
            if (wild.order[aa].length>0) {
                for (var s in wild.order[aa]) {
                    console.log(wild.order[aa][s].order)
                    var i = wild.order[aa][s].pos.split("-")[0];
                    var a = wild.order[aa][s].pos.split("-")[1];
                    setTimeout(spreadWilds_, 600 * index, i, a);
                    index++;
                }
            }
        }

    }

    function spreadWilds_(i,a){
        if (wildReelSmb_[i][a].anim != undefined) {
            wildReelSmb_[i][a].anim.visible = false;
            wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim);
            wildReelSmb_[i][a].anim = null;
        }
        console.log("remove " + i + " "+wildReelSmb_[i][a].simbolReference.smbToRemove + " " + wildReelSmb_[i][a].simbolReference.indexToRemove )
        if(wildReelSmb_[i][a].simbolReference.smbToRemove!=undefined) {
            var smb = spinManager_.getReels()[i].getRealPosSmb(wildReelSmb_[i][a].simbolReference.smbToRemove);
            console.log("removing " + smb.x + " "+ smb.y)
            if (smb) smb.visible = false;
        }
        if(wildReelSmb_[i][a].simbolReference.indexToRemove!=undefined) {
            smb = spinManager_.getReels()[i].getSymbol(wildReelSmb_[i][a].simbolReference.indexToRemove);
            console.log("removing1 " + smb.x + " "+ smb.y)
            if (smb) smb.visible = false;
        }
        if(freeSpinsManager_.getIsInFs()==false){
            var anim="animW9";
        }else{
            anim=(indexFlower_%2==0)?"animWb10":"animWr10";
            indexFlower_++;
        }
        if (freeSpinsManager_.getIsInFs()==false) {
            //this should just animate the wild
            if (wildReelSmb_[i][a].simbolReference.prevSmb==6 && i==2 && a==1){//scatter trigger combo
                anim="anim13";

                var msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winManager_.getScatterWinAmt()[0][6].amt,Util.getNubersOfDecimal());
                var txt1 = new  Phaser.BitmapText(game_, wildReelSmb_[i][a].simbolReference.x , wildReelSmb_[i][a].simbolReference.y+30,"bmpFont",msg1 ,100,"center");

                txt1.alpha=0;
                txt1.anchor.set(.5,.5);
                displayManager_.getGroup("lines").add(txt1);

                TweenMax.to(txt1,.2,{delay:.8,alpha:1});
                TweenMax.to(txt1.scale,.3,{delay:.8,x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt1]});
                soundManager_.playSound("tokenNewLevel");
            }
        }
        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x, wildReelSmb_[i][a].simbolReference.y, anim);
        if (freeSpinsManager_.getIsInFs()==true) {
            if (i>=2)wildReelSmb_[i][a].anim.scale.x=-1
        }

        wildReelSmb_[i][a].anim.animations.add("anim");
        wildReelSmb_[i][a].anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 128 : 24, false);
        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
        wildReelSmb_[i][a].anim.alpha = 1;
        wildReelSmb_[i][a].anim.visible = true;
        revAnimFrameSeq_ = [];
        for (var b = 1; b <= wildReelSmb_[i][a].anim.animations._outputFrames.length; b++) {
            if (b % 2 == 0) revAnimFrameSeq_.push(b);
        }
        revAnimFrameSeq_.reverse();
        expWildPos_[i][a] = true;
        showWildReel = true;
        wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);

        gameClass_.setStickyWildSimbs(wildReelSmb_);

        soundManager_.playSound((freeSpinsManager_.getIsInFs()==true)?"stickyWildFs":"stickyWild");
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.5,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        setTimeout(lineManager_.completeBonusValue,1600,winManager_.getScatterWinAmt()[0][6].amt, "Scatter Win");
        TweenMax.to(txt,.7,{delay:1.6,alpha:0.3,y:560,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
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
            wildReelSmb_[i][a].anim=null;
        }
    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;
        wildReelSmb_=wild;
        var placed=[];

        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if(wildReelSmb_[i]!=null){
                for (var a =0;a<3;a++){
                    if (wildReelSmb_[i][a].anim != undefined) {
                        wildReelSmb_[i][a].anim.alpha = 1;
                    }

                    if (wildReelSmb_[i][a].anim != undefined) {
                        rollBack = true;
                        if (wildReelSmb_[i][a].anim.bgAnim)wildReelSmb_[i][a].anim.bgAnim=null;
                        wildReelSmb_[i][a].anim.animations.add("anim", revAnimFrameSeq_);
                        wildReelSmb_[i][a].anim.animations.play("anim", 48, false, true, subst_, [i, a]);//todo parametric loop
                    }
                    expWildPos_[i][a]=false;
                }
            }
        }
        wildReelSmb_ = [];
        for (i = 0; i < 5; i++) {
            wildReelSmb_[i] = [];
            expWildPos_[i]=[];
            for (a = 0; a < 3; a++) {
                wildReelSmb_[i][a] = {};
                expWildPos_[i][a]=false;
            }
        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);

        if(rollBack){
            soundManager_.playSound("stickyWild"+(freeSpinsManager_.getIsInFs()==true)?"Fs":"");
        }
    }

    wildClass_.resetWilds=function () {
        //FS END, restore the wild icons if there and remove wild animations
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            wildReelSmb_[i] = [];
            expWildPos_[i]=[];
            if (wildReelSmb_[i] != null) {
                for (var a = 0; a < 3; a++) {
                    wildReelSmb_[i][a] = {};
                    expWildPos_[i][a]=false;
                    if (wildReelSmb_[i][a].anim != undefined) {
                        if(wildReelSmb_[i][a].anim.bgAnim)wildReelSmb_[i][a].anim.bgAnim=null;
                        wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim);
                        wildReelSmb_[i][a].anim=null;
                    }
                    if (wildReelSmb_[i][a].simbolReference != undefined) {
                        wildReelSmb_[i][a].simbolReference.visible = true;
                    }
                    wildReelSmb_[i][a].special=[];
                }
            }

        }

        //removing
        for (var a in wildClassObject_.mainGroup_.children) {
            wildClassObject_.mainGroup_.remove(wildClassObject_.mainGroup_.children[a]);
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
            TweenMax.to(wildReelSmb_[reel][smb].anim.scale,.2 ,{x:1.2,y:1.2,Ease:Sine.EaseInOut,onComplete:scaleBack_,onCompleteParams:[wildReelSmb_[reel][smb].anim]})
        }
    }


    function scaleBack_(anim){
        TweenMax.to(anim.scale,.3,{delay:.2,x:1.15,y:1.15,onComplete:riScaleBack_,onCompleteParams:[anim]})
    }

    function scaleBack1_(anim){
        TweenMax.to(anim.scale,.3,{delay:.2,x:1.15,y:1.15,onComplete:riScaleBack1_,onCompleteParams:[anim]})
    }

    function riScaleBack_(anim){
        TweenMax.to(anim.scale,.3,{delay:.2,x:1,y:1,onComplete:scaleBack1_,onCompleteParams:[anim]})
    }

    function riScaleBack1_(anim){
        TweenMax.to(anim.scale,.3,{delay:.2,x:1,y:1,onCompleteParams:[anim]})
    }


    wildClass_.resumeWildReel=function(){
        /*
 var index = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();
        var positions=[];
        positions[0]=[];
        positions[1]=[];
        positions[2]=[];
        indexFlower_=0;
        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for  (var a =0;a<3 ;a++){
                    if (wildReelSmb_[i][a].special == undefined) wildReelSmb_[i][a].special = [];
                    if ([10].indexOf(resumeJson[i].smb[a].smb)>=0) {

                        var obj={};
                        obj.pos=i +"-"+a;
                        var smbIndex = (a == 0) ? 3 : (a == 1) ? 2 : (a == 2) ? 1 : 0;
                        obj.order=Number(resumeJson[i].smb[a].special.split(",")[1]);
                        var num=Number(resumeJson[i].smb[a].special.split(",")[0]);
                        positions[num].push(obj);

                    }
                }
            }


            for (var a = 0; a < 3; a++) {
                positions[a].sort(function (a, b) {
                    return a.order - b.order;
                })

            }
            for (var aa = 0; aa < 3; aa++) {
                if (positions[aa].length>0) {
                    var i = positions[aa].split("-")[0];
                    var a = positions[aa].split("-")[1];
                    var smbIndex = (a == 0) ? 3 : (a == 1) ? 2 : (a == 2) ? 1 : 0;
                    var smb_ = spinManager_.getReels()[i].getRealPosSmb(a);
                    smb_.visible = false;
                    smb_ = spinManager_.getReels()[i].getSymbol(smbIndex);
                    smb_.visible = false;
                    var anim = (indexFlower_ % 2 == 0) ? "animWb10" : "animWr10";
                    indexFlower_++;
                    wildReelSmb_[i][a].simbolReference = reels[i].getSymbol(smbIndex);
                    wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x, wildReelSmb_[i][a].simbolReference.y, anim);
                    wildReelSmb_[i][a].anim.animations.add("anim");
                    wildReelSmb_[i][a].anim.animations.play("anim", 48, false);
                    wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                    wildReelSmb_[i][a].special.push(resumeJson[i].smb[a].special != "n/a" ? resumeJson[i].smb[a].special : "done");
                    wildClassObject_.mainGroup_.add(wildReelSmb_[i][a].anim);
                    expWildPos_[i][a] = true;
                }
            }

        }
        gameClass_.setStickyWildSimbs(wildReelSmb_);
        indexFlower_=0;
         */










        var index = 0;
        var wilSimbsNum_=0;
        var reels=spinManager_.getReels();

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for  (var a =0;a<3 ;a++){
                    if (wildReelSmb_[i][a].special == undefined) wildReelSmb_[i][a].special = [];
                    if ([10].indexOf(resumeJson[i].smb[a].smb)>=0) {
                        var smb_ = spinManager_.getReels()[i].getRealPosSmb(a);
                        smb_.visible=false;

                        smb_ = spinManager_.getReels()[i].getSymbol(a);
                        smb_.visible=false;

                        wildReelSmb_[i][a].simbolReference=reels[i].getSymbol(a);
                        wildReelSmb_[i][a].anim = game_.add.sprite(wildReelSmb_[i][a].simbolReference.x , wildReelSmb_[i][a].simbolReference.y , "animWb10");
                        wildReelSmb_[i][a].anim.animations.add("anim");
                        wildReelSmb_[i][a].anim.animations.play("anim", 48, false);
                        wildReelSmb_[i][a].anim.anchor.set(.5, .5);
                        wildReelSmb_[i][a].special.push(resumeJson[i].smb[a].special!="n/a"?resumeJson[i].smb[a].special:"done");
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