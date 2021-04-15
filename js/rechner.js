'use strict';

function Model() {
    var self = this,
        rate;   //Date: 10.04.2021
    let chf;
    self.observable = new Observable();

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

    function getEUR() {
        var euro = chf * rate;
        console.log("getEUR:"+ rate);
        //Ausgabe Euro nur mit zwei Nachkommastellen
        euro = euro.toFixed(2)
        self.observable.notifyObservers(euro);
    }

    self.setCHF = function(amount) {
        chf = amount;
        getEUR();
    };

}
