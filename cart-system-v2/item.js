/**
 * Item Class
 */
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get getName () {
        return this.name;
    };

    get getPrice () {
        return this.price;
    }

}
