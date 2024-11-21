// product
var Product = /** @class */ (function () {
    function Product(name, price, stock, type, color, id, nameProcess, idProductInProcess) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.type = type;
        this.color = color;
        this.id = id;
        this.nameProcess = nameProcess;
        this.idProductInProcess = idProductInProcess;
    }
    // product-action
    Product.prototype.outOfStock = function () {
        if (this.stock === 0) {
            console.log("".concat(this.name, " is out of stock"));
        }
    };
    Product.prototype.assingProduct = function () {
        if (this.stock > 0) {
            this.stock--;
            console.log("".concat(this.name, " is in stock"));
        }
        console.log("".concat(this.name, " has been assigned"));
    };
    Product.prototype.deliveryStatus = function (client) {
        if (client.payment === true) {
            console.log("paymant ok, ".concat(this.name, " is delivered"));
            console.log("".concat(client.name, " has bought ").concat(this.name));
        }
        else {
            console.log("".concat(client.name, " payment goes wrong item not delivered"));
        }
    };
    Product.prototype.addProductInStock = function () {
        this.stock++;
        console.log("".concat(this.name, " has been created with ").concat(this.nameProcess, " method and has been added in stock"));
    };
    return Product;
}());
// client
var Client = /** @class */ (function () {
    function Client(name, age, city, country, interests, job, payment) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
        this.interests = interests;
        this.job = job;
        this.payment = payment;
    }
    // client-action
    Client.prototype.buy = function (product) {
        if (product.stock > 0) {
            product.assingProduct();
        }
        else {
            console.log("".concat(product.name, " is out of stock"));
            return;
        }
        product.deliveryStatus(this);
    };
    Client.prototype.changeProduct = function (product, newProduct) {
        if (newProduct.stock > 0) {
            newProduct.stock--;
            product.stock++;
            console.log("".concat(this.name, " has changed ").concat(product.name, " for ").concat(newProduct.name));
        }
        else {
            console.log("".concat(product.name, " isn't possible to change with ").concat(newProduct.name, " because this one\n             is out of stock "));
            return;
        }
    };
    return Client;
}());
// new-product
var product1 = new Product('boardshort', 50, 10, 'men clothing', 'black', 1, 'recycling fishing nets', 1);
var product2 = new Product('bikini', 30, 5, 'woman clothing', 'red', 2, 'recycling fishing nets', 1);
var product3 = new Product('surf', 1000, 2, 'equipment', 'black/yellow', 3, 'EPS', 2);
var product4 = new Product('flipFlop', 19, 50, 'shoes', 'gold', 4, 'cork processing', 3);
var product5 = new Product('kayak', 3500, 0, 'equipment', 'black', 5, 'EPS', 2);
// new-client
var client1 = new Client('Francesco', 20, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);
var client2 = new Client('Lorenzo', 25, 'Roma', 'Italia', ['surfing', 'fishing'], 'student', true);
var client3 = new Client('Giuseppe', 30, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);
var client4 = new Client('Giovanni', 35, 'Roma', 'Italia', ['surfing', 'fishing'], 'student', false);
var client5 = new Client('Francesca', 40, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);
// creation-product
product5.addProductInStock();
product3.addProductInStock();
product2.addProductInStock();
product1.addProductInStock();
product4.addProductInStock();
//client transaction
client1.buy(product1);
client2.buy(product4);
client3.buy(product5);
client4.buy(product3);
client4.buy(product1);
client5.buy(product2);
//change product
client3.changeProduct(product2, product4);
client1.changeProduct(product3, product5);
client1.changeProduct(product5, product3);
console.log(product5.stock);
