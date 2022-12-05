/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function ConsoleValueBox(target, targetValues) {

    this.target_ = target;
    this.targetValues_ = targetValues;

    this.boxInfo_ = {
        value: "1.00",
        step: 0
    };

    var _this = this;

    this.initClass_ = function() {

        this.buttonUp = $(this.target_).find(".box__right");
        this.buttonDown = $(this.target_).find(".box__left");
        this.targetValue = $(this.target_).find(".box__value");

        this.boxInfo_.value = this.targetValues_[1];
        this.boxInfo_.step = 1;

        this.setValue();

        this.setListeners();

        $(this.buttonDown).find("img").attr("src", "gui/generic/img/desktop/svg/arrow-left.svg");
        $(this.buttonUp).find("img").attr("src", "gui/generic/img/desktop/svg/arrow-right.svg");

        $(this.buttonUp).on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            //custom code here
            _this.valueUp();

            //If "NEW_UI"
            if (ReelConfig.newUI) {

                //If autoplay amount increased
                if (_this.target_[0].id === 'autoPlayNumber') {

                    //Increase autoplay value
                    window.AUTOSPIN_VALUES.increase()
                    window.newUI.autospin().text = window.AUTOSPIN_VALUES.value()

                }

                //If bet amount increased
                else if (_this.target_[0].id === 'betValueBox') {

                    //Increase bet amount
                    window.BET_VALUES.increase()
                    window.newUI.bet().text = "<span class='bet_currency'>" + balanceManager_.geBalanceObj().currency + "</span>" + "" + window.BET_VALUES.value()

                }

            }

        });

        $(this.buttonDown).on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            //custom code here
            _this.valueDown();

            //If "NEW_UI"
            if (ReelConfig.newUI) {

                //If autoplay amount decreased
                if (_this.target_[0].id === 'autoPlayNumber') {

                    //Decrease autoplay amount
                    window.AUTOSPIN_VALUES.decrease()
                    window.newUI.autospin().text = window.AUTOSPIN_VALUES.value()

                }

                //If bet amount decreased
                else if (_this.target_[0].id === 'betValueBox') {

                    //Decrease bet amount
                    window.BET_VALUES.decrease()
                    window.newUI.bet().text = "<span class='bet_currency'>" + balanceManager_.geBalanceObj().currency + "</span>" + "" + window.BET_VALUES.value()

                }

            }


        });

    }

    this.animateItem = function(target) {

        if ($(target).hasClass("hidden")) {
            //$(target).removeClass("hidden");
            fadeElement(target, 'in');
        } else {
           //this.hideOptions(target);
           fadeElement(target, 'out');
        }

    }

    this.hideOptions = function(target){
        //$(target).addClass("hidden");
        fadeElement(target, 'out');
    }

    this.setListeners = function(){


    }

    this.valueUp = function() {

        logger("click: valueUp");

        this.boxInfo_.step = Math.min(this.boxInfo_.step + 1, this.targetValues_.length - 1);
        this.setValue();
        soundManager_.playSound("click");
    }

    this.valueDown = function() {
        this.boxInfo_.step = Math.max(this.boxInfo_.step - 1, 0);
        this.setValue();
        soundManager_.playSound("click");
    }

    this.setValue = function() {

        this.boxInfo_.value = this.targetValues_[this.boxInfo_.step];

    }


}

ConsoleValueBox.prototype.constructor = ConsoleValueBox;