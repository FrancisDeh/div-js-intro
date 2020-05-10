/**
 * Customer class
 */
class Customer {
    constructor(name, number, address) {
        this.name = name;
        this.address = address;
        this.number = number;
    }

    get getName() {
        return this.name;
    }

    get getAddress() {
        return this.address;
    }

    get getNumber() {
        return this.number;
    }
}
