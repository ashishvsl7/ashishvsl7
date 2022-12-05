/**
 * KiS Framework, Created by Fabry on 13/05/2016.
 */

function CentralWinWithSimbols(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var coinWinGroup_;
    var smbGroup;
    var LineNumTxt_;
    var LineWinTxt_;
    var winAmt_=0;
    var substArr = [];

    function initClass_(){
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        LineNumTxt_ = displayManager_.getText("lineC");
        LineWinTxt_ = displayManager_.getText("lineCWin");
        smbGroup= game_.add.group();
        smbGroup.x= displayManager.groups.centralLineWin.xSmbBasePos;
        smbGroup.y= displayManager.groups.centralLineWin.ySmbBasePos;
        coinWinGroup_.add(smbGroup);
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

    function prepareWinnings_() {
        winAmt_=0;
        intSubstArra_();
    }

    function clearBetweenLine_(){
        clear_();
    }
    
    function clear_() {
        LineNumTxt_.setText("");
        LineWinTxt_.setText("");
        if (substArr != []){
            for (var r = 0; r < ReelConfig.numReels; r++) {
                for (var i = 1; i <= ReelConfig.numIcons; i++) {
                    if (substArr[r]!= null && substArr[r][i] != null) {
                        coinWinGroup_.remove(substArr[r][i], true);
                        substArr[r][i] = null;
                    }
                }
            }
        }
    }

    function showWins_(params){
        //=if (over || params==0)return;
        var line = params[0];
        var amt = params[1].winAmount;
        var first=params[2];
        var smbs=params[1];
        var index=0;

        if (first)winAmt_+=amt;
        for (var a in smbs.simbolReference) {
            if (game.cache.checkImageKey("anim" + smbs.smbNum[a]) == true) {
                if (substArr[smbs.reel[a]][smbs.icon[a]] == null) {
                    substArr[smbs.reel[a]][smbs.icon[a]] = game_.add.sprite(displayManager.groups.centralLineWin.xSmbBasePos + index* displayManager.groups.centralLineWin.wSmbSize , displayManager.groups.centralLineWin.ySmbBasePos, "anim" + smbs.smbNum[a]);
                    substArr[smbs.reel[a]][smbs.icon[a]].animations.add("anim");
                    substArr[smbs.reel[a]][smbs.icon[a]].width = displayManager.groups.centralLineWin.wSmbSize;
                    substArr[smbs.reel[a]][smbs.icon[a]].height = displayManager.groups.centralLineWin.hSmbSize;
                    coinWinGroup_.add(substArr[smbs.reel[a]][smbs.icon[a]]);
                    index++;
                }
                //substArr[smbs.reel[a]][smbs.icon[a]].animations.play("anim", 24, false, true, restoreIcon_, [line, a]);//todo parametric loop
            }
        }
        
        
        
        
        LineNumTxt_.setText(Translate.do("Line") + " :" + line + " = ");
        LineWinTxt_.setText(" = " +  balanceManager_.getCurrencySmb() + ""+  Util.formatNumber(amt,Util.getNubersOfDecimal()));
        winAmtManager_.changeWinValue( winAmt_);
    }

    function moveWinAmountPosition_(params) {
        //coinWinTxt_.x=x+ displayManager.groups.centralLineWin.texts.lineWin.xOffset;
        //coinWinTxt_.y=y+ displayManager.groups.centralLineWin.texts.lineWin.yOffset;
    }

    function textSizeHl_(){
        TweenMax.to(coinWinTxt_.scale,.2,{x:1.5,y:1.5,onComplete:scaleComplete_,repeat:3,yoyo:true});
    }

    function scaleComplete_(){
        TweenMax.to(coinWinTxt_.scale,.15,{x:1,y:1});
    }

    function textHl_(){
        var index=0;
        var baseSt=Number(coinWinTxt_.strokeThickness);
        for (var a=0;a<=10;a++){
            setTimeout(change_,index*26,txt,baseSt+a);
            index++;
        }
        for (a=10;a>=0;a--){
            setTimeout(change_,index*16,txt,baseSt+a);
            index++;
        }

    }

    function change_(amt){
        coinWinTxt_.strokeThickness=amt;
    }
    
    function showLine_(){
    }

    var me={
        prepareWinnings:prepareWinnings_,
        clear:clear_,
        clearBetweenLine:clearBetweenLine_,
        showWins:showWins_,
        showLine:showLine_,
        moveWinAmountPosition:moveWinAmountPosition_
    }
    initClass_();
    return me;
}