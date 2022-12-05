(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function CherryBlastBonusTable(_bonus, _symbol, _curSymb, _stake) {

        var bonusHTML = '';

        bonusHTML += '<p class="__bonus__heading">' + Translate.do('Bonus') + ' ' + Translate.do('Winnings') + '</p>';
        bonusHTML += '<section class="cherry__blast__bonus__table">';
        bonusHTML += '<img src="' + _symbol + '">';
        bonusHTML += '<p>';
        bonusHTML += Translate.do('Tier') + ' ' + _bonus.tier + ' | ';
        // bonusHTML += Translate.do('Winnings') + ': ' + _stake + ' x ' + _bonus.picks[0].value + ' = ' + _curSymb + Number(_stake) * Number(_bonus.picks[0].value);
        bonusHTML += Translate.do('Winnings') + ': ' + _stake + ' x ' + _bonus.picks[0].value + ' = ' + _curSymb + (Number(_stake) * Number(_bonus.picks[0].value)).toFixed(2);
        bonusHTML += '</p>';
        bonusHTML += '</section>';

        return bonusHTML;

    }

    window.f1x2.CherryBlastBonusTable = CherryBlastBonusTable;

})();
