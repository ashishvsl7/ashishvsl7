/**
 * KiS Framework, Created by Fabry on 17/03/2016.
 */
function FsMultScatter(gameRef,gameClass,num){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var triggerNum_ = num;
    var mainGroup_;
    var scope=this;

    function initClass_(){
        mainGroup_=displayManager_.getGroup("scatter");
    }

    function showScatter_(obj,smb){
        //start scatter animation
        soundManager_.playSound("scatterWin");
        obj.smb=smb;
        if (game.cache.checkImageKey("animScatter_"+triggerNum_) == true) {
            var s = game_.add.sprite(smb.x, smb.y, "animScatter_"+triggerNum_);
            s.anchor.set(.5,.5);
            s.animations.add("anim");
            s.animations.play("anim", 24, false,true,cbEndAnim,obj);//todo parametric loop
            mainGroup_.add(s);
            smb.visible=false;
        }else{
            cbEndAnim(obj);
        }
    }

    function clearScatter_() {
        
    }

    function cbEndAnim(obj){
        //called after scatter animation starts the winning display
        var amt= obj.amt/obj.num;
        if (balanceManager_.getShowIncredits()==true)amt=amt/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();

        var msg="x" + obj.mult;
        var msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(amt,Util.getNubersOfDecimal());
        var txt = new  Phaser.BitmapText(game_, obj.smb.x , obj.smb.y,"multiBmpFont",msg ,40,"center");
        var txt1 = new  Phaser.BitmapText(game_, obj.smb.x , obj.smb.y+40,"bmpFont",msg1 ,27,"center");
        txt.alpha=0;
        txt.anchor.set(.5,.5);
        mainGroup_.add(txt);

        txt1.alpha=0;
        txt1.anchor.set(.5,.5);
        mainGroup_.add(txt1);

        obj.smb.visible=true;
        obj.smb.alpha=1;
        TweenMax.to(txt,.2,{alpha:1});
        TweenMax.to(txt.scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt]});

        TweenMax.to(txt1,.2,{alpha:1});
        TweenMax.to(txt1.scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt1]});

    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        freeSpinsManager_.updateFreeSpinsMult();
        freeSpinsManager_.updateFreeSpinsTotWon();
        TweenMax.to(txt,2,{alpha:0,y:txt.y-200,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }

    var me={
        showScatter:showScatter_,
        clearScatter:clearScatter_
    }
    
    initClass_();
    return me;

}