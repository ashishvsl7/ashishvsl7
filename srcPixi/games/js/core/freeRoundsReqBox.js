/**
 * KiS Framework, Created by Fabry on 11/10/2017.
 */
function FreeRoundsReqBox(gameRef) {
    var game_ = gameRef;
    var isOn = false;
    var mainGroup_;
    var mainTextGroup_;
    var mainButtonGroup_ = [];
    var msgCB1_;
    var msgCB2_;
    var msgCB3_;
    var arguments_;
    var msgQueue=[];
    var msgYNQueue=[];
    var buttons=[];
    var startD;
    var btnW=300;
    var btnH=40;
    var yOrigin=80;
    var space=-20;
    var selectedValue_=-2;
    var buttonG;
    var mask_;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("msgBoxFR");
        mainTextGroup_ = displayManager_.getTexts();

        if (mainGroup_!=undefined)initMsgBox_();
        buttonG = addGroup();
        mainGroup_.addChild(buttonG);
    }

    function showMessage_(msg, msg1,cb, args) {//a single value in this case into the array
        selectedValue_=0;
        for (var a in displayManager.groups.msgBoxFR.buttons)
            mainButtonGroup_[a].frame=2;

        if (isOn==false) {
            fillFileds_(2,msg, msg1, cb, null,null, "",args);
        }else{
            var obj={};
            obj.owner=owner;//todo remove owner support when Tom generic message ready
            obj.msg=msg;
            obj.msg1=msg1;
            obj.values=args;
            obj.cb=cb;
            obj.args=args;
            msgQueue.push(obj);
        }
    }

    function showMessageYN_(msg, msg1, cb1, cb2,message, args) {
        selectedValue_=-1;
        for (var a in displayManager.groups.msgBoxFR.buttons)
            mainButtonGroup_[a].frame=2;

        if (isOn == false) {
            fillFileds_(args.canReject,msg,msg1, cb1, cb2,null, message,args);
        } else {
            var obj = {};
            obj.msg = msg;
            obj.msg1 = msg1;
            obj.values=args;
            obj.cb = cb1;
            obj.cb2 = cb2;
            obj.message = message;
            obj.args = args;
            msgYNQueue.push(obj);
        }
    }
    
    function fillFileds_(type,msg, msg1, cb1, cb2,cb3, message,args){
        framework.hideFramework();
        isOn = true;
        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;

        if (type==2) {
            mainButtonGroup_["ok"].visible = true;

        }else if (type==0) {
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["no"].visible = false;
            mainButtonGroup_["yes"].x=640;

        }else{
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["yes"].x=displayManager.groups.msgBoxFR.buttons["yes"].x
            mainButtonGroup_["no"].visible = true;
        }
        mainTextGroup_["msgFR1"].setText(Translate.do(msg));
        mainTextGroup_["msgFR2"].setText(Translate.do(msg1));
        /*
        mainTextGroup_["msgFR3"].setText(Translate.do(message.substr(0,100)));
        mainTextGroup_["msgFR4"].setText(Translate.do(message.substr(100,100)));
        mainTextGroup_["msgFR5"].setText(Translate.do(message.substr(200,100)));
         */
        if ( selectedValue_<0) {
            // //create dynamic button list
            for (var i = 0; i < args.length; i++) {
                var b = new  PixiButton(game_, ((space + btnW) * i) , yOrigin, 'feature-Fn-btn', onClick, 0,1,2,true);// new Phaser.Graphics(0, 0);
                b.anchor.set(0, .5);
                b.name = 'btn' + i;
                b.index=i;
                b.value = args[i].betlevel;
                b.on('pointerover', over);
                b.on('pointerout', out);

                var t =  spriteManager_.addText(  (b.width)/2, 0, args[i].rounds+" x "+  balanceManager_.geBalanceObj().currency+  Util.formatNumber(args[i].betlevel, Util.getNubersOfDecimal()),0,0.5, {
                    fontFamily: "FuturaPT-Book",
                    "fonSize":"40px",
                    fill: displayManager.groups.msgBoxFR.textCol,
                    align:"center"
                });

                t.anchor.set(0.5, .5);
                b.addChild(t);
                b.selectFrame(1);
                buttons.push(b);
                buttonG.add_Child(b);

            }

            /*
            //create a mask to mask the list  ->without scrolling no need a mask too
            mask_ = game.add.graphics(0, 0);
            mask_.beginFill(0xffffff);
            mask_.drawRect(displayManager.groups.msgBoxFR.maskX, displayManager.groups.msgBoxFR.maskY, displayManager.groups.msgBoxFR.maskW, displayManager.groups.msgBoxFR.maskH);
            buttonG.mask = mask_;
            */
            buttonG.centerX=640;
            buttonG.x=displayManager.groups.msgBoxFR.selectorX -( (args.length)*((btnW/2+space/2))) ;
            buttonG.y=displayManager.groups.msgBoxFR.selectorY;
        }



        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;
        arguments_=args;
    }


    function onClick(dd){
        dd.selected=!dd.selected;
        if (dd.selected) {
            selectedValue_=dd.index;
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].name != dd.name) {
                    buttons[i].isDown = false;
                    buttons[i].selectFrame(1);
                }
            }
        }
        dd.isDown = true;
        dd.selectFrame(2);//dd.selectFrame(1);
    }

    function over(){
        console.log("ov")
        if (this.alpha<1)return;
        this.selectFrame(0);
    }

    function out(){
        console.log("out")
        if (this.alpha<1)return;
        if (this.isDown){
            this.selectFrame(0)
        }else{
            this.selectFrame(1);
        }
    }


    function onDragUpdate(dd){
        if (startD==undefined)return;
        var dist=(dd.x - startD);
        for ( var i=0;i< arguments_.length;i++){
            if (buttons[i].name!=dd.name ) {
                buttons[i].x =buttons[i].x + dist;
            }
            buttons[i].y= yOrigin;
        }
        startD=dd.x;
    }

    function doOk_() {
        if (selectedValue_==-2){
            if (msgCB1_ != null)msgCB1_(arguments_);

        }else if (selectedValue_==-1){
            mainGroup_.visible = false;
            messageBox_.showMessage("game", Translate.do("Select a bet value first"), "", closeMsg);
        }else{
            arguments_.betlevel= arguments_[selectedValue_].betlevel;
            arguments_.rounds= arguments_[selectedValue_].rounds;
            arguments_.id=arguments_[selectedValue_].id;
            if (arguments_[selectedValue_].totWon!=undefined)arguments_.totWon=arguments_[selectedValue_].totWon;
            mainGroup_.visible = false;
            if (msgCB1_ != null)msgCB1_(arguments_);
            checkQueue();
        }
    }

    function closeMsg(){
        mainGroup_.visible = true;
    }

    function doKo_() {
        if (msgCB2_ != null)msgCB2_(arguments_);
        checkQueue();
    }

    function checkQueue(){
        buttons=[];
        if(mask_!=undefined)mask_.visible=false;
        mask_=null;
        mainGroup_.visible = false;
        isOn=false;
        framework.showFramework();
    }

    function initMsgBox_() {
        // todo p3 var bgButton = new Phaser.Button(game_, 0, 0, null);
        // bgButton.width =1920;
        // bgButton.height =1080;
        // mainGroup_.add(bgButton);
        for (var a in displayManager.groups.msgBoxFR.buttons) {
            var buttonE = PixiButton(game_, displayManager.groups.msgBoxFR.buttons[a].x, displayManager.groups.msgBoxFR.buttons[a].y, displayManager.groups.msgBoxFR.buttons[a].name, me[displayManager.groups.msgBoxFR.buttons[a].evt],0,1,2 );
            mainButtonGroup_[a] = buttonE;
            buttonE.anchor.set(0.5, 0.5);
            mainGroup_.addChild(buttonE);
            if(displayManager.groups.msgBoxFR.buttons[a].scaleX!=undefined)buttonE.scale.x=displayManager.groups.msgBoxFR.buttons[a].scaleX;
            if(displayManager.groups.msgBoxFR.buttons[a].scaleY!=undefined)buttonE.scale.y=displayManager.groups.msgBoxFR.buttons[a].scaleY;
            if (displayManager.groups.msgBoxFR.buttons[a].texts != null) {
                for (var t in displayManager.groups.msgBoxFR.buttons[a].texts) {
                    var txt = spriteManager_.addText(displayManager.groups.msgBoxFR.buttons[a].texts[t].x, displayManager.groups.msgBoxFR.buttons[a].texts[t].y,  '',0,0.5, {
                        fontFamily: displayManager.groups.msgBoxFR.buttons[a].texts[t].font,
                        fontSize:displayManager.groups.msgBoxFR.buttons[a].texts[t].fontSize,
                        fill: displayManager.groups.msgBoxFR.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.msgBoxFR.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.msgBoxFR.buttons[a].texts[t].weight==null)?'normal':displayManager.groups.msgBoxFR.buttons[a].texts[t].weight
                    });
                    txt.anchor.set((displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorX : 0, (displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorY : 0);
                    if (displayManager.groups.msgBoxFR.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.msgBoxFR.buttons[a].texts[t].text));                                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;
                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;


                    buttonE.addChild(txt);
                    mainTextGroup_[t] = txt;
                }
            }
        }

        mainGroup_.visible = false;
    }

    function initMsgQuestion_() {
    }
    
    var me = {
        showMessage: showMessage_,
        showMessageYN: showMessageYN_,
        doOk: doOk_,
        doKo: doKo_,
        getIsOnMessage:function(){
            return isOn;
        }
    }

    initClass_();
    return me;
}
