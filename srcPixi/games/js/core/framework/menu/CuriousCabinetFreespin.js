(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function CuriousCabinetFreespin(_spin, _assets, _curSymb, _coinValue) {

        var html = '';

        html += '<p class="__bonus__heading">' + Translate.do('freespins') + '</p>';
        html += '<section class="cherry__blast__bonus__table cabinet">';

        for (var i = 0; i < _spin.drawers.length; i++) {

            var type, num;
            var drawer  = _spin.drawers[i];
            var match   = drawer.match(/[0-9]+/);
            var win     = false;

            if (match) {
                
                type    = drawer.slice(0, match.index);
                num     = match[0]

            }
            else {
                type = drawer;
            }

            switch (type) {

                case 'silvercoin':
                    win = '<img src="' + _assets['silver-coin'] + '" />';
                    win += '<p>' + Translate.do('Winnings') + ': ' + _curSymb + (Number(num) * Number(_coinValue)).toFixed(2) + '</p>';
                    break;

                case 'silvermult':
                    win = '<img src="' + _assets['silver-mult'] + '" />';
                    win += '<p>' + Translate.do('Multiplier') + ': x' + num + '</p>';
                    break;

                case 'goldcoin':
                    win = '<img src="' + _assets['gold-coin'] + '" />';
                    win += '<p>' + Translate.do('Winnings') + ': ' + _curSymb + (Number(num) * Number(_coinValue)).toFixed(2) + '</p>';
                    break;

                case 'goldcoin':
                    win = '<img src="' + _assets['gold-mult'] + '" />';
                    win += '<p>' + Translate.do('Multiplier') + ': x' + num + '</p>';
                    break;

            }

            if (win) {
                html += '<div>' + win + '</div>';
            }

        } 

        html += '</section>';

        return html;

    }

    window.f1x2.CuriousCabinetFreespin = CuriousCabinetFreespin;

})();
