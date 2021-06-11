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
        let sum = 0;
        for( let elem of this.items) {
            sum += elem.price
        }
        return sum
    }
    discountSum(discount: number): number {
        let sum = 0;
        for( let elem of this.items) {
            sum += elem.price
        }
        return (sum - discount)
    }
    removeItem(id: number): Buyable[] {
        for( let elem of this.items) {
            if (elem.id === id) {
                let index = this.items.indexOf(elem);
                if (index > -1) {
                    this.items.splice(index, 1);
                }
            }
        }
        return this.items
    }
}

