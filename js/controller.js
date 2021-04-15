'use strict';

function Controller() {
    var self = this;

    model.observable.addObserver(self);

    function getCHF() {
        //lade den wert von der ID "chfIN"
        return window.document.getElementById("chfIN").value;
    }

    function processCHF() {
        var chfText = getCHF(),
            //Text zu int (Zahl)
            chf = parseInt(chfText, 10);

        //Check ob chf = Zahl
        if (isNaN(chf)) {
            self.update("");
        } else {
            model.setCHF(chf);
        }
    }

    self.onLoaded = function() {
        window.document.getElementById("convertBN").addEventListener("click", processCHF, false);
        window.document.addEventListener("keydown", validate, false); //Input control: Accepts only numbers
    };

    self.update = function(euro) {
        window.document.getElementById("euroIN").value = euro;
    };

//Input controll functions
    function toCode(letter) {
        return letter.charCodeAt(0);
    }
    function isValid(code){
        //Ueberpruefen ob eine Zahl eingegeben wurde
        if (code === toCode('\b')) return true;
        //Ueberpruefen ob die Zahl 0 bis 9 ist (Nicht -1)
        if (code >= toCode('0') && code <= toCode('9')) return true;

        //Bonus Aufgabe: Es duerfen Dezimalstellen benutzt werden
        if (code.value.indexOf("." === -1)) return true;
        return false;
    }

    function validate(event) {
        //bricht das Ereignis ab, wenn es abbrechbar ist
        if (!isValid(event.keyCode)) event.preventDefault();
    }



}
