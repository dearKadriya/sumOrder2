import Buyable from "./Buyable";
import Movie from "./Movie";
import Smartphone from "./Smartphone";

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        if(item.unique) {
            for (let elem of this.items) {
                if (elem.id == item.id) {
                    console.log('wtf')
                    throw new Error(`Товар ${elem.name} нельзя дважды добавить в корзину!`);
                }
            }  this.items.push(item)

        } else {
            this.items.push(item)
        }
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
                } else {
                    throw new Error('Такого товара нет в корзине!');
            }
        }
        return this.items
    }
    removeOneItem(id: number): Buyable[] {
        for( let elem of this.items) {
            if (elem.id === id) {
                if (!elem.unique) {
                    let index = this.items.indexOf(elem);
                    if (index > -1) {
                        this.items.splice(index, 1);
                    }
                } else {
                    throw new Error('Невозможно уменьшить количество товара на один!');
                }

            }
        }
        return this.items
    }
}


// const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
//     'Something', 'Action', 137, true)
// const secondMovie = new Movie(2, 'avengers', 400, 2012,
//     'USA', 'Something', 'Action', 137, true);
//
// const firstSmartphone = new Smartphone(3, 'bb', 400, 2012,
//     'USA', 'Something', 'Action', 137, false);
// const secondSmartphone = new Smartphone(3, 'bb', 400, 2012,
//     'USA', 'Something', 'Action', 137, false)
//
// const newCart = new Cart();
// newCart.add(firstMovie);
// newCart.add(secondMovie);
// newCart.add(firstSmartphone);
// newCart.add(secondSmartphone);
// newCart.removeOneItem(3)
// console.log(newCart.getAll());

