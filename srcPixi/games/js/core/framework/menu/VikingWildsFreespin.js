(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function VikingwWildsFreespin(_spinObj, _spinNum, _assets) {

        var html = '';
        html += '<p class="__bonus__heading">' + Translate.do('freespins') + '</p>';
        html += '<section class="rainbow__wild__freespin">';

        if (_spinObj.bonus) {

            var _fs = _spinObj.freeSpin;

            html += '<p>';
            html += Translate.do('Win') + ': ' + _fs.num + ' | ';
            html += Translate.do('Multiplier') + ': x' + (Number(_fs.multiplier) === 0 ? 1 : _fs.multiplier);
            html += '</p>';

        }
        else if (_spinObj.multiplier) {

            html += '<p>';
            html += Translate.do('Multiplier') + ': x' + _spinObj.multiplier;
            html += '</p>';

        }

        html += '</section>';

        return html;

    }

    window.f1x2.VikingwWildsFreespin = VikingwWildsFreespin;

})();
