import Movie from "./Movie";
import Cart from "./Cart";



test('Проверка суммирования данных в корзине', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137);

    const newCart = new Cart();
    newCart.add(firstMovie);
    newCart.add(secondMovie);
    const result = newCart.sumAll();
    expect(result).toBe(700);
})

test('Проверка суммирования с учетом скидки', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137);

    const newCart = new Cart();
    newCart.add(firstMovie);
    newCart.add(secondMovie);
    const result = newCart.discountSum(100);
    expect(result).toBe(600);
})

test('Проверка удаления объекта из корзины', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137);

    const newCart = new Cart();
    newCart.add(firstMovie);
    newCart.add(secondMovie);
    const result = newCart.removeItem(2);
    expect(result).toEqual([{
        id: 1,
        name: 'avengers',
        price: 300,
        year: 2012,
        country: 'USA',
        tagline: 'Something',
        genre: 'Action',
        duration: 137
    }
    ])
})