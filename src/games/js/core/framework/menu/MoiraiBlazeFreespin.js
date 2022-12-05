(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function MoiraiBlazeFreespin(_spinObj) {

        var html = '';

        html += '<p class="__bonus__heading">' + Translate.do('freespins') + '</p>';
        html += '<section class="rainbow__wild__freespin">';

        if (_spinObj.multiplier) {

            html += '<p>';
            html += Translate.do('Multiplier') + ': x' + _spinObj.multiplier;
            html += '</p>';

        }

        html += '</section>';

        return html;

    }

    window.f1x2.MoiraiBlazeFreespin = MoiraiBlazeFreespin;

})();
