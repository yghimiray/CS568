products = []


module.exports = class Product {
    constructor(_id, name, price) {
        this._id = _id;
        this.name = name;
        this.price = price
    }

    static listAll() {
        return products;
    }

}