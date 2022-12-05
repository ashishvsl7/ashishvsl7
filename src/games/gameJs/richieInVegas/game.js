function Game(gameRef) {
    var game_ = gameRef;
    var onGame_ = false;
    //animations
    var fs;
    var fr;
    var fsWon;
    var ap;
    var won;
    var spinning_ = false;
    var messageOn_ = false;
    var refuseCompulsive_ = false;
    var compulsiveFlag_ = false;
    var compulsiveSettingBakup_ = displayManager.groups.centralWin.thresHolds;
    var waitForSubstitution_ = false;
    var wonBonus = 0;
    var onGame_ = false;
    var spinning_ = false;
    var showScatterWin_ = false;
    var showFsWin_ = false;
    var choose_ = false;
    var fadeBg_ = false;
    var iFadeT_O_ = 0;
    var lineCompletion_ = false;
    var wheelOfFortune_;
    var logoLightsL_;
    var logoLightsR_;
    var lights_ = [];
    var waitingForWheel_=false;

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("frame").visible = true;
        displayManager_.getGroup("inner").visible = true;
        displayManager_.getGroup("status").visible = true;
        displayManager_.getGroup("logo").visible = true;
        logoLightsL_ = displayManager_.getGroup("logo").logoLightL.children[0];
        logoLightsL_.animations.add("anim");
        logoLightsR_ = displayManager_.getGroup("logo").logoLightR.children[0];
        logoLightsR_.animations.add("anim");
        lights_["l"] = [];
        lights_["l"][0] = displayManager_.getGroup("bgFS").light_l_0.children[0];
        lights_["l"][1] = displayManager_.getGroup("bgFS").light_l_1.children[0];
        lights_["l"][2] = displayManager_.getGroup("bgFS").light_l_2.children[0];
        lights_["l"][3] = displayManager_.getGroup("bgFS").light_l_3.children[0];
        lights_["r"] = [];
        lights_["r"][0] = displayManager_.getGroup("bgFS").light_r_0.children[0];
        lights_["r"][1] = displayManager_.getGroup("bgFS").light_r_1.children[0];
        lights_["r"][2] = displayManager_.getGroup("bgFS").light_r_2.children[0];
        lights_["r"][3] = displayManager_.getGroup("bgFS").light_r_3.children[0];
        lights_["l"][0].rot=lights_["l"][0].rotation;
        lights_["l"][1].rot=lights_["l"][1].rotation;
        lights_["l"][2].rot=lights_["l"][2].rotation;
        lights_["l"][3].rot=lights_["l"][3].rotation;
        lights_["r"][0].rot=lights_["r"][0].rotation;
        lights_["r"][1].rot=lights_["r"][1].rotation;
        lights_["r"][2].rot=lights_["r"][2].rotation;
        lights_["r"][3].rot=lights_["r"][3].rotation;

        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        setMask_();
        wildManager_.resumeWildReel();
    }

    function initGame_() {

        //resuming wilds
        gcmCalls_("STAKE", balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand == "freespins") {
            if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.stake > 0) {
                changeBet_(communicationManager_.getResumeStatus().status.stake / 100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n" + Translate.do("You have unused Free Spins"), "\n" + Translate.do("They will be automatically started"), startResumeFs_);
        } else if (communicationManager_.getResumeStatus().status.hand == "choose") {
            if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.stake > 0) {
                changeBet_(communicationManager_.getResumeStatus().status.stake / 100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.showFsPanel1([communicationManager_.getResumeStatus().status.numFS]);
        } else if (communicationManager_.getResumeStatus().status.hand == "bonus") {
            if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.stake > 0) {
                changeBet_(communicationManager_.getResumeStatus().status.stake / 100, true);
            }
            //f1x2.GcmError(-3);
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            messageBox_.showMessage("game", "You have an unfinished Bonus", "it will be automatically started", startResumeBonus_);
        } else {
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
        }
        onGame_ = true;
        framework.showFramework();

        //build the wheel
        wheelOfFortune_ = new WheelOfFortune(game, me);
        //wheelOfFortune_.wheelOfFortuneBuild(true,0);
        //wheelOfFortune_.showWheel([1,6,wheelCallBack_]);

    }

    function randomizeLight_(side, num) {
        TweenMax.to(lights_[side][num], Util.getRandomInt(2, 5), {
            rotation: lights_[side][num].rotation + .35,
            onComplete: onCompleteLight_,
            onCompleteParams: [side, num]
        })
    }

    function onCompleteLight_(side, num) {
        if (freeSpinsManager_.getIsInFs() == true) {
            TweenMax.to(lights_[side][num], Util.getRandomInt(2, 5), {
                rotation: lights_[side][num].rotation - .35,
                onComplete: randomizeLight_,
                onCompleteParams: [side, num]
            })
        }
    }

    function setMask_() {
        //mask
        var mask_ = game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        mask_.drawRect(198, 101, 885, 540);
        displayManager_.getGroup("reels").mask = mask_;
    }

    function startResumeBonus_() {
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function startResumeFs_() {
        freeSpinsManager_.resumeFs();
        buttonManager_.applyRestore();
        realDoSpin_([false]);
    }

    function toggleCredits_() {
        creditsCoinsDisplay_.toggleCreditsDisplay();
    }

    function leaveGame_() {
        onGame_ = false;
        buttonManager_.applyHide();
    }

    function backToGame_() {
        onGame_ = true;
        buttonManager_.applyRestore();
    }

    function doPt_() {
//open game paytable and disable buttons
        displayManager_.getGroup("logo").visible = false;
        framework.openPayTable();
        leaveGame_();
        soundManager_.playSound("click");
    }

    function closePt_() {
//close paytable and enable buttons
        backToGame_();
        displayManager_.getGroup("logo").visible = true;
    }

    function betSelector_() {
        soundManager_.playSound("click");
        framework.openBetOptions();
    }

    function changeBet_(val, init) {
        framework.closeApMenu();
        framework.closeBetMenu();
        framework.setBetValue(val, init);
    }

    function doWheel_() {
        if (waitingForWheel_){
            wheelOfFortune_.spaceBarStart();
        }
    }

    function doStop_() {
        soundManager_.playSound("click");
        buttonManager_.applyState("AFTERSPIN");
        spinManager_.stopSpin();
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable() == true) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
            return false;
        }
    }

    function realDoSpin_(swipe) {//swipte=array
        if (!onGame_) return;
        if (messageOn_ == true) {
            return;
        }
        spinning_ = true;
        eventManager_.clearEvt();
        gameClass_.stopBgLights();
//console.log("----spin ---- "+ getStackTrace().join('\n'));
        increaseVolumeBG_();
        if (won) {
            //  updateBalance_("WIN");
        }
        if (displayManager_.getGroup("bgIconAnim")) displayManager_.getGroup("bgIconAnim").alpha = 0;
//clear
        for (var a in displayManager_.getGroup("bgIconAnim").children) {
            if (displayManager_.getGroup("bgIconAnim").children[a].tw != undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
            displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType == "singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        } else {
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");


            balanceManager_.bet(betCheckCallBack_);
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];

        //handling FS message here
        if (response == true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                waitForSubstitution_ = false;
                showScatterWin_ = false;
                showFsWin_ = false;

                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();

                logger(" interrupted win animation ");
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                if (freeSpinsManager_.getIsInFs() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free rounds"));
                } else {
                    if (balanceManager_.getShowIncredits() == false) {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), Util.getNubersOfDecimal()));
                    } else {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2) + " " + Translate.do("Coins:") + "" + lineManager_.getLinesNumber());
                    }
                }
                spinManager_.setSpinType(swipe[0], swipe[1]);
                spinManager_.sendSpinRequest();
            } else {
                buttonManager_.applyState("NH");
                spinning_ = false;
                balanceManager_.unBet();
                setTimeout(showApMessage_, 500);
            }
        } else {
            buttonManager_.applyState("NH");
            spinning_ = false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    function getShiftWildNumber_(reels) {
    }

    function getStickyWildNumber_(reels) {
    }

    function spinAnimEnd_() {
        choose_ = false;
        logger("animation end called.------" + spinManager_.getSpinResp())
//lineManager_.initClass();
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();
        won = winManager_.evaluate(spinManager_.getReels());
        fsWon = freeSpinsManager_.getFsWon();

        wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
        fs = false;
        if (freeSpinsManager_.getIsInFs() || fsWon) {
            fs = freeSpinsManager_.getFreeSpinsEval();
        }

        displayManager_.getText("winValue").setText("");
        getShiftWildNumber_(spinManager_.getReels());
//getStickyWildNumber_(spinManager_.getReels());
        evaluateWinnings_();
    }



    function evaluateWinnings_() {
    //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus == 0) {

            logger("NO bonus found ")

            if (waitForSubstitution_) {
                if (winManager_.getScatterWinAmt()[0]!=null && winManager_.getScatterWinAmt()[0][9] != null) {
                    var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][9].amt, 2);
                    var amtC=amt/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                    if (amtC > 24000) {
                        lineManager_.showJpotCentralWinGreetings(amt);
                        eventManager_.addEvent(lineManager_.clearLineAfterValue, 13000);
                        eventManager_.addEvent(updateFreeSpinsTotWon_,0);
                    }
                }
                if (winManager_.getScatterWinAmt()[1]!=null && winManager_.getScatterWinAmt()[1][9] != null) {
                    var amt = Util.formatNumber(winManager_.getScatterWinAmt()[1][9].amt, 2);
                    var amtC=amt/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                    if (amtC > 24000) {
                        lineManager_.showJpotCentralWinGreetings(amt);
                        eventManager_.addEvent(lineManager_.clearLineAfterValue, 13000);
                        eventManager_.addEvent(updateFreeSpinsTotWon_,0);
                    }
                }

                addWheelSound_();
                wheelOfFortune_.wheelOfFortuneBuild(true, (freeSpinsManager_.getIsInFs() == true && spinManager_.getSpinResp().freeSpin != null && spinManager_.getSpinResp().freeSpin.stage != null) ? spinManager_.getSpinResp().freeSpin.stage : 0);
                eventManager_.addEvent(wheelOfFortune_.showWheel, (gameClass_.getCompulsivePlayer()) ? 0 : 500, [.5, spinManager_.getSpinResp().status.wheel, wheelCallBack_]);
            } else {
                wildManager_.endAnimHandle((winManager_.getWildNum() > 0) ? winManager_.getWildSimbs() : null, eventManager_);
                twinReelManager_.hideTwinReels();
                if (won) {
                    lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                    freeSpinsManager_.endAnimHandle(eventManager_);
                    if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                        //eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration() : 0);
                    }
                } else {
                    logger("no win.------" + waitForSubstitution_)
                    if (winManager_.getScatterWinAmt()[0] != null) {
                        if (winManager_.getScatterWinAmt()[0][10] != null) {
                            eventManager_.addEvent(updateScatterBalance, 0);
                            eventManager_.addEvent(fakeEvent_, 2000);
                        }
                        if (winManager_.getScatterWinAmt()[0][12] != null) {
                            eventManager_.addEvent(updateScatterBalance, 0);
                            eventManager_.addEvent(fakeEvent_, 2000);
                        }
                    }
                    freeSpinsManager_.endAnimHandle(eventManager_);
                    if (!fsWon) framework.updateSmallMessageText(Translate.do("Good luck"));
                }

                buttonManager_.applyState("AFTERSPIN");
                if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                    eventManager_.addEvent(fsEval_, 2000);
                } else {
                    eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true) ? 2000 : (freeSpinsManager_.getIsInFs()) ? 1000 : 0);
                }
            }
        } else {
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }

    function wheelCallBack_() {
        waitingForWheel_=false;
        me.stopBgLights();
        removeWheelSound_();
        playTriggeredSmb_();

        wildManager_.endAnimHandle((winManager_.getWildNum() > 0) ? winManager_.getWildSimbs() : null, eventManager_);
        if (winManager_.getWildNum() > 0 && won) {
            var coins=winManager_.getLineWinAmt() * balanceManager_.getCoinValue()/lineManager_.getLinesNumber();
            eventManager_.addEvent(fakeEvent_, (coins>5000)?3000:1500);
        }

        twinReelManager_.hideTwinReels();
        eventManager_.addEvent(balanceManager_.balanceUpdate,0);

        if (winManager_.getScatterWinAmt()[0] != null) {
            if (winManager_.getScatterWinAmt()[0][12] != null && winManager_.getScatterWinAmt()[0][12].amt > 0) {
                eventManager_.addEvent(scatterPayment_, 0, [winManager_.getScatterWinAmt()[0][12].amt]);

                var amtC=winManager_.getScatterWinAmt()[0][12].amt/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                if (amtC > 999) {
                    eventManager_.addEvent(fadeBg_, 3000);
                }
            }
        }

        if (won) {
            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
        } else {

            logger("no win.------" + waitForSubstitution_)

            freeSpinsManager_.endAnimHandle(eventManager_);
            if (wildManager_.hasWildReel() == true) {
                eventManager_.addEvent(fakeEvent_, 1000);
            }
            if (!fsWon) framework.updateSmallMessageText(Translate.do("Good luck"));
        }

        buttonManager_.applyState("AFTERSPIN");
        console.log(fsWon + " wcb " + freeSpinsManager_.getIsInFs() + " " + freeSpinsManager_.getFsNumber())
        if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
            eventManager_.addEvent(fsEval_, 2000);
        } else {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsNumber() == 0)?1000:0);
        }
        eventManager_.triggerEvt();
    }

    function updateFreeSpinsTotWon_(){
        var num= Number(displayManager_.getText("totWonValue").num);
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber(( num +Number(winManager_.getScatterWinAmt()[1][9].amt)) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((num + Number(winManager_.getScatterWinAmt()[1][9].amt)), Util.getNubersOfDecimal()));
        }
    }

    function scatterPayment_(param) {
        var amt = param[0];
        var amtD = amt;
        if (balanceManager_.getShowIncredits() == true) {
            amtD = amtD / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
        }

        freeSpinsManager_.updateFreeSpinsTotWon();
        winAmtManager_.showIstantUpdateWin(amtD, "Scatter Win");
        lineManager_.showScatterCentralWinGreeting(amt);

        balanceManager_.balanceUpdate();
        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();

        scatterWinAmt_ = 0;
        hasBonusWin_ = false;
    }


    var iRmess_ = 0;
    var messages_ = [];
    var messNum_ = 0;
    var maxMessages_ = 0;
    var maxChar_ = ("zskojp".indexOf(gameParams.lang) >= 0) ? 40 : 80;
    var charNum_ = 0;
    var codeCaption;
    var iScroll_;

    messages_[0] = Translate.do("Drag the wheel or press the spin button");

    function stopRandomMessages_() {
        clearInterval(iRmess_);
        clearTimeout(iScroll_);
    }

    function startRandomMessages_() {
        clearInterval(iRmess_);
        if (autoPlayManager_.getIsInAutoPlay() == false) {
            codeCaption = displayManager_.getText("messages");
            codeCaption.setText((messages_[messNum_]).substr(0, maxChar_));
            codeCaption.actualMessage = messages_[messNum_];
            codeCaption.startPos = 0;
            codeCaption.maxLen = maxChar_;
            if (messNum_ < maxMessages_) {
                messNum_++;
            } else {
                messNum_ = 0;
            }
            if (codeCaption.actualMessage.length > maxChar_) {
                iScroll_ = setTimeout(checkLen_, 1000);
            } else {
                iRmess_ = setInterval(startRandomMessages_, 5000);
            }
        }
    }


    function checkLen_() {
        clearTimeout(iScroll_);
        if (codeCaption.actualMessage.length > maxChar_) {
            var str = codeCaption.actualMessage.substring(codeCaption.startPos, codeCaption.maxLen + codeCaption.startPos);
            codeCaption.startPos++;
            codeCaption.setText(str);
            if (codeCaption.startPos > codeCaption.actualMessage.length + 5) {
                codeCaption.startPos = 0;
                iScroll_ = setTimeout(startRandomMessages_, 500);
            } else {
                iScroll_ = setTimeout(checkLen_, 100);
            }
        }

    }

    function startBonus_() {
        if (wonBonus == 0) return;
        wonBonus = 0;
//send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
        logger("update balance " + " " + getStackTrace().join('\n'));
//framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());

        if (winManager_.getScatterWinAmt() > 0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt()) + Number(winManager_.getScatterWinAmt()[0][10].amt), null, null, null, winAmtManager_.getLineWinAmt());
            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        }
        if (!freeSpinsManager_.getIsInFs()) balanceManager_.balanceUpdate();
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function updateScatterBalance() {
        if (freeSpinsManager_.getIsInFs()) {
            lineManager_.showBonusWin(winManager_.getScatterWinAmt()[0][12].amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), winManager_.getScatterWinAmt()[0][12].amt);
            freeSpinsManager_.updateFreeSpinsTotWon();
        } else {
            if (winManager_.getScatterWinAmt()[0][12] != null) {
                var amt = Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt, 2);
                lineManager_.completeBonusValue(amt, "Scatter Win");
                var amtC=amt/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();

                if (amtC > 320) lineManager_.showBonusCentralWinGreetings(amt);
            }
            balanceManager_.balanceUpdate();
        }

        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function endScatterAnim_() {
        soundManager_.stopSound("incWin");
    }

    function fsEval_() {
//console.log("fsEval")
        spinning_ = false;
        fs = freeSpinsManager_.getIsInFs();
        fsWon = freeSpinsManager_.getFsWon();
        if (fsWon) {
            setTimeout(apEval_, Number(ReelConfig.fsSpinDelay));
        } else {
            apEval_();
        }
    }

    function apEval_() {
//console.log("apEval")
        setTimeout(enableButton_, 200);
        multiplierManager_.resetMultipliers();
    }

    function enableButton_() {
        if (!won) {
            if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
                gcmCalls_("PAID", 0);
                balanceManager_.balanceUpdate();
            }
        }

        ap = autoPlayManager_.getAutoPlayEval();
        if (gameParams.force == "Enable") {
            setTimeout(hideForcePanel_, 3000);
        }
        if (freeSpinsManager_.getIsInFs() || fsWon) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
            freeRoundsManager_.getFreeRoundsEval();
        }

        logger("enable button called.------" + fs + " " + fr + " " + ap + " " + fsWon);
        if (ap == false && fs == false && fsWon == false) {
            if (ap == false && autoPlayManager_.getIsInAutoPlay() == true) {
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_, 500, [ap]);
                eventManager_.triggerEvt();
            } else {
                finalizeEnable_();
            }
        } else {
            eventManager_.clearEvt();
            if (ap == false && autoPlayManager_.getIsInAutoPlay() == true) {
                eventManager_.addEvent(showApMessage_, 500, [ap]);
            }
            eventManager_.addEvent(startAutoSpin_, lineManager_.getTotalDuration() -1500, [false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par) {
        if (autoPlayManager_.getIsInAutoPlay() || fs) {
            if (autoPlayManager_.getIsFeature() == false || (autoPlayManager_.getStopOnFeature() == false && fs == true)) {
                if (autoPlayManager_.getCanAp() == true) {
                    gcmCalls_("ANIMATION_END", null, true);
                    realDoSpin_(par);
                } else {
                    setTimeout(startAutoSpin_, 1000, par);
                }
            } else {
                buttonManager_.applyState("NH");
            }
        } else {
            buttonManager_.applyState("NH");
        }
    }

    function showApMessage_() {
        autoPlayManager_.showAPMessage(finalizeEnable_);
    }

    function finalizeEnable_() {
        if (!freeSpinsManager_.getIsInFs()) {
            if (refuseCompulsive_ == false && compulsiveFlag_ == false && spinManager_.getCompulsivePlayer() == true) {
                triggerCompulsive_();
                refuseCompulsive_ = true; //aks just the first time
            } else {
                buttonManager_.applyState("NH");
            }
        }
    }

    function hideForcePanel_() {
        if (gameParams.force == "Enable") {
            //$('#debug').css("opacity","0");
        }
    }

    function hideFs_() {
        if (freeRoundsManager_.getIsInFr()) {
            setTimeout(freeRoundsManager_.getFreeRoundsEval, 1000);
        }
    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
    }

    function animFsWin_() {
        if (showFsWin_ == true) return;
        showFsWin_ = true;
        freeSpinsManager_.showFsIconAfterSubst(winManager_.getFsSimbs());
    }

    function animScatterWin_() {
        if (showScatterWin_ == true) return;
        showScatterWin_ = true;
        scatterManager_.showScatterAfterSubst(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt());
    }

    function upperSmbCallBack_(i) {
        if (i == 0) {
            for (var a in displayManager_.getGroup("bgIconAnim").children) {
                if (displayManager_.getGroup("bgIconAnim").children[a].tw != undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
                displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
            }

            if (spinManager_.getSpinResp().status.wheel >= 0) {
                waitForSubstitution_ = true;
            }
        }

//called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (freeSpinsManager_.getIsInFs() == false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow != true) {
                var s = spinManager_.getReels()[i].swapSmb(smb, a);

                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0) { //check for special to animate
                    if (compulsiveFlag_ == true) soundManager_.playSound("reelSoundFast");

                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("trigger") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    s.wildReplacement = false;
                    spinManager_.addTriggerIcon(s);
                }
                if (me.checkSpecialSymbol != null && me.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb,spinManager_.getSpinReelResp().reel[i].smb[a].special) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)

                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12) {

                        spinManager_.getReels()[i].removeSymbol(a);
                        var smb = new Phaser.Sprite(game_, spinManager_.getReels()[i].getSymbol(a).x, spinManager_.getReels()[i].getSymbol(a).y, "anim" + spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                        smb.anchor.set(.5, .5);
                        smb.animations.add("anim");
                        smb.animations.play("anim", 24, 1, false);
                        //var newIcon = spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2("upperIcon"+triggerSymbol_[a].smb, triggerSymbol_[a].newSmb);
                        spinManager_.getReelGroup(i).add(smb);
                        spinManager_.setAnimationMap(i, a, smb);
                        soundManager_.playSound("wheelBell");
                        gameClass_.playBgLights();
                        smb.reel = i;
                        smb.smb = a;
                        smb.newSmb = (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12) ? 13 : 10;
                        smb.wildReplacement = true;
                        spinManager_.addTriggerIcon(smb);
                    } else {
                        s.reel = i;
                        s.smb = a;
                        s.newSmb = (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12) ? 13 : 10;
                        s.wildReplacement = true;
                        spinManager_.addTriggerIcon(s);
                    }


                }

            } else {
                spinManager_.getReels()[i].removeSymbol(a);
            }
        }

    }

    function playTriggeredSmb_() {
        var iconN = -1;
        var triggerSymbol_ = spinManager_.getTriggerIcons();
        var add = false;

        for (var a in triggerSymbol_) {
            if (triggerSymbol_[a].played == undefined) {
                if (triggerSymbol_[a].wildReplacement == true) {

                    var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + triggerSymbol_[a].newSmb);
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    spinManager_.getReels()[triggerSymbol_[a].reel].removeSymbol(triggerSymbol_[a].smb);
                    spinManager_.getReelGroup(triggerSymbol_[a].reel).remove(triggerSymbol_[a]);
                    //var newIcon = spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2("upperIcon"+triggerSymbol_[a].smb, triggerSymbol_[a].newSmb);
                    spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                    spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                } else {
                    iconN = triggerSymbol_[a].smbNum;
                    add = true;
                    var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    triggerSymbol_[a].visible = false;

                    spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                    spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                    smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                    triggerSymbol_[a].played = true;
                    soundManager_.playSound("fsWin");
                }
            }
        }

    }

    function updateIcon_(obj) {
        obj.visible = true;
    }

    function triggerCompulsive_() {
        messageBox_.showMessageYN("game", "You have been using the slam stop feature", "would you like to enable Fast Play?\rThis can be adjusted in the settings menu.", enableCompulsive_, notEnableCompulsive_);
    }

    function enableCompulsive_() {
        framework.getMenu().setCompulsivePlayer_(true);
        framework.getSettings().setCompulsivePlayer(true);
        buttonManager_.applyState("NH");
    }

    function notEnableCompulsive_() {
        refuseCompulsive_ = true;
        framework.getMenu().setCompulsivePlayer_(false);
        framework.getSettings().setCompulsivePlayer(false);
        buttonManager_.applyState("NH");
    }

    function changeCompulsiveState_(state) {
        if (state == false) {
            compulsiveFlag_ = false;
            displayManager.groups.centralWin.thresHolds = compulsiveSettingBakup_;
        } else {
            displayManager.groups.centralWin.thresHolds = [9000, 1500, 2500];
            compulsiveFlag_ = true;
        }
    }

    function setDelRepeter_(obj) {
        var delayRepeater = obj.delayRepeater;
        var slowDownReel = [];
        var iconSound = [];
        var reelSound = [];
        var found = 0;
        var inc = 0;
        var min = 3;
        var nextToFind;

        for (var i = 0; i <= ReelConfig.numReels; i++) {
            slowDownReel[i] = false;
            iconSound[i] = false;
            reelSound[i] = false;
        }

//looking for feature symbols to slow down the reels creating some anticipation
        for (var i = 0; i < ReelConfig.numReels; i++) {
            var reelDone = false;
            for (var a = 0; a < 3; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 9) {

                    found++;
                    inc = inc + 3;
                    min = delayRepeater[i];
                    if (i == 4 && found < 3) {//play sound just when is possible to trigger

                    } else if (i == 4) {
                        iconSound[i] = true;
                    }
                    if (i == 3 && found < 2) {//play sound just when is possible to trigger

                    } else if (i == 3) {
                        iconSound[i] = true;
                    }
                    if (i == 2 && found < 1) {//play sound just when is possible to trigger

                    } else if (i == 2) {
                        iconSound[i] = true;
                    }
                    if (i == 1 && found < 0) {//play sound just when is possible to trigger

                    } else if (i == 1) {
                        iconSound[i] = true;
                    }
                    if (i == 0 && found < 0) {//play sound just when is possible to trigger

                    } else if (i == 0) {
                        iconSound[i] = true;
                    }
                }

                if (reelDone == false && found > 0 && i < ReelConfig.numReels) {
                    var skip = false;
                    if (i == 4 && found < 5) {
                        slowDownReel[i] = false;
                        iconSound[i] = false;
                        delayRepeater[i + 1] = delayRepeater[i] + 2;
                        skip = true;
                    }
                    if (i == 3 && found < 4) {
                        slowDownReel[i] = false;
                        iconSound[i] = false;
                        delayRepeater[i + 1] = delayRepeater[i] + 2;
                        skip = true;
                    }
                    if (i == 2 && found < 3) {
                        slowDownReel[i] = false;
                        iconSound[i] = false;
                        delayRepeater[i + 1] = delayRepeater[i] + 2;
                        skip = true;
                    }
                    if (i == 1 && found < 2) {
                        slowDownReel[i] = false;
                        iconSound[i] = false;
                        delayRepeater[i + 1] = delayRepeater[i] + 2;
                        skip = true;
                    }
                    if (i == 0 && found < 1) {
                        slowDownReel[i] = false;
                        iconSound[i] = false;
                        delayRepeater[i + 1] = delayRepeater[i] + 5;
                        skip = true;
                    }
                    if (skip == false) {
                        reelDone = true;
                        inc = inc + 2;
                        delayRepeater[i + 1] = Math.max(delayRepeater[i + 1], min) + inc;
                        slowDownReel[i + 1] = true;
                        reelSound[i + 1] = true;
                    }
                }
            }
        }

        for (var i = 0; i < ReelConfig.numReels; i++) {
            //console.log("loop " +delayRepeater[i] + " "+slowDownReel[i] + " "+reelSound[i] +" "+iconSound[i])
        }

        obj.slowDownReel = slowDownReel;
        obj.iconSound = iconSound;
        obj.delayRepeater = delayRepeater;
        obj.reelSound = reelSound;

        return obj;
    }

    function decreaseVolumeBG_(fadeT_O_) {
        fadeBg_ = true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs() == false && freeSpinsManager_.getFsWon()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.8);
            if (fadeT_O_ != null) {
                fadeBg_ = false;
                iFadeT_O_ = setTimeout(soundManager_.getBGSound("bgSlot").increaseVolExternal, fadeT_O_, 1500);
            }
        } else {
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000, 0.8);
            if (spinManager_.getSpinResp().freeSpin.stage>0){
                for (var i=1;i<=spinManager_.getSpinResp().freeSpin.stage;i++ ){
                    soundManager_.getBGSound("bgFs"+i).fadeOutBgSoundExternal(500, 0.8);
                }
            }
        }
    }

    function increaseVolumeBG_() {
        if (freeSpinsManager_.getIsInFs() == true) {
            if (spinManager_.getSpinResp()!=undefined && spinManager_.getSpinResp().freeSpin!= null && spinManager_.getSpinResp().freeSpin.stage !=null && spinManager_.getSpinResp().freeSpin.stage > 0) {
                for (var i = 1; i <= spinManager_.getSpinResp().freeSpin.stage; i++) {
                    soundManager_.getBGSound("bgFs" + i).increaseVolExternal( 500);
                }
            }
            soundManager_.getBGSound("bgFs").increaseVolExternal( 500);
        }
    }

    function removeWheelSound_() {
        soundManager_.getBGSound("bgSlot2").fadeOutBgSound(1000);
    }

    function addWheelSound_() {
        if (freeSpinsManager_.getIsInFs() == false) {
            waitingForWheel_=true;
            soundManager_.getBGSound("bgSlot2").fadeInBgSoundExternal(500, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime + 10, null);
        } else {
            soundManager_.getBGSound("bgFs" + spinManager_.getSpinResp().freeSpin.stage).fadeInBgSoundExternal(500, 1, soundManager_.getBGSound("bgFs").getSound().currentTime + 10, null);
        }
    }

    function fsLogoOut_() {
        displayManager_.getGroup("bg").visible = false;
        displayManager_.getGroup("frame").visible = false;
        displayManager_.getGroup("bgFS").visible = true;
        displayManager_.getGroup("frameFS").visible = true;
        //start side spotlights, they'll autostop when FS end
        lights_["l"][0].rotation=lights_["l"][0].rot;
        lights_["l"][1].rotation=lights_["l"][1].rot;
        lights_["l"][2].rotation=lights_["l"][2].rot;
        lights_["l"][3].rotation=lights_["l"][3].rot;
        lights_["r"][0].rotation=lights_["r"][0].rot;
        lights_["r"][1].rotation=lights_["r"][1].rot;
        lights_["r"][2].rotation=lights_["r"][2].rot;
        lights_["r"][3].rotation=lights_["r"][3].rot;

        randomizeLight_("l",0);
        randomizeLight_("l",1);
        randomizeLight_("l",2);
        randomizeLight_("l",3);
        randomizeLight_("r",0);
        randomizeLight_("r",1);
        randomizeLight_("r",2);
        randomizeLight_("r",3);
    }

    function fsHideTotPanel_() {
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("frame").visible = true;
        displayManager_.getGroup("bgFS").visible = false;
        displayManager_.getGroup("frameFS").visible = false;
        gcmCalls_("PAID", winManager_.getWinAmtCash());
        gcmCalls_("BALANCE",balanceManager_.getBalance());
    }

    var me = {
        initGame: initGame_,
        create: create_,
        spinAnimEnd: spinAnimEnd_,
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        doSpin: doSpin_,
        doAp: doAp_,
        betSelector: betSelector_,
        doPt: doPt_,
        doStop: doStop_,
        doWheel:doWheel_,
        closePt: closePt_,
        leaveGame: leaveGame_,
        backToGame: backToGame_,
        realDoSpin: realDoSpin_,
        evaluateWinnings: evaluateWinnings_,
        fakeEvent: fakeEvent_,
        fsEval: fsEval_,
        hideFs: hideFs_,
        updateBalance: updateBalance_,
        changeBet: changeBet_,
        upperSmbCallBack: upperSmbCallBack_,
        playTriggeredSmb: playTriggeredSmb_,
        changeCompulsiveState: changeCompulsiveState_,
        setDelRepeter: setDelRepeter_,
        getStickyWildNumber: getStickyWildNumber_,
        decreaseVolumeBG: decreaseVolumeBG_,
        increaseVolumeBG: increaseVolumeBG_,
        fsHideTotPanel: fsHideTotPanel_,
        fsLogoOut: fsLogoOut_,
        startRandomMessages: startRandomMessages_,
        stopRandomMessages: stopRandomMessages_,
        doWR: function () {
            if (choose_) return;
            communicationManager_.sendServletRequest("choose", "&pick=1");
            choose_ = true;
        },
        doSM: function () {
            if (choose_) return;
            communicationManager_.sendServletRequest("choose", "&pick=2");
            choose_ = true;
        },
        startFS: function () {
            lineManager_.clearLine();
            eventManager_.clearEvt();
            freeSpinsManager_.hideFsPanel();
            setTimeout(realDoSpin_, 2000, [false]);
        },
        getAutoPlayStatus: function () {
            return autoPlayManager_.getIsInAutoPlay();
        },
        getLineButtons: function () {
            return null;
        },
        getLineButton: function (line) {
            return null;
        },
        getOnGame: function () {
            return onGame_;
        },
        isSpinning: function () {
            return spinning_;
        },
        getSubstIcon: function (icon) {
            return {
                "subst": icon,
                "type": "icon"
            };
        },
        setWaitForSubstitution: function () {
        },
        setMessageOnOff: function (val) {
            messageOn_ = val;
        },
        getMessageOnOff: function () {
            return messageOn_;
        },
        getHlMaximumIcon: function () {
            //during the idle cycle the maximum disable icon will be 8. never disable wilds
            return (fsWon) ? 12 : 13;
        },
        getCompulsivePlayer: function () {
            return compulsiveFlag_;
        },
        startSounds: function () {
            if (communicationManager_.getResumeStatus().status.hand == "freespins") {
                soundManager_.playBgSound("bgFs");
            } else {
                soundManager_.playBgSound("bgSlot");
            }
        },
        setWildSimbs: function (value) {
        },
        setStickyWildSimbs: function (value) {
        },
        getStickyWildSimbs: function () {
            return [];
        },
        waitForSpin: function () {
            if (freeSpinsManager_.getIsInFs() == true) {
                return true; // forcing slow speed
            } else {
                return false;
            }
        },
        isReelWilded: function (num) {
            return wildManager_.isReelWilded(num);
        },
        wildReelAnim: function (num) {
            return wildManager_.wildReelWinAnim(num);
        },
        getStickyWildManager: function () {
            return false;
        },
        getLastFSTime: function () {
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0] != null) ? Math.max(lineManager_.getTotalDuration() -1500,500) : 500;
        },
        getFsIcon: function () {
            return "";
        },
        lineCompletion: function (value) {
            //console.log("-----------------------line completion----------------------------!!!!!!")
            lineCompletion_ = value;
        },
        getSymbolWilded: function (reel, smb) {
            return false;
        },
        checkSpecialSymbol: function (num,spec) {
            if (num == 10 && spec=="new") return true;
            if (num == 12) return true;
            return false;
        },
        playBgLights: function () {
            logoLightsR_.animations.play("anim", 24, true);
            logoLightsL_.animations.play("anim", 24, true);
        },
        stopBgLights: function () {
            logoLightsR_.animations.stop();
            logoLightsL_.animations.stop();
        }
    }

    return me;
}
