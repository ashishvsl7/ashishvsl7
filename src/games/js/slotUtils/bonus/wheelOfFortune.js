/**
 * KiS Framework, Created by Fabry on 19/02/2019.
 */
function WheelOfFortune(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var mainGroup_;
    var mainGroupObj_;
    //wheel
    var dragging_ = false;
    var button_;
    var centerBtn_;
    var skip_=false;
    var skipIndex_=false;
    var wheelObj_;
    var wheel_;
    var ind_;
    var delta_=[];
    var numIndicator_=10;
    var indicators_=[]
    var lastRotation_;
    var currentRotation_=0;
    var wheelCover_;
    var wheelBlur_;
    var dragStart_=false;
    var origY_;
    var origX_;
    var speed_;
    var hlF_=[];
    var hl_=[];
    var posButton_={}
    var side_;
    var pX_;
    var pY_;
    var enable_=false;
    var drawnPosition_;
    var wheelConfiguration_=[];
    var wheelLevel_=0;
    var wheelCallBack_;
    var check_;
    var autoSpin_=false;
    var autoSpinFlag_=false;
    var distance=0;
    var wheelBg_=null;
    var center_=null;

    function initClass_(){
    }

    function autoCb_(){
         autoSpinFlag_=check_.state;
         if (enable_==true){
             speed_=2;
             side_=1;
             if (Util.getRandomInt(1,10)<5)speed_=-2;
             start();
         }
    }

    function wheelOfFortuneBuild_(drag,level){
        wheelLevel_=level;
        autoSpin_= (autoSpinFlag_==true)?true:(autoPlayManager_.getIsInAutoPlay() )?true:false;
        if (wheelLevel_==0){
            mainGroup_=displayManager_.getGroup("wheelOfFortuneBaseGame");
            mainGroupObj_=displayManager.groups.wheelOfFortuneBaseGame;
            wheelBg_=null;
            if(autoSpin_==false)gameClass_.startRandomMessages();
        }else{
            mainGroup_=displayManager_.getGroup("wheelOfFortuneFS");
            mainGroupObj_=displayManager.groups.wheelOfFortuneFS;
            wheelBg_=mainGroup_.fsWbg.children[0];
            wheelBg_.finalYPos=mainGroupObj_.graphAsset.fsWbg.finalYPos;
        }
        if (center_!=null){
            wheelObj_.remove(center_);
        }
        hlF_=[];
        hl_=[];
        wheelObj_= game_.add.group();
        displayManager_.getGroup("wheelOfFortuneFS").remove(check_);
        displayManager_.getGroup("wheelOfFortuneBaseGame").remove(check_);
        check_ = new PHASER_checkbox(mainGroup_, mainGroupObj_.checkbox.x, mainGroupObj_.checkbox.y, {
            text: Translate.do(mainGroupObj_.checkbox.text),
            style: {fill: mainGroupObj_.checkbox.color, font: "20px Arial"}
        }, mainGroupObj_.checkbox.name, autoSpin_, autoCb_);
        check_.x=mainGroupObj_.checkbox.x;
        check_.y=mainGroupObj_.checkbox.y;
        check_.state= autoSpin_;
        check_.visible=true;

        if (wheel_!= undefined && wheel_.children.length>0){
            for (var i=0;i<wheel_.children.length;i++){
                wheel_.children[i].kill();
            }
        }

        wheel_ =new Phaser.Sprite(game_,mainGroupObj_.wheelX,mainGroupObj_.wheelY,"wheel_base_"+wheelLevel_);
        wheel_.anchor.set(.5,.5);
        wheel_.angle=0;

        wheelCover_ =new Phaser.Sprite(game_,mainGroupObj_.wheelX,mainGroupObj_.wheelY,"wheel_cover_"+wheelLevel_);
        wheelCover_.anchor.set(.5,.5);
        wheelCover_.angle=0;

        posButton_.x=wheelCover_.x;
        posButton_.y=wheelCover_.y;
        wheelCover_.x=wheelCover_.x-(wheelCover_.width/2);
        wheelCover_.y=wheelCover_.y-(wheelCover_.height/2);

        ind_ =new Phaser.Sprite(game_,239,239-(wheelCover_.height/2),"arrow");
        ind_.anchor.set(0.5,0.3);

        wheelObj_.add(wheel_);
        wheelObj_.add(ind_);
        wheelObj_.sendToBack(wheel_);
        //blur
        wheelBlur_ =new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"blurWheel_"+wheelLevel_);
        wheelBlur_.anchor.set(.5,.5);
        wheelBlur_.angle=0;
        wheelBlur_.alpha=0;


        if (button_!=null){
            button_.x= wheel_.x;
            button_.y=wheel_.y;
        }
        //
        // wheelConfiguration_[0][0]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[0][0].color="pink";
        // wheelConfiguration_[0][1]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[0][1].color="green";
        // wheelConfiguration_[0][2]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[0][2].color="yellow";
        // wheelConfiguration_[0][3]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[0][3].color="pink";
        // wheelConfiguration_[0][4]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[0][4].color="blue";
        // wheelConfiguration_[0][5]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_purple"); // FS
        // wheelConfiguration_[0][5].color="purple";
        // wheelConfiguration_[0][6]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[0][6].color="yellow";
        // wheelConfiguration_[0][7]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[0][7].color="pink";
        // wheelConfiguration_[0][8]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[0][8].color="green";
        // wheelConfiguration_[0][9]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[0][9].color="blue";
        // //wheel prizes configuration - FS level 1
        // wheelConfiguration_[1]=[];
        // wheelConfiguration_[1][0]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[1][0].color="pink";
        // wheelConfiguration_[1][1]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[1][1].color="green";
        // wheelConfiguration_[1][2]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_red"); // Upgrade
        // wheelConfiguration_[1][2].color="red";
        // wheelConfiguration_[1][3]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[1][3].color="pink";
        // wheelConfiguration_[1][4]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[1][4].color="blue";
        // wheelConfiguration_[1][5]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[1][5].color="yellow";
        // wheelConfiguration_[1][6]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[1][6].color="green";
        // wheelConfiguration_[1][7]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[1][7].color="pink";
        // wheelConfiguration_[1][8]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_purple"); // Retrigger
        // wheelConfiguration_[1][8].color="purple";
        // wheelConfiguration_[1][9]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[1][9].color="blue";
        // //wheel prizes configration - FS level 2
        // wheelConfiguration_[2]=[];
        // wheelConfiguration_[2][0]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[2][0].color="pink";
        // wheelConfiguration_[2][1]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[2][1].color="green";
        // wheelConfiguration_[2][2]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_red"); // Upgrade
        // wheelConfiguration_[2][2].color="red";
        // wheelConfiguration_[2][3]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[2][3].color="pink";
        // wheelConfiguration_[2][4]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[2][4].color="blue";
        // wheelConfiguration_[2][5]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[2][5].color="yellow";
        // wheelConfiguration_[2][6]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[2][6].color="green";
        // wheelConfiguration_[2][7]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[2][7].color="pink";
        // wheelConfiguration_[2][8]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_purple"); // Retrigger
        // wheelConfiguration_[2][8].color="purple";
        // wheelConfiguration_[2][9]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[2][9].color="blue";
        // //wheel prizes configration - FS level 3
        // wheelConfiguration_[3]=[];
        // wheelConfiguration_[3][0]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[3][0].color="pink";
        // wheelConfiguration_[3][1]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[3][1].color="green";
        // wheelConfiguration_[3][2]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[3][2].color="yellow";
        // wheelConfiguration_[3][3]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_pink"); // Wild
        // wheelConfiguration_[3][3].color="pink";
        // wheelConfiguration_[3][4]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[3][4].color="blue";
        // wheelConfiguration_[3][5]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_yellow"); // Wild Reel
        // wheelConfiguration_[3][5].color="yellow";
        // wheelConfiguration_[3][6]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_green"); // Low scatter
        // wheelConfiguration_[3][6].color="green";
        // wheelConfiguration_[3][7]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_red"); // 1000 Coins;
        // wheelConfiguration_[3][7].color="red";
        // wheelConfiguration_[3][8]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_purple"); // Retrigger
        // wheelConfiguration_[3][8].color="purple";
        // wheelConfiguration_[3][9]=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,"wheel_bg_blue");  // High Scatter
        // wheelConfiguration_[3][9].color="blue";



        //wheel prizes configuration - base game
        wheelConfiguration_[0]=[];
        wheelConfiguration_[0][0]={};
        wheelConfiguration_[0][0].color="pink";
        wheelConfiguration_[0][1]={};
        wheelConfiguration_[0][1].color="green";
        wheelConfiguration_[0][2]={};
        wheelConfiguration_[0][2].color="yellow";
        wheelConfiguration_[0][3]={};
        wheelConfiguration_[0][3].color="pink";
        wheelConfiguration_[0][4]={};
        wheelConfiguration_[0][4].color="green";//was blue
        wheelConfiguration_[0][5]={};
        wheelConfiguration_[0][5].color="purple";
        wheelConfiguration_[0][6]={};
        wheelConfiguration_[0][6].color="yellow";
        wheelConfiguration_[0][7]={};
        wheelConfiguration_[0][7].color="pink";
        wheelConfiguration_[0][8]={};
        wheelConfiguration_[0][8].color="green";
        wheelConfiguration_[0][9]={};
        wheelConfiguration_[0][9].color="blue";
        //wheel prizes configuration - FS level 1
        wheelConfiguration_[1]=[];
        wheelConfiguration_[1][0]={};
        wheelConfiguration_[1][0].color="pink";
        wheelConfiguration_[1][1]={};
        wheelConfiguration_[1][1].color="green";
        wheelConfiguration_[1][2]={};
        wheelConfiguration_[1][2].color="red";
        wheelConfiguration_[1][3]={};
        wheelConfiguration_[1][3].color="pink";
        wheelConfiguration_[1][4]={};
        wheelConfiguration_[1][4].color="green";//was blue
        wheelConfiguration_[1][5]={};
        wheelConfiguration_[1][5].color="yellow";
        wheelConfiguration_[1][6]={};
        wheelConfiguration_[1][6].color="green";
        wheelConfiguration_[1][7]={};
        wheelConfiguration_[1][7].color="red";
        wheelConfiguration_[1][8]={};
        wheelConfiguration_[1][8].color="purple";
        wheelConfiguration_[1][9]={};
        wheelConfiguration_[1][9].color="blue";
        //wheel prizes configration - FS level 2
        wheelConfiguration_[2]=[];
        wheelConfiguration_[2][0]={};
        wheelConfiguration_[2][0].color="pink";
        wheelConfiguration_[2][1]={};
        wheelConfiguration_[2][1].color="green";
        wheelConfiguration_[2][2]={};
        wheelConfiguration_[2][2].color="red";
        wheelConfiguration_[2][3]={};
        wheelConfiguration_[2][3].color="pink";
        wheelConfiguration_[2][4]={};
        wheelConfiguration_[2][4].color="green";//was blue
        wheelConfiguration_[2][5]={};
        wheelConfiguration_[2][5].color="yellow";
        wheelConfiguration_[2][6]={};
        wheelConfiguration_[2][6].color="green";
        wheelConfiguration_[2][7]={};
        wheelConfiguration_[2][7].color="pink";
        wheelConfiguration_[2][8]={};
        wheelConfiguration_[2][8].color="purple";
        wheelConfiguration_[2][9]={};
        wheelConfiguration_[2][9].color="blue";
        //wheel prizes configration - FS level 3
        wheelConfiguration_[3]=[];
        wheelConfiguration_[3][0]={};
        wheelConfiguration_[3][0].color="pink";
        wheelConfiguration_[3][1]={};
        wheelConfiguration_[3][1].color="green";
        wheelConfiguration_[3][2]={};
        wheelConfiguration_[3][2].color="yellow";
        wheelConfiguration_[3][3]={};
        wheelConfiguration_[3][3].color="pink";
        wheelConfiguration_[3][4]={};
        wheelConfiguration_[3][4].color="blue2";//was blue now 0
        wheelConfiguration_[3][5]={};
        wheelConfiguration_[3][5].color="yellow";
        wheelConfiguration_[3][6]={};
        wheelConfiguration_[3][6].color="green";
        wheelConfiguration_[3][7]={};
        wheelConfiguration_[3][7].color="red";
        wheelConfiguration_[3][8]={};
        wheelConfiguration_[3][8].color="purple";
        wheelConfiguration_[3][9]={};
        wheelConfiguration_[3][9].color="blue";


        wheel_.addChild(wheelCover_);

        //prizes
        for (var i=0;i<numIndicator_;i++){
            //prizes
            delta_[i]=((360/numIndicator_)*i);
            indicators_[i]=0;
            var prize=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y,  wheelConfiguration_[wheelLevel_][i].color +"_"+wheelLevel_);
            prize.anchor.set(.5,.95);
            prize.angle=(36*i);
            hl_.push(prize);
            wheel_.addChild(prize);

            //win HL frame
            var whlf=new Phaser.Sprite(game_,wheelCover_.x ,wheelCover_.y, "winframeHl");
            whlf.alpha=0;
            whlf.animations.add("anim");
            whlf.anchor.set(.5,.95);
            whlf.angle=(36*i);
            hlF_.push(whlf);
            wheel_.addChild(whlf);
        }
        wheel_.addChild(wheelBlur_);

        if (wheelBg_==null) {
            if (drag && autoSpin_ == false) {   //enable dragging the wheel
                button_ = new Phaser.Button(game_, wheel_.x, wheel_.y);
                button_.anchor.set(.5, .5);
                button_.width = 500;
                button_.height = 500;
                button_.inputEnabled = true;

                button_.input.enableDrag();
                button_.events.onDragStart.add(reelDown_);
                button_.events.onDragStop.add(reelGo_)
                button_.events.onDragUpdate.add(keepControl_);
                button_.input.allowHorizontalDrag = false;
                wheelObj_.add(button_);
            } else {
                wheelObj_.remove(button_);
                button_ = null;
            }
            //start button
            for (var a in mainGroupObj_.buttons) {
                centerBtn_ = new Phaser.Button(game_, mainGroupObj_.buttons[a].x, mainGroupObj_.buttons[a].y, mainGroupObj_.buttons[a].name, me[mainGroupObj_.buttons[a].evt], this, 1, 2, 0, 0);
                centerBtn_.anchor.set(0.5, 0.5);
                centerBtn_.enabled=true;
                wheelObj_.add(centerBtn_);
            }
        }else{
            autoSpin_=true;
            center_ =new Phaser.Sprite(game_,239,239,"goldCenter");
            center_.anchor.set(.5,.5);
            center_.angle=0;
            wheelObj_.add(center_);
        }


        currentRotation_=0;
        wheel_.angle=currentRotation_;


        wheelObj_.x=mainGroupObj_.restX;
        wheelObj_.y=mainGroupObj_.restY;
        wheelObj_.scale.x=mainGroupObj_.scale;
        wheelObj_.scale.y=mainGroupObj_.scale;
        wheelObj_.angle=mainGroupObj_.angle;

        mainGroup_.addChild(wheelObj_);
    }

    function doOk_(btn) {
        if (btn.enabled==true) {
            btn.enabled = false;
            speed_ = 2;
            side_ = 1;
            if (Util.getRandomInt(1, 10) < 5) speed_ = -2;
            start();
        }
    }

    function btnStart_(){
        start();
    }

    function onComplete() {
        skip_ = false;
        setTimeout(resetWheel_,(gameClass_.getCompulsivePlayer())?500:700);
        if (wheelConfiguration_[wheelLevel_][drawnPosition_].color.indexOf("green",0)<0) {
            TweenMax.to(hl_[drawnPosition_].scale,.3,{x:1.05,y:1.05,yoyo:true,repeat:2});
            hlF_[drawnPosition_].alpha = 1;
            hlF_[drawnPosition_].animations.play("anim", 24, 3, true);
        }
        soundManager_.playSound( wheelConfiguration_[wheelLevel_][drawnPosition_].color +"_"+wheelLevel_);
    }

    function resetWheel_(){
        check_.y=-100;
        if (wheelBg_!=null){
            //FS
            TweenMax.to(wheelObj_ ,.5,{delay:(gameClass_.getCompulsivePlayer())?.5:.7,x:mainGroupObj_.restX,y:mainGroupObj_.restY,onComplete:showPrizeWin_});
            TweenMax.to(wheelBg_ ,.5,{delay:(gameClass_.getCompulsivePlayer())?.5:.7,y:mainGroupObj_.restY});
        }else{
            TweenMax.to(wheelObj_ ,.5,{delay:(gameClass_.getCompulsivePlayer())?.5:.7,x:mainGroupObj_.restX,y:mainGroupObj_.restY,onComplete:showPrizeWin_,ease:Back.easeIn});
        }
    }

    function showPrizeWin_() {
        var n= hl_[drawnPosition_];
        var show=false;

        n.x=370;
        n.y=450;
        n.angle=0;
        n.anchor.set(.5,.5);

        displayManager_.getText("wofValue1").setText("");

        if (wheelLevel_ == 0 && (drawnPosition_ == 1 || drawnPosition_ == 4 || drawnPosition_ == 8 || drawnPosition_ == 9)) {
            //scatter prices
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a Scatter prize"));
            var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt, 2);
            displayManager_.getText("wofValue1").setText(balanceManager_.getCurrencySmb() + "" + amt);
            if (Number(amt) > 0) show = true;
            show=false//removed messages
        }else if (wheelLevel_ == 1 && (drawnPosition_ == 1 || drawnPosition_ == 4 || drawnPosition_ == 6 || drawnPosition_ == 9)) {
            //scatter prices
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a Scatter prize"));
            var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt, 2);
            displayManager_.getText("wofValue1").setText(balanceManager_.getCurrencySmb() + "" + amt);
            if (Number(amt) > 0) show = true;
            show=false//removed messages
        }else if (wheelLevel_ == 2 && (drawnPosition_ == 1 || drawnPosition_ == 4 || drawnPosition_ == 6 || drawnPosition_ == 9)) {
            //scatter prices
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a Scatter prize"));
            var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt, 2);
            displayManager_.getText("wofValue1").setText(balanceManager_.getCurrencySmb() + "" + amt);
            if (Number(amt) > 0) show = true;
            show=false//removed messages
        }else if (wheelLevel_ == 3 && (drawnPosition_ == 1 || drawnPosition_ == 4 || drawnPosition_ == 6 || drawnPosition_ == 7 || drawnPosition_ == 9)) {
            //scatter prices
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a Scatter prize"));
            var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt, 2);
            displayManager_.getText("wofValue1").setText(balanceManager_.getCurrencySmb() + "" + amt);
            if (Number(amt) > 0) show = true;
            if (Number(amt) > 320){
                n.scale.x=.9;
                n.scale.y=.9;
            }
            show=false//removed messages
        } else if (wheelLevel_ > 0 && drawnPosition_ == 8) { //retrigger
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("3 Additional Free Spin"));
            displayManager_.getText("wofValue1").setText("");
            setTimeout(freeSpinsManager_.addFs,500,-1);
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            soundManager_.playSound("winPanel");
        } else if (wheelLevel_ > 0 && wheelLevel_ < 3 && drawnPosition_ == 2 ) { //upgrade
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a wheel of fortune"));
            displayManager_.getText("wofValue1").setText(Translate.do("upgrade to better prizes"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            setTimeout(freeSpinsManager_.addFs,500,-1);
            show=true;
            soundManager_.playSound("winPanel");
        } else if (wheelLevel_ ==1  && drawnPosition_ == 7 ) { //upgrade
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("a wheel of fortune"));
            displayManager_.getText("wofValue1").setText(Translate.do("upgrade to better prizes"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            setTimeout(freeSpinsManager_.addFs,500,-1);
            show=true;
            soundManager_.playSound("winPanel");
        } else if (wheelLevel_ == 0 && drawnPosition_ == 5) { //FS
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("6"));
            displayManager_.getText("wofValue1").setText(Translate.do("Free Spins"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            freeSpinsManager_.fsWon(6);
            show=true;
            soundManager_.playSound("winPanel");
        } else if ( wheelLevel_ == 0 && (drawnPosition_ == 0 || drawnPosition_ == 3 || drawnPosition_ == 7)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if (wheelLevel_ == 0 && (drawnPosition_ == 2 || drawnPosition_ == 6)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional expanding wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if ( wheelLevel_ == 1 && (drawnPosition_ == 0 || drawnPosition_ == 3 || drawnPosition_ == 7)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if (wheelLevel_ == 1 && (drawnPosition_ == 5)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional expanding wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if ( wheelLevel_ == 2 && (drawnPosition_ == 0 || drawnPosition_ == 3 || drawnPosition_ == 7)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if (wheelLevel_ == 2 && (drawnPosition_ == 2 || drawnPosition_ == 5 || drawnPosition_ == 6)) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional expanding wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if ( wheelLevel_ == 3 && (drawnPosition_ == 0 || drawnPosition_ == 3 )) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        } else if (wheelLevel_ == 3 && (drawnPosition_ == 2 || drawnPosition_ == 5 )) {
            displayManager_.getText("wofWLabel").setText(Translate.do("You won"));
            displayManager_.getText("wofWLabel1").setText(Translate.do("additional expanding wilds"));
            n.scale.x=1.5;
            n.scale.y=1.5;
            show=true;
            show=false//removed messages
        }

        if(show){
            if (wheelLevel_>0 ||(wheelLevel_==0 && drawnPosition_ == 5)){
                displayManager_.getGroup("wheelPrizeWonPanel").panelChar.children[0].visible=false;
                displayManager_.getGroup("wheelPrizeWonPanel").panelChar1.children[0].visible=true;
            }else{
                displayManager_.getGroup("wheelPrizeWonPanel").panelChar.children[0].visible=true;
                displayManager_.getGroup("wheelPrizeWonPanel").panelChar1.children[0].visible=false;
            }
            displayManager_.getGroup("wheelPrizeWonPanel").addChild(n);
            displayManager_.getGroup("wheelPrizeWonPanel").y = 0;
            displayManager_.getGroup("wheelPrizeWonPanel").alpha = 0;
            displayManager_.getGroup("wheelPrizeWonPanel").visible = true;


            setTimeout(wheelCallBack_, (gameClass_.getCompulsivePlayer())?2100:2500);
            TweenMax.to(displayManager_.getGroup("wheelPrizeWonPanel"), .5, {alpha: 1});
            TweenMax.to(displayManager_.getGroup("wheelPrizeWonPanel"), .5, {
                delay: (gameClass_.getCompulsivePlayer())?2:2.6,
                alpha: 0,
                onComplete: moveWin_,
                onCompleteParams: [n]
            });

        }else{
            wheelCallBack_();
        }

    }

    function moveWin_(n){
        displayManager_.getGroup("wheelPrizeWonPanel").y=-1000;
        displayManager_.getGroup("wheelPrizeWonPanel").remove(n);
    }

    function onUpdate(){
        currentRotation_ = (Math.round(wheel_.angle)>0)? Math.round(wheel_.angle): 180+ (180-Math.abs(Math.round(wheel_.angle)) );

        if (side_>0){
            if(Math.abs(Math.round(currentRotation_+25) % (360/numIndicator_)) <= 7 && skipIndex_==false) {
                skipIndex_=true;
                //var tw2 = game.add.tween(ind_).to({angle: -20}, 200, Phaser.Easing.Linear.None, true);
                //tw2.onComplete.add(onComplete2, this);
            }
        }else{
            if(Math.abs(Math.round(currentRotation_-25) % (360/numIndicator_)) <= 7 && skipIndex_==false) {
                skipIndex_=true;
                //var tw2 = game.add.tween(ind_).to({angle: 20}, 200, Phaser.Easing.Linear.None, true);
                //tw2.onComplete.add(onComplete2, this);
            }
        }
        lastRotation_ = currentRotation_;
    }

    function onComplete2(p) {
        var tw2 = game.add.tween(ind_).to({angle: 0}, 150, Phaser.Easing.Linear.None, true);
        tw2.onComplete.add(onComplete3, this);
    }

    function onComplete3(p) {
        skipIndex_=false;
    }


    function keepControl_(dd){
        if(dragStart_==false )return;
        if (skip_)return;
        origY_=pY_;
        var targetAngle = game.math.angleBetween(
            pX_,pY_,
            this.game.input.activePointer.x, this.game.input.activePointer.y) ;

        if(game_.input.activePointer.isDown && dragging_)
        {
            if (origX_<640) {
                wheel_.angle = wheel_.angle - targetAngle;
            }else{
                wheel_.angle = wheel_.angle + targetAngle;
            }
            distance= game.math.distance(
            pX_,pY_,
            this.game.input.activePointer.x, this.game.input.activePointer.y);
            speed_= Math.min(Math.ceil(distance/15)+1,6);
        }

        if(game_.input.activePointer.isDown && !dragging_)
        {
            dragging_ = true;
        }
        if(!game.input.activePointer.isDown && dragging_)
        {
            dragging_ = false;
        }
        pX_= this.game.input.activePointer.x;
        pY_= this.game.input.activePointer.y;

    }

    function reelGo_(dd) {
        if (distance==0)return;
        dragStart_=false;
        if (origX_<640) {
            if (this.game.input.activePointer.y - origY_ > 0) {
                side_ = -1;
            } else {
                side_ = 1;
            }
        }else{
            if (this.game.input.activePointer.y - origY_ > 0) {
                side_ = 1;
            } else {
                side_ = -1;
            }
        }
        start();
    }

    function reelDown_(dd) {
        pX_= this.game.input.activePointer.x;
        pY_= this.game.input.activePointer.y;
        origX_=pX_;
        dragStart_=true;
    }

    function start(){
        if(button_!=null)button_.visible = false;
        if(centerBtn_!=null)centerBtn_.enabled = false;
        if (enable_==false)return;
        enable_=false;
        gameClass_.stopRandomMessages();
        framework.updateSmallMessageText( Translate.do("Good luck"));

        if (side_==undefined){
            speed_=2;
        }
        skip_=true;
        for (var i=0;i<=numIndicator_;i++){
            indicators_[i]=0;
        }
        if (wheelBg_!=null){//FS
            setTimeout(setBlur_,100);
            var totTime=(gameClass_.getCompulsivePlayer())?mainGroupObj_.time: (gameClass_.getCompulsivePlayer())?1500:2000;
            tw=game.add.tween(wheel_).to({ angle: side_*(360*speed_)+ delta_[numIndicator_-1-drawnPosition_]+(360/numIndicator_) +Util.getRandomInt(-12,12)}, totTime, Phaser.Easing.Quartic.Out, true);
            setTimeout(removeBlur_,(totTime*1/2));
        }else {

            setTimeout(setBlur_,100);
            var totTime=( (gameClass_.getCompulsivePlayer()) ? mainGroupObj_.time : (mainGroupObj_.time * 2) + (mainGroupObj_.time / 2 * speed_));
            setTimeout(removeBlur_,(totTime*1/2));
            if (autoSpinFlag_==false){

                setTimeout (soundManager_.playSound, 0,"drumLoop",10);
                setTimeout (soundManager_.stopSound, totTime-200,"drumLoop");
                setTimeout (soundManager_.playSound, totTime-200,"drumFinal");

            }
            tw = game.add.tween(wheel_).to({angle: side_ * (360 * speed_) + delta_[numIndicator_ - 1 - drawnPosition_] + (360 / numIndicator_) + Util.getRandomInt(-12, 12)}, totTime, Phaser.Easing.Quartic.Out, true);
        }
        tw.onUpdateCallback(onUpdate, this);
        tw.onComplete.add(onComplete, this);
    }

    function setBlur_(){
        wheelBlur_.alpha=1;
    }

    function removeBlur_(){
        TweenMax.to(wheelBlur_ ,.3,{alpha:0});
    }

    function showWheel_(params){
        var time=params[0];
        var num=params[1];
        var callBack=params[2];

        if (wheelBg_!=null){
            //FS
            TweenMax.to(wheelObj_ ,time,{x:mainGroupObj_.activeX,y:mainGroupObj_.activeY});
            TweenMax.to(wheelBg_ ,time,{y:wheelBg_.finalYPos});
        }else{
            TweenMax.to(wheelObj_ ,time,{x:mainGroupObj_.activeX,y:mainGroupObj_.activeY,ease:Back.easeOut});
        }

        drawnPosition_=num;
        enable_=true;
        mainGroup_.visible=true;
        wheelCallBack_=callBack;
        if (autoSpin_==true){
            if (wheelBg_!=null) {
                speed_ =10;
            }else{
                speed_=5;
            }

            side_ = 1;
            if (Util.getRandomInt(1, 10) < 5) {
            //    side_ = -1;
            }
            setTimeout (soundManager_.playSound, gameClass_.getCompulsivePlayer()?200:600,"drumRoll");
            iStart_=setTimeout(start,(gameClass_.getCompulsivePlayer())?700:1100);
        }
    }


    function spaceBarStart_(){
        if (wheelBg_!=null) {
            speed_ =10;
        }else{
            speed_=5;
        }

        side_ = 1;
        if (Util.getRandomInt(1, 10) < 5) {
            //    side_ = -1;
        }
        soundManager_.playSound("drumRoll");
        start();
    }

    function wheelREstart_(){
        wheelOfFortuneBuild_(true,0);
        showWheel_(1,7,wheelREstart_);
    }

    var me={
        wheelOfFortuneBuild:wheelOfFortuneBuild_,
        showWheel:showWheel_,
        doOk:doOk_,
        spaceBarStart:spaceBarStart_
    }
    initClass_();
    return me;
}
