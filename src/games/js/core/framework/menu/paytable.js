/*
 * Paytable class for rendering game paytable
 */
function Paytable(help) {

    var paytable = this;

    var help_ = help || '<p>Game Guide Unavailable</p>'; //Optional parameter
    //console.log(help_)
    paytable.currentPage = 0; //Current visible page in paytable

    //Modulo function for looping through pages array (JS % is weird)
    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    //Paytable swipe coordinates
    paytable.xDown = null;
    paytable.yDown = null;
    paytable.xUp = null;
    paytable.yUp = null;

    //Handler for paytable touch start event
    function handleTouchStart(evt) {

        //Record swipe starting positions
        paytable.xDown = evt.touches[0].clientX;
        paytable.yDown = evt.touches[0].clientY;

    }

    //Handler for paytable touch move event
    function handleTouchMove(evt) {

        //evt.stopPropagation()

        //Return if touch did not start
        if (!paytable.xDown || !paytable.yDown) {
            return;
        }

        //Update swipe end positions
        paytable.xUp = evt.touches[0].clientX;
        paytable.yUp = evt.touches[0].clientY;

        //Calculate difference between start and end positions
        var xDiff = paytable.xDown - paytable.xUp;
        var yDiff = paytable.yDown - paytable.yUp;

        //If horizontal direction
        if (Math.abs(xDiff) > Math.abs(yDiff)) {

            //If left direction
            if (xDiff > 0) {
                paytable.navigate(1); //Left swipe
            }
            //Else right direction
            else {
                paytable.navigate(-1); //Right swipe
            }

        }

        //Reset paytable swipe coordinates
        paytable.xDown = null;
        paytable.yDown = null;
        paytable.xUp = null;
        paytable.yUp = null;

    }

    //Initialise class from paytable config
    paytable.initClass = function(help) {

        if (!ReelConfig.newUI) {
            logger('Paytable init');

            $('#paytableContainer > .paytable__button').html("<img src=\"" + frameworkAssets.assets.menuBtnClose + "\" alt=\"Back Button\" />"); //Set back button icon

            //Back button on click listener
            $('#paytableContainer > .paytable__button').on("click", function() {
                paytable.hide(); //Hide paytable
            });

            //Event listeners for paytable swipes
            document.getElementById('paytable').addEventListener('touchstart', handleTouchStart, false);
            document.getElementById('paytable').addEventListener('touchmove', handleTouchMove, false);

            var config = paytableAssets; //Get paytable config

            //If fullscreen, fill in bottom bar
            if (config.fullscreen === true) {
                $('#paytableContainer').append('<div id="betConsolePaytableFill"></div>');
            }

            if (config.closeBtn) {

                //Close button position
                $('#paytableContainer > .paytable__button').css('top', config.closeBtn.ypos + 'px');
                $('#paytableContainer > .paytable__button').css('left', config.closeBtn.xpos + 'px');

            }

            $('#paytable').css('background-image', 'url(' + config.bg + ')'); //Load main background image

            if (config.top) {
                $('#paytableContainer').addClass('top');
            }

            //Navigate function for moving left or right between paytable pages
            paytable.navigate = function(direction) {

                $('.paytable__page__link').removeClass('active'); //Remove active pagination link

                fadeElement($('#paytable > #pages #page' + paytable.currentPage), 'out', function () {
                    $('#paytable > #pages #page' + paytable.currentPage).removeClass('active'); //Hide current page
                });

                paytable.currentPage = mod(Number(paytable.currentPage) + direction, config.pages.length); //Loop through pages array

                fadeElement($('#paytable > #pages #page' + paytable.currentPage), 'in', function() {
                    $('#paytable > #pages #page' + paytable.currentPage).addClass('active'); //Show new page
                });

                $('.paytable__page__link.__' + paytable.currentPage).addClass('active'); //Set active pagination link

            }

            //Load buttons data - for each button in config..
            $.each(config.buttons, function(button_id, button) {

                var buttonHTML = ''; //Generate HTML for button

                buttonHTML += '<button'; //Add button element
                buttonHTML += ' id="' + button.id + '"'; //Add button ID
                buttonHTML += ' style="'; //Style button
                buttonHTML += 'background-image: url(' + button.bg_up + ');'; //Button background image
                buttonHTML += 'top: ' + button.ypos + 'px;'; //Button top position
                buttonHTML += 'left: ' + button.xpos + 'px;'; //Button left position
                buttonHTML += '"'; //Close style attribute
                buttonHTML += '></button>'; //Closing button element tag

                $('#paytable').append(buttonHTML); //Add button to page

                //Button hover event
                $('#paytable > #' + button.id).hover(

                    //Change background to over image
                    function() {
                        $(this).css('background-image', 'url(' + button.bg_over + ')');
                    },

                    //Return background to normal
                    function() {
                        $(this).css('background-image', 'url(' + button.bg_up + ')');
                    }

                );

                //Button mousedown/touchstart event
                $('#paytable > #' + button.id).on('mousedown touchstart',

                    //Change background to down image
                    function() {
                        $(this).css('background-image', 'url(' + button.bg_down + ')');
                    }

                );

                //Button mouseup/touchend event
                $('#paytable > #' + button.id).on('mouseup touchend',

                    //Change background to normal
                    function() {
                        $(this).css('background-image', 'url(' + button.bg_up + ')');
                    }

                );

                //Button click event
                $('#paytable > #' + button.id).click(function() {
                    paytable.navigate(button.direction); //Navigate in button direction
                });

            });

            //Generate list of pagination links
            var pagination = '<ul';
            pagination += ' id="paytablePagination"';
            pagination += ' style="';
            pagination += 'top: ' + config.pagination.ypos + 'px;';
            pagination += 'left: ' + config.pagination.xpos + 'px;';
            pagination += config.translatePosition ? 'transform: translate(-170px, -115px);' : '';
            pagination += '"';
            pagination += '>';

            //Load pages data - for each page in config..
            $.each(config.pages, function(page_id, page) {

                //Add pagination list item for this page
                pagination += '<li';
                pagination += ' class="';
                pagination += ' paytable__page__link';
                pagination += ' __' + page_id;
                pagination += page_id == paytable.currentPage ? ' active' : '';
                pagination += '"';
                pagination += ' data-page="' + page_id + '"';
                pagination += '>';
                pagination += '</li>';

                var pageHTML = '<li id="page' + page_id + '" class="page">'; //Generate HTML for page

                //If there are symbols to display in this page
                if (page.symbols) {

                    //Then for each symbol within that page..
                    $.each(page.symbols, function(symbol_id, symbol) {

                        pageHTML += '<div'; //Add symbol element
                        pageHTML += ' id="' + symbol.id + '"'; //Add symbol ID
                        pageHTML += ' style="'; //Style symbol
                        pageHTML += 'top: ' + symbol.ypos + 'px;'; //Symbol top position
                        pageHTML += 'left: ' + symbol.xpos + 'px;'; //Symbol left position
                        pageHTML += (symbol.zpos ? 'z-index: ' + symbol.zpos + ';' : ''); //Symbol z-index
                        pageHTML += '"'; //Close style attribute
                        pageHTML += '>'; //Close symbol element

                        if (symbol.bgType === 'style') {

                            pageHTML += '<div';
                            pageHTML += ' style="';
                            pageHTML += 'height: ' + symbol.height + ';';
                            pageHTML += 'width: ' + symbol.width + ';';
                            pageHTML += 'background: ' + symbol.bg + ';';
                            pageHTML += '"></div>';

                        }
                        else {

                            pageHTML += '<img'; //Add symbol image element
                            pageHTML += ' src="' + symbol.bg + '"'; //Add symbol image source
                            pageHTML += ' alt="' + symbol.id + ' Image"'; //Add symbol image alt text
                            pageHTML += ' style="'; //Style image
                            pageHTML += symbol.bgWidth ? 'width: ' + symbol.bgWidth + ';' : ''; //Image width if set
                            pageHTML += symbol.width ? 'width: ' + symbol.width + ';' : ''; //Image width if set
                            pageHTML += symbol.height ? 'height: ' + symbol.height + ';' : ''; //Image height if set
                            pageHTML += symbol.flip ? 'transform: scaleX(-1);' : ''; //Flip image if set
                            pageHTML += '"'; //Close style attribute
                            pageHTML += '/>'; //Close symbol image element
                        }

                        //If there is symbol text to display
                        if (symbol.text != undefined) {

                            //Whether text is an array of texts
                            var textArray = Object.prototype.toString.call(symbol.text.value) === '[object Array]';

                            pageHTML += '<' + (textArray ? 'div' : 'p'); //Add symbol text element
                            pageHTML += ' class="symbol__text"'; //Symbol text class
                            pageHTML += ' style="'; //Style symbol text
                            pageHTML += 'top: ' + symbol.text.ypos + 'px;'; //Symbol text top position
                            pageHTML += 'left: ' + symbol.text.xpos + 'px;'; //Symbol text left position
                            pageHTML += 'width: ' + symbol.text.width + 'px;'; //Symbol text width
                            pageHTML += 'font-family: ' + symbol.text.font + ';'; //Symbol text font family
                            pageHTML += 'font-size: ' + symbol.text.size + ';'; //Symbol text font size
                            pageHTML += 'text-align: ' + symbol.text.align + ';'; //Symbol text text alignment
                            pageHTML += 'color: ' + symbol.text.fill + ';'; //Symbol text colour
                            pageHTML += 'text-shadow: ' + symbol.text.shadow + ';'; //Symbol text shadow
                            pageHTML += '">'; //Close symbol text element

                            var count = 0;
                            var margin = 0;

                            //If text value is an array
                            if (textArray) {

                                $.each(symbol.text.value, function(text_id, text) {

                                    //If text value is a string
                                    if (typeof text === 'string' || text instanceof String) {

                                        pageHTML += '<p';
                                        pageHTML += ' style="';
                                        pageHTML += 'color: ' + symbol.text.fill + '; ';
                                        pageHTML += symbol.text.spacing ? 'margin: ' + symbol.text.spacing + ' 0' : '';
                                        pageHTML += '">';
                                        pageHTML += Translate.do(text);
                                        pageHTML += '</p>';

                                    }
                                    //If text value is a number
                                    else if (typeof text === 'number') {

                                        //Loop through paytable values for this symbol
                                        $.each(framework.getSetup().getSymbolValues(text), function(matches, amount) {

                                            if (!isNaN(matches)) {

                                                //And add each value to the image
                                                pageHTML += '<p>';
                                                pageHTML += ' style="';
                                                pageHTML += symbol.text.spacing ? 'margin: ' + symbol.text.spacing + ' 0' : '';
                                                pageHTML += '">';
                                                pageHTML += '<span style="font-family: ' + symbol.text.font + '; margin-left: ' + margin + 'px; color: ' + symbol.text.left_fill + ';" class="__left">' + matches + '.</span>';
                                                pageHTML += '<span style="font-family: ' + symbol.text.font + '; color: ' + symbol.text.right_fill + ';">' + amount + '</span><br />';
                                                pageHTML += '</p>';

                                            }

                                        });

                                    }

                                });

                            }
                            //If text value is a string
                            else if (typeof symbol.text.value === 'string' || symbol.text.value instanceof String) {
                                pageHTML += Translate.do(symbol.text.value);
                            }
                            //If text value is a number
                            else if (typeof symbol.text.value === 'number') {

                                //Get symbol values setup object
                                var symbolValues = framework.getSetup().getSymbolValues(symbol.text.value);

                                if (symbolValues) {

                                    var payOut;

                                    //Convert symbol values to just payout for actual number displayed
                                    var symbolValuesActual = {};

                                    for (var i in symbolValues) {
                                        symbolValuesActual[symbolValues[i]] = 1;
                                    }

                                    var valuesCount = 0; //Count current value displayed
                                    var start = 0; //Start value to display
                                    var end = Object.keys(symbolValuesActual).length; //End value to display

                                    //If pagination of symbol values required
                                    if (symbol.text.paginate) {

                                        //Work out pagination split point
                                        var split = Math.ceil(end / symbol.text.paginate[0]);

                                        start = 0 + split * symbol.text.paginate[1]; //Calculate paginated start point
                                        end = split * (symbol.text.paginate[1] + 1); //Calculate paginated end point

                                    }

                                    //Loop through paytable values for this symbol
                                    $.each(symbolValues, function(matches, amount) {

                                        //Check value is within current pagination range
                                        if (!isNaN(matches) && valuesCount >= start && valuesCount < end) {

                                            if (symbol.text.effect && symbol.text.effect.type == 'slant') {
                                                margin = symbol.text.effect.start - (symbol.text.effect.increment * count++);
                                            }
                                            if (amount!=payOut) {
                                                //And add each value to the image
                                                pageHTML += '<span style="font-family: ' + symbol.text.font + '; margin-left: ' + margin + 'px; color: ' + symbol.text.left_fill + ';" class="__left"> ' + Translate.do(matches + ".")+ '</span>';
                                                pageHTML += '<span style="font-family: ' + symbol.text.font + '; color: ' + symbol.text.right_fill + ';">' + amount + '</span><br />';
                                            }
                                            payOut=amount;

                                        }

                                        valuesCount++;

                                    });

                                }
                                else {
                                    pageHTML += 'SYMBOL VALUES NOT FOUND';
                                }

                            }

                            pageHTML += '</' + (textArray ? 'div' : 'p') + '>'; //Closing symbol text element tag

                        }

                        pageHTML += '</div>'; //Closing symbol element tag

                    });

                }

                //If there are any videos to be displayed
                if (page.videos) {

                    //Loop through page videos
                    for (var i = 0; i < page.videos.length; i++) {

                        var video = page.videos[i]; //Get current video

                        pageHTML += '<video autoplay loop muted playsinline height="' + video.height + '" width="' + video.width + '" style="';

                        //Loop through video style properties
                        for (var j in video.styles) {
                            pageHTML += j + ': ' + video.styles[j] + ';'; //Add property
                        }

                        pageHTML += '">'; //End of video tag

                        //Loop through video sources
                        for (var j = 0; j < video.sources.length; j++) {

                            var source = video.sources[j]; //Get current source

                            pageHTML += '<source src="' + source.path + '" type="video/' + source.type + '">'; //Add source

                        }

                        pageHTML += '</video>'; //Close video tag

                    }

                }

                //If there is any text to display in this page
                if (page.text) {

                    //Then for each text within the page
                    $.each(page.text, function(text_id, text) {

                        //Whether text is an array of texts
                        var textArray = Object.prototype.toString.call(text.value) === '[object Array]';

                        pageHTML += '<' + (textArray ? 'div' : 'p');
                        pageHTML += ' style="';
                        pageHTML += 'position: absolute;';
                        pageHTML += 'top: ' + text.ypos + 'px;';
                        pageHTML += 'left: ' + text.xpos + 'px;';
                        pageHTML += 'border: ' + text.border + ';';
                        pageHTML += 'height: ' + text.height + 'px;';
                        pageHTML += 'width: ' + text.width + 'px;';
                        pageHTML += 'color: ' + text.fill + ';';
                        pageHTML += 'font-family: ' + text.font + ';';
                        pageHTML += 'font-size: ' + text.size + ';';
                        pageHTML += 'text-align: ' + text.align + ';';
                        pageHTML += 'margin: ' + text.margin + ';';
                        pageHTML += (textArray ? 'display: block; padding: 10px; box-sizing: border-box;' : '');
                        pageHTML += '';
                        pageHTML += '">';

                        //If text is an array of texts
                        if (textArray) {

                            //Loop through each text value
                            $.each(text.value, function(text_id, textObj) {

                                //If text value is a string
                                if (typeof textObj === 'string' || textObj instanceof String) {

                                    pageHTML += '<p style="color: ' + text.para_fill + ';font-family: ' + text.font + ';margin: 0; margin-top: ' + (text_id === 0 ? 0 : text.spacing) + 'px">';
                                    pageHTML += Translate.do(textObj);

                                }
                                //If text value is an object
                                else if (typeof textObj.value === 'string' || textObj.value instanceof String) {

                                    //Add element for text
                                    pageHTML += '<p';
                                    pageHTML += ' style="';
                                    pageHTML += 'position: absolute;';
                                    pageHTML += 'top: ' + textObj.ypos + 'px;';
                                    pageHTML += 'left: ' + textObj.xpos + 'px;';
                                    pageHTML += 'margin: 0;';
                                    pageHTML += 'height: ' + textObj.height + 'px;';
                                    pageHTML += 'width: ' + textObj.width + 'px;';
                                    pageHTML += 'color: ' + textObj.fill + ';';
                                    pageHTML += 'font-family: ' + textObj.font + ';';
                                    pageHTML += 'font-size: ' + textObj.size + ';';
                                    pageHTML += 'text-align: ' + textObj.align + ';';
                                    pageHTML += '"';
                                    pageHTML += '>';
                                    pageHTML += Translate.do(textObj.value);

                                }
                                //If text value is a number
                                else if (typeof textObj.value === 'number') {

                                    //Add element for text
                                    pageHTML += '<p';
                                    pageHTML += ' style="';
                                    pageHTML += 'position: absolute;';
                                    pageHTML += 'top: ' + textObj.ypos + 'px;';
                                    pageHTML += 'left: ' + textObj.xpos + 'px;';
                                    pageHTML += 'margin: 0;';
                                    pageHTML += 'height: ' + textObj.height + 'px;';
                                    pageHTML += 'width: ' + textObj.width + 'px;';
                                    pageHTML += 'color: ' + textObj.fill + ';';
                                    pageHTML += 'font-family: ' + textObj.font + ';';
                                    pageHTML += 'font-size: ' + textObj.size + ';';
                                    pageHTML += 'text-align: ' + textObj.align + ';';
                                    pageHTML += '"';
                                    pageHTML += '>';

                                    //Loop through paytable values for this symbol
                                    $.each(framework.getSetup().getSymbolValues(textObj.value), function(matches, amount) {

                                        //And add each value to the image
                                        pageHTML += '<span style="font-family: ' + symbol.text.font + '; margin-left: ' + margin + 'px; color: ' + text.left_fill + ';" class="__left">' + matches + '.</span>';
                                        pageHTML += '<span style="font-family: ' + symbol.text.font + '; color: ' + text.right_fill + ';">' + amount + '</span><br />';

                                    });

                                }

                                pageHTML += '</p>';

                            });

                        }
                        //If text value is a string
                        else if (typeof text.value === 'string' || text.value instanceof String) {
                            pageHTML += Translate.do(text.value);
                        }
                        //If text value is a number
                        else if (typeof text.value === 'number') {

                            var payOut;

                            var symbolValues = framework.getSetup().getSymbolValues(text.value);

                            //Convert symbol values to just payout for actual number displayed
                            var symbolValuesActual = {};

                            for (var i in symbolValues) {
                                symbolValuesActual[symbolValues[i]] = 1;
                            }

                            var valuesCount = 0; //Count current value displayed
                            var start = 0; //Start value to display
                            var end = Object.keys(symbolValuesActual).length; //End value to display

                            //If pagination of symbol values required
                            if (text.paginate) {

                                //Work out pagination split point
                                var split = Math.ceil(end / text.paginate[0]);

                                start = 0 + split * text.paginate[1]; //Calculate paginated start point
                                end = split * (text.paginate[1] + 1); //Calculate paginated end point

                            }

                            //Loop through paytable values for this symbol
                            $.each(symbolValues, function(matches, amount) {

                                //Check value is within current pagination range
                                if (!isNaN(matches) && amount!=payOut) {

                                    if (valuesCount >= start && valuesCount < end) {

                                        //And add each value to the image
                                        pageHTML += '<span style="color: ' + text.left_fill + ';font-family: ' + text.font + ';" class="__left">' + Translate.do(matches + '.') + '</span>';
                                        pageHTML += '<span style="color: ' + text.right_fill + ';font-family: ' + text.font + ';">' + amount + '</span><br />';

                                    }

                                    valuesCount++;

                                }
                                payOut = amount;

                            });

                        }

                        pageHTML += '</' + (textArray ? 'div' : 'p') + '>';

                    });

                }

                //If there are lines to display in this page
                if (page.lines) {

                    //Create element for lines
                    pageHTML += '<div';
                    pageHTML += ' class="__lines' + (page.small ? ' __small' : '') + '"';
                    pageHTML += 'style="';
                    pageHTML += page.ypos ? 'top: ' + page.ypos + 'px;' : '';
                    pageHTML += page.xpos ? 'left: ' + page.xpos + 'px;' : '';
                    pageHTML += page.width ? 'width: ' + page.width + '%;' : '';
                    pageHTML += config.translatePosition ? 'transform: translateX(170px);' : '';
                    pageHTML += '"';
                    pageHTML += '>';

                    //Loop through lines to be shown
                    for (var i = page.lines[0]; i <= page.lines[1]; i++) {

                        pageHTML += '<div class="__line">'; //Create element for line
                        pageHTML += '<p style="font-family: ' + page.font + '; color: ' + page.text_colour + '">' + ('0' + i).slice(-2) + '</p>'; //Show line ID
                        pageHTML += '<div class="__grid __' + ReelConfig.numIcons + '">'; //Create element for line graphic

                        //Loop through each element in payline array
                        $.each(framework.getSetup().getPaylineArray(i), function(key, value) {

                            pageHTML += '<div class="__column">'; //Create column for current position in array

                            //Create three cells in column
                            for (var j = 0; j < ReelConfig.numIcons; j++) {

                                pageHTML += '<div';
                                pageHTML += ' style="background-color: ' + (j == value ? page.checked_colour : page.unchecked_colour) + ';"';
                                pageHTML += '></div>';

                            }

                            pageHTML += '</div>'; //Close column element

                        });

                        pageHTML += '</div></div>'; //Close grid graphic and line elements

                    }

                    pageHTML += '</div>'; //Close element for all lines

                }

                //If page is game guide
                if (page.gameguide) {

                    //Add help text
                    pageHTML += '<h2 style="position: absolute; top: ' + page.title_ypos + 'px; left: ' + page.title_xpos + 'px; color: ' + page.fill + '; font-family: ' + page.font + '">' + Translate.do(page.title) + '</h2>';
                    pageHTML += '<article';
                    pageHTML += ' class="help"';
                    pageHTML += ' style="';
                    pageHTML += 'top: ' + page.ypos + 'px;';
                    pageHTML += 'left: ' + page.xpos + 'px;';
                    pageHTML += 'height: ' + page.height + 'px;';
                    pageHTML += 'width: ' + page.width + 'px;';
                    pageHTML += 'font-family: ' + page.font + 'px;';
                    pageHTML += '"';
                    pageHTML += '>';
                    pageHTML += help;

                    pageHTML += '<h2>' + Translate.do('GUI Descriptions') + '</h2>';
                    pageHTML += '<ul class="game__guide__gui">';
                    pageHTML += '<li><span>' + Translate.do('Help Button') + ':</span><img src="' + (gameParams.channel === 'mobile' ? frameworkAssets.assets.menuBtnPaytable : frameworkSettings.buttons.helpButton.bg) + '" alt="Help Button" /></li>';
                    pageHTML += '<li><span>' + Translate.do('Bet Control') + ':</span> <img src="' + frameworkSettings.buttons.betControl.bg + '" alt="Bet Control" /></li>';

                    if (getCanAutoplay_()) {
                        if (gameParams.channel === 'desktop') {
                            pageHTML += '<li><span>' + Translate.do('Autoplay Button') + ':</span> <img src="' + frameworkSettings.buttons.autoButton.bg + '" alt="Autoplay Button" /></li>';
                        }

                        pageHTML += '<li><span>' + Translate.do('Autoplay Start Button') + (gameParams.channel === 'mobile' ? ' (' + Translate.do('HOLD') + ')' : '') + ':</span> <img src="' + frameworkSettings.buttons.autoButton.start + '" alt="Autoplay Start Button" /></li>';
                        pageHTML += '<li><span>' + Translate.do('Autoplay Stop Button') + ':</span> <img src="' + frameworkSettings.buttons.autoButton.stop + '" alt="Autoplay Stop Button" /></li>';
                    }
                    pageHTML += '<li><span>' + Translate.do('Spin Button') + ':</span> <img src="' + frameworkSettings.buttons.spinButton.bg + '" alt="Spin Button" /></li>';
                    if (getCanQuickPlay_())pageHTML += '<li><span>' + Translate.do('Stop Button') + ':</span> <img src="' + frameworkSettings.buttons.stopButton.bg + '" alt="Stop Button" /></li>';
                    pageHTML += '</ul>';

                    pageHTML += '</article>';
                    pageHTML += '<style>#paytable h2 > sup, .help * {color: ' + page.fill + '!important}</style>';

                }

                pageHTML += '</li>'; //Closing page element tag

                //add new page element to HTML
                $('#paytable > #pages').append(pageHTML);

                //If mobile using translate to position
                if (config.translatePosition) {
                    $('#paytable > #pages').css('transform', 'translate(-170px, -115px)');
                }

                //If page is game guide
                if (page.gameguide) {

                    var rtp = page.rtp[gameParams.confType - 1];

                    //Set current RTP in game guide
                    $('.help .__rtp').html(rtp ? rtp : 'RTP NOT FOUND');

                    if (window.gameParams.gameOriginalID === '7007') {

                        var maxWin = window.framework.getSetup().getMaxWin() || 'MAX WIN NOT FOUND';
                        $('.help #max__win').html(maxWin);

                    }

                    Draggable.create('.help', {type: 'scrollTop', throwProps: true, cursor: 'default'});

                    /*
                                    $(".help").on("touchmove", function(e) {
                                        e.stopPropagation()
                                    });
                    */
                }

            });

            //Add pagination list to paytable
            pagination += '</ul>';
            pagination += '<style>#paytableContainer > #paytablePagination > .paytable__page__link { background-color: ' + config.pagination.unchecked + '; } #paytableContainer > #paytablePagination > .paytable__page__link.active { background-color: ' + config.pagination.checked + '; } </style>';
            $('#paytableContainer').append(pagination);

            //Pagination link on click event
            $('.paytable__page__link').on("click", function(event) { setPage(event.target.dataset.page) });

            $('#paytable > #pages #page' + paytable.currentPage).addClass('active'); //Show starting page

        }

        else {

        }

    }

    function setPage(page) {
    //useless code.... id names are wrong
        pt_=page;
        if (ReelConfig.newUI) {
            document.getElementById('GameGuidePage').classList.add("hidden")
            document.getElementById('PayoutPage').classList.add("hidden")
            document.getElementById('WinLinesWaysPage').classList.add("hidden")

            $('#GameGuidePage').css("visibility","hidden");
            $('#PayoutPage').css("visibility","hidden");
            $('#WinLinesWaysPage').css("visibility","hidden");

            $('#GameGuidePage').css("opacity",0);
            $('#PayoutPage').css("opacity",0);
            $('#WinLinesWaysPage').css("opacity",0);

            $('#GameGuidePage').css("display","none");
            $('#PayoutPage').css("display","none");
            $('#WinLinesWaysPage').css("display","none");

            $('#GameGuideIcon').removeClass('active');
            $('#PayoutIcon').removeClass('active');
            $('#WinLinesWaysIcon').removeClass('active');

            if (page==0){
                $('#GameGuidePage').css("visibility","visible");
                $('#GameGuidePage').css("opacity",1);
                $('#GameGuidePage').css("display","block");
                $('#GameGuidePage').removeClass('hidden');
                $('#GameGuideIcon').addClass('active');
            }
            if (page==1){
                $('#PayoutPage').removeClass('hidden');
                $('#PayoutPage').css("visibility","visible");
                $('#PayoutPage').css("opacity",1);
                $('#PayoutPage').css("display","block");
                $('#PayoutIcon').addClass('active');
            }

        }else{
            $('.paytable__page__link').removeClass('active'); //Remove active pagination link

            fadeElement($('#paytable > #pages #page' + paytable.currentPage), 'out', function () {
                $('#paytable > #pages #page' + paytable.currentPage).removeClass('active'); //Hide current page
            });

            paytable.currentPage = page; //Update current page

            fadeElement($('#paytable > #pages #page' + paytable.currentPage), 'in', function () {
                $('#paytable > #pages #page' + paytable.currentPage).addClass('active'); //Show new page
            });

            $('.paytable__page__link.__' + paytable.currentPage).addClass('active'); //Set active pagination link
        }


    }

    var visible = false;

//Toggle paytable visibility
    paytable.toggle = function(page) {
        visible = !visible;

        //If closing and closePt is a function
        if (!visible && typeof gameClass_.closePt === "function") {
            gameClass_.closePt(); //Call closePt
        }

        //If opening
        if (visible) {

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {

                //If mobile
                if (framework.isTouch()) {

                    document.getElementById('arch').classList.add('hidden') //Hide portrait arch

                    //Loop through all buttons
                    for (var i = 0; i < window.newUI.buttons.length; i++) {

                        var button = window.newUI.buttons[i]; //Store button
                        button.visible = false; //Hide button from UI

                    }

                }

                window.newUI.paytableManager.gameGuideManager.onClick.dispatch()

            }

            //old ui
            else {
                $('#paytableMobile > img').attr('src', frameworkAssets.assets.menuBtnClose); //Update button to close
            }

            setPage((page==undefined)?0:page);

        }
        //Else closing
        else {
            pt_=-1;
            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {

                //If mobile
                if (framework.isTouch()) {

                    document.getElementById('arch').classList.remove('hidden') //Show portrait arch

                    //Loop through all buttons
                    for (var i = 0; i < window.newUI.buttons.length; i++) {

                        var button = window.newUI.buttons[i]; //Store button
                        button.visible = true; //Hide button from UI

                    }

                }

            }

            //old ui
            else {
                $('#paytableMobile > img').attr('src', frameworkAssets.assets.menuBtnPaytable); //Update button to open
            }

        }

        fadeElement($('#paytableContainer'), visible); //Fade paytable

    }

    //Hide paytable
    paytable.hide = function() {
        pt_=-1;
        //If old UI
        if (!ReelConfig.newUI) {
            $('#paytableMobile > img').attr('src', frameworkAssets.assets.menuBtnPaytable); //Update button to open
        }
        // $('#paytableMobile > img').attr('src', frameworkAssets.assets.menuBtnPaytable); //Update button to open
        /*$('#paytableContainer').addClass('hidden'); //Hide paytable*/
        fadeElement($('#paytableContainer'), 'out'); //Fade paytable out
        visible = false;

        //If "NEW_UI"
        if (ReelConfig.newUI) {

            ///If mobile
            if (framework.isTouch()) {
                document.getElementById('arch').classList.remove('hidden') //Show portrait arch
            }

            //For each button
            window.newUI.buttons.forEach(function(b_){
                b_.enable  = true //Enable button
                b_.visible = true //Make button visible

            })

        }

        //If closePt is a function
        if (typeof gameClass_.closePt === "function") {
            gameClass_.closePt(); //Call closePt
        }
    }

    //Only load paytable if it exists in config
    if (paytableAssets && help_!="<p>Game Guide Unavailable</p>") {
        paytable.initClass(help_); //Initialise class
    }

}