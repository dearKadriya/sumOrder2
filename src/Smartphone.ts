import Buyable from "./Buyable";

export default class Smartphone implements Buyable {
    constructor(readonly id: number,
                readonly name: string,
                readonly price: number,
                readonly year: number,
                readonly country: string,
                readonly tagline: string,
                readonly genre: string,
                readonly duration: number,
                readonly unique: boolean) {
    }
}