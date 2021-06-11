import Buyable from "./Buyable";
import Cart from "./Cart";

export default class Movie implements Buyable {
    constructor(readonly id: number,
                readonly name: string,
                readonly price: number,
                readonly year: number,
                readonly country: string,
                readonly tagline: string,
                readonly genre: string,
                readonly duration: number
    ) {
    }
}

