/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function BetConsoleValueBox(target, targetValues) {

    ConsoleValueBox.call(this); //call to super object

    var _this = this;

    this.target_ = target;
    this.targetValues_ = targetValues;

    //overide
    this.setValue = function() {

        this.boxInfo_.value = this.targetValues_[this.boxInfo_.step];

        updateDisplay();

        logger("SET VALUE AMOUNT2:  text: " + this.boxInfo_.value );
        $(this.targetValue).text(balanceManager_.geBalanceObj().currency + "" + this.boxInfo_.value);
        // TweenMax.to($(this.targetValue), 0.15, { opacity: 0, onComplete: $(this.targetValue).text, onCompleteParams: [this.boxInfo_.value], onCompleteScope: $(this.targetValue) });
        // TweenMax.to($(this.targetValue), 0.15, { opacity: 1, delay: 0.15 });

    }

    //overide
    this.setListeners = function() {

         updateDisplay();

         $('body').on('touchstart mousedown', function(e) {

            logger("body click");

            if (!$('#betValueContainer').hasClass("hidden")) {
                _this.animateItem($("#betValueContainer"));
                
            }

        });
        $('#betValueContainer').on('touchstart mousedown', function(e) {
            e.stopPropagation(); //stop above being fired

            //logger("body click");

        });

        $("#useCash").prop("checked", true);

        $("#betMaxBox").on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            //custom code here
            _this.betMax();

        });

        $('#useCash:checkbox').change(
            function() {

                _this.toggleCashCoins($(this).is(':checked'));


            });
        $('#useCoins:checkbox').change(
            function() {

                _this.toggleCashCoins(!$(this).is(':checked'));


            });
    }

    this.betMax = function() {

        this.boxInfo_.step = this.targetValues_.length - 1;
        this.setValue();
        soundManager_.playSound("click");
        if (ReelConfig.newUI) {
            window.BET_VALUES.max() //Set max bet
        }
    }

    this.toggleCashCoins = function(useCash) {

        // Check #x
        $("#useCash").prop("checked", useCash);
        // Uncheck #x
        $("#useCoins").prop("checked", !useCash);

        if (useCash== true)
            $("#credTxt").text("");
        else
            $("#credTxt").text("Coins");


        balanceManager_.toggleCredits();//

        updateDisplay();

    }

    function setValueAmount_(value){

        logger("SET VALUE AMOUNT: " + value);

        for(var i = 0; i < _this.targetValues_.length; i++){
            if(Number(value) === Number(_this.targetValues_[i])){
                _this.boxInfo_.value = _this.targetValues_[i];
                _this.boxInfo_.step = i;

                $(_this.targetValue).text(balanceManager_.geBalanceObj().currency + "" + Util.formatNumb(value,2)); //add currency, below tween was no longer working
                //TweenMax.delayedCall(1,$(_this.targetValue).text, [_this.boxInfo_.value], $(_this.targetValue));

                logger("SET VALUE AMOUNT: " + i + " text: " + $(_this.targetValue).text());
            }
        }

    }

    function updateDisplay(){
        if (balanceManager_ != null) {
            framework.setBetValue(_this.boxInfo_.value);
        }
    }

    function toggleOptionsOpen_(){
         _this.animateItem($("#betValueContainer"));
        
    }

    function closeSettings_(){
       
        _this.hideOptions($("#betValueContainer"));
    }

    var me = {

        getBoxInfo: function() {
            return _this.boxInfo_;
        },
        toggleOptionsOpen: function(){
            return toggleOptionsOpen_();
        },
        closeSettings: function(){
            closeSettings_();

        },
        setValueAmount:setValueAmount_
      
    }

    this.initClass_();

    return me;

}

BetConsoleValueBox.prototype = Object.create(ConsoleValueBox.prototype);
BetConsoleValueBox.prototype.constructor = BetConsoleValueBox;
