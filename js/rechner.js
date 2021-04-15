'use strict';

function Model() {
    var self = this,
        rate = 0.91;   //Date: 10.04.2021
    let chf;

    self.observable = new Observable();

    function getEUR() {
        var euro = chf * rate;

        //Ausgabe Euro nur mit zwei Nachkommastellen
        euro = euro.toFixed(2)
        self.observable.notifyObservers(euro);
    }

    self.setCHF = function(amount) {
        chf = amount;
        getEUR();
    };

}
