/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function FrameworkSettings(apButton, autoPlayOptions) {

    var spaceToSpin_ = false;
    var showHelpOnLoad_ = true;
    var swipeToSpin_ = false;
    var compulsivePlayer_=false;

    var sounds_ = {
        effects: true,
        background: true,
        allSounds: true
    };

    var apSettings_;


    function initClass_(apButton, autoPlayOptions) {
        //we could store and get settiung from local storage
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {
            if (framework.isTouch() && localStorageGetItem('slots__sound') === 'false') {
                sounds_.allSounds = false;
            }
        }

        if (localStorageGetItem('slots__sound') === "false" && !framework.isTouch()) {
            toggleAllSound_();
        }

        if (localStorageGetItem('space__to__spin') === "true") {
            setSpaceToSpin_(isSpaceBarAllowed_());
        } else {
            setSpaceToSpin_(false);
        }

        //default to true
        if (localStorageGetItem('show__help__on__load__' + gameParams.folderName)) {

            if (localStorageGetItem('show__help__on__load__' + gameParams.folderName) === "true") {
                setHelpOnLoad_(true);
            } else {
                setHelpOnLoad_(false);
            }

        }


        if (localStorageGetItem('swipe__to__spin') === "true") {
            toggleSwipeToSpin_();
        }


        apSettings_ = new AutoPlaySettings(apButton, autoPlayOptions);

    }

    function setCompulsivePlayer_(isOn){
        compulsivePlayer_=isOn;
        gameClass_.changeCompulsiveState(isOn);
        if (compulsivePlayer_)
            clientMessageSend('quickspin-enable');
        else
            clientMessageSend('quickspin-disable');
    }

    function setSpaceToSpin_(isOn) {
        spaceToSpin_ = isOn;

        localStorageSetItem("space__to__spin", isOn);
    }

    function setSoundEffects_(isOn) {

        sounds_.effects = isOn;

        isOn ? soundManager_.resumeEffects() : soundManager_.stopEffects();

        // checkAllSounds();

    }

    function checkAllSounds() {

        if (!sounds_.effects && !sounds_.background) {
            soundManager_.stopAll();
            sounds_.allSounds = false;
            localStorageSetItem('slots__sound', sounds_.allSounds);
        }
    }

    function setBackgroundMusic_(isOn) {

        sounds_.background = isOn;

        //isOn ? true : false;
        isOn ? soundManager_.resumeBgSound() : soundManager_.stopBgSound();

        //checkAllSounds();

    }

    function toggleAllSound_() {
        console.log("toggle sounds")
        sounds_.allSounds = !sounds_.allSounds;
        sounds_.background =sounds_.allSounds;
        sounds_.effects=sounds_.allSounds;
        sounds_.allSounds ? soundManager_.resumeAll() : soundManager_.stopAll();

        localStorageSetItem('slots__sound', sounds_.allSounds);

        framework.setSound(sounds_.allSounds);
        framework.setMusic(sounds_.allSounds);

        if (framework.getMenu()!=undefined) {
            var s = framework.getMenu().getSoundSwitch();
            s.doSwitch(sounds_.allSounds);
            s = framework.getMenu().getMusicSwitch();
            s.doSwitch(sounds_.allSounds);
        }
    }

    function getSpaceEnabled_() {
        return spaceToSpin_;
    }

    function setHelpOnLoad_(isOn) {

        showHelpOnLoad_ = isOn;

        localStorageSetItem("show__help__on__load__" + gameParams.folderName, isOn);

    }

    function getHelpOnLoad_() {

        if (showHelpOnLoad_ === "true") {
            showHelpOnLoad_ = true;
        }
        if (showHelpOnLoad_ === "false") {
            showHelpOnLoad_ = false;
        }

        return showHelpOnLoad_;
    }

    function toggleSwipeToSpin_(isOn) {

        swipeToSpin_ = !swipeToSpin_;

    }


    var me = {

        getSpaceEnabled: getSpaceEnabled_,
        setSpaceToSpin: setSpaceToSpin_,
        setSoundEffects: setSoundEffects_,
        setBackgroundMusic: setBackgroundMusic_,
        toggleAllSounds: toggleAllSound_,
        setHelpOnLoad: setHelpOnLoad_,
        getHelpOnLoad: getHelpOnLoad_,
        toggleSwipeToSpin: toggleSwipeToSpin_,
        setCompulsivePlayer:setCompulsivePlayer_,
        getCompulsivePlayer:function () {
          return compulsivePlayer_;
        },
        getAutoPlaySettings: function() {
            return apSettings_;
        },
        getSwipeToSpin: function() {
            return swipeToSpin_;
        },
        getSounds: function() {
            return sounds_;
        }

    }

    initClass_(apButton, autoPlayOptions);

    return me;
}
