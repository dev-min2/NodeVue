class Human {
    constructor() {
        this._ssn = 12345;
        this._name = 'Hong';
        this._age = 27;
    }

    set ssn(ssn) {
        this._ssn = ssn;
    }

    get ssn() {
        this._ssn;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    getInfo() {
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
console.log(hu.name);
hu.name= "king";
console.log(hu.name);
hu.getInfo(); 

