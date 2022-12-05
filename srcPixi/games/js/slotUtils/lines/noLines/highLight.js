/**
 * KiS Framework, Created by Fabry on 08/04/2016.
 */
function HighLight(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var animGroup_;
    var coinWinGroup_;
    var coinWinTxt_;
    var winEventManager_;
    var winSmb_;
    var iconsInterval_ = 100;
    var iRecursive;
    var bCompleted = true;
    var over = false;
    var substArr = [];

    function initClass_() {
        animGroup_ = displayManager_.getGroup("wins");
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        coinWinTxt_ = displayManager_.getText("lineWin");
        winEventManager_ = new EventManager();
    }

    function intSubstArra_() {
        substArr = [];
        for (var r = 0; r < ReelConfig.numReels; r++) {
            substArr[r] = [];
            for (var i = 0; i < ReelConfig.numIcons; i++) {
                substArr[r][i] = null;
            }
        }
    }

    function prepareWinnings_(winSmb) {
        bCompleted=false;
        winEventManager_.clearEvt();
        winSmb_ = winSmb;
        intSubstArra_();
        changeAllHL_(.6);
        lineWinAmtManager_.prepareWinnings();
        for (var line in winSmb_) {
            if (winSmb_[line] != undefined) {
                for (var b in winSmb_[line].simbolReference) {
                    //winSmb_[line].simbolReference[b].tint = "#FFFFFF";
                    hlSmb([line, b]);
                }
            }
        }
    }

    function clearLine_() {
        var reels = spinManager_.getReels();
        lineWinAmtManager_.clear();
        //clear all paylines showing animation and start to drop win amount over the win amount main field
        clearInterval(iRecursive);
        winEventManager_.clearEvt();

        if (winSmb_ != null) {
            for (var r = 0; r < ReelConfig.numReels; r++) {
                for (var i = 1; i <= ReelConfig.numIcons; i++) {
                    if (substArr[r][i] != null) {
                        animGroup_.remove(substArr[r][i], true);
                        substArr[r][i] = null;
                        reels[r].getSymbol(i).visible = true;
                    }
                }
            }
        }
        winSmb_=null;
        changeAllHL_(1);
        buttonHlOff_();
        bCompleted=true;
    }

    function changeAllHL_(alpha) {
        var reels = spinManager_.getReels()
        for (var a in reels) {
            for (var s = 1; s <= 3; s++) {
                //reels[a].getSymbol(s).tint = "#CCCCCC";
                reels[a].getSymbol(s).alpha = alpha;
            }
        }
    }

    function showLine_() {
        var index = 0;
        lineWinAmtManager_.showLine();
        changeAllHL_(.6);
        for (var line in winSmb_) {
            if (winSmb_[line] != undefined) {
                hlButton_(line);
                for (var b in winSmb_[line].simbolReference) {
                    hlSmb([line, b]);
                }
            }
        }

        iRecursive = setTimeout(showEachLine_, 1500,[true]);

        // alpha on all simbols
        //hl the ones of the current paylines, with a timeout from left to right
        // on the last paying simbol central win amount start to grow
    }

    function showEachLine_(param) {
        var first=param[0];

        bCompleted=true;
        var index = 0;
        lineWinAmtManager_.clearBetweenLine();
        winEventManager_.clearEvt();
        for (var line in winSmb_) {
            winEventManager_.addEvent(changeAllHL_, 70, [.6]);
            winEventManager_.addEvent(buttonHlOff_,0);
            if (winSmb_[line] != undefined) {
                winEventManager_.addEvent(hlButton_,0,line);
                for (var b in winSmb_[line].simbolReference) {
                    winEventManager_.addEvent(hlSmb, iconsInterval_, [line, b]);
                }
                winEventManager_.addEvent(showAmtWin, 0, [line, winSmb_[line],first]);
                winEventManager_.addEvent(restCoins_, 1500, [line]);
            }
        }
        winEventManager_.addEvent(showEachLine_, 600, [false]);
        winEventManager_.triggerEvt();
    }

    function showAmtWin(par) {
        lineWinAmtManager_.showWins(par);
    }

    function hlSmb(par) {
        if (over)return;
        var line = par[0];
        var a = par[1];

        winSmb_[line].simbolReference[a].alpha = 1;
        if (game.cache.checkImageKey("anim" + winSmb_[line].smbNum[a]) == true) {
            if (substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]] == null) {
                substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]] = game_.add.sprite(winSmb_[line].pos[a].x, winSmb_[line].pos[a].y, "anim" + winSmb_[line].smbNum[a]);
                substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]].animations.add("anim");
                substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]].width = ReelConfig.icon.width;
                substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]].height = ReelConfig.icon.height;
                animGroup_.add(substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]]);
            }
            lineWinAmtManager_.moveWinAmountPosition([winSmb_[line].pos[a].x,winSmb_[line].pos[a].y,winSmb_[line].smbNum[a]]);
            substArr[winSmb_[line].reel[a]][winSmb_[line].icon[a]].animations.play("anim", 24, false, true, restoreIcon_, [line, a]);//todo parametric loop
            winSmb_[line].simbolReference[a].visible = false;
        }
    }

    function restoreIcon_(par) {
        winSmb_[par[0]].simbolReference[par[1]].visible = true;
        winSmb_[par[0]].simbolReference[par[1]].alpha = 1;
        substArr[winSmb_[par[0]].reel[par[1]]][winSmb_[par[0]].icon[par[1]]] = null;
    }

    function hlButton_(line){
        if (over)return;
        var btn =gameClass_.getLineButton(line);

        for (a in btn){
            if(btn[a]!=undefined) {
                btn[a].getButton().tint = 0x62e515;
                btn[a].getButton().children[0].fill = "#ffffff";
            }
        }
    }

    function buttonHlOff_(line){
        if (over)return;
        var btn =gameClass_.getLineButtons();
        for (a in btn){
            for (var b in btn[a]){
                if(btn[a]!=undefined && btn[a][b]!=undefined) {
                    btn[a][b].getButton().tint = 0xffffff;
                    btn[a][b].getButton().children[0].fill = displayManager.groups.buttons["line" + b].text.fill; //lineConfig.line.lines[b].color;
                }
            }
        }
    }

    function clearOverLine_(){
        var reels = spinManager_.getReels();
        lineWinAmtManager_.clear();
        //clear all paylines showing animation and start to drop win amount over the win amount main field
        clearInterval(iRecursive);
        winEventManager_.clearEvt();

        if (winSmb_ != null) {
            for (var r = 0; r < ReelConfig.numReels; r++) {
                for (var i = 1; i <= ReelConfig.numIcons; i++) {
                    if (substArr[r][i] != null) {
                        animGroup_.remove(substArr[r][i], true);
                        substArr[r][i] = null;
                        reels[r].getSymbol(i).visible = true;
                    }
                }
            }
        }

        changeAllHL_(1);
        over=false;
        showEachLine_([true]);
        buttonHlOff_();
    }

    function showStaticLine_(line, smb) {
        // alpha on all simbols
        //hl the ones of the current paylines, in the same time
        lineWinAmtManager_.clear();
        winEventManager_.clearEvt();
        var reels = spinManager_.getReels();
        var index=0;
        changeAllHL_(.3);
        hlButton_(line);
        for (var s in lineConfig.line.lines[line].smb) {
            reels[index].getSymbol((Number(lineConfig.line.lines[line].smb[s])+1)).alpha=1;
            index++;
        }

        if(winSmb_!=null && winSmb_[line]!=null)showAmtWin([line,winSmb_[line].winAmount]);
        over=true;
    }

    function clearLineAfterValue_() {
        clearLine_();
        // switch simbol off after win central win amount reaches the end value
    }


    function getInterruptedWinAnim_() {
        return !bCompleted;
    }

    function restCoins_(par) {
        lineWinAmtManager_.clearBetweenLine();
    }

    var me = {
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearOverLine:clearOverLine_,
        showLine: showLine_,
        showStaticLine: showStaticLine_,
        clearLineAfterValue: clearLineAfterValue_,
        buttonHlOff: buttonHlOff_,
        getInterruptedWinAnim: getInterruptedWinAnim_

    }
    initClass_();
    return me;
    l
}