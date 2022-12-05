/**
 * KiS Framework, Created by Callan on 04/11/2016.
 */

//Object for translating and then rendering all text within framework
function Translator() {

    var this_ = this;

    /* logger('Translator init'); */

    //Array of element content to display
    this_.elements = [

        {

            'selector': '#mainViewport > #loadingScreen > #wait',

            'content': [
                {'type': 'text', 'value': 'Loading images please wait...'}
            ]

        },

        {

            'selector': '#menuContainer > .menu__content > .menu__header > h2',

            'content': [
                {'type': 'text', 'value': 'Menu'}
            ]

        },

        {

            'selector': '#menuContainer #menu__desktop__nav > a:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Settings'},
                {'type': 'img', 'value': ' <img src="gui/generic/img/desktop/svg/menu-settings-btn.svg">'}
            ]

        },

        {

            'selector': '#menuContainer #menu__desktop__nav > #gameHistory',

            'content': [
                {'type': 'text', 'value': 'Game History'},
                {'type': 'img', 'value': ' <img src="gui/generic/img/desktop/svg/menu-history-btn.svg">'}
            ]

        },

        {

            'selector': '#menuContainer #gameHistoryTip',

            'content': [
                {'type': 'text', 'value': 'List of Bets Click One To See Spin'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Status'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(2)',

            'content': [
                {'type': 'text', 'value': 'Channel'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(3)',

            'content': [
                {'type': 'text', 'value': 'Placed'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(4)',

            'content': [
                {'type': 'text', 'value': 'Settled'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(5)',

            'content': [
                {'type': 'text', 'value': 'Bet'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(6)',

            'content': [
                {'type': 'text', 'value': 'Lines'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(7)',

            'content': [
                {'type': 'text', 'value': 'Bet/Lines'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content table tr:nth-child(1) > td:nth-child(8)',

            'content': [
                {'type': 'text', 'value': 'Total Win'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content .__lines__nav > a:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Winning Lines - Total: '},
                {'type': 'span', 'value': '<span></span>'}
            ]

        },

        {

            'selector': '#menuContainer .game__history__replay .__content .__lines__nav > a:nth-child(2)',

            'content': [
                {'type': 'text', 'value': 'Losing Lines'}
            ]

        },

        {

            'selector': '#gamefooter .balance__holder > #displayBalance',

            'content': [
                {'type': 'text', 'value': 'Balance : '}
            ]

        },

        {

            'selector': '#gamefooter #smallMessage',

            'content': [
                {'type': 'text', 'value': 'Playing for real'}
            ]

        },

        {

            'selector': '#betconsole #betValueContainer #cashOptions .cash__options__list > li:nth-child(1) > label:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Coins'}
            ]

        },

        {

            'selector': '#betconsole #betValueContainer #cashOptions .cash__options__list > li:nth-child(2) > label:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Cash'}
            ]

        },

        {

            'selector': '#betconsole #betValueContainer #betMaxBox > .box__value:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Bet Max'}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > h5:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Stop Autoplay'}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > .auto__list > li:nth-child(1) > label.switch__name',

            'content': [
                {'type': 'text', 'value': 'On any win '}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > .auto__list > li:nth-child(2) > label.switch__name',

            'content': [
                {'type': 'text', 'value': 'On single win of '}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > .auto__list > li:nth-child(3) > label.switch__name',

            'content': [
                {'type': 'text', 'value': 'If cash increase by '}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > .auto__list > li:nth-child(4) > label.switch__name',

            'content': [
                {'type': 'text', 'value': 'If cash decrease by '}
            ]

        },

        {

            'selector': '#betconsole #autoPlaySettings #autoPlayOptions > .auto__list > li:nth-child(5) > label.switch__name',

            'content': [
                {'type': 'text', 'value': 'When entering any feature'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content > header.menu__header > h2',

            'content': [
                {'type': 'text', 'value': 'Menu'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #soundPage > h2:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Sounds'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #spinPage > h2:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Spin Settings'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #autoPage > h2:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Stop Autoplay'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > h2:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Game History'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > #gameHistoryTip',

            'content': [
                {'type': 'text', 'value': 'List of Bets Click One To See Spin'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Status'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(2)',

            'content': [
                {'type': 'text', 'value': 'Channel'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(3)',

            'content': [
                {'type': 'text', 'value': 'Placed'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(4)',

            'content': [
                {'type': 'text', 'value': 'Settled'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(5)',

            'content': [
                {'type': 'text', 'value': 'Bet'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(6)',

            'content': [
                {'type': 'text', 'value': 'Lines'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(7)',

            'content': [
                {'type': 'text', 'value': 'Bet/Lines'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content table:nth-child(1) tr:nth-child(1) > td:nth-child(8)',

            'content': [
                {'type': 'text', 'value': 'Total Win'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content > .__lines__nav > a:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Winning Lines - Total: '},
                {'type': 'span', 'value': '<span></span>'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #historyPage > .game__history__replay > .__content > .__lines__nav > a:nth-child(2)',

            'content': [
                {'type': 'text', 'value': 'Losing Lines'}
            ]

        },

        {

            'selector': '#menuMobile > .menu__content #betPage > h2:nth-child(1)',

            'content': [
                {'type': 'text', 'value': 'Bet Settings'}
            ]

        },
        {

            'selector': '#autoPlayMobileInput h4',

            'content': [
                {'type': 'text', 'value': 'Stop Autoplay'}
            ]

        },
        {

            'selector': '#autoPlayMobileInput .switch__name',

            'content': [
                {'type': 'text', 'value': 'If cash decrease by '}
            ]

        },
        {

            'selector': '.autoplayStopOnCashDownTooltip',

            'content': [
                {'type': 'text', 'value': 'Must be set to a value'}
            ]

        },
        {

            'selector': '.autoplayStopOnCashDownAmountTooltip',

            'content': [
                {'type': 'text', 'value': 'Must be greater than current stake'}
            ]

        },
        {

            'selector': '.autoplayLowerThanCashDownAmountTooltip',

            'content': [
                {'type': 'text', 'value': 'Must be lower than balance'}
            ]

        }

    ];

    //Method to translate and render all content
    this_.translate = function() {

        //Loop through elements
        for (var i = 0; i < this_.elements.length; i++) {

            var element = this_.elements[i]; //Get current element
            var HTML = ''; //Begin generating markup

            //Loop through element content
            for (var j = 0; j < element.content.length; j++) {

                var content = element.content[j]; //Get current content

                //Add content to markup (translating if text)
                HTML += content.type == 'text' ? Translate.do(content.value) : content.value;

            }

            /* logger(element.selector + ': ' + HTML); */

            $(element.selector).html(HTML); //Add markup to element

        }

    }

    this_.translate(); //Execute translation/rendering

}
