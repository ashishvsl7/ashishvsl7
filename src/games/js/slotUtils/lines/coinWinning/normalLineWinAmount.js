/**
 * KiS Framework, Created by Fabry on 13/05/2016.
 */

function NormalLineWinAmount(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var coinWinGroup_;
    var coinWinTxt_;
    
    function initClass_(){
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        coinWinTxt_ = displayManager_.getText("lineWin");        
    }

    function prepareWinnings_() {
        if (coinWinGroup_ != null)coinWinGroup_.visible = true;
        TweenMax.to(coinWinTxt_, 0, {y: 200, alpha: 1});
    }
    
    function clear_(){
        coinWinTxt_.setText("");
    }
    
    function clearBetweenLine_(){
        clear_();    
    }
    
    function showWins_(params){
       // if (over || params==0)return;
        var line = params[0];
        var amt = params[1].winAmount;

        if (displayManager.groups.centralLineWin.texts.lineWin.bmpFont!=null) {
            coinWinTxt_.scale.x=1;
            coinWinTxt_.scale.y=1;
            textSizeHl_();
        }else if(displayManager.groups.centralLineWin.texts.lineWin.stroke_tick) {
            coinWinTxt_.strokeThickness = displayManager.groups.centralLineWin.texts.lineWin.stroke_tick;
            textHl_();
        }

        if (amt > 0) {
            coinWinTxt_.stroke = lineManager_.getLineConfig(line).color.replace("0x", "#");
            coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(amt,Util.getNubersOfDecimal())+"  ");
        }        
    }

    function moveWinAmountPosition_(params) {
        var x=params[0];
        var y=params[1];
        coinWinTxt_.x=x+ displayManager.groups.centralLineWin.texts.lineWin.xOffset;
        coinWinTxt_.y=y+ displayManager.groups.centralLineWin.texts.lineWin.yOffset;        
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
        winAmtManager_.showWin(winManager_.getWinAmt() * balanceManager_.getCoinValue(), null, null, null);        
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