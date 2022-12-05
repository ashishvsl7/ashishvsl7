/**
 * KiS Framework, Created by Fabry on 24/02/2016.
 */
var Util = {
    decSep: ".",
    thoSep: "",
    getNumericValue:function(str){
        //takes the numeric string (formatted from the current jurisdiction) and returns a number
        //it's needed cause 1,200.00 could be 1.2
        str=str.toString();
        if (str.length==0)return str;
        if (this.thoSep==","){
            if (str.indexOf(",")<0)return str;
            return Number(str.replace(/,/g,""));
        }else{
            return Number(str);
        }
        
    },
    formatNumber: function (num, decimal) {
        num=(Number(num)>0)?Number(num)+0.001:Number(num);
        var str = num.toString();
        var sep = ".";
        var sep_t = "";//thousand
        var result = str.split(".");
        var base = result[0];
        var newBase = "";
        if (base == null) base = "0";

        var ar = base.split("");
        var cont = 0;
        for (var i = ar.length - 1; i >= 0; i--) {
            cont++;
            if (cont == 3 && i != 0 && (num >= 1000. || num <= -1000.)) {
                newBase = sep_t + ar[i] + newBase;
                cont = 0;
            } else {
                newBase = ar[i] + newBase;
            }
        }

        var dec = result[1];
        if (dec == null) dec = "";
        dec = dec + "00000000000000000000000000000";
        dec = dec.substr(0, decimal);
        var nStr;
        if (decimal > 0)
            nStr = newBase + sep + dec;
        else
            nStr = newBase;

        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? this.decSep + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        if (this.thoSep != "") {

            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + this.thoSep + '$2');
            }

        }
        return x1 + x2;
    },
    formatNumb: function (num, decimal) {
        num=Number(num)+0.0000000000001;
        var str = num.toString();
        var sep = ".";
        var sep_t = "";//thousand
        var result = str.split(".");
        var base = result[0];
        var newBase = "";
        if (base == null) base = "0";

        var ar = base.split("");
        var cont = 0;
        for (var i = ar.length - 1; i >= 0; i--) {
            cont++;
            if (cont == 3 && i != 0 && (num >= 1000. || num <= -1000.)) {
                newBase = sep_t + ar[i] + newBase;
                cont = 0;
            } else {
                newBase = ar[i] + newBase;
            }
        }

        var dec = result[1];
        if (dec == null) dec = "";
        dec = dec + "00000000000000000000000000000";
        dec = dec.substr(0, decimal);
        var nStr;
        if (decimal > 0)
            nStr = newBase + sep + dec;
        else
            nStr = newBase;
        return nStr;
    },
    formatTwoDigit: function (num) {   //used to format hh:mm:ss in two digit
        var _num = "00" + num;
        return _num.substr(_num.length - 2, 2);
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getNubersOfDecimal:function (){
        if (balanceManager_.getShowIncredits())return 0;
        return 2;
    }
}



