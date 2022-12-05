(function () {

    window.f1x2 = window.f1x2 || {}; //Namespace

    function PaintBonusTable(bonus, assetPaths, curSymb, stake) {

        var splatColours = ["blue", "green", "purple", "red", "yellow", "red", "green", "blue"];

        var totalMult = 0;
        var bonusHTML = "<table>";

        bonusHTML += "<tr><td>#</td><td>" + Translate.do('Selection') + "</td><td>" + Translate.do('Outcome') + "</td></tr>";

        //Loop through each column in spin reel
        $.each(bonus.picks, function(pickIndex, pick) {

            totalMult += pick.value == -1 ? 0 : pick.value;

            var colourPath = assetPaths[splatColours[pick.id - 1] + "Splat"];

            bonusHTML += "<tr>";
            bonusHTML += "<td>" + (pickIndex + 1) + "</td>";
            bonusHTML += "<td><img style=\"width: 75px;\" src=\"" + colourPath + "\" alt=\"" + splatColours[pick.id] + "Splat\" /></td>";
            bonusHTML += "<td>" + (pick.value == -1 ? Translate.do("END") : "X" + pick.value) + "</td>";
            bonusHTML += "</tr>";

        });
        bonusHTML += "<tr><td>&nbsp;</td><td>&nbsp;</td><td style=\"font-weight: bold;\">X" + totalMult + "</td></tr>";
        bonusHTML += "<tr><td style=\"font-weight: bold;\" colspan=\"2\">" + Translate.do('Base Multiplier:') + " X" + bonus.tier + "</td><td style=\"font-weight: bold;\">X" + (totalMult * bonus.tier) + "</td></tr>";
        bonusHTML += "</table>";

        bonusHTML = "<p class=\"__bonus__heading\">" + Translate.do('Total Bonus Winnings:') + " " + curSymb + (stake * totalMult * bonus.tier).toFixed(2) + "</p>" + bonusHTML;

        return bonusHTML;

    }

    window.f1x2.PaintBonusTable = PaintBonusTable;

})();