export class Flores {
    _id?: number;
    name: string;
    location: string;
    amount: number;
    price: number;

    constructor(name: string, location: string, amount: number, price: number){
        this.name = name;
        this.location = location;
        this.amount = amount;
        this.price = price;
    }
}