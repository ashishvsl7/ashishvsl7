(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function NeonJungleBonusTable(bonus, img, curSymb) {

        bonus.picks.sort(function(_lhs, _rhs) {
            return Number(_lhs) - Number(_rhs);
        });

        bonus.drawn.sort(function(_lhs, _rhs) {
            return Number(_lhs) - Number(_rhs);
        });

        var matches = 0;

        var html = '<section class="neon__jungle__bonus__table">';
        html += '<img src="' + img + '" alt="Neon Jungle Bonus Symbol" />';
        html += '<ul>';
        html += '<li><h2>' + Translate.do('Picks') + ':</h2><div>';

        for (var i = 0; i < bonus.picks.length; i++) {

            var v = bonus.picks[i];

            html += '<span' + (bonus.drawn.indexOf(v) > -1 ? ' class="won"' : '') + '>' + v + '</span>';

            if (bonus.drawn.indexOf(v) > -1) {
                matches++;
            }

        }

        html += '</div></li>';
        html += '<li><h2>' + Translate.do('Drawn') + ':</h2><div>';

        for (var i = 0; i < bonus.drawn.length; i++) {

            var v = bonus.drawn[i];

            html += '<span' + (bonus.picks.indexOf(v) > -1 ? ' class="won"' : '') + '>' + v + '</span>';

        }

        html += '</div></li>';
        html += '<li><h2>' + Translate.do('Matches') + ':</h2><div>' + matches + '</div></li>';
        html += '<li><h2>' + Translate.do('Bonus') + ' ' + Translate.do('win') + ':</h2><div>' + curSymb + (Number(bonus.win) / 100).toFixed(2) + '</div></li>';
        html += '</ul>';
        html += '</section>';

        return html;

    }

    window.f1x2.NeonJungleBonusTable = NeonJungleBonusTable;

})();
