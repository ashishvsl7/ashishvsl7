/**
 * KiS Framework, Created by Tom on 10/05/2016.
 */
function CurrencyManager() {

    var currencySymbol_, currencySymbolEsc_, currencyCode;

    function initClass_() {


    }

    function getCurrencySym_(currency_code, pathCDN) {

        currencyCode = currency_code;

        var url = pathCDN + "f1x2games/getCurrencySymbol.jsp?";

        var paramString = "currency_code=" + currency_code;

        $.post(url + paramString, {
            func: "getCurrencySymbol"
        }, function(data) {

            var obj = JSON.parse(data);

            currencySymbol_ = obj.currency_symbol[0].symbol;
            currencySymbolEsc_ = htmlDecode(currencySymbol_);

        }, "text")

            .fail(function() {

                //fall back
                currencySymbol_ = currencyFallBack(currency_code);
                currencySymbolEsc_ = htmlDecode(currencySymbol_);

            });

    }

    function currencyFallBack(currency){

        var currencySym = "";

        switch(currency) {
            case  "FUN":  currencySym="FUN"; break;
            case  "ARS":  currencySym="$";   break;
            case  "AUD":  currencySym="$";   break;
            case  "BBD":  currencySym="$";   break;
            case  "BRL":  currencySym="$";   break;
            case  "GBP":  currencySym="£";   break;
            case  "CAD":  currencySym="$";   break;
            case  "CLP":  currencySym="$";   break;
            case  "CNY":  currencySym="元";  break;
            case  "CZK":  currencySym="K";   break;
            case  "DKK":  currencySym="kr";  break;
            case  "XCD":  currencySym="$";   break;
            case  "EGP":  currencySym="£";   break;
            case  "EEK":  currencySym="k";   break;
            case  "EUR":  currencySym="€";   break;
            case  "HKD":  currencySym="元";   break;
            case  "HUF":  currencySym="F";   break;
            case  "ISK":  currencySym="k";   break;
            case  "INR":  currencySym="₨";   break;
            case  "IDR":  currencySym="R";   break;
            case  "ILS":  currencySym="₪";   break;
            case  "JMD":  currencySym="$";   break;
            case  "JPY":  currencySym="¥";   break;
            case  "LVL":  currencySym="L";   break;
            case  "LBP":  currencySym="£";   break;
            case  "LTL":  currencySym="L";   break;
            case  "MYR":  currencySym="R";   break;
            case  "MXN":  currencySym="$";   break;
            case  "NAD":  currencySym="$";   break;
            case  "NPR":  currencySym="₨";   break;
            case  "NZD":  currencySym="$";   break;
            case  "NOK":  currencySym="k";   break;
            case  "PHP":  currencySym="P";   break;
            case  "PLN":  currencySym="Z";   break;
            case  "SGD":  currencySym="$";   break;
            case  "ZAR":  currencySym="R";   break;
            case  "KRW":  currencySym="₩";   break;
            case  "LKR":  currencySym="₨";   break;
            case  "SEK":  currencySym="K";   break;
            case  "CHF":  currencySym="F";   break;
            case  "THB":  currencySym="฿";   break;
            case  "TRY":  currencySym="L";   break;
            case  "USD":  currencySym="$";   break;
            case  "VEF":  currencySym="B";   break;
        }
        return currencySym;

    }

    function getSymbol_(){

        if(!currencySymbolEsc_){
            return currencyFallBack(currencyCode);
        }

        return currencySymbolEsc_;
    }

    function htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    //return anything you want to make public here
    var currency = {

        getCurrencySymbol: getCurrencySym_,
        getSymbol: getSymbol_

    };

    initClass_();

    return currency;

}
