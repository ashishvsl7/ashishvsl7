/**
 * KiS Framework, Created by Fabry on  26/06/2017.
 */

function KenoBonus(gameRef, gameClass,config,parent,name) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var bonusManager_=parent;
    var config_=config;
    var buttons=[];
    var bonusName_=name;
    var lastChestTout_;
    var music_="";
    var chestSounds_=[];
    var emitter_=[];
    var bonusGroup_;
    var picks_=[];
    var obj_=[];

    var ballsNumber_=28;
    var rows_=7;
    var deltaX_0=264;
    var deltaY_0=168;
    var deltaX=125;
    var deltaY=132;
    var pickTotNum_=10;
    var drawnTotNum_=15;
    var pickCount_=0;
    var prize_=[];
    var extracted_=[];
    var selected_=[];
    var extraction_=0;
    var match_=0;
    var balls_=[];
    var ballGroup_;
    var txtGroup_;
    var extrGroup_;
    var resGroup_;
    var bingoGroup_;
    var txtPrizeList_=[];
    var txtPrizeListA_=[];
    var extList_=[];
    var txtWin_;
    var extractionBall_=null;
    var picking_=false;

    var state_={
        "canPick":false,
        "close":false,
        "collect":false,
        "double":false,
        "baseMult":0,
        "totMult":0,
        "totWinCash":0,
        "totWin":0,
        "baseMult":0,
        "stake":0
    };

    function initClass_(){
        var index=0;
        var txt;

        music_=config_.configuration.bgMusic;
        lastChestTout_=config_.configuration.tOutLastChest;

        balls_=[];
        bonusGroup_= displayManager_.getGroup(bonusName_);
        ballGroup_ = game_.add.group();
        resGroup_= game_.add.group();
        txtGroup_= game_.add.group();
        extrGroup_= game_.add.group();
        bingoGroup_= game_.add.group();
        bonusGroup_.add(resGroup_);
        bonusGroup_.add(ballGroup_);
        bonusGroup_.add(txtGroup_);
        bonusGroup_.add(extrGroup_);

        //place balls
        for (var c = 0; c < ballsNumber_/7; c++) {
            for (var r = 0; r < 7; r++) {
                index++;
                var b = game_.add.button(deltaX_0+r*deltaX, c*deltaY+deltaY_0, "unS_"+Util.formatTwoDigit(index),click_);
                b.anchor.set(.5,.5);
                b.scale.x=1;
                b.scale.y=1;
                b.visible=true;
                ballGroup_.add(b);

                var s = game_.add.button(deltaX_0+r*deltaX, c*deltaY+deltaY_0, "sel_"+Util.formatTwoDigit(index),click_);
                s.anchor.set(.5,.5);
                s.scale.x=1;
                s.scale.y=1;
                s.visible=false;
                ballGroup_.add(s);

                var sb = game_.add.sprite(deltaX_0+r*deltaX, c*deltaY+deltaY_0, "select_bubble");
                sb.scale.x=1;
                sb.scale.y=1;
                sb.anchor.set(.5,.5);
                sb.visible=false;
                ballGroup_.add(sb);


                var obj={};
                obj.ballS=s;
                obj.ballSb=sb;
                obj.ballU=b;

                obj.selected=false;
                obj.number=index;
                balls_[index]=(obj);

                b.param=obj;
                s.param=obj;
            }
        }

        //result text
        for (var a=0;a<=pickTotNum_;a++) {
            txt = new Phaser.Text(game_, 80, 110+(a*23.2), a , { font:"15px Arial", fill: "#afff99",align:"right"});
            txt.anchor.set(1,0);
            txtGroup_.add(txt);
            txtPrizeListA_[a]=txt;

            txt = new Phaser.Text(game_, 80, 110+(a*23.2), a +' - ' +"", { font:"15px Arial", fill: "#afff99"});
            txtPrizeList_[a]=txt;
            txtGroup_.add(txt);
        }
        txtWin_ = new Phaser.Text(game, 100, 110+(a*23.7), "", { font:"22px Arial", fill: "#ff6cd0",align:"center"});
        txtWin_.anchor.set(.5,0);
        txtGroup_.add(txtWin_);



        //place buttons
        var btnG = game_.add.group();
        var btn = game_.add.button(100, 450, "btnRandom",btnRandomize_,null,2,1,0);
        btn.anchor.set(.5,.5);
        btnG.add(btn);

        btn = game_.add.button(100, 520, "btnStart",btnStart_,null,2,1,0);
        btn.anchor.set(.5,.5);
        btnG.add(btn);

        btn = game_.add.button(100, 590, "btnClear",btnClear_,null,2,1,0);
        btn.anchor.set(.5,.5);
        btnG.add(btn);
        bonusGroup_.add(btnG);
    }

    function btnStart_(){
        if (state_.canPick==false || picking_==true)return;
        soundManager_.playSound("startClick");
        if (pickCount_== pickTotNum_){
            state_.canPick=false;
            framework.updateSmallMessageText( Translate.do("Good luck"));
            match_=0;
            extraction_=0;
            bonusManager_.sendRequest(selected_);
        }else{
            framework.updateSmallMessageText(Translate.do("Please select") + " "+ pickTotNum_ + " "+ Translate.do("numbers first, or hit Random button"));
        }
    }

    function btnClear_(){
        if (state_.canPick==false || picking_==true)return;
        soundManager_.playSound("clearClick");
        selected_=[];
        for (var a in balls_){
            balls_[a].ballU.tint="0xFFFFFF";
            balls_[a].ballU.alpha=1;
            selectBall_(balls_[a],true);
        }
    }

    function btnRandomize_(){
        if (state_.canPick==false || picking_ ==true)return;
        picking_=true;
        soundManager_.playSound("randomClick");
        for (var a in balls_){
            selectBall_(balls_[a],true);
        }

        //create new random seq
        var numbers=[];
        for (var i=1;i<=ballsNumber_;i++){
            var obj={};
            obj.index=i;
            obj.sort=getRandom(1,100000);
            numbers[i]=obj;
        }

        numbers.sort(function(a, b){
            return a.sort-b.sort
        })

        //pick just the first 10
        for (var i=0;i<pickTotNum_;i++) {
            extracted_[i]=numbers[i].index;
        }

        for (var i=0;i<pickTotNum_;i++){
            selectBall_(balls_[extracted_[i]],false);
        }
        evalSelected_();

        canStart_();
    }

    function canStart_() {
        picking_ = false;
    }

    function extFake(){
        extracted_=[2, 7, 10, 12, 13, 16, 17, 19, 22, 27];
        doExtraction_();
    }

    function changeStatus_(obj){
        if (obj.selected){
            obj.ballS.visible=true;
            obj.ballSb.visible=true;
            obj.ballU.visible=false;
        }else{
            obj.ballS.visible=false;
            obj.ballSb.visible=false;
            obj.ballU.visible=true;
        }
    }

    function click_ () {
        soundManager_.playSound("selection");
        selectBall_(this.param, this.param.selected);
        evalSelected_();
    }

    function selectBall_(ball,flag){
        if (flag==false) {
            if (pickCount_<pickTotNum_) {
                pickCount_++;
                ball.selected = true;
                TweenMax.to(ball.ballU.scale, .2, {
                    x: 1.1,
                    y: 1.1,
                    ease: Elastic.easeOut,
                    onComplete: changeStatus_,
                    onCompleteParams: [ball]
                })
            }else{
                framework.updateSmallMessageText(Translate.do("You can't select more than") + " " + pickTotNum_+ ", " +Translate.do("Unselect some numbers first"));
                return;
            }
        }else if (ball.selected==true){
            pickCount_=pickCount_-1;
            ball.selected=false;
            TweenMax.to(ball.ballS.scale,.2,{x:1,y:1,ease:Elastic.easeIn,onComplete:changeStatus_,onCompleteParams:[ball]})
        }
        if (pickCount_<pickTotNum_) {
            framework.updateSmallMessageText(Translate.do("Still") + " " + (pickTotNum_ - pickCount_) + "  " + Translate.do("to pick or Hit Random button to automatically chose for You."));
        }else {
            framework.updateSmallMessageText(Translate.do("Choice complete, you can now hit Start button."));
        }
    }

    function evalSelected_(){
        selected_=[];
        for (var a in balls_){
            if (balls_[a].selected){
                selected_.push(balls_[a].number);
            }
        }
    }

    function initBonus_(resume){
        var resumeFlag=false;
        picks_=[];
        obj_=[];
        state_.close=false;
        state_.collect=false;
        state_.double=false;

        if(displayManager_.getGroup("buttonFg"))displayManager_.getGroup("buttonFg").visible=false;
        if (resume.prizes)prize_=resume.prizes;

        for (var a=0;a<=pickTotNum_;a++) {
            txtPrizeList_[a].setText(" - "+prize_[a]);
        }
        state_.canPick=true;
        buildBonusLayout_(resume);

        if (music_!=null && music_!="")soundManager_.mixBgSound(music_, 1000, 1000);

        displayManager_.getText("txtMultBonus").setText("");

        enableBonus_();

        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: -200, ease: Bounce.easeOut});
        }

        for (var a in displayManager.groups[bonusName_].emitters){
            var anim=epsy_.loadSystem(displayManager[bonusName_].emitters[a][0], 500, 500);
            displayManager.groups[bonusName_].emitters[a][0].texture = game_.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
    }

    function buildBonusLayout_(params){
        var index=0;
        extraction_=0;
        match_=0;

        if (bingoGroup_.children.length>0) {
            do {
                bingoGroup_.remove(bingoGroup_.children[0]);
            } while (bingoGroup_.children.length > 0)
        }
        if (extrGroup_.children.length>0) {
            do {
                extrGroup_.remove(extrGroup_.children[0]);
            } while (extrGroup_.children.length > 0)
        }
        if (resGroup_.children.length>0) {
            do {
                resGroup_.remove(resGroup_.children[0]);
            } while (resGroup_.children.length > 0)
        }
        for (a=0;a<=pickTotNum_;a++) {
            txtPrizeList_[a].fill = "#afff99";
            txtPrizeListA_[a].fill = "#afff99";
        }
        if (balanceManager_.getShowIncredits()==false) {
            txtWin_.setText(balanceManager_.getCurrencySmb() + Util.formatNumber(prize_[0]/lineManager_.getLinesNumber()*balanceManager_.getCoinValue(),2));
        }else{
            txtWin_.setText( prize_[0]);
        }

        btnClear_();
    }

    function enableBonus_(){
        bonusGroup_.alpha=0;
        bonusGroup_.visible=true;
        TweenMax.to(bonusGroup_,.5,{alpha:1,onComplete:startBonus_});
    }

    function startBonus_(){
        framework.updateSmallMessageText(Translate.do("Pick 10 Numbers or Hit Random button to automatically chose for You."));
        state_.canPick=true;
        //messageBox_.showMessage("game",Translate.do("Select one from the 5 paths on the bottom")+"\r"+Translate.do("the lower the number the lower is the risk"),"\r"+ Translate.do("Special symbols can hide high prize or death"), closePanel_);
    }

    function closePanel_(){
        bonusManager_.closePanel();
        state_.canPick=true;
        over_=true;
    }

    function parse_(json){
        if (json.bonus.totalMult!=null)state_.totMult = json.bonus.totalMult;
        if (json.bonus.totalWin!=null){
            state_.totWinCash = Number(json.bonus.totalWin) / 100;
            state_.totWin= state_.totWinCash/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }

        if (json.bonus.drawn)extracted_=json.bonus.drawn;
        if (json.stake!=null)state_.stake = Number(json.stake)/100;
        if (json.bonus.state.indexOf("collect")>=0)state_.collect = true;
        if (json.bonus.state.indexOf("double")>=0)state_.double_ = true;
        if (state_.canPick== false)state_.close=true;

        doExtraction_();
    }

    function doExtraction_(){
        extractBall_();
    }

    function extractBall_(smb,ext){
        if (smb!=undefined){
            smb.visible=false;
        }
        if (ext!=undefined){
            ext.visible=false;
        }
        var b = game_.add.sprite(1180, 550, "ball-call");
        b.animations.add("anim");
        b.scale.x=1;
        b.scale.y=1;
        b.anchor.set(.5,.5);
        extrGroup_.add(b);
        b.animations.play("anim", 24, false, false);
        soundManager_.playSound("extraction");

        setTimeout(showNumber_,500,[b,extracted_[extraction_]]);
        extraction_++;
    }

    function showNumber_(par){
        if (extractionBall_!=undefined){
            extractionBall_.visible=false;
            extrGroup_.remove(extractionBall_);
            extractionBall_=null;
        }

        var smb=par[0];
        var num=par[1];
        extractionBall_ = game_.add.sprite(1180, 550, "bal_"+Util.formatTwoDigit(num));
        extractionBall_.visible=true;
        extractionBall_.scale.x=1;
        extractionBall_.scale.y=1;
        extractionBall_.anchor.set(.5,.5);
        extrGroup_.add(extractionBall_);
        updateResults_(smb,extractionBall_,num);
    }

    function updateResults_(smb,ext,index){
        var tint="0xA4A4A4";
        var b;

        if (balls_[index].selected==true) {
            match_++;
            b = game_.add.sprite(balls_[index].ballS.x, balls_[index].ballS.y, "keno-stars-"+Util.formatTwoDigit(match_));
            b.animations.add("anim");
            b.scale.x=1;
            b.scale.y=1;
            b.anchor.set(.5,.5);
            resGroup_.add(b);
            b.animations.play("anim", 24, false, false);
            tint="";
            soundManager_.playSound("win_"+match_);
        }else{
            soundManager_.playSound("lose");
            balls_[index].ballU.alpha=.7;
            balls_[index].ballU.tint=tint;
        }

        if (extraction_ <= 5)
            b = game_.add.sprite(1102, 116 + ((extraction_ - 1) * 50), "ext_" + Util.formatTwoDigit(index));
        else if (extraction_ <= 10)
            b = game_.add.sprite(1155, 116 + ((extraction_ - 6) * 50), "ext_" + Util.formatTwoDigit(index));
        else
            b = game_.add.sprite(1208, 116 + ((extraction_ - 11) * 50), "ext_" + Util.formatTwoDigit(index));
        if (tint!="")b.tint=tint;
        b.scale.x = .92;
        b.scale.y = .92;
        extrGroup_.add(b);

        for (var a=0;a<=pickTotNum_;a++) {
            txtPrizeList_[a].fill = "#afff99";
            txtPrizeListA_[a].fill = "#afff99";
        }
        txtPrizeList_[match_].fill = "#ff6cd0";
        txtPrizeListA_[match_].fill = "#ff6cd0";
        if (balanceManager_.getShowIncredits()==false) {
            txtWin_.setText(balanceManager_.getCurrencySmb() +Util.formatNumber(prize_[match_]/lineManager_.getLinesNumber()*balanceManager_.getCoinValue(),2));
        }else{
            txtWin_.setText(prize_[match_]);
        }
        if (extraction_>= drawnTotNum_){
            if (state_.close==true){
                setTimeout(clearBonus_,lastChestTout_);
            }
        }else{
            setTimeout(extractBall_,500,smb,ext);
        }
    }

    function startFade_(smb){
        TweenMax.to(smb,1,{delay:2.5,alpha:0});
    }

    function resetBonus_(){

    }

    function destroy_(t){
        t.visible=false;
        bonusGroup_.remove(t);
        t=null;
    }

    function clearBonus_(chest){
        if (match_==10){//bingo
            var bingo = game_.add.sprite(640, -200, "bingo");
            bingo.scale.x=1;
            bingo.scale.y=1;
            bingo.anchor.set(.5,.5);
            bingoGroup_.add(bingo);
            TweenMax.to(bingo,.7,{y:220,ease:Bounce.easeOut,onComplete:startFade_,onCompleteParams:[bingo]});
            game_.world.bringToTop(bingoGroup_);
        }

        if(displayManager_.getGroup("buttonFg"))displayManager_.getGroup("buttonFg").visible=true;
        displayManager_.getText("txtChestPanel2").visible=false;
        bonusManager_.closeBonus(bonusName_,state_);
        soundManager_.playSound("winPanel");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
    }

    function hideBonus_(){
        bonusGroup_.visible=false;
        resetBonus_();
        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: 0, ease: Bounce.easeOut});
        }else {
            TweenMax.to(displayManager_.getGroup("logo"), .3, {y: 0, ease: Bounce.easeOut});
        }
        for (var a in obj_){
            obj_[a].destroy();
        }
    }

    function getRandomDist(min, max) {
        var rand= getRandom(min,max);
        return Math.floor(0.333*(rand+rand+rand));
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    var me={
        initBonus:initBonus_,
        hideBonus:hideBonus_,
        parse:parse_,
        getState:function(){
            return state_;
        }
    }
    initClass_();
    return me;
}