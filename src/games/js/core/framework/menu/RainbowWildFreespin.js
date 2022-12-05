(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function RainbowWildFreespin(_spinObj, _spinNum, _assets) {

        var html = '';

        html += '<p class="__bonus__heading">' + Translate.do('freespins') + '</p>';
        html += '<section class="rainbow__wild__freespin">';

        if (_spinObj.bonus) {

            var _fs = _spinObj.freeSpin;
            if(gameParams.gameOriginalID==7017) {
                html += '<img class="aw__bonus" src="aztecWilds/img/paytable/feature_' + _spinNum + '_sectors.png">';
            }else{
                html += '<img class="rw__bonus" src="rainbowGold/img/paytable/shamrock_' + _spinNum + '.png">';
            }
            html += '<p>';
            html += Translate.do('Win') + ': ' + _fs.num + ' | ';
            html += Translate.do('Multiplier') + ': x' + (Number(_fs.multiplier) === 0 ? 1 : _fs.multiplier);
            html += '</p>';

        }
        else if (_spinObj.multiplier) {

            if(gameParams.gameOriginalID!=7017)html += '<img class="rw__freespin" src="rainbowGold/img/paytable/rainbow.png">';
            html += '<p>';
            html += Translate.do('Multiplier') + ': x' + _spinObj.multiplier;
            html += '</p>';

        }

        html += '</section>';

        return html;

    }

    window.f1x2.RainbowWildFreespin = RainbowWildFreespin;

})();
