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
    var btnW=210;
    var btnH=40;
    var yOrigin=140;
    var space=-20;
    var selectedValue_=-2;
    var buttonG;
    var mask_;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("msgBoxFR");
        mainTextGroup_ = displayManager_.getTexts();

        if (mainGroup_!=undefined)initMsgBox_();
        buttonG=game_.add.group();
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
                var b = game.add.button(((space + btnW) * i) , yOrigin, 'container-btn', onClick, this, 1, 2, 0,0);// new Phaser.Graphics(0, 0);
                b.anchor.set(0, .5);
                b.name = 'btn' + i;
                b.index=i;
                b.value = args[i].betlevel;
                b.inputEnabled = true;
                b.selected = false;
                b.onInputOver.add(over, b);
                b.onInputOut.add(out, b);
                // if ( args.length>3) {    //no more need to activate the scrolling cause max 4 bet choices are allowed
                //     b.input.enableDrag(false);
                //     b.events.onDragStart.add(onDragStart, b);
                //     b.events.onDragStop.add(onDragStop, b);
                //     b.events.onDragUpdate.add(onDragUpdate, b);
                // }
                var t = new Phaser.Text(game, (b.width)/2, 3, args[i].rounds+" x "+  balanceManager_.geBalanceObj().currency+  Util.formatNumber(args[i].betlevel, Util.getNubersOfDecimal()), {font: "16px FuturaPT-Book", fill:displayManager.groups.msgBoxFR.textCol});
                t.anchor.set(0.5, .5);
                b.addChild(t);

                buttons.push(b);
                buttonG.add(b);

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
        if (dd.selected){
            dd.frame=0;
            selectedValue_=dd.index;
            for ( var i=0;i< arguments_.length;i++){
                if (buttons[i].name!=dd.name) {
                    buttons[i].selected = false;
                    buttons[i].frame = 2;
                }
            }
        }
    }

    function over(dd){
        if (dd.selected){
            dd.frame=0;
            return;
        }
    }

    function out(dd){

        if (dd.selected){
            dd.frame=0;
            return;
        }

    }

    function onDragStart(dd) {
        startD = dd.x;
    }

    function onDragStop(dd){
        startD=undefined;
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
            checkQueue();
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
        buttonG.removeAll();
        if (msgQueue.length>0){//todo remove owner support when Tom generic message ready
            fillFileds_(msgQueue[0].owner,1,msgQueue[0].msg,msgQueue[0].msg1,msgQueue[0].cb,null,msgQueue[0].args);
            msgQueue.shift();
        }else if (msgYNQueue.length>0){
            fillFileds_(msgYNQueue[0].owner,2,msgYNQueue[0].msg,msgYNQueue[0].msg1,msgYNQueue[0].cb,msgYNQueue[0].cb2,msgYNQueue[0].args);
            msgYNQueue.shift();
        }else{
            mainGroup_.visible = false;
            isOn=false;
        }
    }

    function initMsgBox_() {
        var bgButton = new Phaser.Button(game_, 0, 0, null);
        bgButton.width =1280;
        bgButton.height =720;
        mainGroup_.add(bgButton);

        for (var a in displayManager.groups.msgBoxFR.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.msgBoxFR.buttons[a].x, displayManager.groups.msgBoxFR.buttons[a].y, displayManager.groups.msgBoxFR.buttons[a].name, me[displayManager.groups.msgBoxFR.buttons[a].evt], this, 1,2,0,0 );
            mainButtonGroup_[a] = buttonE;
            buttonE.anchor.set(0.5, 0.5);
            mainGroup_.add(buttonE);

            if (displayManager.groups.msgBoxFR.buttons[a].texts != null) {
                for (var t in displayManager.groups.msgBoxFR.buttons[a].texts) {
                    var txt = new Phaser.Text(game_, displayManager.groups.msgBoxFR.buttons[a].texts[t].x, displayManager.groups.msgBoxFR.buttons[a].texts[t].y, '', {
                        font: displayManager.groups.msgBoxFR.buttons[a].texts[t].font,
                        fill: displayManager.groups.msgBoxFR.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.msgBoxFR.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.msgBoxFR.buttons[a].texts[t].weight==null)?'normal':displayManager.groups.msgBoxFR.buttons[a].texts[t].weight
                    });
                    txt.anchor.set((displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorX : 0, (displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.msgBoxFR.buttons[a].texts[t].anchorY : 0);
                    if (displayManager.groups.msgBoxFR.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.msgBoxFR.buttons[a].texts[t].text));
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