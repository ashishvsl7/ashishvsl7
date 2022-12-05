/**
 * KiS Framework, Created by Fabry on 23/05/2018.
 */

function Expanding4BeastsStickyWild(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_ = Object.create(new Wild(gameRef, gameClass));
    var wildClassObject_ = wildClass_.__proto__;
    var wildReelSmb_;
    var showWildReel=false;
    var expWildPos_=[];
    var revAnimFrameSeq_=[];
    var resume_=false;
    var turtle1_;
    var turtle2_;
    var animSeq_=[];
    //dragon
    animSeq_[1]=[];
    animSeq_[1].type="all";
    animSeq_[1].fade=true;
    animSeq_[1][1]={
        "x":"0",
        "y":"0"
    }

    animSeq_[1][2]={
        "x":"0",
        "y":"-1"
    }
    animSeq_[1][3]={
        "x":"0",
        "y":"-2"
    }

    //tiger
    animSeq_[2]=[];
    animSeq_[2].type="all";
    animSeq_[2].fade=false;
    animSeq_[2][1]={
        "x":"0",
        "y":"0"
    };
    animSeq_[2][2]={
        "x":"1",
        "y":"0"
    };
    animSeq_[2][3]={
        "x":"2",
        "y":"0"
    };

    //turtoise
    animSeq_[3]=[];
    animSeq_[3].type="sequence";
    animSeq_[3].fade=true;
    animSeq_[3][1]= {
        "x":"0",
        "y":"0"
    }
    animSeq_[3][2]= {
        "x":"0",
        "y":"0"
    }

    //phoenix
    animSeq_[4]=[];
    animSeq_[4].type="all";
    animSeq_[4].fade=false;
    animSeq_[4][1]={//center
        "x":"0",
        "y":"0"
    }

    animSeq_[4][2]={//top
        "x":"0",
        "y":"-1"
    }

    animSeq_[4][3]={//right
        "x":"1",
        "y":"0"
    }

    animSeq_[4][4]={//left
        "x":"-1",
        "y":"0"
    }

    animSeq_[4][5]={//bottom
        "x":"0",
        "y":"1"
    }




    wildReelSmb_ = [];
    for (i = 0; i < 5; i++) {
        wildReelSmb_[i] = [];
        expWildPos_[i]=[];
        for (a = 0; a < 4; a++) {
            wildReelSmb_[i][a] = {};
            expWildPos_[i][a]=false;
        }
    }

    wildClass_.showWild = function (wild,res) {
        var play_ = false;
        var x;
        var y;
        var xOrigin;
        var yOrigin;
        var g;

        if (res!=null)resume_=res;
        wildReelSmb_=wild;

        for (var i = 0; i < spinManager_.getReels().length; i++) {
            for (var a =0;a<4;a++){
                for (var ss in wildReelSmb_[i][a].special) {
                    var sp = wildReelSmb_[i][a].special[ss];
                    if (sp!=null && sp != undefined && sp == "origin" ) {

                        if (wildReelSmb_[i][a].anim != undefined) {
                            wildReelSmb_[i][a].anim.visible=false;
                            wildClassObject_.mainGroup_.remove(wildReelSmb_[i][a].anim);
                            wildReelSmb_[i][a].anim = null;
                        }
                        if (wildReelSmb_[i][a].simbolReference.fake==false) {
                            var smb = spinManager_.getReels()[i].getRealPosSmb(wildReelSmb_[i][a].simbolReference.smbToRemove);
                            if (smb) smb.visible = false;

                            smb = spinManager_.getReels()[i].getSymbol(wildReelSmb_[i][a].simbolReference.indexToRemove);
                            if (smb) smb.visible = false;
                        }
                        wildReelSmb_[i][a].anim=[];
                        g= game_.add.group();
                        for (var s=1;s<animSeq_[wildReelSmb_[i][a].fsType].length;s++) {
                            if (wildReelSmb_[i][a].portal!=null) {
                                xOrigin=wildReelSmb_[i][a].portal.x;
                                yOrigin=wildReelSmb_[i][a].portal.y;
                            }else{
                                xOrigin = wildReelSmb_[i][a].simbolReference.x;
                                yOrigin = wildReelSmb_[i][a].simbolReference.y;
                            }

                            x=wildReelSmb_[i][a].simbolReference.x +(animSeq_[wildReelSmb_[i][a].fsType][s].x*  ReelConfig.reel.deltaX);
                            y=wildReelSmb_[i][a].simbolReference.y+(animSeq_[wildReelSmb_[i][a].fsType][s].y* ReelConfig.reel.deltaY);
                            wildReelSmb_[i][a].fade=animSeq_[wildReelSmb_[i][a].fsType].fade;
                            if ((x>350 && x<910 && y>150 && y<600)||wildReelSmb_[i][a].fsType==3 ) {
                                if (wildReelSmb_[i][a].fsType!=3) {
                                    wildReelSmb_[i][a].anim[s] = game_.add.sprite(xOrigin, yOrigin, "animW" + wildReelSmb_[i][a].fsType + "_" + s);
                                    wildReelSmb_[i][a].anim[s].anchor.set(.5, .5);
                                    wildReelSmb_[i][a].anim[s].alpha = 1;
                                    wildReelSmb_[i][a].anim[s].visible = true;
                                    g.add(wildReelSmb_[i][a].anim[s]);

                                    wildReelSmb_[i][a].anim[s].scale.x = 0;
                                    wildReelSmb_[i][a].anim[s].scale.y = 0;

                                    TweenMax.to(wildReelSmb_[i][a].anim[s].scale, (!resume_)?1:.1, {
                                        x: 1,
                                        y: 1, onComplete: startMovie_, onCompleteParams: [wildReelSmb_[i][a].anim[s]]
                                    });
                                    TweenMax.to(wildReelSmb_[i][a].anim[s], (!resume_)?1:.1, {
                                        x: x,
                                        y: y
                                    });
                                    setTimeout(startTween_, (!resume_)?1000:100, wildReelSmb_[i][a].portal);
                                    wildReelSmb_[i][a].special[ss] = "placed";
                                }else{
                                    if (s==1) {
                                        wildReelSmb_[i][a].anim[s] = game_.add.sprite(xOrigin-(ReelConfig.reel.deltaX/2), yOrigin-(ReelConfig.reel.deltaX/2), "animW" + wildReelSmb_[i][a].fsType + "_" + s);
                                        wildReelSmb_[i][a].anim[s].anchor.set(.5, .5);
                                        wildReelSmb_[i][a].anim[s].alpha = 1;
                                        wildReelSmb_[i][a].anim[s].visible = true;
                                        g.add(wildReelSmb_[i][a].anim[s]);


                                        wildReelSmb_[i][a].anim[s].scale.x = 0;
                                        wildReelSmb_[i][a].anim[s].scale.y = 0;

                                        TweenMax.to(wildReelSmb_[i][a].anim[s].scale, (!resume_)?1:.1, {
                                            x: 1,
                                            y: 1,
                                            onComplete: startMovieTurtle_,
                                            onCompleteParams: [wildReelSmb_[i][a].anim[s]]
                                        });
                                        TweenMax.to(wildReelSmb_[i][a].anim[s], (!resume_)?1:.1, {
                                            x: x-(ReelConfig.reel.deltaX/2),
                                            y: y-(ReelConfig.reel.deltaX/2)
                                        });
                                        setTimeout(startTween_, (!resume_)?1000:100, wildReelSmb_[i][a].portal);
                                        turtle1_=wildReelSmb_[i][a].anim[s];
                                        wildReelSmb_[i][a].special[ss] = "placed";
                                    }else{
                                        wildReelSmb_[i][a].anim[s] = game_.add.sprite(x-(ReelConfig.reel.deltaX/2), y-(ReelConfig.reel.deltaX/2), "animW" + wildReelSmb_[i][a].fsType + "_" + s);
                                        wildReelSmb_[i][a].anim[s].anchor.set(.5, .5);
                                        wildReelSmb_[i][a].anim[s].alpha = 0;
                                        wildReelSmb_[i][a].anim[s].visible = true;
                                        g.add(wildReelSmb_[i][a].anim[s]);

                                        wildReelSmb_[i][a].anim[s].scale.x = 1;
                                        wildReelSmb_[i][a].anim[s].scale.y = 1;
                                        turtle2_=wildReelSmb_[i][a].anim[s];
                                    }
                                }
                                wildReelSmb_[i][a].anim[s].fsType=wildReelSmb_[i][a].fsType;
                            }
                        }

                        gameClass_.setStickyWildSimbs(wildReelSmb_);
                        wildReelSmb_[i][a].anim.group=g;
                        wildClassObject_.mainGroup_.add(g);
                        expWildPos_[i][a] = true;
                        showWildReel = true;

                        play_ = true;

                    }
                    soundManager_.stopSound("portalLoop");
                }
            }
        }

        // adding animation group to not substituting simbols
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            for (var a = 0; a < 4; a++) {
                for (var ss in wildReelSmb_[i][a].special) {
                    var sp = wildReelSmb_[i][a].special[ss];
                    if (sp!=null && sp != undefined && sp == "anim" ) {
                        expWildPos_[i][a] = true;
                        wildReelSmb_[i][a].special[ss] = "anim";
                        wildReelSmb_[i][a].anim={};
                        wildReelSmb_[i][a].anim.group=g;
                    }
                }
            }
        }
        if (play_)soundManager_.playSound("wild_start");

    }

    function startMovie_(obj){
        obj.animations.add("anim");
        obj.animations.play("anim", (gameClass_.getCompulsivePlayer()|| resume_) ? 48 : 24, false);
        soundManager_.playSound("wild_"+obj.fsType);
        obj.revAnimFrameSeq_=[];
        for (var b = 1; b <= obj.animations._outputFrames.length; b++) {
            if (b % 2 == 0) obj.revAnimFrameSeq_.push(b);
        }
        obj.revAnimFrameSeq_.reverse();

    }

    function startMovieTurtle_(obj){
        obj.animations.add("anim");
        obj.animations.play("anim", (gameClass_.getCompulsivePlayer()|| resume_) ? 48 : 24, false,false, continueTurtle_ );
        soundManager_.playSound("wild_"+obj.fsType);
        obj.revAnimFrameSeq_=[];
        for (var b = 1; b <= obj.animations._outputFrames.length; b++) {
            if (b % 2 == 0) obj.revAnimFrameSeq_.push(b);
        }
        obj.revAnimFrameSeq_.reverse();

    }

    function continueTurtle_(){
        turtle1_.alpha=0;
        turtle2_.alpha=1;
        turtle2_.animations.add("anim");
        turtle2_.animations.play("anim", (gameClass_.getCompulsivePlayer()|| resume_) ? 48 : 24, false);
        turtle2_.revAnimFrameSeq_=[];

        for (var b = 1; b <= turtle1_.animations._outputFrames.length; b++) {
            if (b % 2 == 0) turtle1_.revAnimFrameSeq_.push(b);
        }
        turtle1_.revAnimFrameSeq_.reverse();

    }

    function startTween_(obj){
        if (obj==null)return;
        obj.visible=false;
        obj=null;
    }

    function backWR_(obj){
        TweenMax.to(obj.scale,.2 ,{x:1,y:1,Ease:Sine.EaseOut});
    }

    function backWRXY_(obj){
        TweenMax.to(obj,.2 ,{x:obj.x+7,y:obj.y+7,Ease:Sine.EaseOut});
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
            if (wildReelSmb_[i][a].fade==true) {
                var s =par[2];
                wildReelSmb_[i][a].anim[s].visible = false;
                wildReelSmb_[i][a].anim[s] = null;
            }
        }

    }

    wildClass_.clearWild = function (wild) {
        var rollBack=false;
        wildReelSmb_=wild;
        resume_=false;
        var placed=[];

        if (freeSpinsManager_.getIsInFs()==true){
            for (var i = 0; i < spinManager_.getReels().length; i++) {
                if(wildReelSmb_[i]!=null){
                    for (var a =0;a<4;a++){
                        for (var ss in wildReelSmb_[i][a].special) {
                            if (wildReelSmb_[i][a].anim != undefined) {
                                wildReelSmb_[i][a].anim.alpha = 1;
                            }
                            if (wildReelSmb_[i][a].special[ss] == "placed") {
                                if (placed.indexOf(i.toString()+a.toString())<0) {

                                    if (wildReelSmb_[i][a].fsType!=3) {
                                        for (var s in wildReelSmb_[i][a].anim) {
                                            if (wildReelSmb_[i][a].anim[s].animations != undefined) {
                                                if (wildReelSmb_[i][a].fade==true){
                                                    TweenMax.to(wildReelSmb_[i][a].anim[s],1,{delay:1.5,alpha:0,onComplete:subst_,onCompleteParams:[i,a,s]})
                                                }else{
                                                    rollBack = true;
                                                    wildReelSmb_[i][a].anim[s].animations.add("anim", wildReelSmb_[i][a].anim[s].revAnimFrameSeq_);
                                                    wildReelSmb_[i][a].anim[s].animations.play("anim", 24, false, true, subst_, [i, a]);
                                                }

                                            }
                                        }
                                    }else{
                                        if (wildReelSmb_[i][a].fade==false){
                                            turtle2_.visible=false;
                                            turtle2_=null;
                                            turtle1_.alpha=1;
                                            if (turtle1_ != undefined) {
                                                rollBack = true;
                                                turtle1_.animations.add("anim", turtle1_.revAnimFrameSeq_);
                                                turtle1_.animations.play("anim", 24, false, true, subst_, [i, a]);
                                            }
                                            break;
                                        }else{
                                            turtle1_.visible=false;
                                            turtle1_=null;
                                            //turtle1_.alpha=1;
                                            if (turtle2_ != undefined) {
                                                TweenMax.to(turtle2_,1,{delay:1.5,alpha:0,onComplete:subst_,onCompleteParams:[i,a,s]})
                                            }

                                        }

                                    }
                                }
                            }
                            wildReelSmb_[i][a].special[ss] = "";
                        }
                    }
                }
            }
        }

        gameClass_.setStickyWildSimbs(wildReelSmb_);

        if(rollBack){
            soundManager_.playSound("wild_end");
        }
    }

    wildClass_.resetWilds=function () {
        //FS END, restore the wild icons if there and remove wild animations
        for (var i = 0; i < spinManager_.getReels().length; i++) {
            if (wildReelSmb_[i] != null) {
                for (var a = 0; a < 3; a++) {
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
        // if(wildReelSmb_[reel][smb].anim!=null ){
        //     TweenMax.to(wildReelSmb_[reel][smb].anim.group.scale, .2, {
        //         x: 1.01,
        //         y: 1.01,
        //         Ease: Sine.EaseInOut,
        //         onComplete: backWR_,
        //         onCompleteParams: [wildReelSmb_[reel][smb].anim.group]
        //     })
        //     TweenMax.to(wildReelSmb_[reel][smb].anim.group, .2, {
        //         x: wildReelSmb_[reel][smb].anim.group.x-7,
        //         y: wildReelSmb_[reel][smb].anim.group.y-7,
        //         onComplete: backWRXY_,
        //         onCompleteParams: [wildReelSmb_[reel][smb].anim.group]
        //     })
        // }
    }


    function getStickyWildNumber_() {
        var reels=communicationManager_.getResumeStatus().status.reels;
        var stickyWilSimbsNum_ = 0;
        var externalOrigin_=communicationManager_.getResumeStatus().status.origin;
        var yinYangPosition_ = (communicationManager_.getResumeStatus().status.feature==3)?1:(communicationManager_.getResumeStatus().status.feature==2)?2:(communicationManager_.getResumeStatus().status.feature==1)?3:(communicationManager_.getResumeStatus().status.feature==0)?4:-1;
        var fsType_=communicationManager_.getResumeStatus().status.fsType;
        if (externalOrigin_=="") {
            for (var i = 0; i < reels.length; i++) {
                for (var a = 0; a < 4; a++) {
                    if (wildReelSmb_[i][a].special == undefined) wildReelSmb_[i][a].special = [];
                    if ([8,9,10,11,12,13].indexOf(reels[i].smb[a].smb) >= 0 || ( reels[i].smb[a].prevSmb != undefined && [8,9,10,11,12,13].indexOf(reels[i].smb[a].prevSmb >= 0))) {
                        if (reels[i].smb[a].special == "origin") {//attach a new one only when stage 1
                            wildReelSmb_[i][a].special.push(reels[i].smb[a].special);
                            var smbIndex = a;
                            wildReelSmb_[i][a].simbolReference = (spinManager_.getReels()[i].getSymbol(smbIndex));
                            wildReelSmb_[i][a].simbolReference.fake=false;
                            wildReelSmb_[i][a].simbolReference.smbToRemove = a;
                            wildReelSmb_[i][a].simbolReference.indexToRemove = smbIndex;
                            wildReelSmb_[i][a].fsType = fsType_;
                            wildReelSmb_[i][a].portal = (freeSpinsManager_.getFsNumber() == 199) ? portal_ : null;
                            stickyWilSimbsNum_++;

                        } else {
                            var smbIndex = a;
                            wildReelSmb_[i][a].simbolReference = (spinManager_.getReels()[i].getSymbol(smbIndex));
                            wildReelSmb_[i][a].special.push("anim");
                        }
                        if ([8,9,10,11,12,13].indexOf(reels[i].smb[a].smb) >= 0 && reels[i].smb[a].special == "done") {
                            reels[i].smb[a].notShow = true;
                        }
                    }
                }
            }
        }else{
            reels=spinManager_.getReels();
            //the origin of the beast is otside of the reels
            var x= externalOrigin_.split(",")[0];
            var y =externalOrigin_.split(",")[1];
            var fakeObj={};
            if (wildReelSmb_[0][0].special == undefined) wildReelSmb_[0][0].special = [];
            wildReelSmb_[0][0].special.push("origin");

            if (x>4){//out on the right
                fakeObj.x=reels[4].getSymbol(0).x + (x-4)*  ReelConfig.reel.deltaX;
            }else if (x<0) {//out on the right
                fakeObj.x=reels[0].getSymbol(0).x + (x)*  ReelConfig.reel.deltaX;
            }else{//inside
                fakeObj.x=reels[x].getSymbol(0).x ;
            }

            var smbIndex = y;
            if (y>3){//out on the bottom
                fakeObj.y=reels[0].getSymbol(3).y + (y-3)*  ReelConfig.reel.deltaY;
            }else if (y<0) {//out on the top
                fakeObj.y=reels[0].getSymbol(0).y + (y)*  ReelConfig.reel.deltaY;
            }else{//inside
                fakeObj.y=reels[0].getSymbol(smbIndex).y ;
            }
            fakeObj.fake=true;
            wildReelSmb_[0][0].simbolReference = fakeObj;
            wildReelSmb_[0][0].fsType = fsType_;
            wildReelSmb_[0][0].portal =  null;
            stickyWilSimbsNum_++;
        }
        if (stickyWilSimbsNum_){
            resume_=true;
            gameClass_.setStickyWildSimbs(wildReelSmb_);
            wildClass_.showWild(wildReelSmb_,true);//this will unleash the beast
        }
    }



    wildClass_.resumeWildReel=function(){
        getStickyWildNumber_();
    }

    return wildClass_;

}