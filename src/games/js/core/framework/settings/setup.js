/**
 * Class wrapper for game setup JSON object
 */
function Setup(json) {
	
	var json_ = json;
	
	json_.lines_assoc = {};		//Payline associative object
	json_.paytable_assoc = {};	//Paytable associative object

	if (json_.lines!=undefined) {
        //Make paylines array an associative object
        $.each(json_.lines, function (key, line) {

            line.payline = line.config.split(''); //Also add line as array rather than string

            json_.lines_assoc[line.id] = {
                'config': line.config,
                'payline': line.config.split('')
            };

        });
    }
	//Make paytable array an associative object
	$.each(json_.paytable, function(key, symbol) {
		
		var payout = {}; //New associative payout object for symbol

		//Loop through payout
		$.each(symbol.payout, function(key, value) {
			
			//Generate payout object without wild
			if (key != 'wild') {
				payout[key] = value;
			}
			
		});
		
		//Add new symbol object to associative array
		json_.paytable_assoc[symbol.id] = {
			'wild': symbol.payout.wild,
			'payout': payout
		};

	});
	
	//Return array of paylines
	function getPaylines_() {
		return json_.lines;
	}

	//Return array of paylinesLen
	function getPaylinesNum_() {
		return (json.status!=undefined && json.status.coinsPlayed!=undefined)? json.status.coinsPlayed:0;
	}

	//Get specific payline configuration
	function getPayline_(lineID) {
		return json_.lines_assoc[lineID] ? json_.lines_assoc[lineID].config : undefined;
	}
	
	//Get specific payline configuration as array
	function getPaylineArray_(lineID) {
		return json_.lines_assoc[lineID] ? json_.lines_assoc[lineID].payline : undefined;
	}
	
	//Get wild symbol for a paytable symbol
	function getWildSymbol_(symbolID) {
		return json_.paytable_assoc[symbolID] ? json_.paytable_assoc[symbolID].wild[0] : undefined;
	}
	
	//Get the symbol pay value for a specified amount of matched symbols
	function getSymbolValue_(symbolID, amount) {
		
		//If the specified amount is the 'wild' symbol
		if (amount.toString().toLowerCase() == 'wild') {
			return getWildSymbol_(symbolID); //Use get wild method
		}
		
		//Else, return pay value
		return json_.paytable_assoc[symbolID] ? json_.paytable_assoc[symbolID].payout[amount] : undefined;
		
	}
	
	//Get all symbol pay out values
	function getSymbolValues_(symbolID) {
		return json_.paytable_assoc[symbolID] ? json_.paytable_assoc[symbolID].payout : undefined;
	}

    //Get max win for game
    function getMaxWin_() {
        return json_.status.maxWin;
    }

	//Return class methods
	return {
		getPaylinesNum:getPaylinesNum_,
		getPaylines: getPaylines_,
		getPayline: getPayline_,
		getPaylineArray: getPaylineArray_,
		getWildSymbol: getWildSymbol_,
		getSymbolValue: getSymbolValue_,
		getSymbolValues: getSymbolValues_,
        getMaxWin: getMaxWin_
	}

}
