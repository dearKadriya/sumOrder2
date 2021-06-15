import Buyable from "./Buyable";
import Movie from "./Movie";

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }
    getAll(): Buyable[] {
        return [...this.items];
    }
    sumAll(): number {
        return this.items.reduce((sum:number, price: Buyable) => sum + price.price, 0)
    }
    discountSum(discount: number): number {
        return (this.sumAll() - discount)
    }
    removeItem(id: number): Buyable[] {
       let itemForRemove = this.items.find(item => item.id == id);
       // @ts-ignore
        let index = this.items.indexOf(itemForRemove);
        if (index > -1) {
            this.items.splice(index, 1)
        }
        return this.items
    }
}

