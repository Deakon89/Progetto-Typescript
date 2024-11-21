// product-interface
interface IProduct{
    name: string,
    price: number,
    stock: number,
    type: string,
    color: string
    id: number
    // storage-control
    outOfStock(): void
    // sales-control
    assingProduct(): void
    // delivery-control
    deliveryStatus(client: IClient): void
}

// product-production interface
interface IProductProduction extends IProduct{
    nameProcess: string,
    idProductInProcess: number
    // process-action
    AddProductinStock(): void   
}

// client interface
interface IClient{
    name: string,
    age: number
    city: string,
    country: string
    interests: string[],
    job: string,
    payment: boolean 
    // action
    buy(product: IProduct): void
    changeProduct(product: IProduct, newProduct: IProduct): void
}


// product
class Product implements IProduct{
    name: string;
    price: number;
    stock: number;
    type: string;
    color: string;
    id: number;
    nameProcess: string;
    idProductInProcess: number;
    constructor(name: string, price: number, stock: number, type: string, color: string, id: number, nameProcess: string, idProductInProcess: number){
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
    outOfStock(): void{
        if(this.stock === 0){
            console.log(`${this.name} is out of stock`);
        }
    }
    assingProduct(): void{
        if(this.stock > 0){
            this.stock--;
            console.log(`${this.name} is in stock`);
        }
        console.log(`${this.name} has been assigned`);
    }
    deliveryStatus(client: IClient): void{
        if(client.payment === true){
            console.log(`paymant ok, ${this.name} is delivered`);
            console.log(`${client.name} has bought ${this.name}`);
        }
        else{
            console.log(`${client.name} payment goes wrong item not delivered`);
        }
    }
    addProductInStock(): void{
        this.stock++;  
        console.log(`${this.name} has been created with ${this.nameProcess} method and has been added in stock`);
    }
}

// client
class Client implements IClient{
    name: string;
    age: number;
    city: string;
    country: string;
    interests: string[];
    job: string;
    payment: boolean
    constructor(name: string, age: number, city: string, country: string, interests: string[], job: string, payment: boolean){
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
        this.interests = interests;
        this.job = job;
        this.payment = payment
    }
    // client-action
    buy(product: IProduct): void{

        if(product.stock > 0){
            product.assingProduct();
        }else{
            console.log(`${product.name} is out of stock`);
            return
        }
        product.deliveryStatus(this);
    }
    changeProduct(product: IProduct, newProduct: IProduct): void{
        if(newProduct.stock > 0){
            newProduct.stock--;
            product.stock++;
        console.log(`${this.name} has changed ${product.name} for ${newProduct.name}`);    
    }else{
        console.log(`${product.name} isn't possible to change with ${newProduct.name} because this one
             is out of stock `);
        return
    }
}
}


// new-product
let product1 = new Product('boardshort', 50, 10, 'men clothing', 'black', 1, 'recycling fishing nets', 1);
let product2 = new Product('bikini', 30, 5, 'woman clothing', 'red', 2, 'recycling fishing nets', 1);
let product3 = new Product('surf', 1000, 2, 'equipment', 'black/yellow', 3, 'EPS', 2);
let product4 = new Product('flipFlop', 19, 50, 'shoes', 'gold', 4, 'cork processing', 3);
let product5 = new Product('kayak', 3500, 0, 'equipment', 'black', 5, 'EPS', 2);
// new-client
let client1 = new Client('Francesco', 20, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);
let client2 = new Client('Lorenzo', 25, 'Roma', 'Italia', ['surfing', 'fishing'], 'student', true);
let client3 = new Client('Giuseppe', 30, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);
let client4 = new Client('Giovanni', 35, 'Roma', 'Italia', ['surfing', 'fishing'], 'student', false);
let client5 = new Client('Francesca', 40, 'Milano', 'Italia', ['surfing', 'fishing'], 'student', true);


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







