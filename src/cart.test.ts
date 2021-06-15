import Movie from "./Movie";
import Cart from "./Cart";



test('Проверка суммирования данных в корзине', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137, true);

    const newCart = new Cart();
    newCart.add(firstMovie);
    newCart.add(secondMovie);
    const result = newCart.sumAll();
    expect(result).toBe(700);
});

test('Проверка суммирования с учетом скидки', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137, true);

    const newCart = new Cart();
    newCart.add(firstMovie);
    newCart.add(secondMovie);
    const result = newCart.discountSum(100);
    expect(result).toBe(600);
});

test('Проверка удаления объекта из корзины', () => {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    const secondMovie = new Movie(2, 'avengers', 400, 2012,
        'USA', 'Something', 'Action', 137, true);

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
        duration: 137,
        unique: true
    }
    ])
});

test('Проверка удаления если товара нет в корзине', () => {
    const newCart = new Cart();
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    newCart.add(firstMovie);
    expect(() => {newCart.removeItem(2)}).toThrowError('Такого товара нет в корзине!')
});

test('Проверка добавления уникального товара дважды', () => {
    const newCart = new Cart();
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    newCart.add(firstMovie);
    expect(() => {newCart.add(firstMovie);}).toThrowError('Товар avengers нельзя дважды добавить в корзину!')
});

test ('Проверка удаления уникального товара по одному', () => {
    const newCart = new Cart();
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true);
    newCart.add(firstMovie);
    expect(() => {newCart.removeOneItem(1)}).toThrowError('Невозможно уменьшить количество товара на один!')
} );