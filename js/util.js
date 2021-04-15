function Observable() {
    var observers = [];

    this.addObserver = function(observer) {
        observers.push(observer);
    };

    this.removeObserver = function(observer) {
        observers = observers.filter(function(item) {
            return item !== observer;
        });
    };

    this.notifyObservers = function(total, totalPerPerson, getTip, tipPerPerson) {
        var i;
        for ( i = 0; i < observers.length; i = i + 1) {
            observers[i].update(total, totalPerPerson, getTip, tipPerPerson);
        }
    };
}
