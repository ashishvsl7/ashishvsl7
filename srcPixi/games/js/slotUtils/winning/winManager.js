function WinManager(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var winSmb_ = [];
    var winSmbTemp=[];
    var fsSmb_ = {};
    var wildReelSmb_ = [];
    var scatterSmb_ = [];
    var scatterNormalSmb_ = [];
    var bonusSmb_ = [];
    var winAmount_=0;
    var winAmountCash_=0;
    var bonusAmountCash_=0;
    var currentMult_=0;
    var lineAmount_=0;
    var lineAmountCash_=0;
    var jpotWinAmount_=0;
    var jpotWinAmountCash_=0;
    var scatterWinAmount_=0;
    var scatterWinAmountCash_=0;
    var group_;
    var groupFs_;
    var groupWildReel_;
    var mainGroup_;
    var bonusNum_ = [];
    var fsNum_ = 0;
    var scatterNum_ = 0;
    var wilSimbsNum_ = 0;
    var jpotSimbsNum_ = 0;
    var numWinning = 0;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("wins");

        for (var i = 0; i < 7; i++) {
            wildReelSmb_[i]={};
        }
    }

    function evaluate_(reels) {
        //fake, to be removed or modify. keep the winSmb object
        var i;
        var win = spinManager_.getWinResp();
        var ret = false;

        bonusAmountCash_=0;
        winAmountCash_= (win.total!=null)?win.total:0;
        lineAmountCash_ =(win.lineWin!=null)?win.lineWin:0;
        currentMult_=(win.multiplier!=null)?win.multiplier:1;

        if (win.total!=null && win.total>0){
            winAmount_ =win.total / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
            lineAmount_ = win.lineWin / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }else {
            winAmount_="0.00";
            lineAmount_="0.00";
        }

        scatterWinAmount_ = (win.scatter!=null)?win.scatter:0;
        jpotWinAmount_ = (win.jackpot!=null)?win.jackpot:0;
        fsNum_ = 0;
        scatterNum_ = 0;
        wilSimbsNum_ = 0;
        jpotSimbsNum_ = 0;
        winSmb_ = [];

        fsSmb_.simbolReference = [];
        fsSmb_.smbNum = [];
        fsSmb_.pos = [];
        fsSmb_.anim = [];

        for (i = 0; i < reels.length; i++) {
            wildReelSmb_[i].simbolReference = [];
            wildReelSmb_[i].substOnreel = [];
            wildReelSmb_[i].smbNum = [];
            wildReelSmb_[i].pos = [];
            wildReelSmb_[i].reel = [];
            if (wildReelSmb_[i].anim == undefined) wildReelSmb_[i].anim = [];
            if (wildReelSmb_[i].sticky == undefined)wildReelSmb_[i].sticky = 0;
        }

        scatterSmb_= [];
        scatterNormalSmb_=[];

        bonusSmb_=[];

        if (freeSpinsManager_ != null) {
            //fs
            for (var i = 0; i < reels.length; i++) {
                for (var a = 1; a <= 3; a++) {
                    if (reels[i].getIconNum(a) == freeSpinsManager_.getTriggerIcon()) {
                        fsSmb_.smbNum.push(freeSpinsManager_.getTriggerIcon());
                        fsSmb_.simbolReference.push(reels[i].getSymbol(a));
                        fsSmb_.pos.push(reels[i].getPos(a));
                        fsNum_++;
                    }
                }
            }
        }

        if (scatterManager_ != null) {
            //scatterNormalSmb_
            for (var i = 0; i < reels.length; i++) {
                for (var a = 0; a <= 3; a++) {
                    if (reels[i].getIconNum(a) == scatterManager_.getTriggerIcon()) {
                        scatterNormalSmb_.push(reels[i].getSymbol(a));
                    }
                }
            }
        }

        if (wildManager_ != null && ReelConfig.wildReelOrigin!=undefined) {
            //wild on bottom smb for wild reel
            for (i = 0; i < reels.length; i++) {
                a = ReelConfig.wildReelOrigin;
                if (spinManager_.getSpinReelResp().reel[i]!= undefined && wildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb)>=0  && wildManager_ != null) {
                    if ((gameParams.gameOriginalID !="7027" || gameParams.gameOriginalID !="7127" ||  gameParams.gameOriginalID !="7227" || spinManager_.getSpinReelResp().reel[i].smb[a].smb==11) &&  ReelConfig.wildReelAnim!=undefined)a=Math.min(ReelConfig.wildReelAnim,spinManager_.getSpinReelResp().reel[i].smb.length-1);
                    wildReelSmb_[i].smbNum.push(wildManager_.getTriggerIcon());
                    wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
                    wildReelSmb_[i].pos.push(reels[i].getPos(a));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                    wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(3));
                    if (wildReelSmb_[i].sticky=="0")wilSimbsNum_++;
                    wildReelSmb_[i].sticky=((spinManager_.getSpinReelResp().reel[i].smb[a].stick!=null)?"1":"0");

                }
            }
        }
        if (conf!=undefined && !isBrandedMw() ) {//win combination games don't have valid lines
            for (var jj in win.line) {
                ret = true;
                var j = win.line[jj].id;
                var obj = {};
                var smbWinNum = 0;
                obj.line = win.line[jj].id;

                obj.winAmountCash = win.line[jj].amt;
                obj.winAmount = win.line[jj].amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();

                var conf = win.line[jj].config.split("");
                obj.reel = [];
                obj.icon = [];
                obj.anim = [];
                obj.substOnreel = [];
                obj.smbNum = [];
                obj.realSmbNum = [];
                obj.pos = [];
                obj.simbolReference = [];

                for (var i = 0; i < conf.length; i++) {
                    if (conf[i] == "1") {
                        smbWinNum++;
                        obj.reel.push(i);
                        obj.icon.push(Number(lineConfig.line.lines[j].config[i]));
                        obj.smbNum.push(reels[i].getIconNum((Number(lineConfig.line.lines[j].config[i]))));
                        var smbIndex = Number(lineConfig.line.lines[j].config[i]);
                        obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[smbIndex].smb);
                        obj.simbolReference.push(reels[i].getSymbol((Number(lineConfig.line.lines[j].config[i]))));
                        obj.pos.push(reels[i].getPos((Number(lineConfig.line.lines[j].config[i]))));
                        //jackpots
                    }
                }
                obj.smbWinNum = smbWinNum;
                winSmb_.push(obj);
            }
        }

        if (jackpotManager_ != null)jackpotManager_.setJackpotLevel(numWinning);
        if (gameParams.gameOriginalID !="7015" && spinManager_.getFsResp()!=null && spinManager_.getFsResp().won>0 && spinManager_.getFsResp().type!="tumble" && spinManager_.getFsResp().type!="convert" && spinManager_.getFsResp().type!="respin"){
            if ((gameParams.gameOriginalID =="7019" || gameParams.gameOriginalID =="7034") && freeSpinsManager_.getIsInFs() )return ret;//MWJ ,rwmw, fsWon hadled separately for additional FS
            if (gameParams.gameOriginalID =="7021" && freeSpinsManager_.getIsInFs()  ){
                if (spinManager_.getFsResp().object.wonAdditionalFromWilds!="0")return ret;
            }//BG, fsWon hadled separately for additional FS

            var wonFs_ = (spinManager_.getFsResp().object != undefined && spinManager_.getFsResp().object.totalFSAwareded!= undefined) ? spinManager_.getFsResp().object.totalFSAwareded : 0;
            freeSpinsManager_.fsWon(spinManager_.getFsResp().won,wonFs_);
        }

        return ret;
    }

    function getFsNum_() {
        return fsNum_;
    }

    function showFs_() {
        //todo soundManager_.playSound("winSound");
        groupFs_ = game_.add.group();
        for (var a in fsSmb_.smbNum) {
            if (game.cache.checkImageKey("anim" + fsSmb_.smbNum[a]) == true) {
                fsSmb_.anim[a] = game_.add.sprite(fsSmb_.pos[a].x, fsSmb_.pos[a].y, "anim" + fsSmb_.smbNum[a]);
                fsSmb_.anim[a].animations.add("anim");
                fsSmb_.anim[a].animations.play("anim", 24, false);//todo parametric loop
                fsSmb_.anim[a].width = ReelConfig.icon.width;
                fsSmb_.anim[a].height = ReelConfig.icon.height;
                groupFs_.add(fsSmb_.anim[a]);
            }
        }
        mainGroup_.add(groupFs_);
        setTimeout(clearFsWin_, lineConfig.win.duration);
    }

    function showAllWinHL_() {
        var index=0;
        soundManager_.playSound("winSound");
        group_ = game_.add.group();
        mainGroup_.add(group_);
        for (var i in winSmb_) {
            if(winSmb_[i]!=undefined) {
                for (var a in winSmb_[i].smbNum) {
                    setTimeout(startAnimSmb_, index*200,i,a,group_);
                    index++;
                }
            }
        }
        setTimeout(clearWin_,index*200+Number( lineConfig.win.duration));
    }

    function startAnimSmb_(i,a,group_){
        if (game.cache.checkImageKey("anim" + winSmb_[i].smbNum[a]) == true) {
            winSmb_[i].anim[a] = game_.add.sprite(winSmb_[i].pos[a].x, winSmb_[i].pos[a].y, "anim" + winSmb_[i].smbNum[a]);
            winSmb_[i].anim[a].animations.add("anim");
            winSmb_[i].anim[a].animations.play("anim", 24, false,true,restoreIcon_,winSmb_[i].simbolReference[a]);//todo parametric loop
            winSmb_[i].anim[a].width = ReelConfig.icon.width;
            winSmb_[i].anim[a].height = ReelConfig.icon.height;
            winSmb_[i].simbolReference[a].visible=false;
            group_.add(winSmb_[i].anim[a]);
        }
    }

    function restoreIcon_(par){
        par.visible=true;
    }

    function clearFsWin_() {
        if (fsSmb_ != null && fsSmb_.length == 1)return;
        for (var a in fsSmb_)
            if (fsSmb_[a].destroy != null)
                fsSmb_[a].destroy();
        if (groupFs_)groupFs_.destroy();
    }

    function clearWin_() {
        displayManager_.getGroup("wins").visible=false;


        for (var i in winSmb_) {
            if (winSmb_[i] != undefined) {
                for (var b in winSmb_[i].anim){
                    if(winSmb_[i].anim[b]) {
                       // winSmb_[i].anim[b].anims.pause();
                        winSmb_[i].anim[b].visible = false;
                       // winSmb_[i].anim[b].destroy();
                        if (winSmb_[i].simbolReference[b]!=undefined)winSmb_[i].simbolReference[b].visible = true;
                    }
                }
                for (var a in winSmb_[i]) {
                    if (winSmb_[i][a].destroy != null)
                        winSmb_[i][a].destroy();
                }
            }
        }
        for (var i in winSmbTemp) {
            if (winSmbTemp[i] != undefined) {
                for (var s in winSmbTemp[i]) {
                    for (var b in winSmbTemp[i][s].anim) {
                        if (winSmbTemp[i][s].anim[b]) {
                           // winSmbTemp[i][s].anim[b].anims.pause();
                            winSmbTemp[i][s].anim[b].visible = false;
                            //winSmbTemp[i][s].anim[b].destroy();
                           if ( winSmbTemp[i][s].simbolReference[b]!= undefined) winSmbTemp[i][s].simbolReference[b].visible = true;
                        }
                    }
                }
            }
        }
        removeAllChildren(displayManager_.getGroup("wins"));//temporary
        if (group_)group_.destroy();
    }

    function toggleCredits_(){
    }
    
    function getAllFS_(){
        return fsSmb_;
    }
    
    function getWin_(line) {
        return winSmb_[line];
    }

    function getAllWinsSmbWinNumAggregated_() {
        if (lineAmount_>0){
            winSmb_.sort(function(a, b){
                return b.smbWinNum-a.smbWinNum
            })
        }

        winSmbTemp=[];
        var prevNum=0;
        var prevSmbNum=-1;
        var prevObj={};
        for ( var a in winSmb_) {
            var smbWinNum = winSmb_[a].smbWinNum;
            if (prevNum != smbWinNum || prevSmbNum!=winSmb_[a].smbNum[0]) {
                prevNum = smbWinNum;
                prevSmbNum=winSmb_[a].smbNum[0];
                if (winSmbTemp[prevNum]==undefined){
                    winSmbTemp[prevNum]=[];
                }
                if (winSmbTemp[prevNum][prevSmbNum]==undefined){
                    winSmbTemp[prevNum][prevSmbNum]={};
                    winSmbTemp[prevNum][prevSmbNum].winAmount=0;
                    winSmbTemp[prevNum][prevSmbNum].winAmountCash=0;
                    winSmbTemp[prevNum][prevSmbNum].line=[];
                    winSmbTemp[prevNum][prevSmbNum].lineSmbNum=[];
                    winSmbTemp[prevNum][prevSmbNum].simbolReference=[];
                    winSmbTemp[prevNum][prevSmbNum].reel=[];
                    winSmbTemp[prevNum][prevSmbNum].smbNum=[];
                    winSmbTemp[prevNum][prevSmbNum].realSmbNum=[];
                    winSmbTemp[prevNum][prevSmbNum].icon=[];
                    winSmbTemp[prevNum][prevSmbNum].pos=[];
                    winSmbTemp[prevNum][prevSmbNum].anim=[];
                    winSmbTemp[prevNum][prevSmbNum].substOnreel=[];
                }
                winSmbTemp[prevNum][prevSmbNum].refer=winSmb_[a];
                winSmb_[a].refer=winSmbTemp[prevNum][prevSmbNum];


            }
            prevObj = winSmb_[a];
            winSmbTemp[prevNum][prevSmbNum].winAmount += Number(prevObj.winAmount);
            winSmbTemp[prevNum][prevSmbNum].winAmountCash += Number(prevObj.winAmountCash);
            winSmbTemp[prevNum][prevSmbNum].line.push(prevObj.line);
            winSmbTemp[prevNum][prevSmbNum].lineSmbNum.push(prevObj.smbNum[0]);
            for (var b=0; b< prevObj.simbolReference.length;b++) {
                if (winSmbTemp[prevNum][prevSmbNum].simbolReference.indexOf(prevObj.simbolReference[b]) < 0) {
                    winSmbTemp[prevNum][prevSmbNum].simbolReference.push(prevObj.simbolReference[b]);
                    winSmbTemp[prevNum][prevSmbNum].reel.push(prevObj.reel[b]);
                    winSmbTemp[prevNum][prevSmbNum].smbNum.push(prevObj.smbNum[b]);
                    winSmbTemp[prevNum][prevSmbNum].realSmbNum.push(prevObj.realSmbNum[b]);
                    winSmbTemp[prevNum][prevSmbNum].icon.push(prevObj.icon[b]);
                    winSmbTemp[prevNum][prevSmbNum].pos.push(prevObj.pos[b]);
                    winSmbTemp[prevNum][prevSmbNum].substOnreel.push(prevObj.substOnreel[b]);
                }
            }
        }
        return winSmbTemp;
    }    
    
    function getAllWinsSorted_(type) {
         if (winAmount_>0){
             if (type=="desc") {
                 winSmb_.sort(function (b, a) {
                     return b.smbWinNum + a.smbWinNum
                 })
             }else{
                 winSmb_.sort(function (a, b) {
                     return b.smbWinNum - a.smbWinNum
                 })
             }
         }
        return winSmb_;
    }

    function getAllWinsSortedByAmt_(type) {
        if (winAmount_>0){
            if (type=="desc") {
                winSmb_.sort(function (b, a) {
                    return b.winAmount + a.winAmount
                })
            }else{
                winSmb_.sort(function (a, b) {
                    return b.winAmount - a.winAmount
                })
            }
        }
        return winSmb_;
    }

    function getTumblingWinningSymbols_() {
        var reels=spinManager_.getReels();
        var obj = {};
        var smbWinNum = 0;

        winSmb_=[];
        obj.reel = [];
        obj.icon = [];
        obj.anim = [];
        obj.substOnreel = [];
        obj.smbNum = [];
        obj.pos = [];
        obj.realSmbNum = [];
        obj.simbolReference = [];
        obj.tumble = [];
        obj.split=[];
        obj.splitOrigin=[];
        obj.stick=[];
        obj.winAmountCash = winAmountCash_;
        obj.winAmount = winAmount_;
        for (i = 0; i < reels.length; i++) {
            if (spinManager_.getSpinReelResp().reel[i]!= undefined) {
                var icons = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" || isBrandedMw()) ? spinManager_.getSpinReelResp().reel[i].smb.length : ReelConfig.numIcons;
                for (var a = 0; a < icons; a++) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[a] != undefined) {


                        var aa = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033"  || gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026"  || gameParams.gameOriginalID == "7027"   || gameParams.gameOriginalID == "7127"   || gameParams.gameOriginalID == "7227"  || gameParams.gameOriginalID == "7031"  || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? (spinManager_.getSpinReelResp().reel[i].smb.length - 1) - a + ReelConfig.numIconsOnBottom : a;
                        if (gameParams.gameOriginalID == "7027"){
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("tumble") >= 0)
                            {
                                obj.reel.push(i);
                                obj.icon.push(aa);
                                obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                //obj.tumble.push(true);
                                obj.pos.push(reels[i].getPos(aa));
                                var smb = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" ||  gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026"  || gameParams.gameOriginalID == "7027"  || gameParams.gameOriginalID == "7127"  || gameParams.gameOriginalID == "7227"  || gameParams.gameOriginalID == "7031" || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? reels[i].getArr()[aa] : reels[i].getSymbol(aa);
                                smb.attributes = spinManager_.getSpinReelResp().reel[i].smb[a];
                                obj.split.push(spinManager_.getSpinReelResp().reel[i].smb[a].split!=undefined)?spinManager_.getSpinReelResp().reel[i].smb[a].split:false;
                                obj.splitOrigin.push(spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin!=undefined)?spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin:-1;
                                obj.tumble.push(spinManager_.getSpinReelResp().reel[i].smb[a].tumble!=undefined)?spinManager_.getSpinReelResp().reel[i].smb[a].tumble:false;
                                obj.stick.push(spinManager_.getSpinReelResp().reel[i].smb[a].stick!=undefined)?spinManager_.getSpinReelResp().reel[i].smb[a].stick:false;
                                obj.simbolReference.push(smb);
                            }
                        }else {
                            if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "tumble" && spinManager_.getSpinReelResp().reel[i].smb[a].smb != 14) {//todo implement better smb 14 check
                                obj.reel.push(i);
                                obj.icon.push(aa);
                                obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.tumble.push(true);
                                obj.pos.push(reels[i].getPos(aa));
                                var smb = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" || gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026" || gameParams.gameOriginalID == "7027" || gameParams.gameOriginalID == "7107" || gameParams.gameOriginalID == "7227"|| gameParams.gameOriginalID == "7031" || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? reels[i].getArr()[aa] : reels[i].getSymbol(aa);
                                smb.attributes = spinManager_.getSpinReelResp().reel[i].smb[a];
                                obj.split.push(spinManager_.getSpinReelResp().reel[i].smb[a].split != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].split : false;
                                obj.splitOrigin.push(spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin : -1;
                                obj.simbolReference.push(smb);
                            } else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("convert") >= 0 || spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("explode") >= 0) {
                                obj.reel.push(i);
                                obj.icon.push(aa);
                                obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.tumble.push(false);
                                obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].special.split(",")[1]);
                                obj.pos.push(reels[i].getPos(aa));
                                var smb = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019"  || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" || gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026" || gameParams.gameOriginalID == "7027" || gameParams.gameOriginalID == "7127" || gameParams.gameOriginalID == "7227" || gameParams.gameOriginalID == "7031"  || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? reels[i].getArr()[aa] : reels[i].getSymbol(aa);
                                obj.split.push(spinManager_.getSpinReelResp().reel[i].smb[a].split != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].split : false;
                                obj.splitOrigin.push(spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin : -1;
                                obj.simbolReference.push(smb);
                            } else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("explode") >= 0) {
                                obj.reel.push(i);
                                obj.icon.push(aa);
                                obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].special.split(",")[1]);
                                obj.tumble.push(false);
                                obj.pos.push(reels[i].getPos(aa));
                                var smb = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" || gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026" || gameParams.gameOriginalID == "7027" || gameParams.gameOriginalID == "7127" || gameParams.gameOriginalID == "7227"  || gameParams.gameOriginalID == "7031"  || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? reels[i].getArr()[aa] : reels[i].getSymbol(aa);
                                obj.split.push(spinManager_.getSpinReelResp().reel[i].smb[a].split != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].split : false;
                                obj.splitOrigin.push(spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin : -1;
                                obj.simbolReference.push(smb);
                            } else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0 && spinManager_.getSpinReelResp().reel[i].smb[a].smb != 13) {
                                obj.reel.push(i);
                                obj.icon.push(aa);
                                obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                                obj.tumble.push(false);
                                obj.pos.push(reels[i].getPos(aa));
                                var smb = (gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019" || gameParams.gameOriginalID == "7029" || gameParams.gameOriginalID == "7023" || gameParams.gameOriginalID == "7033" || gameParams.gameOriginalID == "7034" || gameParams.gameOriginalID == "7026" || gameParams.gameOriginalID == "7027"  || gameParams.gameOriginalID == "7127"  || gameParams.gameOriginalID == "7227" || gameParams.gameOriginalID == "7031"  || gameParams.gameOriginalID == "7031" || isBrandedMw()) ? reels[i].getArr()[aa] : reels[i].getSymbol(aa);
                                obj.split.push(spinManager_.getSpinReelResp().reel[i].smb[a].split != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].split : false;
                                obj.splitOrigin.push(spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin != undefined) ? spinManager_.getSpinReelResp().reel[i].smb[a].splitOrigin : -1;
                                obj.simbolReference.push(smb);
                            }
                        }
                    }
                }
            }
        }
        winSmb_.push(obj);

        return winSmb_;
    }

    function getResumeTumblingWinningSymbols_() {
        var reels=scommunicationManager_.getResumeStatus().reels;
        var obj = {};
        var smbWinNum = 0;

        winSmb_=[];
        obj.reel = [];
        obj.icon = [];
        obj.anim = [];
        obj.substOnreel = [];
        obj.smbNum = [];
        obj.pos = [];
        obj.realSmbNum = [];
        obj.simbolReference = [];
        obj.winAmountCash = winAmountCash_;
        obj.winAmount = winAmount_;

        for (i = 0; i < reels.length; i++) {
            if (spinManager_.getSpinReelResp().reel[i]!= undefined) {
                for (var a = 0; a < ReelConfig.numIcons; a++) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "tumble") {
                        var aa = 0 + ReelConfig.numIconsOnBottom;
                        if (a == 0) aa = 3 + ReelConfig.numIconsOnBottom;
                        if (a == 1) aa = 2 + ReelConfig.numIconsOnBottom;
                        if (a == 2) aa = 1 + ReelConfig.numIconsOnBottom;

                        obj.reel.push(i);
                        obj.icon.push(aa);
                        obj.smbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                        obj.realSmbNum.push(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                        obj.pos.push(reels[i].getPos(aa));
                        obj.simbolReference.push(reels[i].getArr()[aa]);


                    }
                }
            }
        }
        winSmb_.push(obj);

        return winSmb_;

    }

    var me = {
        getFsNum: getFsNum_,
        clearWin: clearWin_,
        evaluate: evaluate_,
        showAllWinHL: showAllWinHL_,
        getWin: getWin_,
        getAllWinsSorted: getAllWinsSorted_,
        getAllWinsSmbWinNumAggregated:getAllWinsSmbWinNumAggregated_,
        getAllWinsSortedByAmt:getAllWinsSortedByAmt_,
        getAllFS:getAllFS_,
        showFs: showFs_,
        toggleCredits:toggleCredits_,
        getTumblingWinningSymbols:getTumblingWinningSymbols_,
        getResumeTumblingWinningSymbols_:getResumeTumblingWinningSymbols_,
        updateWinAmt: function (amt) {
            winAmount_=amt;
        },
        getLineWinAmt: function () {
            if (balanceManager_.getShowIncredits()==false) {
                return lineAmountCash_;
            }else{
                return lineAmount_;
            }
        },
        getWinAmt: function () {
            if (balanceManager_.getShowIncredits()==false) {
                return winAmountCash_;
            }else{
                return winAmount_;
            }
        },
        resetWinAmt:function (){
            winAmountCash_=0;
            winAmount_=0;
            bonusAmountCash_=0;
        },
        setWinAmountBonus:function(value){
            bonusAmountCash_=value;
        },
        getWinAmtCash:function (){
            return winAmountCash_ +bonusAmountCash_;
        },
        setTry:function(val){
            winAmountCash_=val;
        },
        getGroup: function () {
            return group_;
        },
        getConsecutiveWinnings: function () {
            return numWinning;
        },
        setWildSimbs: function (val) {
            wildReelSmb_=val;
        },
        getWildNum: function () {
            return wilSimbsNum_;
        },
        getWildSimbs: function () {
            return wildReelSmb_;
        },
        getNormalScatterSimbs:function(){
            return scatterNormalSmb_;
        },
        getScatterSimbs: function () {
            return scatterSmb_;
        },
        getFsSimbs: function () {
            return scatterSmb_;
        },
        getScatterWinAmt: function () {
            return scatterWinAmount_;
        },
        getJpotIcons: function () {
            return jpotSimbsNum_;
        },
        addScatterWinSmb:function (obj){
            scatterSmb_.push(obj);
        },
        addFsWinSmb:function (obj){
            scatterSmb_.push(obj);
        },
        getMultiplier:function(){
            return currentMult_;
        }

    }
    initClass_();
    return me;
}
