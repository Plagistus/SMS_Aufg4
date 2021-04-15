//console.log("Hello World")

function TipModel() {
    var self = this;
//Variablen setzen
    var betrag = document.getElementById('betrag').valueAsNumber,
        prozent = document.getElementById('prozent').valueAsNumber,
        pers = document.getElementById('pers').valueAsNumber;

 //   message = document.getElementById("p01");

//Input control: Accepts only numbers
    self.onLoaded = function() {
        window.document.addEventListener("keydown", validate, false);
    };

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

//Berechnung des Trinkgelds
    var trinkgeld = (betrag * (prozent / 100)),
        betrag_output = (betrag + trinkgeld),
        summepro = (betrag_output / pers),
        trinkgeldpro = (trinkgeld / pers);

//Übergabe der Werte an entsprechende ID
    betrag_output = betrag_output.toFixed(2)
    document.getElementById('betrag_output')
        .value = betrag_output;

//Dezimalzahl 2 Nachkommastellen
    summepro = summepro.toFixed(2);
    document.getElementById('summepro')
        .value = summepro;

    trinkgeld = trinkgeld.toFixed(2);
    document.getElementById('trinkgeld')
        .value = trinkgeld;

    trinkgeldpro = trinkgeldpro.toFixed(2);
    document.getElementById("trinkgeldpro")
        .value = trinkgeldpro;

    function validate(event) {
        //bricht das Ereignis ab, wenn es abbrechbar ist
        if (!isValid(event.keyCode)) event.preventDefault();
    }

}
