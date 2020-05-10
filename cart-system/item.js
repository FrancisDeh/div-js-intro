/**
 * Item Class
 */
class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get getName () {
        return this.name;
    };

    get getPrice () {
        return this.price;
    }

    get getQuantity () {
        return this.quantity;
    }
}
