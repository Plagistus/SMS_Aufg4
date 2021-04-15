var validate = function(e) {
    //Bonusaufgabe: Dezimalstellen ja, jedoch nur bis zu zwei nachkommastellen
    var wert = e.value;
    //indexOf zeigt die Position des "such-wertes" an, in diesem Fall ob nach dem "." eine Zahl steht
    //substr zeigt den Teil der "Zeichenkette" in diesem Fall die Nachkommastellen
    //Sprich hier wird gesucht ab dem "." wie viele Zeichen (bzw. hier Zahlen) aufkommen, und das wird dann auf 2 limiert.
    e.value = (wert.indexOf(".") >= 0) ? (wert.substr(0, wert.indexOf(".")) + wert.substr(wert.indexOf("."), 3)) : wert;
}