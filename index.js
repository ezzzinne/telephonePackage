class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } 
        else {
            console.log(`Cannot dial ${number}. Number not found.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class Observer {
    update(number) {
        throw new Error("Method 'update' must be implemented.");
    }
}

class PrintObserver extends Observer {
    update(number) {
        console.log(number);
    }
}

class MessageObserver extends Observer {
    update(number) {
        console.log(`Now Dialling ${number}`);
    }
}

const telephone = new Telephone();

const printObserver = new PrintObserver();
const messageObserver = new MessageObserver();
telephone.addObserver(printObserver);
telephone.addObserver(messageObserver);

telephone.addPhoneNumber("09020612873");
telephone.addPhoneNumber("09132919252");
telephone.dialPhoneNumber("09020612873");
telephone.dialPhoneNumber("09132919252");
telephone.dialPhoneNumber("08029749292");
