window.gameWrapper = (function() {
	var gameWrapper = {
		gameLoadingStarted: function() {
			sendToWrapper({
				'wrapperAction': 'gameLoadingStarted'
			});
		},
		gameLoadingEnded: function() {
			sendToWrapper({
				'wrapperAction': 'gameLoadingEnded'
			});
		},
		// Say to game wrapper that game is busy. Free spins, bonus game or spin are running
		setBusy: function() {
			sendToWrapper({
				'idle': false
			});
		},
		// Say to game wrapper that game is in Idle state. Game wrapper will be able to show some screens
		setIdle: function() {
			sendToWrapper({
				'idle': true
			});
		},

		// goTo URL features

		exitGame: function() {
			sendToWrapper({
				'wrapperAction': 'exitGame'
			});
		},
		gotoAccountsPage: function() {
			sendToWrapper({
				'wrapperAction': 'gotoAccountsPage'
			});
		},
		gotoDepositPage: function() {
			sendToWrapper({
				'wrapperAction': 'gotoDepositPage'
			});
		},

		/*
			Custom messaging
		 */
		getOperatorInformation: function() {
			sendToWrapper({
				'wrapperAction': 'getOperatorInformation'
			});
		},
		sendCustomAction: function(action, data) {
			var _data = data || {};
			sendToWrapper({
				'customWrapperAction': action,
				'data': _data
			});
		},

		/*
			Methods to override
		 */

		onWrapperActivated: function() {
			console.log('%c Wrapper Activated ', 'background: green; color:white;');
		},
		onWrapperDeactivated: function() {
			console.log('%c Wrapper Deactivated ', 'background: green; color:white;');
		},
		onWrapperMessage: function(data) {
			console.log('Wrapper Message', data);
		}
	};

	function onWrapperActivityChanged(gameWrapperBusy) {
		if (!gameWrapper) {
			return false;
		}
		// activity means that gameWrapper busyness can be true or false
		if (gameWrapperBusy) {
			// that means that wrapper was activated, and game controls should be disabled, autospin stopped etc.
			if (typeof gameWrapper.onWrapperActivated === 'function') {
				gameWrapper.onWrapperActivated();
			}
		} else {
			// wrapper is deactivated, user can play the game
			if (typeof gameWrapper.onWrapperDeactivated === 'function') {
				gameWrapper.onWrapperDeactivated();
			}
		}
	}

	// send message to wrapper
	function sendToWrapper(data) {
		if (!data) {
			return;
		}
		window.parent.postMessage(JSON.stringify(data), '*');
	}

	// subscribe to messages from game wrapper client
	window.addEventListener('message', function(message) {
		var data;

		try {
			data = JSON.parse(message.data);
		} catch (e) {
			return;
		}

		if (data.gameWrapper !== undefined) {
			onWrapperActivityChanged(data.gameWrapper);
			// true : wrapper is on
			// false: wrapper is off
		}

		if (data.customMessage !== undefined) {
			gameWrapper.onWrapperMessage(data.customMessage);
		}
	}, false);

	return gameWrapper;
})();

(function() {

    /**
     * @file Defines GameiomHandler class.
     * @author Callan Heard <callan.heard@1x2gaming.com>
     */

    window.f1x2 = window.f1x2 || {}; //Namespace

    /**
     * @class f1x2.GameiomHandler
     * @param {Function} pause_ Function to pause entire game functionality
     * @param {Function} resume_ Function to resume entire game functionality
     * @desc Listens for gameplay start/stop and overrides onWrapperActivated/Deactivated callbacks
     */
    function GameiomHandler(pause_, resume_) { this.init(pause_, resume_); }

    /**
     * @alias f1x2.GameiomHandler.init
     * @memberof f1x2.GameiomHandler.prototype
     * @param {Function} pause_ Function to pause entire game functionality
     * @param {Function} resume_ Function to resume entire game functionality
     * @returns {undefined}
     * @desc Class initialisation function
     */
    function init_(pause_, resume_) {

        var this_ = this;

        var details     = window.gameParams || window.gameInfo || {};
        var clientName  = details.clientName || '';

        //If on Gameiom
        if (clientName.toUpperCase().match(/GAMEIOM/)) {

            //Override pause/resume callbacks
            window.gameWrapper.onWrapperActivated   = pause_ || function() {};
            window.gameWrapper.onWrapperDeactivated = resume_ || function() {};

            //Initialise listener
            window.addEventListener('f1x2gan', function(_e) {

                var msg     = typeof window.CustomEvent === 'object' ? _e.detail.detail : _e.detail;    //Message text
                var func    = this_.funcs[msg];                                                         //Function to execute

                func && window.gameWrapper[func](); //Exceute function if required

            });

        }

    }

    var p = GameiomHandler.prototype; //Class prototype

    /**
     * @member {string} funcs
     * @memberof f1x2.GameiomHandler.prototype
     * @static
     * @desc Gameiom gameWrapper functions to execute for given message state
     */
    p.funcs = {

        'playStarted': 'setBusy',
        'playStopped': 'setIdle',
        'gameClosing': 'exitGame'

    };

    //Class methods
    p.init = init_;

    window.f1x2.GameiomHandler = GameiomHandler; //Bind class to namespace

})();
