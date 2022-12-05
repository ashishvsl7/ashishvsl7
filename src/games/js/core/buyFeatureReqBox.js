/**
 * KiS Framework, Created by Fabry on 11/07/2019.
 */
function BuyFeatureReqBox(gameRef) {
    var game_ = gameRef;
    var isOn = false;
    var mainGroup_;
    var mainTextGroup_;
    var mainButtonGroup_ = [];
    var msgCB1_;
    var msgCB2_;
    var msgCB3_;
    var arguments_;
    var buttons=[];
    var startD;
    var btnW=210;
    var btnH=40;
    var yOrigin=80;
    var space=-20;
    var selectedValue_=-2;
    var selectedRoundIndex_=-2;
    var selectedFR_=-2;
    var buttonG;
    var mask_;
    var confirm_=false;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("msgBoxFeature");
        mainTextGroup_ = displayManager_.getTexts();

        if (mainGroup_!=undefined){
            initMsgBox_();
            buttonG=game_.add.group();
            mainGroup_.addChild(buttonG);
        }
    }

    function showSingleMessage_(msg, msg1,cb,cb2 ,args) {
        selectedValue_=-1;
        selectedRoundIndex_=-1;
        selectedFR_=-1;
        for (var a in displayManager.groups.msgBoxFeature.buttons)
            mainButtonGroup_[a].frame=2;

        fillFileds_(1,msg, msg1, cb, cb2,null, args);
    }

    function showMultipleMessage_(msg, msg1,msg2,cb,cb2, args) {
        selectedValue_=-1;
        for (var a in displayManager.groups.msgBoxFeature.buttons)
            mainButtonGroup_[a].frame=2;

        fillMultiFileds_(1,msg, msg1,msg2, cb, cb2,null, args);
    }

    function showMultipleMessageMWJ_(msg, msg1,msg2,cb,cb2, args) {
        selectedValue_=-1;
        for (var a in displayManager.groups.msgBoxFeature.buttons)
            mainButtonGroup_[a].frame=2;

        fillMultiFiledsMWJ_(1,msg, msg1,msg2, cb, cb2,cb2, args);
    }

    function showMultipleMessageRR_(msg, msg1,msg2,cb,cb2, args) {
        selectedValue_=-1;
        for (var a in displayManager.groups.msgBoxFeature.buttons)
            mainButtonGroup_[a].frame=2;

        fillMultiFiledsRR_(1,msg, msg1,msg2, cb, cb2,cb2, args);
    }

    function showMessageYN_(msg, msg1, cb1, cb2, cb3,args) {
        fillFileds_(1, msg,msg1,cb1,cb2,cb3,args);
    }

    function fillFileds_(type,msg, msg1, cb1, cb2,cb3, args){

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
            mainButtonGroup_["yes"].x=displayManager.groups.msgBoxFeature.buttons["yes"].x
            mainButtonGroup_["no"].visible = true;
        }
        mainTextGroup_["msgF1"].y=displayManager.groups.msgBoxFeature.texts.msgF1.y+120;
        mainTextGroup_["msgF2"].y=displayManager.groups.msgBoxFeature.texts.msgF2.y+150;
        mainTextGroup_["msgF1"].setText(Translate.do(msg));
        mainTextGroup_["msgF2"].setText(Translate.do(msg1));
        mainTextGroup_["msgF3"].setText("");
        mainTextGroup_["priceF"].setText("");
        if( mainTextGroup_["msgF4"]!=undefined) mainTextGroup_["msgF4"].visible=false;
        if( mainTextGroup_["msgF45"]!=undefined)mainTextGroup_["msgF45"].visible=false;
        if( mainTextGroup_["msgF5"]!=undefined)mainTextGroup_["msgF5"].visible=false;
        if( mainTextGroup_["msgF51"]!=undefined)mainTextGroup_["msgF51"].visible=false;
        if ( selectedValue_<0) {
            buttonG.visible=true;
            // //create dynamic button list
            for (var i = 0; i < args.length; i++) {
                var b = game.add.button(((space + btnW) * i) , yOrigin, 'container-btn', onClick, this, 1, 2, 0,0);// new Phaser.Graphics(0, 0);
                b.anchor.set(0, .5);
                b.name = 'btn' + i;
                b.index=i;
                b.value = args[i].lockedReels;
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
                var t = new Phaser.Text(game, (b.width)/2, 3, args[i].rounds +" = " +balanceManager_.geBalanceObj().currency+  Util.formatNumber(args[i].cost, Util.getNubersOfDecimal()), {font: "16px FuturaPT-Book", fill:displayManager.groups.msgBoxFeature.textCol});
                t.anchor.set(0.5, .5);
                b.addChild(t);

                buttons.push(b);
                buttonG.add(b);

            }

            /*
            //create a mask to mask the list  ->without scrolling no need a mask too
            mask_ = game.add.graphics(0, 0);
            mask_.beginFill(0xffffff);
            mask_.drawRect(displayManager.groups.msgBoxFeature.maskX, displayManager.groups.msgBoxFeature.maskY, displayManager.groups.msgBoxFeature.maskW, displayManager.groups.msgBoxFeature.maskH);
            buttonG.mask = mask_;
            */
            buttonG.centerX=640;
            buttonG.x=displayManager.groups.msgBoxFeature.selectorX -( (args.length)*((btnW/2+space/2))) ;
            buttonG.y=displayManager.groups.msgBoxFeature.selectorY;
            arguments_=args;
        }else{
            buttonG.visible=false;
        }
        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;

    }



    function fillMultiFileds_(type,msg, msg1,msg2, cb1, cb2,cb3, args){
        selectedValue_=-2;
        selectedRoundIndex_=-2;
        selectedFR_=-2;
        confirm_=false;
        isOn = true;
        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;
        framework.hideFramework();

        if (type==2) {
            mainButtonGroup_["ok"].visible = true;

        }else if (type==0) {
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["no"].visible = false;
            mainButtonGroup_["yes"].x=640;

        }else{
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["yes"].x=displayManager.groups.msgBoxFeature.buttons["yes"].x;
            mainButtonGroup_["no"].visible = true;
        }
        mainTextGroup_["msgF1"].y=displayManager.groups.msgBoxFeature.texts.msgF1.y;
        mainTextGroup_["msgF2"].y=displayManager.groups.msgBoxFeature.texts.msgF2.y;
        mainTextGroup_["msgF1"].setText(Translate.do(msg));
        mainTextGroup_["msgF2"].setText(Translate.do(msg1));
        mainTextGroup_["msgF3"].setText(Translate.do(msg2));
        mainTextGroup_["msgF4"].visible=true;
        mainTextGroup_["msgF45"].visible=true;
        mainTextGroup_["msgF5"].visible=true;
        mainTextGroup_["priceF"].setText("");


        if ( selectedValue_<0) {
            buttonG.visible=true;
            // //create dynamic button list
            for (var i = 0; i < args.length; i++) {
                var b = game.add.button(((space + btnW) * i), yOrigin, 'feature-Fn-btn', onClick, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
                b.anchor.set(0, .5);
                b.name = 'btn' + i;
                b.type = 'btn';
                b.index = i;
                b.value = args[i].round;
                b.inputEnabled = true;
                b.selected = false;
                b.onInputOver.add(over, b);
                b.onInputOut.add(out, b);
                // if ( args.length>3) {    //no more need to activate the scrolling cause max 4 bet choices are allowed
                //     b.input.enableDrag(false);
                //     b.events.onDragStart.add(onDragStart, b);
                //     b.events.onDragStop.add(onDragStop, b);showMultipleMessage_
                //     b.events.onDragUpdate.add(onDragUpdate, b);
                // }
                var t = new Phaser.Text(game, (b.width) / 2, 0, args[i].rounds, {
                    font: "20px FuturaPT-Book",
                    fill: displayManager.groups.msgBoxFeature.textCol
                });
                t.anchor.set(0.5, .5);
                b.addChild(t);

                buttons.push(b);
                buttonG.add(b);

            }

            for (var i = 0; i < args.length; i++) {
                if (args[i].lockedReels!=undefined) {
                    var b = game.add.button(((space + btnW) * i)+100, yOrigin + 115, 'feature-Rn-btn', onClickLr, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
                    b.anchor.set(0, .5);
                    b.name = 'btnL' + i;
                    b.type = 'btnL';
                    b.index = i;
                    b.value = args[i].lockedReels;
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
                    var t = new Phaser.Text(game, (b.width) / 2, 0, args[i].lockedReels, {
                        font: "20px FuturaPT-Book",
                        fill: displayManager.groups.msgBoxFeature.textCol
                    });
                    t.anchor.set(0.5, .5);
                    b.addChild(t);

                    buttons.push(b);
                    buttonG.add(b);
                }
            }

            /*
            //create a mask to mask the list  ->without scrolling no need a mask too
            mask_ = game.add.graphics(0, 0);
            mask_.beginFill(0xffffff);
            mask_.drawRect(displayManager.groups.msgBoxFeature.maskX, displayManager.groups.msgBoxFeature.maskY, displayManager.groups.msgBoxFeature.maskW, displayManager.groups.msgBoxFeature.maskH);
            buttonG.mask = mask_;
            */
            buttonG.centerX = 640;
            buttonG.x = displayManager.groups.msgBoxFeature.selectorX - ((args.length) * ((btnW / 2 + space / 2)));
            buttonG.y = displayManager.groups.msgBoxFeature.selectorY;
        }else{
            buttonG.visible=false;
        }

        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;
        arguments_=args;

    }

    function fillMultiFiledsMWJ_(type,msg, msg1,msg2, cb1, cb2,cb3, args){
        selectedValue_=-2;
        selectedRoundIndex_=-2;
        selectedFR_=-2;
        confirm_=false;
        isOn = true;
        var allExceed=true;

        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }

        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;
        framework.hideFramework();

        if (type==2) {
            mainButtonGroup_["ok"].visible = true;

        }else if (type==0) {
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["no"].visible = false;
            mainButtonGroup_["yes"].x=640;

        }else{
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["yes"].x=displayManager.groups.msgBoxFeature.buttons["yes"].x;
            mainButtonGroup_["no"].visible = true;
        }
        mainTextGroup_["msgF1"].y=displayManager.groups.msgBoxFeature.texts.msgF1.y;
        mainTextGroup_["msgF2"].y=displayManager.groups.msgBoxFeature.texts.msgF2.y;
        mainTextGroup_["msgF1"].setText(Translate.do(msg));
        mainTextGroup_["msgF2"].setText(Translate.do(msg1));
        mainTextGroup_["msgF3"].setText(Translate.do(msg2));
        if( mainTextGroup_["msgF4"]!=undefined)mainTextGroup_["msgF4"].visible=true;
        if( mainTextGroup_["msgF45"]!=undefined)mainTextGroup_["msgF45"].visible=true;
        if( mainTextGroup_["msgF5"]!=undefined)mainTextGroup_["msgF5"].visible=true;
        mainTextGroup_["priceF"].setText("");
        if( mainTextGroup_["msgF51"]!=undefined)mainTextGroup_["msgF51"].visible=true;

        if ( selectedValue_<0) {
            buttonG.visible=true;
            var s=btnW/2-20;
            yOrigin=80;
            // //create dynamic button list
            for (var i = 0; i < args.length; i++) {
                s=s+space + btnW;
                if (i== args.length-1 && gameParams.gameOriginalID==7029){
                    s=s+310;
                    yOrigin+=100;
                }
                var b = game.add.button(100+s, yOrigin, 'feature-Fn-btn', onClickMWJ, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);

                if (s> 500){
                    yOrigin=yOrigin+90;
                    s=btnW/2-20;
                }
                b.anchor.set(0, .5);
                b.name = 'btn' + i;
                b.type = 'btn';
                b.index = i;
                b.value = args[i].round;
                var limit=(args.limit!=undefined)?args.limit:1500;
                if ( gameInfo.exchangeRate != undefined){
                    if (gameInfo.exchangeRate * Number(balanceManager_.getCoinValue()) * args[i].price <= limit) {
                        b.inputEnabled = true;
                        b.selected = false;
                        b.onInputOver.add(over, b);
                        b.onInputOut.add(out, b);
                        b.alpha=1;
                        allExceed=false;
                    }else{
                        b.alpha=0.4;
                    }
                }

                var t = new Phaser.Text(game, ((b.width) / 2)+4, (displayManager.groups.msgBoxFeature.textYShift!=undefined)?displayManager.groups.msgBoxFeature.textYShift:-6, args[i].rounds + " " +  args[i].extra, {
                    font: "20px FuturaPT-Book",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                });
                t.anchor.set(0.5, .5);
                b.addChild(t);

                buttons.push(b);
                buttonG.add(b);

            }

            buttonG.centerX = 640;
            buttonG.x = displayManager.groups.msgBoxFeature.selectorX - ((args.length) * ((btnW / 2 + space / 2)));
            buttonG.y = displayManager.groups.msgBoxFeature.selectorY;
        }else{
            buttonG.visible=false;
        }

        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;
        arguments_=args;

        if (allExceed){
            mainTextGroup_["priceF"].setText(Translate.do("All the options") + "\n" +Translate.do("Exceedes the bet limit, lower the bet."));
        }else if (args.length==1){
            onClickMWJ(b);
            b.frame = 0;
            selectedValue_=arguments_[0].rounds;
            selectedRoundIndex_=0;
            arguments_.index = selectedRoundIndex_+1;
            arguments_.buyInValue = Number(balanceManager_.getCoinValue()) *100 * arguments_[selectedRoundIndex_].price;
            arguments_.nSpins = selectedRoundIndex_
            arguments_.price=arguments_.buyInValue;
            confirm_=true;

        }
    }

    var optionLevel=[];
    var totLevel=0
    var currentLevel=-1;
    var fieldN=null;
    var fieldN1=null;
    var fieldN2=null;
    var fieldN2a=null;
    var fieldH=null;
    var fieldH2=null;
    var fieldH2a=null;
    var fieldS=null;
    var fieldS2=null;
    var fieldS2a=null;
    var buttN=null;
    var buttH=null;
    var buttS=null;

    function fillMultiFiledsRR_(type,msg, msg1,msg2, cb1, cb2,cb3, args){
        selectedValue_=-2;
        selectedRoundIndex_=-2;
        selectedFR_=-2;
        confirm_=true;
        isOn = true;
        var allExceed=true;

        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }
        for (var a in buttonG.children){
            buttonG.remove(buttonG.children[a]);
        }


        framework.hideFramework();
        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;
        mainButtonGroup_["ko"].visible = true;

        mainTextGroup_["msgF1"].y=displayManager.groups.msgBoxFeature.texts.msgF1.y;
        mainTextGroup_["msgF2"].y=displayManager.groups.msgBoxFeature.texts.msgF2.y;
        mainTextGroup_["msgF1"].setText(Translate.do(msg));
        mainTextGroup_["msgF2"].setText(Translate.do(msg1));
        mainTextGroup_["msgF3"].setText(Translate.do(msg2));
        if( mainTextGroup_["msgF4"]!=undefined)mainTextGroup_["msgF4"].visible=true;
        if( mainTextGroup_["msgF45"]!=undefined)mainTextGroup_["msgF45"].visible=true;
        if( mainTextGroup_["msgF5"]!=undefined)mainTextGroup_["msgF5"].visible=true;
        mainTextGroup_["priceF"].setText("");
        if( mainTextGroup_["msgF51"]!=undefined)mainTextGroup_["msgF51"].visible=true;
        mainGroup_.normalBF.children[0].visible=true;
        mainGroup_.highBF.children[0].visible=true;
        mainGroup_.superBF.children[0].visible=true;

        var button0=null;
        if ( selectedValue_<0) {
            buttonG.visible=true;
            var s=btnW/2-20;
            yOrigin=50;
            optionLevel=[];
            // //create dynamic button list

            var limit=(args.limit!=undefined)?args.limit:1500;

            for (var i = 0; i < args.length; i++) {
                if ( gameInfo.exchangeRate != undefined) {
                    if (gameInfo.exchangeRate * Number(balanceManager_.getCoinValue()) * args[i].price <= limit) {
                        if (optionLevel[args[i].rounds] == undefined) optionLevel[args[i].rounds] = [];
                        optionLevel[args[i].rounds].push(args[i]);
                    }
                }
            }

            var butt=[];
            s=s+space + btnW;
            butt[0] = game.add.button(105+s, yOrigin, 'feature-Fn-btn', onClickRR, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
            butt[0].alpha=.5
            butt[0].anchor.set(0, .5);
            button0=butt[0];
            s=s+space + btnW;
            butt[1] = game.add.button(105+s, yOrigin, 'feature-Fn-btn', onClickRR, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
            butt[1].alpha=.5
            butt[1].anchor.set(0, .5);
            buttonG.add(butt[0]);
            buttonG.add(butt[1]);

            var index =0;
            for (var i in optionLevel) {



                butt[index].name = 'btn' + i;
                butt[index].type = 'btn';
                butt[index].index = i;
                butt[index].value = optionLevel[i].round;
                //var limit=(optionLevel.limit!=undefined)?optionLevel.limit:2500;
                //if ( gameInfo.exchangeRate != undefined){
                //  if (gameInfo.exchangeRate * Number(balanceManager_.getCoinValue()) * optionLevel[i].price <= limit) {
                butt[index].inputEnabled = true;
                butt[index].selected = false;
                butt[index].onInputOver.add(over, butt[index]);
                butt[index].onInputOut.add(out, butt[index]);

                butt[index].alpha=1;
                allExceed=false;


                //}else{
                //    b.alpha=0.4;
                // }
                //}

                var t = new Phaser.Text(game, ((butt[index].width) / 2), -2,optionLevel[i][0].rounds , {
                    font: "20px FuturaPT-Book",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                t.anchor.set(.5);
                /*
                                var t = new Phaser.Text(game, ((b.width) / 2)+4, (displayManager.groups.msgBoxFeature.textYShift!=undefined)?displayManager.groups.msgBoxFeature.textYShift:-6, (Number(optionLevel[i].round)+1).toString() , {
                    font: "20px FuturaPT-Book",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                });
                 */


                t.anchor.set(0.5, .5);
                butt[index].addChild(t);

                buttons.push(butt[index]);


                index++;
            }

            buttonG.centerX = 640;
            buttonG.x = displayManager.groups.msgBoxFeature.selectorX - ((args.length) * ((btnW / 2 + space / 2)));
            buttonG.y = displayManager.groups.msgBoxFeature.selectorY;
        }else{
            buttonG.visible=false;
        }

        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;
        arguments_=optionLevel;

        if (allExceed){
            mainTextGroup_["priceF"].setText(Translate.do("All the options") + "\n" +Translate.do("Exceedes the bet limit, lower the bet."));
            mainTextGroup_["msgF2"].setText(Translate.do("All the options") + "\n" +Translate.do("Exceedes the bet limit, lower the bet."));
        }else{
            onClickRR(button0);
            button0.frame = 0;
        }
    }

    function onClick(dd){
        //dd.frame=0;
        dd.selected = true;
        dd.frame = 2;
        selectedValue_=arguments_[dd.index].rounds;
        selectedRoundIndex_=dd.index;
        if (selectedRoundIndex_>=0 && selectedFR_>=0){
            mainTextGroup_["priceF"].setText(Translate.do("Total price:") + " " +    balanceManager_.geBalanceObj().currency+  Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].scaleF[selectedFR_], Util.getNubersOfDecimal()));
        }
        for ( var i=0;i< buttons.length;i++){
            if (buttons[i].type=="btn" && buttons[i].name!=dd.name) {
                buttons[i].selected = false;
                buttons[i].frame = 2;
            }
        }
    }

    function onClickMWJ(dd){
        //dd.frame=0;
        if (dd.alpha<1){
            mainTextGroup_["priceF"].setText(Translate.do("Exceedes the bet limit, lower the bet."));
            return;
        }
        dd.selected = true;
        dd.frame = 2;
        selectedValue_=arguments_[dd.index].rounds;
        selectedRoundIndex_=dd.index;
        mainTextGroup_["priceF"].setText(Translate.do("Total price:") + " " +    balanceManager_.geBalanceObj().currency+  Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].price, Util.getNubersOfDecimal()));
        for ( var i=0;i< buttons.length;i++){
            if (buttons[i].type=="btn" && buttons[i].name!=dd.name) {
                buttons[i].selected = false;
                buttons[i].frame = 2;
            }
        }
    }

    function onClickRR(dd){
        if (dd.alpha<1){
            selectedRoundIndex_=-1;
            mainTextGroup_["priceF"].setText(Translate.do("Exceedes the bet limit, lower the bet."));
            for ( var i=0;i< buttons.length;i++){
                if (buttons[i].type=="btn" && buttons[i].name!=dd.name) {
                    buttons[i].selected = false;
                    buttons[i].frame = 2;
                }
            }
            return;
        }
        dd.selected = true;
        dd.frame = 2;
        selectedRoundIndex_=dd.index;
        currentLevel=-1;

        if (selectedRoundIndex_>=0) {
            selectedValue_=selectedRoundIndex_;
            var price ="Unavailable";
            var rounds=-1;
            var index=-1;

            if (arguments_[selectedRoundIndex_][0]!=undefined ) {
                price = arguments_[selectedRoundIndex_][0].price*balanceManager_.getCoinValue();
                rounds = arguments_[selectedRoundIndex_][0].rounds;
                index=arguments_[selectedRoundIndex_][0].index+1;
                if (buttN!=null){
                    buttonG.remove(buttN);
                }

                buttN= game.add.button(348, 215, 'buyUpgrade', clickRRPrice_, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
                buttN.anchor.set(0, .5);
                buttN.price=price;
                buttN.rounds=rounds;
                buttN.index=index;
                buttonG.add(buttN);

                var tb= new Phaser.Text(game,44,3,Translate.do("BUY"), {
                    font: "20px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                tb.anchor.set(.5);
                buttN.addChild(tb);

                if (fieldN!=null){
                    buttonG.remove(fieldN);
                }
                fieldN= new Phaser.Text(game,390,159,balanceManager_.geBalanceObj().currency+ price, {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldN.anchor.set(.5);
                buttonG.add(fieldN);

                if (fieldN2!=null){
                    buttonG.remove(fieldN2);
                }
                fieldN2= new Phaser.Text(game,393,191,Translate.do("NORMAL"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#d7d8d0",
                    align:"center"
                });
                fieldN2.anchor.set(.5);
                buttonG.add(fieldN2);

                if (fieldN2a!=null){
                    buttonG.remove(fieldN2a);
                }
                fieldN2a= new Phaser.Text(game,394,190,Translate.do("NORMAL"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#000000",
                    align:"center"
                });
                fieldN2a.anchor.set(.5);
                buttonG.add(fieldN2a);


                mainGroup_.normalBF.children[0].alpha=1;
            }else{
                mainGroup_.normalBF.children[0].alpha=.5;
                if (buttN!=null){
                    buttonG.remove(buttN);
                }
                if (fieldN!=null){
                    buttonG.remove(fieldN);
                }
                fieldN= new Phaser.Text(game,555,159,"---", {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldN.anchor.set(.5);
                buttonG.add(fieldN);
            }


            if (fieldN1!=null){
                buttonG.remove(fieldN1);
            }
            fieldN1= new Phaser.Text(game,390,128,Translate.do("NO\rUPGRADE"), {
                font: "20px JockeyOne-Regular",
                fill: displayManager.groups.msgBoxFeature.textCol,
                align:"center"
            });
            fieldN1.lineSpacing = -11;
            fieldN1.anchor.set(.5);
            buttonG.add(fieldN1);



            if (arguments_[selectedRoundIndex_][1]!=undefined ) {
                price = arguments_[selectedRoundIndex_][1].price*balanceManager_.getCoinValue();
                rounds = arguments_[selectedRoundIndex_][1].rounds;
                index=arguments_[selectedRoundIndex_][1].index+1;
                if (buttH!=null){
                    buttonG.remove(buttH);
                }

                buttH= game.add.button(509, 215, 'buyUpgrade', clickRRPrice_, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
                buttH.anchor.set(0, .5);
                buttH.price=price;
                buttH.rounds=rounds;
                buttH.index=index;
                buttonG.add(buttH);

                var tb= new Phaser.Text(game,44,3,Translate.do("BUY"), {
                    font: "20px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                tb.anchor.set(.5);
                buttH.addChild(tb);

                if (fieldH!=null){
                    buttonG.remove(fieldH);
                }
                fieldH= new Phaser.Text(game,552,159,balanceManager_.geBalanceObj().currency+ price, {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldH.anchor.set(.5);
                buttonG.add(fieldH);
                mainGroup_.highBF.children[0].alpha=1;


                if (fieldH2!=null){
                    buttonG.remove(fieldH2);
                }
                fieldH2= new Phaser.Text(game,552,191,Translate.do("HIGH"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#d7d8d0",
                    align:"center"
                });
                fieldH2.anchor.set(.5);
                buttonG.add(fieldH2);

                if (fieldH2a!=null){
                    buttonG.remove(fieldH2a);
                }
                fieldH2a= new Phaser.Text(game,553,190,Translate.do("HIGH"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#000000",
                    align:"center"
                });
                fieldH2a.anchor.set(.5);
                buttonG.add(fieldH2a);



            }else{
                mainGroup_.highBF.children[0].alpha=.5;
                if (buttH!=null){
                    buttonG.remove(buttH);
                }
                if (fieldH!=null){
                    buttonG.remove(fieldH);
                }
                if (fieldH2!=null){
                    buttonG.remove(fieldH2);
                }
                if (fieldH2a!=null){
                    buttonG.remove(fieldH2a);
                }
                fieldH= new Phaser.Text(game,555,159,"---", {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldH.anchor.set(.5);
                buttonG.add(fieldH);
            }





            if (arguments_[selectedRoundIndex_][2]!=undefined ) {
                price = arguments_[selectedRoundIndex_][2].price *balanceManager_.getCoinValue();
                rounds = arguments_[selectedRoundIndex_][2].rounds;
                index=arguments_[selectedRoundIndex_][2].index+1;
                if (buttS!=null){
                    buttonG.remove(buttS);
                }

                buttS= game.add.button(669, 215, 'buyUpgrade', clickRRPrice_, this, 1, 2, 0, 0);// new Phaser.Graphics(0, 0);
                buttS.anchor.set(0, .5);
                buttS.price=price;
                buttS.rounds=rounds;
                buttS.index=index;
                buttonG.add(buttS);

                var tb= new Phaser.Text(game,44,3,Translate.do("BUY"), {
                    font: "20px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                tb.anchor.set(.5);
                buttS.addChild(tb);

                if (fieldS!=null){
                    buttonG.remove(fieldS);
                }
                fieldS= new Phaser.Text(game,712,159,balanceManager_.geBalanceObj().currency+ price, {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldS.anchor.set(.5);
                buttonG.add(fieldS);
                mainGroup_.superBF.children[0].alpha=1;

                if (fieldS2!=null){
                    buttonG.remove(fieldS2);
                }
                fieldS2= new Phaser.Text(game,712,191,Translate.do("SUPER"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#d7d8d0",
                    align:"center"
                });
                fieldS2.anchor.set(.5);
                buttonG.add(fieldS2);

                if (fieldS2a!=null){
                    buttonG.remove(fieldS2a);
                }
                fieldS2a= new Phaser.Text(game,713,190,Translate.do("SUPER"), {
                    font: "22px JockeyOne-Regular",
                    fill: "#000000",
                    align:"center"
                });
                fieldS2a.anchor.set(.5);
                buttonG.add(fieldS2a);
            }else{
                mainGroup_.superBF.children[0].alpha=.5;
                if (buttS!=null){
                    buttonG.remove(buttS);
                }
                if (fieldS!=null){
                    buttonG.remove(fieldS);
                }
                if (fieldS2!=null){
                    buttonG.remove(fieldS2);
                }
                if (fieldS2a!=null){
                    buttonG.remove(fieldS2a);
                }
                fieldS= new Phaser.Text(game,712,159,"---", {
                    font: "18px JockeyOne-Regular",
                    fill: displayManager.groups.msgBoxFeature.textCol,
                    align:"center"
                });
                fieldS.anchor.set(.5);
                buttonG.add(fieldS);
            }




            if (rounds>0){
                //def on Normal



                mainTextGroup_["priceF"].setText("");
            }else{
                selectedFR_=-1;
                mainTextGroup_["priceF"].setText(Translate.do("Few options") + " " +Translate.do("Exceedes the bet limit, lower the bet."));
            }




            // if (currentLevel < arguments_[selectedRoundIndex_].length-1) {
            //     currentLevel++;
            //     selectedFR_ = arguments_[selectedRoundIndex_][currentLevel].price;
            //     selectedValue_=arguments_[selectedRoundIndex_][currentLevel].rounds;
            //
            //     if (selectedRoundIndex_>=0 && selectedFR_>=0){
            //         var t="SUPER";
            //         if (currentLevel==0){
            //             t="NORMAL"
            //         }else if (currentLevel==1){
            //             t="HIGH"
            //         }
            //         field.setText(t);
            //         mainTextGroup_["priceF"].setText(Translate.do("Total price:") + " " +    balanceManager_.geBalanceObj().currency+  Util.formatNumber(Number(balanceManager_.getCoinValue()) * selectedFR_, Util.getNubersOfDecimal()));
            //
            //         arguments_.index = Number(arguments_[selectedRoundIndex_][currentLevel].index)+1;
            //         arguments_.buyInValue = Number(balanceManager_.getCoinValue()) *100 * selectedFR_;
            //         arguments_.nSpins = selectedValue_
            //         arguments_.price=arguments_.buyInValue;
            //
            //     }
            //
            // }else{
            //     if (arguments_[selectedRoundIndex_].length<3){
            //         selectedFR_=-1;
            //         field.setText("");
            //         mainTextGroup_["priceF"].setText(Translate.do("Few options") + " " +Translate.do("Exceedes the bet limit, lower the bet."));
            //     }
            // }
        }
        for ( var i=0;i< buttons.length;i++){
            if (buttons[i].type=="btnL" && buttons[i].name!=dd.name) {
                // buttons[i].selected = false;
                //buttons[i].frame = 2;
            }
        }


        //mainTextGroup_["priceF"].setText(Translate.do("Total price:") + " " +    balanceManager_.geBalanceObj().currency+  Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].price, Util.getNubersOfDecimal()));
        for ( var i=0;i< buttons.length;i++){
            if (buttons[i].type=="btn" && buttons[i].name!=dd.name) {
                buttons[i].selected = false;
                buttons[i].frame = 2;
            }
        }
    }

    function clickRRPrice_(dd){
        dd.selected = true;
        dd.frame = 2;

        arguments_.nSpins = dd.rounds;
        arguments_.buyInValue =dd.price*100;
        selectedFR_ = dd.price;

        arguments_.index =dd.index;

        arguments_.price=dd.price;
        mainGroup_.visible = false;
        confirm_=true;
        mainGroup_.normalBF.children[0].visible=false;
        mainGroup_.highBF.children[0].visible=false;
        mainGroup_.superBF.children[0].visible=false;
        if (buttN!=null){
            buttonG.remove(fieldN);
            buttonG.remove(buttN);
        }
        if (buttH!=null){
            buttonG.remove(fieldH);
            buttonG.remove(buttH);
        }
        if (buttS!=null){
            buttonG.remove(fieldS);
            buttonG.remove(buttS);
        }
        mainButtonGroup_["ko"].visible = false;
        if (gameParams.lang=="ru"){
            showMessageYN_(Translate.do("Do you want to buy")  + " " + arguments_.nSpins + " " +Translate.do("Free Spins"), Translate.do("for a total price of") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(arguments_.price, Util.getNubersOfDecimal()), msgCB1_, doKo2_,msgCB2_, arguments_ );
        }else{
            showMessageYN_(Translate.do("Do you want to buy")  + " " + arguments_.nSpins + " " +Translate.do("Free Spins"), Translate.do("for a total price of") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(arguments_.price, Util.getNubersOfDecimal()), msgCB1_, doKo2_,msgCB2_, arguments_);
        }
    }

    function clickHigh_(){
        dd.selected = true;
        dd.frame = 2;
    }

    function clickSuper_(){
        dd.selected = true;
        dd.frame = 2;
    }

    function onClickLr(dd){
        dd.selected = true;
        dd.frame = 2;
        selectedFR_=arguments_[dd.index].lockedReels;
        if (selectedRoundIndex_>=0 && selectedFR_>=0){
            mainTextGroup_["priceF"].setText(Translate.do("Total price:") + " " +    balanceManager_.geBalanceObj().currency+  Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].scaleF[selectedFR_], Util.getNubersOfDecimal()));
        }
        for ( var i=0;i< buttons.length;i++){
            if (buttons[i].type=="btnL" && buttons[i].name!=dd.name) {
                buttons[i].selected = false;
                buttons[i].frame = 2;
            }
        }
    }

    function over(dd){
        if (dd.alpha<1)return;
        if (dd.selected){
            dd.frame=0;

        }
    }

    function out(dd){
        if (dd.alpha<1)return;
        if (dd.selected){
            dd.frame=0;

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
        if (confirm_==false) {

            if (selectedValue_ < 0) {
                mainGroup_.visible = false;
                messageBox_.showMessage("game", Translate.do("Select the Free Spins number"), "", closeMsg);
            } else if (selectedFR_ < 0) {
                mainGroup_.visible = false;
                messageBox_.showMessage("game", Translate.do("Select the locked reels number"), "", closeMsg);
            } else {
                arguments_.nLocked = selectedFR_;
                arguments_.nSpins = selectedValue_;
                arguments_.buyInValue = Number(balanceManager_.getCoinValue()) *100 * arguments_[selectedRoundIndex_].scaleF[selectedFR_];
                arguments_.price=selectedValue_ * selectedFR_;
                mainGroup_.visible = false;
                confirm_=true;
                if (gameParams.lang=="ru"){
                    showMessageYN_(Translate.do("Do you want to buy")  + " " + selectedValue_ + " " +Translate.do("Free Spins with")+ "\r"+" "+Translate.do("locked reels")+ " "+selectedFR_, Translate.do("for a total price of") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].scaleF[selectedFR_], Util.getNubersOfDecimal()), msgCB1_, doKo2_,msgCB2_, arguments_);
                }else{
                    showMessageYN_(Translate.do("Do you want to buy")  + " " + selectedValue_ + " " +Translate.do("Free Spins with")+ "\r"+selectedFR_ +" "+Translate.do("locked reels"), Translate.do("for a total price of") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].scaleF[selectedFR_], Util.getNubersOfDecimal()), msgCB1_, doKo2_,msgCB2_, arguments_);
                }            }
        }else{
            buyFeature();
        }
    }

    function doOkMWJ_() {
        if (confirm_==false) {
            if (selectedRoundIndex_ < 0) {
                mainGroup_.visible = false;
                messageBox_.showMessage("game", Translate.do("Select the Free Spins number"), "", closeMsg);
            } else {
                arguments_.index = selectedRoundIndex_+1;
                arguments_.buyInValue = Number(balanceManager_.getCoinValue()) *100 * arguments_[selectedRoundIndex_].price;
                arguments_.nSpins = selectedRoundIndex_
                arguments_.price=arguments_.buyInValue;
                mainGroup_.visible = false;
                confirm_=true;
                showMessageYN_(Translate.do("Do you want to buy")  + " " + selectedValue_ +" "+ Translate.do("Free Spins"), Translate.do("for a total price of") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(Number(balanceManager_.getCoinValue()) * arguments_[selectedRoundIndex_].price, Util.getNubersOfDecimal()), msgCB1_, doKo2_,msgCB2_, arguments_);
            }
        }else{
            buyFeature();
        }
    }

    function doOkRR_() {
        if (selectedRoundIndex_ < 0) {
            mainGroup_.visible = false;
            messageBox_.showMessage("game", Translate.do("Select the Free Spins number"), "", closeMsg);
        }else if (selectedFR_ < 0) {
            mainGroup_.visible = false;
            messageBox_.showMessage("game", Translate.do("Select the Band Members Frequency"), "", closeMsg);
        }else{
            buyFeature();
        }
    }

    function buyFeature(){
        if (msgCB1_ != null)msgCB1_(arguments_);
        mainGroup_.visible = false;
        framework.showFramework();
    }

    function closeMsg(){
        mainGroup_.visible = true;
    }

    function doKo_() {
        if (confirm_==false){
            if (msgCB2_ != null) msgCB2_(arguments_);
            mainGroup_.visible = false;
            framework.showFramework();
        }else{
            doKo2_();
        }
    }

    function doKo2_() {
        if (msgCB3_ != null) msgCB3_(arguments_);
        mainGroup_.visible = false;
        framework.showFramework();
    }

    function initMsgBox_() {
        var bgButton = new Phaser.Button(game_, 0, 0, null);
        bgButton.width =1280;
        bgButton.height =720;
        mainGroup_.add(bgButton);
        for (var a in displayManager.groups.msgBoxFeature.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.msgBoxFeature.buttons[a].x, displayManager.groups.msgBoxFeature.buttons[a].y, displayManager.groups.msgBoxFeature.buttons[a].name, me[displayManager.groups.msgBoxFeature.buttons[a].evt], this, 1,2,0,0 );
            mainButtonGroup_[a] = buttonE;
            buttonE.anchor.set(0.5, 0.5);
            mainGroup_.add(buttonE);
            if(displayManager.groups.msgBoxFeature.buttons[a].scaleX!=undefined)buttonE.scale.x=displayManager.groups.msgBoxFeature.buttons[a].scaleX;
            if(displayManager.groups.msgBoxFeature.buttons[a].scaleY!=undefined)buttonE.scale.y=displayManager.groups.msgBoxFeature.buttons[a].scaleY;
            if (displayManager.groups.msgBoxFeature.buttons[a].texts != null) {
                for (var t in displayManager.groups.msgBoxFeature.buttons[a].texts) {
                    var txt = new Phaser.Text(game_, displayManager.groups.msgBoxFeature.buttons[a].texts[t].x, displayManager.groups.msgBoxFeature.buttons[a].texts[t].y, '', {
                        font: displayManager.groups.msgBoxFeature.buttons[a].texts[t].font,
                        fill: displayManager.groups.msgBoxFeature.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.msgBoxFeature.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.msgBoxFeature.buttons[a].texts[t].weight==null)?'normal':displayManager.groups.msgBoxFeature.buttons[a].texts[t].weight
                    });
                    txt.anchor.set((displayManager.groups.msgBoxFeature.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.msgBoxFeature.buttons[a].texts[t].anchorX : 0, (displayManager.groups.msgBoxFeature.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.msgBoxFeature.buttons[a].texts[t].anchorY : 0);
                    if (displayManager.groups.msgBoxFeature.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.msgBoxFeature.buttons[a].texts[t].text));                                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;
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
        showMessageYN: showMessageYN_,
        showMultipleMessage:showMultipleMessage_,
        showMultipleMessageMWJ:showMultipleMessageMWJ_,
        showMultipleMessageRR:showMultipleMessageRR_,
        showSingleMessage:showSingleMessage_,
        doOk: doOk_,
        doOkMWJ: doOkMWJ_,
        doOkRR: doOkRR_,
        doKo: doKo_,
        getIsOnMessage:function(){
            return isOn;
        }
    }

    initClass_();
    return me;
}