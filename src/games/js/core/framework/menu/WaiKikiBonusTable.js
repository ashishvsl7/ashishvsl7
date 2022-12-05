(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function WaiKikiBonusTable(_conf) {

        var bonusHTML = '';

        if (_conf.fs) {

            bonusHTML += '<p class="__bonus__heading">' + Translate.do('freespins') + '</p>';
            bonusHTML += '<section class="cherry__blast__bonus__table">';
            bonusHTML += '<img src="' + _conf.assets[0] + '">';
            bonusHTML += '<p>';
            bonusHTML += Translate.do('Total Win') + ': ' + _conf.fs.num;
            bonusHTML += '</p>';
            bonusHTML += '</section>';

        }

        if (_conf.tk) {

            bonusHTML += '<p class="__bonus__heading">' + Translate.do('Token Win') + '</p>';
            bonusHTML += '<section class="cherry__blast__bonus__table">';
            bonusHTML += '<img src="' + _conf.assets[1] + '">';
            bonusHTML += '<p>';
            bonusHTML += Translate.do('Total Win') + ': ' + _conf.tk;
            bonusHTML += _conf.cw ? ' | ' + Translate.do('Winnings') + ': ' + _conf.cw : '';
            bonusHTML += '</p>';
            bonusHTML += '</section>';

        }

        return bonusHTML;

    }

    window.f1x2.WaiKikiBonusTable = WaiKikiBonusTable;

})();