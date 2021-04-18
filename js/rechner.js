'use strict';

function Model() {

    var self = this,
        rateUSDEUR,
        rateUSDCHF;
    let chf;

    self.observable = new Observable();

    function getCurrencyFactor() {
        var xhttp = new XMLHttpRequest();
        var url = "http://api.currencylayer.com/live?access_key=936ee4281f2f36b5f7658bb477a66675&format=1";
        xhttp.open("GET", url, true);
        xhttp.addEventListener("load", transferComplete, false);
        xhttp.addEventListener("error", transferFailed, false);
        xhttp.send(null);
    }

    function transferComplete() {
        rateUSDEUR = JSON.parse(this.responseText).quotes.USDEUR;
        rateUSDCHF = JSON.parse(this.responseText).quotes.USDCHF;
        getEUR();
    }

    function transferFailed(data) {
        console.log("Error: " + data);
    }

    /*HTTP request aufsetzen
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "text.txt", true);
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                this.responseText;
                rate = xhttp.responseText;
                console.log("Rate: "+rate);
                getEUR()
            }
        };
        xhttp.send();
    */

    //-----------------------------------//

    function getEUR() {
        var CHFUSD = 1/rateUSDCHF;
        var dollar = chf * CHFUSD;

        var euro = dollar * rateUSDEUR;
        euro = euro.toFixed(2);
        self.observable.notifyObservers(euro);
    }

    self.setCHF = function(amount) {
        chf = amount;
        getCurrencyFactor();
    };

}
