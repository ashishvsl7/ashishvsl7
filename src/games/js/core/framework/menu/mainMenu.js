/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function MainMenu() {

    this.menuTab;

    var this_ = this;

    this_.data;             //Request bet history response
    this_.displayBet = {};  //The bet to display
    this_.betHistory = [];  //Array of previous bets

    function initClass_() {

        var betItemClick = true;
        var spinItemClick = true;

        $(".game__history__list").on("touchstart", "li > p", function(event) {
            betItemClick = true;
        });

        $(".game__history__list").on("touchmove", "li > p", function(event) {
            betItemClick = false;
        });

        $(".game__history__list").on("touchstart", "li > ul > li", function(event) {
            spinItemClick = true;
        });

        $(".game__history__list").on("touchmove", "li > ul > li", function(event) {
            spinItemClick = false;
        });

        //History bet item on click event listener
        $(".game__history__list").on("touchend mousedown", "li > p", function(event) {

            if (betItemClick) {

                event.stopPropagation();
                event.preventDefault();

                //If list is down
                if ($(event.currentTarget).siblings("ul").css("display") == "block") {
                    $(event.currentTarget).siblings("ul").slideUp(); //Slide it up
                }
                //Else, list is up
                else {

                    $(".game__history__list > li > ul").slideUp();      //Slide up any down
                    $(event.currentTarget).siblings("ul").slideDown();  //Slide list down

                }

            }

        });

        //History spin item on click event listener
        $(".game__history__list").on("touchend mousedown", "li > ul > li", function(event) {

            if (spinItemClick) {

                event.stopPropagation();
                event.preventDefault();
                //Get bet/spin IDs
                var betnum = event.currentTarget.dataset.betnum;
                var betid = event.currentTarget.dataset.betid;
                var spinid = event.currentTarget.dataset.spinid;
                var spinidNewEngine = event.currentTarget.dataset.spinidnew;
                console.log("open bet "+ this_.displayBet.status)
                if ( this_.betHistory[betnum].status!="DECLINED"){
                    //Set bet/spin details to be displayed
                    this_.displayBet = this_.betHistory[betnum];
                    this_.displayBet.spin = spinid;

                    //Get spin result (and show replay)
                    if (ReelConfig.slotEngine=="IntegratedSlots"){
                        //new engine
                        communicationManager_.sendServletRequest("replay", "spinID=" + spinidNewEngine + "&betID=" + betid);
                    }else{
                        communicationManager_.sendServletRequest("replay", "betid=" + betid);
                    }
                }
            }

        });

        //If "NEW_UI"
        if (ReelConfig.newUI) {
            $(".game__history__replay > .__details > button").html('&xlarr;');
        }

        //Old ui
        else {

            $(".game__history__replay > .__details > button").html("<img src=\"" + frameworkAssets.assets.menuBtnClose + "\" alt=\"Back Button\" />"); //Set history close button icon
            $(".game__history__replay > .__content .__reel").css("background-image", "url('" + gameAssets.assets.bg_m + "')");                         //Set replay reel background image

        }

        //Replay back button on click event listener
        $(".game__history__replay > .__details > button").on("click", function(event) {

            event.stopPropagation();
            event.preventDefault();

            //$(".game__history__replay").addClass('hidden'); //Hide replay

            fadeElement($(".game__history__replay"), 'out');

            /*
                        //Show history list
                        $(".game__history__list, #gameHistoryTip")
                            .removeClass('hidden')
                            .css('display', 'block');
            */

            fadeElement('.game__history__list', 'in');
            fadeElement('.game__history__tip', 'in');

            //Wait for replay to hide
            setTimeout(function() {

                //Reset win/loss lines nav
                $(".game__history__replay > .__content .__lines__nav > a").removeClass("active");
                $(".game__history__replay > .__content .__lines__nav > [target = '.__wins']").addClass("active");
                $(".game__history__replay > .__content .__lines > ul").removeClass("show");
                $(".game__history__replay > .__content .__lines > .__wins").addClass("show");

                //Reset history replay content scroll bar
                $(".game__history__replay > .__content").scrollTop(0);

            }, 400);

        });

        $(".game__history__replay > .__content .__lines__nav > a").on("touchmove", function(event) {

            event.stopPropagation();
            event.preventDefault();

        });

        //Button click between winning/losing lines info
        $(".game__history__replay > .__content .__lines__nav > a").on("click", function(event) {

            event.stopPropagation();
            event.preventDefault();

            var target = event.currentTarget.target; //Get target list

            //Swap active nav button
            $(".game__history__replay > .__content .__lines__nav > a").removeClass("active");
            $(event.currentTarget).addClass("active");

            //Swap shown list
            $(".game__history__replay > .__content .__lines > ul").removeClass("show");
            $(".game__history__replay > .__content .__lines > " + target).addClass("show");

        });

        Draggable.create('.game__history__replay > .scrollable__content', {type: 'scrollTop', throwProps: true, cursor: 'default'});

    }

    function _ucFirst(_string) {
        return toUpperCase(_string.charAt(0)) + _string.slice(1).toLowerCase();
    }

    this.toggleMenu = function(option, target, button, isReality) {

        soundManager_.playSound("click");

        framework.hidePaytable();

        if (isReality || ($(target).hasClass('hidden') && buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable())) {

            //$(target).removeClass("hidden");
            fadeElement(target, 'in');

            //$(this).find("img").attr("src", "gui/generic/img/desktop/svg/menu-close-btn.svg");

            //HERE IS WHERE OLD UI BUTTONS ARE HIDDEN FROM INTERFACE - NEED TO DECIDE HOW TO HANDLE HIDING NEW UI BUTTONS
            $("#bet").addClass("hidden");
            $("#spin").addClass("hidden");

            // $("#paytableMobile").addClass('hidden');

            if (option) {
                this_.menuTab.activateTab(option);
            }

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {

                //If mobile
                if (framework.isTouch()) {

                    //window.newUI.menu().toggleMenu()    //Apply menu styling to button

                    document.getElementById('arch').classList.add('hidden') //Hide portrait arch

                    //Loop through all buttons
                    for (var i = 0; i < window.newUI.buttons.length; i++) {

                        var button = window.newUI.buttons[i]; //Store button
                        button.visible = false; //Hide button from UI

                    }

                }

                //Desktop
                else {

                    window.newUI.menu().state = 'CLOSE' //Set close button state

                    //If navigating to game history
                    if (option) {

                        //Reset game history nodes to default state
                        document.getElementsByClassName('game__history__replay')[1].style.opacity = 0
                        document.getElementsByClassName('game__history__list')[1].classList.remove('hidden')

                        //Make game history list navigatable
                        fadeElement($(".game__history__replay"), 'out');

                        fadeElement('.game__history__list', 'in');
                        fadeElement('.game__history__tip', 'in');

                        //Wait for replay to hide
                        setTimeout(function() {

                            //Reset win/loss lines nav
                            $(".game__history__replay > .__content .__lines__nav > a").removeClass("active");
                            $(".game__history__replay > .__content .__lines__nav > [target = '.__wins']").addClass("active");
                            $(".game__history__replay > .__content .__lines > ul").removeClass("show");
                            $(".game__history__replay > .__content .__lines > .__wins").addClass("show");

                            //Reset history replay content scroll bar
                            $(".game__history__replay > .__content").scrollTop(0);

                        }, 400);

                    }

                }

            }

            //old ui
            else {
                $(button).find("img").attr("src", frameworkAssets.assets.menuBtnClose);
            }

            framework.hideAllSettings();


            this_.requestBetHistory();//get history
            gameClass_.leaveGame();
        } else {
            //$(target).addClass("hidden");
            fadeElement(target, 'out');

            $("#paytableMobile").removeClass('hidden');

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {

                //If mobile
                if(framework.isTouch()) {

                    //window.newUI.menu().toggleMenu()   //Apply menu styling to button
                    document.getElementById('arch').classList.remove('hidden') //Show portrait arch

                    //Loop through all buttons
                    for (var i = 0; i < window.newUI.buttons.length; i++) {

                        var button = window.newUI.buttons[i]; //Store button
                        button.visible = true; //Hide button from UI
                    }

                }

                //Desktop
                else {
                    window.newUI.menu().state = 'MENU'
                }

            }

            //Old ui
            else {
                $(button).find("img").attr("src", frameworkAssets.assets.menuBtn);
            }

            $("#bet").removeClass("hidden");
            $("#spin").removeClass("hidden");
            gameClass_.backToGame();

        }

    }

    //Look up currency symbol for code
    function _currencyLookup(currency){

        var currencySym = "";

        switch(currency) {
            case  "FUN":  currencySym="FUN"; break;
            case  "ARS":  currencySym="$";   break;
            case  "AUD":  currencySym="$";   break;
            case  "BBD":  currencySym="$";   break;
            case  "BRL":  currencySym="$";   break;
            case  "GBP":  currencySym="£";   break;
            case  "CAD":  currencySym="$";   break;
            case  "CLP":  currencySym="$";   break;
            case  "CNY":  currencySym="¥";  break;
            case  "CZK":  currencySym="Kč";   break;
            case  "DKK":  currencySym="kr";  break;
            case  "XCD":  currencySym="$";   break;
            case  "EGP":  currencySym="£";   break;
            case  "EEK":  currencySym="k";   break;
            case  "EUR":  currencySym="€";   break;
            case  "HKD":  currencySym="元";   break;
            case  "HUF":  currencySym="F";   break;
            case  "ISK":  currencySym="k";   break;
            case  "INR":  currencySym="₹";   break;
            case  "IDR":  currencySym="R";   break;
            case  "ILS":  currencySym="₪";   break;
            case  "JMD":  currencySym="$";   break;
            case  "JPY":  currencySym="¥";   break;
            case  "LVL":  currencySym="L";   break;
            case  "LBP":  currencySym="£";   break;
            case  "LTL":  currencySym="L";   break;
            case  "MYR":  currencySym="R";   break;
            case  "MXN":  currencySym="$";   break;
            case  "NAD":  currencySym="$";   break;
            case  "NPR":  currencySym="₨";   break;
            case  "NZD":  currencySym="$";   break;
            case  "NOK":  currencySym="kr";  break;
            case  "PHP":  currencySym="P";   break;
            case  "PLN":  currencySym="Z";   break;
            case  "SGD":  currencySym="$";   break;
            case  "ZAR":  currencySym="R";   break;
            case  "KRW":  currencySym="₩";   break;
            case  "LKR":  currencySym="₨";   break;
            case  "SEK":  currencySym="Kr";  break;
            case  "CHF":  currencySym="F";   break;
            case  "THB":  currencySym="฿";   break;
            case  "TRY":  currencySym="L";   break;
            case  "USD":  currencySym="$";   break;
            case  "VEF":  currencySym="B";   break;
            case  "IQD":  currencySym="ع.د"; break;
            case  "ZMW":  currencySym="ZK";  break;
            case  "VND":  currencySym="₫";   break;
            case  "AMD":  currencySym="AMD"; break;
        }
        return currencySym;

    }

    function formatDate(_date) {

        var year    = _date.getFullYear()
        var month   = _date.getMonth() < 9 ? '0' + (_date.getMonth() + 1) : (_date.getMonth() + 1);
        var day     = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate();
        var hours   = _date.getHours() < 10 ? '0' + (_date.getHours() - isBST) : (_date.getHours() - isBST);
        var minutes = _date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes();
        var seconds = _date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds();

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    }

    var modRichie = {

        7015: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 12) {
                v = '13';
            }

            return v;

        },

    }

    var modPMW = {

        7016: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 7) {
                v = '7GH';
            }
            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }

            return v;

        },
        7019: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 7) {
                v = '7GH';
            }
            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }

            return v;

        },
        7029: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 5) {
                v = '5GH';
            }
            if (s === 6) {
                v = '6GH';
            }
            if (s === 7) {
                v = '7GH';
            }
            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 12) {
                v = '12GH';
            }

            return v;

        },
        7022: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 7) {
                v = '7GH';
            }
            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }

            return v;

        },
        7023: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 5) {
                v = '5GH';
            }
            if (s === 6) {
                v = '6GH';
            }
            if (s === 7) {
                v = '7GH';
            }
            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 11) {
                v = '11GH';
            }

            return v;

        },

        7025: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }
            if (s === 15) {
                v = '13GH';
            }

            return v;

        },
        7027: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }


            return v;

        },
       7127: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }


            return v;

        },
       7227: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }


            return v;

        },
        7028: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }
            return v;
        },
        7128: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }
            return v;
        },
        7228: function(s_, bet_) {

            var v = false;


            var s = Number(s_)

            if (s === 8) {
                v = '8GH';
            }
            if (s === 9) {
                v = '9GH';
            }
            if (s === 10) {
                v = '10GH';
            }
            if (s === 11) {
                v = '11GH';
            }
            if (s === 12) {
                v = '12GH';
            }
            if (s === 13) {
                v = '13GH';
            }
            return v;
        },
    }
    if (isBrandedMw()){
        modPMW[gameParams.gameOriginalID]=modPMW["7022"];
    }
    var mod = {

        7010: function(s_, bet_) {

            var v = false;
            var night = { 4: 1, 5: 1, 7: 1 }

            if (bet_.spins[bet_.spin]) {

                var s = Number(s_)

                if (night[s]) {
                    v = '_FS_' + s_;
                }
                else if (s === 10) {
                    v = '10-fs';
                }

            }

            return v;

        },

        7011: function(s_, bet_, smb_) {

            var v = false;

            if (!isNaN(smb_.special)) {
                v = '_wild_' + smb_.special;
            }

            return v;

        },

        7013: function(s_) {

            var s   = Number(s_);
            var v   = false;
            var big = { 6: 1, 7: 1, 8: 1, 10: 1 };

            if (big[s]) {
                v = s + '-s';
            }

            return v;

        }

    };

    var classes = {

        7010: function(s_, x_, y_) {

            var v   = '';
            var flip = { 8: { x: { 0: 1, 1: 1 } } };

            var s = Number(s_);
            var coords = flip[s];

            if (coords) {

                var use = true;

                if (coords.x) {
                    use = use && !!coords.x[x_];
                }

                if (coords.y) {
                    use = use && !!coords.y[y_];
                }

                if (use) {
                    v = 'flip';
                }

            }

            return v;

        }

    };

    function getSymbol(_sID, _bet, _smb) {
        return mod[gameParams.gameOriginalID] ? mod[gameParams.gameOriginalID](_sID, _bet, _smb) || _sID : _sID;
    }

    function getSymbolPMW(_sID, _bet, _smb) {
        return modPMW[gameParams.gameOriginalID] ? modPMW[gameParams.gameOriginalID](_sID, _bet, _smb) || _sID : _sID;
    }

    function getSymbolBook(_sID, _bet, _smb) {
        if (_smb.smb>=10 && _smb.smb<19 && _smb.prevSmbID!=undefined){
            return _smb.prevSmbID;
        }else {
            return _smb.smb;
        }
    }

    function getSymbolRichie(_sID, _bet, _smb) {
        return modRichie[gameParams.gameOriginalID] ? modRichie[gameParams.gameOriginalID](_sID, _bet, _smb) || _sID : _sID;
    }

    function getSymbolClass(_sID, _x, _y) {
        return classes[gameParams.gameOriginalID] ? classes[gameParams.gameOriginalID](_sID, _x, _y) || '' : '';
    }

    //Render game history list
    function render(start, end, _callback) {

        var callback = _callback || function() {};

        var theBets = "";   //Bet string being generated
        var count   = 0;    //Count number of bets in history

        //If this isn't the first page
        if (start > 0) {

            var e = start - (end - start) //Store earliest bet number to display
            var l = start                 //Store lastest bet number to display

            //If "NEW_UI"
            if (ReelConfig.newUI) {
                theBets += window.newUI.gameHistoryManager.arrow('prev', e, l) //Generate new ui arrow to show previous bets
            }

            //Old ui
            else {

                //Add show previous button
                theBets += "<li class=\"show__prev\"><div><img src=\"gui/betHistoryMore.png\" alt=\"Bet History Show Previous Icon\" />" + (start - (end - start)) + " - " + start + "</div></li>";

            }

        }

        $.each(this_.data.bet_list.bet, function(i, item) {

            var bet = item;
            logger(bet.desc);

            var curSymb = _currencyLookup(bet.currency); //Get currency symbol for bet

            var when = formatDate(new Date((bet.when_placed + 'Z').replace(' ', 'T')));

            var settled = bet.when_settled === "null" ? "N/A" : formatDate(new Date((bet.when_settled + 'Z').replace(' ', 'T')));

            this_.betHistory[count] = {
                'betid': bet.bet_id,
                'desc': bet.desc,
                'stake': (bet.stake / 100).toFixed(2),
                'buyInValue': (bet.buyInValue!=undefined)?(bet.buyInValue / 100).toFixed(2):0,
                'winnings': (bet.winnings / 100).toFixed(2),
                'when': when,
                'spins': [],
                'respins': [],
                'status': Translate.do(bet.status),
                'channel': bet.mobile_desktop === 0 ? Translate.do("Mobile") : Translate.do("Desktop"),
                'settled': settled,
                'currency': bet.currency,
                'freerounds': bet.free_round === '1'
            };

            //Determine if item is visible in current range being viewed
            var visible = true;
            visible = visible && (start ? count >= start : true);
            visible = visible && (end ? count <= end : true);

            //Store bet details as data attributes for display on click
            theBets += "<li" + (!visible ? " style=\"display: none;\"" : "") + ">";
            theBets += "<p" + (bet.aamsID && bet.aamsTicket ? ' class="aams"' : '') + ">";

            var standardDetails = when;
            standardDetails += " -- " + bet.bet_id;
            standardDetails += " -- " + Translate.do(bet.desc);
            standardDetails += " -- " + curSymb + (((bet.buyInValue>0)? bet.buyInValue:bet.stake) / 100).toFixed(2);
            standardDetails += " -- " + curSymb + (bet.winnings / 100).toFixed(2);
            standardDetails += " -- " + Translate.do(bet.status);

            //If aams details are present
            if (bet.aamsID && bet.aamsTicket) {

                //Add aams details
                theBets += '<span>';
                theBets += Translate.do('AAMS ID') + ': ' + bet.aamsID + ' -- ' + Translate.do('AAMS Ticket') + ': ' + bet.aamsTicket;
                theBets += '</span>';
                theBets += '<span>' + standardDetails + '</span>';

            }
            //Else no aams details
            else {
                theBets += standardDetails; //Just add standard details
            }

            theBets += "</p><ul>";

            //Loop through each spin for this bet
            $.each(bet.spins, function(j, spin) {
                if (bet.buyInValue!=undefined){ //first bet even with buy in FS is a payed one
                    this_.betHistory[count].spins[j] = (spin.type.toLowerCase() == "freespins" && j>0); //Whether spin was freespin
                }else{
                    this_.betHistory[count].spins[j] = (spin.type.toLowerCase() == "freespins"); //Whether spin was freespin
                }

                this_.betHistory[count].respins[j] = spin.type.toLowerCase() == "respin"; //Whether spin was respin
                //Add spin to list
                theBets += "<li class=\"" + spin.outcome + "\" data-betnum=\"" + count + "\" data-betid=\"" + bet.bet_id + "\" data-spinid=\"" + j+ "\" data-spinidnew=\"" + spin.id + "\">- ";
                theBets += Translate.do("Spin No.") + " " + (j < 9 ? '0' : '') + (j + 1) + " -- ";
                theBets += (bet.free_round === '1' ? toUpperCase(Translate.do('freerounds')) + '-' : '') + toUpperCase(Translate.do(spin.type));
                theBets += spin.outcome == "win" ? " -- " + toUpperCase(Translate.do('win')) : "";

                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    theBets += "<span class='game-history-arrow'>&xrarr;</span>"
                }

                theBets += "</li>";

            });

            theBets += "</ul>";
            theBets += "</li>";

            count = count + 1; //Increment count of bets

        });

        logger('Count: ' + count + ', ' + 'Start: ' + start + ', ' + 'End: ' + end + ', ');

        //If there are more bets to be displayed
        if (count - 1 > end) {

            var e = end + 2                 //Store earliest bet number to display
            var l = end + 2 + (end - start) //Store lastest bet number to display

            //If "NEW_UI"
            if (ReelConfig.newUI) {
                theBets += window.newUI.gameHistoryManager.arrow('more', e, l) //Generate new ui arrow to show more bets
            }

            //Old ui
            else {

                //Add show more button
                theBets += "<li class=\"show__more\"><div><img src=\"gui/betHistoryMore.png\" alt=\"Bet History Show More Icon\" />" + (end + 2) + " - " + (end + 2 + (end - start)) + "</div></li>";

            }

        }

        callback();

        $(".game__history__list").html(theBets);

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            $(".game__history__list .game-history-list-arrow > svg.prev").on("touchstart mousedown", function(event) {

                $('.game__history__list').scrollTop(0);         //Scroll to top of list
                render(start - 1 - (end - start), start - 1);   //Re-render with new start/end

            });

            $(".game__history__list .game-history-list-arrow > svg.more").on("touchstart mousedown", function(event) {

                $('.game__history__list').scrollTop(0);         //Scroll to top of list
                render(end + 1, end + 1 + (end - start));   //Re-render with new start/end

            });

            //If mobile
            if (framework.isTouch()) {

                var gameHistoryList = document.getElementsByClassName('game__history__list')[0] //Store game history node
                window.newUI.orientation.children(gameHistoryList)                              //Add orientation styling

            }

        }

        //Old ui
        else {

            //Show previous button click
            $(".game__history__list li.show__prev > div").on("touchstart mousedown", function(event) {

                $('.game__history__list').scrollTop(0);         //Scroll to top of list
                render(start - 1 - (end - start), start - 1);   //Re-render with new start/end

            });

            //Show more button click
            $(".game__history__list li.show__more > div").on("touchstart mousedown", function(event) {

                $('.game__history__list').scrollTop(0);     //Scroll to top of list
                render(end + 1, end + 1 + (end - start));   //Re-render with new start/end

            });

        }

    }

    this_.requestBetHistory = function() {

        if (gameInfo.playMode === 1) {

            $(".loadingSpinner").css("display", "inline");

            $(".game__history__list").html("");


            if (gameParams.slotEngine == ReelConfig.slotEngine){
                var page = gameParams.path + "/IntegratedSlots/ISRecentSlotBets.jsp?mode=history&accountID=" + gameInfo.accountID + "&gameID=" + gameParams.gameID;

                $.post(page, {
                    func: "getSlotsHistory"
                }, function(data) {
                    if (gameParams.slotEngine == ReelConfig.slotEngine){
                        //new engine
                        var obj={};
                        obj.bet=newCommWrapper_(data);
                        this_.data={};
                        this_.data.bet_list=obj;
                    } else{
                        this_.data = data;
                    }



                    //old
                    // bet_list: {bet: [{bet_id: "20879545", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "COMPLETE",…},…]}
                    // bet: [{bet_id: "20879545", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "COMPLETE",…},…]
                    // 0: {bet_id: "20879545", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "COMPLETE",…}
                    // 1: {bet_id: "20865034", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "COMPLETE",…}
                    // 2: {bet_id: "20457743", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "ACCEPTED",…}
                    // 3: {bet_id: "20455344", type: "PREMIUMSLOTS", desc: "Blood Queen", status: "COMPLETE",…}
                    // bet_id: "20455344"
                    // type: "PREMIUMSLOTS"
                    // desc: "Blood Queen"
                    // status: "COMPLETE"
                    // when_placed: "2019-10-23 10:25:54.0"
                    // when_settled: "2019-10-23 10:25:54.0"
                    // mobile_desktop: 0
                    // stake: 150
                    // currency: "GBP"
                    // free_round: "0"
                    // winnings: 50
                    // spins: [{type: "normal", outcome: "win"}]
                    // 0: {type: "normal", outcome: "win"}
                    // type: "normal"
                    // outcome: "win"

                    //new
                    // [{id: 20872143, placed: "2020-02-17 13:38:37.0", settled: "2020-02-17 13:38:37.0",…},…]
                    // 0: {id: 20872143, placed: "2020-02-17 13:38:37.0", settled: "2020-02-17 13:38:37.0",…}
                    // id: 20872143
                    // placed: "2020-02-17 13:38:37.0"
                    // settled: "2020-02-17 13:38:37.0"
                    // desc: "Jekyll & Hyde"
                    // currency: "GBP"
                    // stake: 210
                    // winnings: 630
                    // status: "COMPLETE"
                    // spins: []
                    // 1: {id: 20872142, placed: "2020-02-17 13:38:35.0", settled: "2020-02-17 13:38:35.0",…}
                    // id: 20872142
                    // placed: "2020-02-17 13:38:35.0"
                    // settled: "2020-02-17 13:38:35.0"
                    // desc: "Jekyll & Hyde"
                    // currency: "GBP"
                    // stake: 210
                    // winnings: 0
                    // status: "COMPLETE"
                    // spins: []
                    // 2: {id: 20872141, placed: "2020-02-17 13:38:33.0", settled: "2020-02-17 13:38:33.0",…}
                    // 3: {id: 20866116, placed: "2020-02-13 10:10:51.0", settled: "2020-02-17 13:36:57.0",…}
                    // 4: {id: 20865920, placed: "2020-02-13 09:07:31.0", settled: "2020-02-13 09:07:31.0",…}
                    // id: 20865920
                    // placed: "2020-02-13 09:07:31.0"
                    // settled: "2020-02-13 09:07:31.0"
                    // desc: "Jekyll & Hyde"
                    // currency: "GBP"
                    // stake: 210
                    // winnings: 0
                    // status: "COMPLETE"
                    // spins: []
                    // 5: {id: 20865919, placed: "2020-02-13 09:07:28.0", settled: "2020-02-13 09:07:28.0",…}
                    // 6: {id: 20865918, placed: "2020-02-13 09:07:24.0", settled: "2020-02-13 09:07:24.0",…}


                    //Render list
                    render(0, 24, function() {
                        $(".loadingSpinner").css("display", "none");
                    });

                }, "json")

                    .fail(function() {

                        //Display error message
                        var message = new MessageScreen(
                            "We were unable to retrieve your bet history",
                            "error",
                            "Error Loading Bet History",
                            [

                                {
                                    "action": function() {

                                        message.destroy();
                                        this_.requestBetHistory();

                                    },

                                    "label": "Try Again"

                                }

                            ],
                            true,
                            true
                        );

                    });



            }else{

                if ( gameParams.clientName.indexOf("NYX") !== -1 && ( gameParams.site === "959" || gameParams.site === "975" || gameParams.site === "100975" || gameParams.site === "200975" || gameParams.site === "15" ) ) {
                    //LQ canada on NYX
                    var page = gameParams.path + "/premiumslots/recentSlotBets.jsp";

                    $.post(page, { "sessionID" :gameParams.site + "|" + gameInfo.customerID, "gameID": gameParams.gameID,
                        func: "getSlotsHistory"
                    }, function(data) {
                        if (gameParams.slotEngine == ReelConfig.slotEngine){
                            //new engine
                            var obj={};
                            obj.bet=newCommWrapper_(data);
                            this_.data={};
                            this_.data.bet_list=obj;
                        } else{
                            this_.data = data;
                        }

                        //Render list
                        render(0, 24, function() {
                            $(".loadingSpinner").css("display", "none");
                        });

                    }, "json")

                        .fail(function() {

                            //Display error message
                            var message = new MessageScreen(
                                "We were unable to retrieve your bet history",
                                "error",
                                "Error Loading Bet History",
                                [

                                    {
                                        "action": function() {

                                            message.destroy();
                                            this_.requestBetHistory();

                                        },

                                        "label": "Try Again"

                                    }

                                ],
                                true,
                                true
                            );

                        });






                }else{
                    var page= gameParams.path + "/premiumslots/recentSlotBets.jsp?accountID=" + gameInfo.accountID + "&gameID=" + gameParams.gameID;

                    $.post(page, {
                        func: "getSlotsHistory"
                    }, function(data) {
                        if (gameParams.slotEngine == ReelConfig.slotEngine){
                            //new engine
                            var obj={};
                            obj.bet=newCommWrapper_(data);
                            this_.data={};
                            this_.data.bet_list=obj;
                        } else{
                            this_.data = data;
                        }

                        //Render list
                        render(0, 24, function() {
                            $(".loadingSpinner").css("display", "none");
                        });

                    }, "json")

                        .fail(function() {

                            //Display error message
                            var message = new MessageScreen(
                                "We were unable to retrieve your bet history",
                                "error",
                                "Error Loading Bet History",
                                [

                                    {
                                        "action": function() {

                                            message.destroy();
                                            this_.requestBetHistory();

                                        },

                                        "label": "Try Again"

                                    }

                                ],
                                true,
                                true
                            );

                        });

                }

            }

        }
        else{
            $(".game__history__list").html("<li>"+ Translate.do("Game History only available when playing for real")+"</li>");
            $("#gameHistoryTip").hide();
        }

    };

    function newCommWrapper_(data){
        var bet=[];
        for (var a in data){
            var obj={};
            obj.bet_id=data[a].id;
            obj.when_placed=data[a].placed;
            obj.when_settled=data[a].settled;
            obj.desc=data[a].desc;
            obj.currency=data[a].currency;
            obj.stake=data[a].stake;
            obj.winnings=data[a].winnings;
            obj.status=data[a].status;
            obj.mobile_desktop=data[a].mobile_desktop;
            obj.spins=[];
            if (data[a].buyInPrice!=undefined){
                obj.buyInValue=data[a].buyInPrice;
            }
            if (data[a].free_round!=undefined){
                obj.free_round=data[a].free_round;
            }

            for (var b in data[a].spins){
                var sp={};
                sp.type=data[a].spins[b].type;
                sp.outcome=data[a].spins[b].outcome;
                sp.id=data[a].spins[b].id;
                obj.spins.push(sp);
            }
            bet.push(obj);
        }

        return bet;
    }

    /* called in response from  communicationManager_.sendServletRequest("replay", "betid=12344"); */
    this.showReplay = function(json) {
        var numSmb=0;
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {
            document.getElementsByClassName('__content')[0].style.removeProperty('overflow') //Allow ability to scroll
        }

        var curSymb = _currencyLookup(this_.displayBet.currency); //Get currency symbol
        if(ReelConfig.slotEngine=="IntegratedSlots"){
            var spin = json.spins[0]; //Get correct spin to display
        }else{
            var spin = json.spins[this_.displayBet.spin]; //Get correct spin to display
        }

        if (ReelConfig.winningcombinations && gameParams.slotEngine == ReelConfig.slotEngine){
            var lines = framework.getSetup().getPaylinesNum() ; //Number of paylines
            var div = spin.coinsPerBet || lines;
            var desc= this_.displayBet.spinDesc;
            var stake=this_.displayBet.stake;
            var betPerLine = div ? (stake / div).toFixed(2) : 0.00; //Bet per total paylines

        }else{
            var lines = (framework.getSetup().getPaylines() || []).length; //Number of paylines
            var div = spin.coinsPerBet || lines;
            var desc= this_.displayBet.spinDesc;
            var stake=this_.displayBet.stake;
            var betPerLine = div ? (stake / div).toFixed(2) : 0.00; //Bet per total paylines

        }

        //If "NEW_UI"
        if (ReelConfig.newUI ) {
            window.betPerLine = betPerLine //Expose bet per total paylines to window
            window.extraStakeValue ="";
        }

        //Update bet ID, date and time on replay display
        $(".game__history__replay > .__details > p").html(
            "HID: " + this_.displayBet.betid + " -- " +
            Translate.do("Date") + ": " + this_.displayBet.when
        );

        var extraStakeValue; //Any extra text next to stake
        //Generate bet compliance details to display
        var betDetails = "";
        var stake=(this_.displayBet.buyInValue>0)? this_.displayBet.buyInValue:this_.displayBet.stake
        betDetails += "<td>" + this_.displayBet.status + "</td>";
        betDetails += "<td>" + this_.displayBet.channel + "</td>";
        betDetails += "<td>" + this_.displayBet.when + "</td>";
        betDetails += "<td>" + this_.displayBet.settled + "</td>";
        betDetails += "<td>" + curSymb +stake;

        //Freespin
        if (this_.displayBet.spins[this_.displayBet.spin]) {
            extraStakeValue = Translate.do("Free Spin");
        }
        //Respin
        else if (this_.displayBet.respins[this_.displayBet.spin]) {
            extraStakeValue = Translate.do("respin");
        }
        //Free rounds
        else if (this_.displayBet.freerounds) {
            extraStakeValue = Translate.do("Free Rounds");
        }

        extraStakeValue = extraStakeValue ? " (" + extraStakeValue + ")" : "";

        betDetails += extraStakeValue + "</td>";
        betDetails += "<td>" + lines + "</td>";
        betDetails += "<td>" + curSymb + betPerLine + extraStakeValue + "</td>";
        betDetails += "<td>" + curSymb + this_.displayBet.winnings + "</td>";

        //If "NEW_UI" & there is an extra stake value
        if (ReelConfig.newUI && extraStakeValue) {
            window.extraStakeValue = extraStakeValue //Expose extra stake value to window
        }

        //Update details
        $(".game__history__replay > .__content table .__data").html(betDetails);

        var grid = []; //Generate grid of images for displaying in lines
        var reel = ""; //Generate HTML for displaying spin reel

        var feature = false; //Show a feature over a symbol

        //If on neon jungle
        if (gameParams.gameOriginalID === '7006') {

            //Loop through winning lines
            for (var i in spin.line) {

                var line = spin.line[i]; //Get current line

                //If line is x4 multipler and feature not already set
                if (Number(line.mult) === 4 && !feature) {
                    feature = gameAssets.assets.mult_4_symbol; //Set feature symbol
                }

            }

            //If there was a scatter/feature symbol
            if (!feature && (!$.isEmptyObject(spin.scatter) || json.bonus)) {
                feature = gameAssets.assets.circle_symbol; //Set feature symbol
            }

        }
        //If on moirai blaze
        else if (gameParams.gameOriginalID === '7012') {

            feature = {}; //Reuse feature variable for symbol match coordinates

            //Loop through spin matches
            for (var i in spin.matches) {

                var match = spin.matches[i]; //Current match

                //Loop through match coordinates
                for (var j = 0; j < match.coord.length; j++) {

                    var coord = match.coord[j]; //Current coordinates

                    feature[coord[0] + ':' + coord[1]] = true; //Flag coordinates for reel highlight

                }

            }

        }

        //Loop through each column in spin reel
        $.each(spin.reel, function(columnIndex, column) {

            grid[columnIndex] = []; //Initialise column in grid
            numSmb=column.smb.length;
            for (var i = 0; i <numSmb; i++) {
                if (gameParams.gameOriginalID === '7014' && column.smb[i].smb==14){
                    //viking icon on not expanding reel is not supposed to be shown
                    column.smb[i].smb=18;
                }
                if ((gameParams.gameOriginalID === '7016' ||gameParams.gameOriginalID === '7025' || gameParams.gameOriginalID === '7019' || gameParams.gameOriginalID === '7029' || isBrandedMw() || gameParams.gameOriginalID === '7023'  || gameParams.gameOriginalID === '7027' || gameParams.gameOriginalID === '7028' || gameParams.gameOriginalID === '7127' || gameParams.gameOriginalID === '7227' ) && column.smb[i]==undefined ){
                    grid[columnIndex].push(18);
                }else{
                    grid[columnIndex].push(column.smb[i].smb);
                }


            }

            var expand = false; //Whether column was expanding wild

            //If on blood queen or siren's
            if (gameParams.gameOriginalID === '7007' || gameParams.gameOriginalID === '7009') {

                //Determine if either expanding wild occurred
                var wild9 = column.smb[0].smb === '9' && column.smb[1].smb === '9' && column.smb[2].smb === '9';
                var wild11 = column.smb[0].smb === '11' && column.smb[1].smb === '11' && column.smb[2].smb === '11';

                //Flag for expanding wild
                if (wild9) {
                    expand = {icon: 9, image: gameAssets.assets.icon9_expanded};
                }
                else if (wild11) {
                    expand = {icon: 11, image: gameAssets.assets.icon11_expanded};
                }

            }

            //if VW
            if (gameParams.gameOriginalID === '7014') {

                //Determine if either expanding wild occurred
                var wild12 = column.smb[1].smb === '12';

                //Flag for expanding wild
                if (wild12) {
                    expand = {icon: 12, image: gameAssets.assets.icon12_expanded};
                }


            }
            //if book of
            if (gameParams.gameOriginalID === '7018') {
                //Determine if either expanding wild occurred
                var wild19 = column.smb[1].smb === 19;

                //Flag for expanding wild
                if (wild19) {
                    expand = {icon: 19, image: gameAssets.assets.wildBg};
                }
            }


            //Add column symbols to reel HTML
            if (gameParams.gameOriginalID === '7006' && feature && column.smb[0].special === 'glow') {
                reel += '<div style="position: relative;">';
            }
            else {
                reel += "<div>";
            }

            //If on blood queen and there was an expanding wild
            if( (gameParams.gameOriginalID === '7007' || gameParams.gameOriginalID === '7009' || gameParams.gameOriginalID === '7014'  || gameParams.gameOriginalID === '7018' ) && expand) {
                reel += "<img class=\"expanded__" + expand.icon + "\" src=\"" + expand.image + "\" alt=\"Expanding Wild Icon\"";
                if (gameParams.gameOriginalID === '7014') {
                    reel += 'style="width :70% !important"';
                }
                if (gameParams.gameOriginalID === '7018') {
                    if(getOrientation()=="portrait"){
                        reel += 'style="width :73% !important"';
                    }else{
                        reel += 'style="width :58% !important"';
                    }

                }
                if( (gameParams.gameOriginalID === '7007' )&& column.smb[1].smb==11) {
                    reel += 'style="width :96% !important"';
                }
                reel +="/>"; //Show expanded wild symbol
            }
            //Else not on blood queen or no expanding wild
            else {

                for (var i = 0; i <numSmb; i++) {//

                    var cl = '';

                    if (gameParams.gameOriginalID === '7012') {
                        cl = 'moirai__match__' + !!feature[i + ':' + columnIndex];
                    }

                    reel += '<div class="' + cl + '">';
                    if (gameParams.gameOriginalID === '7016' ||gameParams.gameOriginalID === '7025' || gameParams.gameOriginalID === '7019' || gameParams.gameOriginalID === '7029' || isBrandedMw() || gameParams.gameOriginalID === '7023' || gameParams.gameOriginalID === '7027' || gameParams.gameOriginalID === '7127' || gameParams.gameOriginalID === '7227' || gameParams.gameOriginalID === '7028') {
                        reel += "<img src=\"" + gameAssets.assets["icon" + getSymbolPMW(grid[columnIndex][i], this_.displayBet, column.smb[i])] + "\" alt=\"Spin Icon " + grid[columnIndex][i] + "\" class=\"" + getSymbolClass(grid[columnIndex][i], columnIndex, i) + "\" />";
                    }else if (gameParams.gameOriginalID === '7018' ){
                        reel += "<img src=\"" + gameAssets.assets["icon" + getSymbolBook(grid[columnIndex][i], this_.displayBet, column.smb[i])] + "\" alt=\"Spin Icon " + grid[columnIndex][i] + "\" class=\"" + getSymbolClass(grid[columnIndex][i], columnIndex, i) + "\" />";

                    }else {
                        reel += "<img src=\"" + gameAssets.assets["icon" + getSymbol(grid[columnIndex][i], this_.displayBet, column.smb[i])] + "\" alt=\"Spin Icon " + grid[columnIndex][i] + "\" class=\"" + getSymbolClass(grid[columnIndex][i], columnIndex, i) + "\" />";
                    }

                    if (gameParams.gameOriginalID === '7011' && column.smb[i].special === 'yinyang') {
                        reel += '<img style="opacity: 0.75; position: absolute; left: 6px; margin-top: -10px; width: 90% !important;" src="' + gameAssets.assets.icon8 + '" alt="Special ymbol Overlay" />';
                    }

                    if (gameParams.gameOriginalID === '7006' && feature && column.smb[i].special === 'glow') {
                        reel += '<img style="position: absolute; left: 6px; margin-top: -10px; width: 90% !important;" src="' + feature + '" alt="Special ymbol Overlay" />';
                    }

                    reel += "</div>";
                }

            }

            reel += "</div>";

        });

        $(".game__history__replay > .__content .__reel").html(reel); //Add reel HTML to reel element
        if(gameParams.gameOriginalID != '7023') {
            if (!$(".game__history__replay > .__content .__reel").hasClass('_' + ReelConfig.numIcons)) {
                $(".game__history__replay > .__content .__reel").addClass('_' + ReelConfig.numIcons);
            }
        }else{
            //1M can be 9 symbols heigh
            if (numSmb>7){
                if (!$(".game__history__replay > .__content .__reel").hasClass('_' + numSmb )) {
                    $(".game__history__replay > .__content .__reel").addClass('_' + numSmb);
                }
            }else {
                if (!$(".game__history__replay > .__content .__reel").hasClass('_' + ReelConfig.numIcons)) {
                    $(".game__history__replay > .__content .__reel").addClass('_' + ReelConfig.numIcons);
                }
            }
        }
        //Lines that use winning combinations
        if (ReelConfig.winningcombinations) {

            var content = '';
            var total = 0;

            //Else if no paylines
            if (lineConfig.line.lines.length === 0 && (gameParams.gameOriginalID != '7027' &&gameParams.gameOriginalID != '7127' &&gameParams.gameOriginalID != '7227' && gameParams.gameOriginalID != '7023' && gameParams.gameOriginalID != '7024'  && gameParams.gameOriginalID != '7025' && gameParams.gameOriginalID != '7028' && gameParams.gameOriginalID != '7029')) {

                //If on moirai blaze OR MW
                if (gameParams.gameOriginalID === '7012') {

                    var vpc = Number(this_.displayBet.stake) / 20; //Stake per coin per bet
                    var count = 0; //Count number of matches

                    //Loop through spin matches
                    for (var i in spin.matches) {

                        var match = spin.matches[i]; //Current match
                        var html = '<li>'; //HTML for match details
                        var win = Number(match.amt) * vpc; //Match winnings

                        total += win; //Add winnings to total

                        html += '<p>0' + ++count + ': '; //Match ID
                        html += '<span>' + curSymb + win.toFixed(2); //Match winnings
                        html += match.mult > 1 ? " (" + Translate.do("Multiplier") + " x" + match.mult + ")" : ""; //Match multiplier
                        html += '</span>'; //Close winnings tags
                        html += '</p>'; //Close details tag
                        html += '<div>'; //Wrapper for symbol images

                        //Loop through match coordinates
                        for (var j = 0; j < match.coord.length; j++) {

                            var coord = match.coord[j]; //Current coordinates
                            var smb = spin.reel[coord[1]].smb[coord[0]].smb; //Current symbol ID for coord
                            html += '<img class="won" src="' + gameAssets.assets['icon' + smb] + '" alt="Spin Icon ' + smb + '" />';

                        }

                        html += '</div></li>'; //Close tags
                        content += html; //Add match HTML to full content

                    }

                }

            }
            else {

                var count = 1;
                var lines = {};
                if (gameParams.gameOriginalID === '7027' || gameParams.gameOriginalID === '7127' || gameParams.gameOriginalID === '7227') {
                    for (var i in spin.line) {
                        if (spin.line[i].dir == "LEFT") {
                            var smb = spin.reel[0].smb[Number(spin.line[i].id) - 1].smb;

                            if (lines[smb]) {
                                lines[smb].amt = Number(lines[smb].amt) + Number(spin.line[i].amt);
                                lines[smb].mult = Number(lines[smb].mult) + Number(spin.line[i].mult);

                            } else {
                                lines[smb] = spin.line[i];
                            }
                        } else {
                            smb = spin.line[i].id;
                            lines[smb] = spin.line[i];
                        }
                    }

                    for (var i in lines) {
                        var line = lines[i];
                        var lineHTML = '<li>';
                        var win = Number(line.amt) * betPerLine;
                        total += win;
                        if (spin.cap == undefined || spin.cap == 0) {
                            lineHTML += '<p>' + ('0' + count++).slice(-2) + ': ';

                            lineHTML += '<span>' + curSymb;
                            lineHTML += win.toFixed(2);

                            lineHTML += Number(line.mult) > 1 ? ' (' + Translate.do('Multiplier') + ' x' + line.mult + ')' : '';

                        } else {
                            lineHTML += '<p>' + Translate.do('Maximum win reached');
                            lineHTML += '<span>';
                        }
                        lineHTML += '</span></p><div>';

                        if (lines[i].dir == "LEFT") {
                            var smb = spin.reel[0].smb[Number(line.id) - 1].smb;
                            lineHTML += '<img src="' + gameAssets.assets["rightArrow"] + '" alt="Right Payment" />';
                        } else {
                            var smb = lines[i].smbDir;
                            lineHTML += '<img src="' + gameAssets.assets["leftArrow"] + '" alt="Left Payment" />';
                        }
                        for (var j = 0; j < line.count; j++) {
                                lineHTML += '<img class="won" src="' + gameAssets.assets['icon' + getSymbolPMW(smb)] + '" alt="Spin Icon ' + smb + '" />';
                        }
                        content += lineHTML + '</div></li>';

                    }
                }else{

                    for (var i in spin.line) {

                        var smb = spin.reel[0].smb[Number(spin.line[i].id) - 1].smb;

                        if (lines[smb]) {

                            lines[smb].amt = Number(lines[smb].amt) + Number(spin.line[i].amt);
                            lines[smb].mult = Number(lines[smb].mult) + Number(spin.line[i].mult);

                        }
                        else {
                            lines[smb] = spin.line[i];
                        }

                    }

                    for (var i in lines) {

                        var line = lines[i];

                        var lineHTML = '<li>';
                        var win = Number(line.amt) * betPerLine;
                        total += win;
                        if (spin.cap== undefined || spin.cap==0) {
                            lineHTML += '<p>' + ('0' + count++).slice(-2) + ': ';

                            lineHTML += '<span>' + curSymb;
                            lineHTML += win.toFixed(2);

                            lineHTML += Number(line.mult) > 1 ? ' (' + Translate.do('Multiplier') + ' x' + line.mult + ')' : '';

                        }else{
                            lineHTML += '<p>'+Translate.do('Maximum win reached');
                            lineHTML += '<span>';
                        }
                        lineHTML += '</span></p><div>';
                        var smb = spin.reel[0].smb[Number(line.id) - 1].smb;
                        for (var j = 0; j < line.count; j++) {
                            if (gameParams.gameOriginalID === '7016' || gameParams.gameOriginalID === '7025' || gameParams.gameOriginalID === '7019' || gameParams.gameOriginalID === '7029' || isBrandedMw() || gameParams.gameOriginalID === '7023') {
                                lineHTML += '<img class="won" src="' + gameAssets.assets['icon' + getSymbolPMW(smb)] + '" alt="Spin Icon ' + smb + '" />';
                            }else{
                                lineHTML += '<img class="won" src="' + gameAssets.assets['icon' + smb] + '" alt="Spin Icon ' + smb + '" />';
                            }
                        }

                        content += lineHTML + '</div></li>';

                    }

                }
            }

            if (content === '') {

                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    content = '<li class="empty">' + Translate.do("No Winning Lines") + '</li>';
                }

                //Old ui
                else {
                    content = '<li>' + Translate.do("No Winning Lines") + '</li>';
                }

            }

            var winText = Translate.do('win');


            if ( spin.cap!= undefined && spin.cap>0){
                total=spin.cap;
            }

            var text = toUpperCase(winText.charAt(0)) + winText.slice(1) + ' - ' + Translate.do('Winning Lines - Total: ').split(' - ')[1] + ' ' + curSymb + total.toFixed(2);

            $('.game__history__replay > .__content .__lines__nav > [target=".__wins"]').addClass('full');
            $('.game__history__replay > .__content .__lines__nav > [target=".__wins"]').html(text);
            $('.game__history__replay > .__content .__lines__nav > [target=".__losses"]').remove();
            $(".game__history__replay > .__content .__lines > .__wins").html(content);
            $('.game__history__replay > .__content .__lines > .__losses').remove();

        }
        //Standard set paylines
        else {

            //Generate HTML for displaying winning/losing spin lines
            var wins = "";
            var losses = "";
            var total = 0;

            //Loop through all paylines
            $.each(framework.getSetup().getPaylines(), function(lineIndex, line) {

                var lineHTML = "<li>"; //Generate new element for line

                //Add line number and winnings
                if ((Number(gameParams.gameOriginalID) >= '7016' || Number(gameParams.gameOriginalID) >= '7025' )&& getOrientation()=="portrait") {
                    lineHTML += "<p style='font-size:15px'>"
                } else {
                    lineHTML += "<p>"
                }

                lineHTML += Translate.do("Line") + " " + ("0" + line.id).slice(-2) + ": ";
                lineHTML += "<span>" + curSymb;
                lineHTML += spin.line[line.id] ? (spin.line[line.id].amt * betPerLine).toFixed(2) : "0.00";
                lineHTML += spin.line[line.id] ? (spin.line[line.id].multiplier > 1 ? " (" + Translate.do("Multiplier") + " x" + spin.line[line.id].multiplier + ")" : "") : "";

                lineHTML += spin.line[line.id] && gameParams.gameOriginalID === '7006' && Number(spin.line[line.id].mult) === 4 ? " (x4)" : "";
                lineHTML += "</span></p><div>";

                var count = 0; //Count through highlighted symbols for a win

                //Loop through symbols in payline
                $.each(line.payline, function(column, symbol) {
                    if (gameParams.gameOriginalID != '7015')
                    {
                        //Add symbol image to current line HTML
                        lineHTML += "<img ";


                        if (gameParams.gameOriginalID === '7016' || gameParams.gameOriginalID === '7025' || gameParams.gameOriginalID === '7019' || gameParams.gameOriginalID === '7029' || isBrandedMw() || gameParams.gameOriginalID === '7023'|| gameParams.gameOriginalID === '7027'|| gameParams.gameOriginalID === '7028') {
                            lineHTML += "src=\"" + gameAssets.assets["icon" + getSymbolPMW(grid[column][symbol], this_.displayBet, spin.reel[column].smb[symbol])] + "\" ";
                        }else if (gameParams.gameOriginalID === '7018'){
                            lineHTML += "src=\"" + gameAssets.assets["icon" + getSymbolBook(grid[column][symbol], this_.displayBet, spin.reel[column].smb[symbol])] + "\" ";
                        }else{
                            lineHTML += "src=\"" + gameAssets.assets["icon" + getSymbol(grid[column][symbol], this_.displayBet, spin.reel[column].smb[symbol])] + "\" ";
                        }
                        lineHTML += "alt=\"Spin Icon " + grid[column][symbol] + "\" ";
                        lineHTML += "class=\"";
                        lineHTML += (spin.line[line.id] && count++ < spin.line[line.id].count ? "won " : "");
                        lineHTML += getSymbolClass(grid[column][symbol], column, symbol) + " ";
                        lineHTML += "\"";
                        lineHTML += "/>";
                    }else{
                        //Add symbol image to current line HTML
                        lineHTML += "<img ";
                        lineHTML += "src=\"" + gameAssets.assets["icon" + getSymbolRichie(grid[column][symbol], this_.displayBet, spin.reel[column].smb[symbol])] + "\" ";
                        lineHTML += "alt=\"Spin Icon " + grid[column][symbol] + "\" ";
                        lineHTML += "class=\"";
                        lineHTML += (spin.line[line.id] && count++ < spin.line[line.id].count ? "won " : "");
                        lineHTML += getSymbolClass(grid[column][symbol], column, symbol) + " ";
                        lineHTML += "\"";
                        lineHTML += "/>";

                    }
                });

                lineHTML += "</div></li>"; //Close line element

                //If the line was a win
                if (spin.line[line.id]) {

                    wins += lineHTML; //Add it to the wins list
                    total += spin.line[line.id].amt * betPerLine; //Add line win amount to total

                }
                //Else, the line was a loss
                else {
                    losses += lineHTML; //So add it to the losses list
                }

            });

            //If there were no winning lines
            if (wins == "") {

                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    wins = '<li class="empty">' + Translate.do("No Winning Lines") + "</li>"; //Say so
                }

                //Old ui
                else {
                    wins = "<li>" + Translate.do("No Winning Lines") + "</li>"; //Say so
                }

            }

            //If there were no losing lines (probably not gonna happen)
            if (losses == "") {

                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    losses = '<li class="empty">' + Translate.do("No Losing Lines") + "</li>"; //Say so
                }

                //Old ui
                else {
                    losses = "<li>" + Translate.do("No Losing Lines") + "</li>"; //Say so
                }

            }


            //Add winning/losing lines HTML to elements
            $(".game__history__replay > .__content .__lines > .__wins").html(wins);
            $(".game__history__replay > .__content .__lines > .__losses").html(losses);

            //Show total line winnings
            $(".game__history__replay > .__content .__lines__nav > [target = '.__wins'] > span")
                .html(curSymb + total.toFixed(2));

            var lines = document.getElementsByClassName('__lines__nav')[0] //Store reference to lines HTML node

            //Array of translations
            var translations = [

                { text: 'Winning Lines - Total: ', value: curSymb + total.toFixed(2) },
                { text: 'Losing Lines', value: '' }

            ];

            //Loop through lines node children
            for (var i = 0; i < lines.children.length; i++) {
                lines.children[i].innerHTML = Translate.do(translations[i].text) + ' ' + translations[i].value; //Perform translation
            }

        }

        //If Gifts of Ostara
        if (gameParams.gameOriginalID === '7004') {

            var egg = {egg: true};

            if (spin.egg >= 0 && spin.egg <= 4) {

                egg.symbol = gameAssets.assets['icon' + spin.egg];

                if (spin.freeSpin) {
                    egg.freespin = '10';
                } else {

                    egg.eggHeader = true;
                    egg.multiplier = '+' + (spin.egg + 1);
                    egg.totalMultiplier = 0;
                    egg.count = 0;

                    for (var i = 0; i <= this_.displayBet.spin; i++) {

                        for (var column in json.spins[i].reel) {

                            column = json.spins[i].reel[column].smb;

                            for (var row in column) {

                                if (column[row].special === 'collect') {

                                    egg.totalMultiplier += spin.egg + 1;

                                    if (i == this_.displayBet.spin) {
                                        egg.count++;
                                    }

                                }

                            }

                        }

                    }

                }

            } else {

                switch (spin.egg) {
                    case 29:
                        egg.symbol = gameAssets.assets['icon9'];
                        egg.freespin = '1';
                        break;
                    case 30:
                        egg.symbol = gameAssets.assets['icon10'];
                        egg.winnings = (30 * this_.displayBet.stake).toFixed(2);
                        egg.multiplier = 'x30';
                        break;
                    case 33:
                        egg.symbol = 'giftOfOstara/img/paytable/symbol-13.png';
                        egg.multiplier = 'x' + spin.multiplier;
                        break;
                    case 34:
                        egg.symbol = 'giftOfOstara/img/paytable/symbol-11.png';
                        break;
                    case 35:
                        egg.symbol = 'giftOfOstara/img/paytable/symbol-12.png';
                        egg.freespin = '3';
                        break;
                    default:
                        egg.egg = false;
                }

            }

            if (egg.egg) {

                var eggHTML = '<p>' + Translate.do('Golden Eggs') + (egg.totalMultiplier ? ' - x' + egg.totalMultiplier + ' ' + Translate.do('Multiplier') : '') + '</p>';

                if (egg.eggHeader) {
                    eggHTML += '<img class="golden__egg__header" src="' + egg.symbol + '" alt="Golden Egg ' + spin.egg + ' Icon">';
                }

                eggHTML += '<ul>';

                egg.count = egg.count >= 0 ? egg.count : 1;

                for (var i = 0; i < egg.count; i++) {

                    eggHTML += '<li>';
                    eggHTML += '<img src="' + egg.symbol + '" alt="Golden Egg ' + spin.egg + ' Icon">';
                    eggHTML += '<p>';
                    eggHTML += _ucFirst(Translate.do('win')) + ': ' + curSymb + (egg.winnings || '0.00');
                    eggHTML += ' | ' + Translate.do('Multiplier') + ': ' + (egg.multiplier || '0');
                    eggHTML += ' | ' + Translate.do('Free Spin') + ': ' + (egg.freespin || Translate.do('No'));
                    eggHTML += '</p>';
                    eggHTML += '</li>';

                }

                eggHTML += '</ul>';

                //Show Egg stuff
                $('.__scatters').html(eggHTML);
                $('.__scatters').addClass('goo__golden__eggs');
                $('.__scatters').css('display', 'block');

            } else {
                $('.__scatters').css('display', 'none');
            }

        }else if (gameParams.gameOriginalID === '7027' || gameParams.gameOriginalID === '7127' || gameParams.gameOriginalID === '7227') {
            var scattersList = "<ul>";
            scattersList += "<li>";
            scattersList += "<img src=\"" + gameAssets.assets["icon12GH"] + "\" alt=\"Spin Icon 12" + "\" />";
            scattersList += "<p>";
            scattersList += _ucFirst(Translate.do("Fuels")) + ": " +spin.state.numFuels;
            if (spin.state.wonAdditionalSpins>0){
                scattersList +=" - "+ _ucFirst(Translate.do("Additional Free Spins")) + ": " +spin.state.wonAdditionalSpins;

            }else{
                if (spin.state.status=="FREESPINS_TRIGGER"){
                    scattersList += " | " + Translate.do("Free Spin") + ": " +spin.state.freespinsRemaining;
                }
            }
            scattersList += "</p>";
            scattersList += "</li>";
            scattersList += "</ul>";


            //Show scatter
            $('.__scatters').html(scattersList);
            $('.__scatters').css('display', 'block');
        }
        //If there were any scatters
        else if (!$.isEmptyObject(spin.scatter)) {

            var scatterReel = ""; //Generate HTML for scatter
            var scatterWinningsAccum = 0;
            var multipliers = 0;
            var freespins = 0;
            var scattersList = "<ul>";

            //Loop through each scatter
            $.each(spin.scatter, function(scatterSymbol, details) {

                scatterWinningsAccum += details.win;

                multipliers += details.multiplier ? details.multiplier : 0;
                /*freespins = details.type === 'freespin' ? freespins + 1 : freespins;*/

                if (details.triggers === 'freespins') {
                    freespins = spin.freeSpin ? spin.freeSpin.won : 0;
                }

                if (gameParams.gameOriginalID === '7010') {

                    var change = { 6: 1, 12: 1 };

                    if (change[Number(scatterSymbol)]) {
                        scatterSymbol += '-change';
                    }
                }

                var respin = false;

                if (gameParams.gameOriginalID === '7013' || gameParams.gameOriginalID === '7015' && details.type === 'respin') {
                    respin = true;
                }
                if (gameParams.gameOriginalID === '7015') {
                    scattersList += "<li>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += _ucFirst(Translate.do("win")) + ": " + curSymb + (details.win * betPerLine).toFixed(2);
                    scattersList += " | " + Translate.do("Free Spin") + ": " + Translate.do(details.type === 'freespin' || details.type === 'freespins' || respin ? spin.freeSpin.won : 'No');
                    scattersList += "</p>";
                    scattersList += "</li>";
                }else if (gameParams.gameOriginalID === '7019') {//MWJ
                    scattersList += "<li>";
                    scattersList += "<li>";
                    scattersList += _ucFirst(Translate.do("Magic beans")) ;
                    scattersList += "<br>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += _ucFirst(Translate.do("Stalk Positions")) + ": " + details.numSymbols ;
                    scattersList += "</p>";
                    scattersList += "</li>";
                }else if (gameParams.gameOriginalID === '7029') {//SBB
                    scattersList += "<li>";
                    scattersList += "<li>";
                    scattersList += _ucFirst(Translate.do("Magic Baubles")) ;
                    scattersList += "<br>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon12GH"] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += _ucFirst(Translate.do("Christmas tree positions")) + ": " + details.numSymbols ;
                    scattersList += "</p>";
                    scattersList += "</li>";


                }else if (gameParams.gameOriginalID === '7021') {//BG
                    scattersList += "<li>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += " | " + Translate.do("Multiplier") + ": +" + (details.multiplier ? details.multiplier : 0);
                    scattersList += " | " + Translate.do("Free Spin") + ": " + (details.type === 'retrigger' || details.type === 'freespin' || details.type === 'freespins' ? details.fsAwarded: Translate.do('No')) ;
                    scattersList += " | " + Translate.do("respin") + ": " + Translate.do(respin ? 'Yes' : 'No');
                    scattersList += "</p>";
                    scattersList += "</li>";

                }else if (gameParams.gameOriginalID === '7018') {//book of
                    scattersList += "<li>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += _ucFirst(Translate.do("win")) + ": " + curSymb + (details.win * betPerLine).toFixed(2);
                    scattersList += " | " + Translate.do("Free Spin") + ": " + (details.type === 'retrigger' || details.type === 'freespin' || details.type === 'freespins' ? details.fsAwarded: Translate.do('No')) ;
                    scattersList += "</p>";
                    scattersList += "</li>";

                }else if (gameParams.gameOriginalID === '7024') {//western wilds

                    scattersList += "<li>";
                    if (spin.state.safes!=undefined) {

                        //scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                        // scattersList += "<p>";
                        scattersList += _ucFirst(Translate.do("Safes:"));
                        scattersList += "</p>";
                        for (var a in spin.state.safes) {
                            scattersList += "<img src=\"" + gameAssets.assets["safeStatic" + spin.state.safes[a]] + "\" style=\"width:40px !important; height:40px;  margin:auto \"  alt=\"safe" + spin.state.safes[a] + "" + "\" />";
                        }
                    }
                    scattersList += "<p>";
                    scattersList += "<p>";
                    if (scatterSymbol==1){  //wild
                        scattersList += _ucFirst(details.scatterObj.num + " " + Translate.do("Additional Wilds"));

                    }else if (scatterSymbol==2){    //mult
                        scattersList += _ucFirst( Translate.do("Multiplier"));
                    }else if (scatterSymbol==3){    //FS
                        scattersList += _ucFirst(details.scatterObj.wonAdditionalSpins + " " + Translate.do("Additional Free Spins"));

                    }else if (scatterSymbol==4){    //reel pos
                        scattersList += _ucFirst(details.scatterObj.smbPos.length + " " + Translate.do("Additional Positions on reel") + " " + (Number(details.scatterObj.reel)+ 1) );
                    }
                    scattersList += "</p>";
                    scattersList += "</li>";
                }else if (gameParams.gameOriginalID === '7027' || gameParams.gameOriginalID === '7127' || gameParams.gameOriginalID === '7227') {//AN

                }else if (gameParams.gameOriginalID === '7028' || gameParams.gameOriginalID === '7128' || gameParams.gameOriginalID === '7228') {//RR
                    scattersList += "<li>";
                    scattersList += "<img src=\"" +gameAssets.assets["icon12GH"] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList +=  _ucFirst(Translate.do("Free Spin") + ": " + details.fsAwarded);
                    scattersList += "</p>";
                    scattersList += "</li>";
                }else{
                    scattersList += "<li>";
                    scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
                    scattersList += "<p>";
                    scattersList += _ucFirst(Translate.do("win")) + ": " + curSymb + (details.win * betPerLine).toFixed(2);
                    scattersList += " | " + Translate.do("Multiplier") + ": +" + (details.multiplier ? details.multiplier : 0);
                    scattersList += " | " + Translate.do("Free Spin") + ": " + Translate.do(details.type === 'freespin' || details.type === 'freespins' ? 'Yes' : 'No');
                    scattersList += " | " + Translate.do("respin") + ": " + Translate.do(respin ? 'Yes' : 'No');
                    scattersList += "</p>";
                    scattersList += "</li>";

                }

            });

            scattersList += "</ul>";
            if ( gameParams.gameOriginalID != '7019' && gameParams.gameOriginalID != '7029' && gameParams.gameOriginalID != '7028') {
                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    //no list of scatter on the reels for MWJ, scatter don't pay
                    scatterReel += "<p>" + Translate.do("Scatters") + ":<span>" + (scatterWinningsAccum > 0 ? curSymb + (scatterWinningsAccum * betPerLine).toFixed(2) : "") + (multipliers > 0 ? "<br />" + Translate.do("Total Multiplier:") + " +" + multipliers : "") + (freespins > 0 ? "<br />" + Translate.do("Free Spins") + ": " + freespins : "") + "</span></p>"; //Add total scatter winnings
                } else {
                    scatterReel += "<p>" + Translate.do("Scatters") + (scatterWinningsAccum > 0 ? "<br /><br />" + curSymb + (scatterWinningsAccum * betPerLine).toFixed(2) : "") + (multipliers > 0 ? "<br />" + Translate.do("Total Multiplier:") + " +" + multipliers : "") + (freespins > 0 ? "<br />" + Translate.do("Free Spins") + ": " + freespins : "") + "</p>"; //Add total scatter winnings
                }

                //Add element for scatter reel
                scatterReel += "<div";
                scatterReel += " class=\"__reel _" + ReelConfig.numIcons + "\"";

                //If old ui
                if (!ReelConfig.newUI) {
                    scatterReel += " style=\"background-image: url('" + gameAssets.assets.bg_m + "');\"";
                }

                scatterReel += ">";
                if (gameParams.gameOriginalID != '7015' && gameParams.gameOriginalID != '7024' && gameParams.gameOriginalID != '7027' && gameParams.gameOriginalID != '7028') {
                    //Loop through each column in spin reel
                    $.each(spin.reel, function (columnIndex, column) {

                        scatterReel += "<div>"; //Add column to reel

                        //Loop through symbols in column
                        for (var i = 0; i < ReelConfig.numIcons; i++) {
                            if(grid[columnIndex][i]!=undefined) {
                                var scatter = false; //Flag for checking if symbol is a scatter

                                //Add symbol to column
                                scatterReel += "<div>";

                                if (gameParams.gameOriginalID === '7011' && column.smb[i].special === 'yinyang') {

                                    scatterReel += '<img style="z-index: 1; opacity: 0.75; position: absolute; left: 6px; margin-top: -10px; width: 90% !important;" src="' + gameAssets.assets.icon8 + '" alt="Special ymbol Overlay" />';
                                    scatter = true;

                                }

                                scatterReel += "<img style=\"opacity: ";
                                if (gameParams.gameOriginalID != '7015') {
                                    //Loop through each scatter
                                    $.each(spin.scatter, function (scatterSymbol, details) {

                                        //Current symbol is a scatter
                                        if (/*(details.win > 0 || details.type == "bonus") && */scatterSymbol == grid[columnIndex][i] && details.reels[columnIndex] == 1) {
                                            scatter = true; //Flag for scatter
                                        }

                                    });
                                } else {
                                    //RIV

                                    $.each(spin.scatter, function (scatterSymbol, details) {
                                        if (details.win > 0) {
                                            scatter = true; //Flag for scatter
                                        }
                                    });
                                }
                                scatterReel += (scatter ? '1.0' : '0.5');
                                scatterReel += ";\"";
                                scatterReel += " src=\"" + gameAssets.assets["icon" + getSymbol(grid[columnIndex][i], this_.displayBet, column.smb[i])] + "\"";
                                scatterReel += " alt=\"Spin Icon " + grid[columnIndex][i] + "\"";
                                scatterReel += " class=\"" + getSymbolClass(grid[columnIndex][i], columnIndex, i) + "\"";
                                scatterReel += " /></div>";
                            }
                        }

                        scatterReel += "</div>"; //Close column element

                    });
                }
                scatterReel += "</div>"; //Close scatter reel element
            }
            scatterReel += scattersList;

            //Show scatter
            $('.__scatters').html(scatterReel);
            $('.__scatters').css('display', 'block');

        } else if (gameParams.gameOriginalID == '7024' && !$.isEmptyObject(spin.state.safes)) {
            //check if WW has safes
            var scattersList = "<ul>";

            scattersList += "<li>";
            //scattersList += "<img src=\"" + gameAssets.assets["icon" + scatterSymbol] + "\" alt=\"Spin Icon " + scatterSymbol + "\" />";
            // scattersList += "<p>";
            scattersList += _ucFirst(Translate.do("Safes"));
            for (var a in spin.state.safes){
                scattersList += "<img src=\"" + gameAssets.assets["safeStatic" +spin.state.safes[a]]  + "\" style=\"width:40px !important; height:40px;  margin:auto \"  alt=\"safe"+spin.state.safes[a] + "" + "\" />";
            }
            // scattersList += " | " + Translate.do("Free Spin") + ": " + Translate.do(details.type === 'freespin' || details.type === 'freespins' || respin ? spin.freeSpin.won : 'No');
            // scattersList += "</p>";
            scattersList += "</li>";
            scattersList += "</ul>";
            //Show scatter
            $('.__scatters').html(scattersList);
            $('.__scatters').css('display', 'block');
        }
        //Else, there were no scatters
        else {
            $('.__scatters').css('display', 'none'); //Don't show scatter
        }

        if(spin.harp!=undefined && spin.harp.harpBonusID!=undefined) {
            scattersList = "<ul>";
            scatterReel=""
            scattersList += "<li>";
debugger
            if (gameParams.gameOriginalID == '7029'){ //SBB
                scattersList += _ucFirst(Translate.do("RUDIE THE REINDEER")) ;
                scattersList += "<br>";

                scattersList += "<img src=\"" + gameAssets.assets["icon19"]  + "\" style=\"width:90px !important; height:150px; display:block; margin:auto\"  alt=\"harp" + "" + "\" />";

                scattersList += "<p>";

                if (spin.harp.harpBonusID==1) {//wilds
                    scattersList += _ucFirst(Translate.do("Additional Wilds")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==2){//mult
                    scattersList += _ucFirst(Translate.do("Multiplier")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==3){//additional pos
                    scattersList += _ucFirst(Translate.do("Christmas tree positions")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==4){//respin
                    scattersList += _ucFirst(Translate.do("Respin"));
                }else if (spin.harp.harpBonusID==5){//extr FS
                    scattersList += _ucFirst(Translate.do("Additional Free Spins")) + ": " + spin.harp.harpBonusValue ;
                }
                scattersList += "</p>";
            }else{//MJ
                scattersList += _ucFirst(Translate.do("ENCHANTED HARP")) ;
                scattersList += "<br>";

                scattersList += "<img src=\"" + gameAssets.assets["icon19" ]  + "\" style=\"width:90px !important; height:150px; display:block; margin:auto\"  alt=\"harp" + "" + "\" />";

                scattersList += "<p>";

                if (spin.harp.harpBonusID==1) {//wilds
                    scattersList += _ucFirst(Translate.do("Additional Wilds")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==2){//mult
                    scattersList += _ucFirst(Translate.do("Multiplier")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==3){//additional pos
                    scattersList += _ucFirst(Translate.do("Stalk Positions")) + ": " + spin.harp.harpBonusValue ;
                }else if (spin.harp.harpBonusID==4){//respin
                    scattersList += _ucFirst(Translate.do("Respin"));
                }else if (spin.harp.harpBonusID==5){//extr FS
                    scattersList += _ucFirst(Translate.do("Additional Free Spins")) + ": " + spin.harp.harpBonusValue ;
                }
                scattersList += "</p>";
            }

            scattersList += "</li>";
            scattersList += "</ul>";
            scatterReel += scattersList;

            //Show scatter
            $('.__scatters').html(scatterReel);
            $('.__scatters').css('display', 'block');
        }



        //If there was a bonus
        if (

            json.bonus ||
            ((gameParams.gameOriginalID === '7016' ||gameParams.gameOriginalID === '7025' || gameParams.gameOriginalID === '7019' || gameParams.gameOriginalID === '7029' || isBrandedMw() || gameParams.gameOriginalID === '7023' || gameParams.gameOriginalID === '7008' || gameParams.gameOriginalID === '7017' || gameParams.gameOriginalID === '7014' || gameParams.gameOriginalID === '7012') && (spin.bonus || spin.multiplier)) ||
            (gameParams.gameOriginalID === '7010' && (spin.freeSpin || spin.tokens || spin.collectWin)) ||
            (gameParams.gameOriginalID === '7013' && spin.drawers)

        ) {

            var bonusHTML = '';

            switch (gameParams.gameOriginalID) {
                case '7002':
                    bonusHTML += f1x2.PaintBonusTable(json.bonus, gameAssets.assets, curSymb, this_.displayBet.stake);
                    break;
                case '7003':
                    bonusHTML += f1x2.CherryBlastBonusTable(json.bonus, gameAssets.assets.icon13, curSymb, this_.displayBet.stake);
                    break;
                case '7006':
                    bonusHTML += f1x2.NeonJungleBonusTable(json.bonus, gameAssets.assets.icon12, curSymb);
                    break;
                case '7008':
                    bonusHTML += f1x2.RainbowWildFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7017':
                    bonusHTML += f1x2.RainbowWildFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7016':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7025':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7019':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7029':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7023':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                case '7010':
                    bonusHTML += f1x2.WaiKikiBonusTable({

                        fs: spin.freeSpin,
                        tk: spin.tokens,
                        cw: spin.collectWin ? curSymb + (Number(spin.collectWin) / 100).toFixed(2) : false,

                        assets: [

                            gameAssets.assets["icon11-expanded"],
                            gameAssets.assets["tokens-text"]

                        ]

                    });
                    break;
                case '7012':
                    bonusHTML += f1x2.MoiraiBlazeFreespin(spin);
                    break;
                case '7013':
                    bonusHTML += f1x2.CuriousCabinetFreespin(spin, gameAssets.assets, curSymb, betPerLine);
                    break;
                case '7014':
                    bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
                    break;
                default:
                    logger('how has this happened');
            }
            if(isBrandedMw()){  //many possible gamiDs
                bonusHTML += f1x2.VikingwWildsFreespin(spin, this_.displayBet.spin, gameAssets.assets);
            }

            //Show bonus
            $('.__bonus').html(bonusHTML);
            $('.__bonus').css('display', 'block');

        }
        //Else, there was no bonus
        else {
            $('.__bonus').css('display', 'none'); //Don't show bonus
        }
        /*
                //Hide history list
                $(".game__history__list, #gameHistoryTip")
                    .addClass("hidden")
                    .css("display", "none");
        */
        fadeElement($(".game__history__list"), 'out');
        fadeElement($(".game__history__tip"), 'out');

        //$(".game__history__replay").removeClass("hidden"); //Show replay

        fadeElement($(".game__history__replay"), 'in');

        //If "NEW_UI"
        if (ReelConfig.newUI) {

            //If mobile
            if (framework.isTouch()) {

                window.newUI.gameHistoryManager.data(this_.displayBet) //Generate portrait game history replay details table
                window.newUI.orientation.check()                       //Check orientation and apply orientation styling

            }

        }

    };

    function toUpperCase(string) {
        return ( /^[\x00-\xFF]*$/.test(string)?string.toUpperCase():string);
    }

    initClass_(); //Initialise class

    window.currencyLookup = _currencyLookup //Expose currencyLookup function to window
    window.MainMenu = this_

}

MainMenu.prototype.constructor = MainMenu;