/**
 * KiS Framework, Created by Callan on 03/01/2017.
 */

(function() {

    //GridInput class
    function GridInput() {

        var _this = this;

        //Initialise object
        function _init() {

            _this.value = '0'; //Current value

            //Generate number input template
            var template = '';
            template += '<section id="numberInput">';
            template += '<div class="wrapper">';
            template += '<h2 id="numberInputValue">£0.00</h2>';
            template += '<ul>';

            //Loop through options for input
            for (var value in _this.inputs) {

                //If this is delete/ok option
                if (_this.inputs[value] === 'Delete' || _this.inputs[value] === 'Ok') {
                    template += '<li id="numberInput' + _this.inputs[value] + '" class="number__input__control">' + _this.inputs[value].toUpperCase() + '</li>'; //Add delete/ok option
                }
                //Else, normal number input
                else {
                    template += '<li class="number__input' + (_this.inputs[value] === '.' || _this.inputs[value] === 0 ? ' decimal__point' : '') + '" data-number="' + value + '">' + _this.inputs[value] + '</li>'; //Add normal number input
                }

            }

            template += '</ul>';
            template += '</div>';
            template += '</section>';

            $('#gameFramework').append(template); //Add template to game framework

            //When a number is clicked
            $('.number__input').on('touchstart', function(e) {
                _this.add(_this.inputs[$(e.target).data('number')]); //Attempt to add value to current focus value
            });

            //When delete is clicked
            $('#numberInputDelete').on('touchstart', function(e) {
                _this.remove(); //Remove last value
            });

        }

        _init(); //Initialise object

    }

    var p = GridInput.prototype;

    p.inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Delete', '.', 0, 'Ok']; //Values in input

    //Show grid input
    p.show = function(_callback) {

        var _this = this;
        var callback = _callback || function() {}; //Option callback for passing inputted value

        //Reset value
        _this.value = '0';
        $('#numberInputValue').html(loginVars.getCurrencySmb() + '0');

        //When OK is clicked
        $('#numberInputOk').on('touchstart', function(e) {

            callback(Number(_this.value)); //Execute callback

            $('#numberInputOk').off('touchstart'); //Remove listener

            fadeElement($('#numberInput'), 'out');

            //$('#numberInput').removeClass('show'); //Hide input

        });

        fadeElement($('#numberInput'), 'in');

        //$('#numberInput').addClass('show'); //Show input

    }

    //Add value to current focus value
    p.add = function(value) {

        //Restrict to 10 digits + decimal place
        if (this.value.length < 10) { //it was 12 but was taking too much space

            //Handle decimal point button click
            if (value === '.') {

                //If no decimal point
                if (this.value.indexOf('.') === -1) {
                    this.value += value; //Add to current value
                }

            }
            //Handle normal number input
            else {

                //If current value is 0
                if (this.value === '0') {
                    this.value = '' + value;
                }
                //Else, if there is a decimal point
                else if (this.value.indexOf('.') > -1) {

                    //Check no more than 2 decimal places
                    if (this.value.slice(this.value.indexOf('.') + 1).length < 2) {
                        this.value += value;
                    }

                }
                //Else, just add number on
                else {
                    this.value += value;
                }

            }

            $('#numberInputValue').html(loginVars.getCurrencySmb() + this.value); //Update template

        }

    }

    //Remove last value
    p.remove = function() {

        this.value = this.value.length === 1 ? '0' : this.value.slice(0, -1); //Update value

        $('#numberInputValue').html(loginVars.getCurrencySmb() + this.value); //Update template

    }

    window.gridInput = new GridInput(); //Create new grid input

}());
