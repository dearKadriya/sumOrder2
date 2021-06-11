import Movie from "./Movie";
import Cart from "./Cart";

test('Проверка добавления Movie в корзину', ()=> {
    const firstMovie = new Movie(1,'avengers', 300, 2012, 'USA',
        'Something', 'Action', 137, true)
    const newCart = new Cart();
    newCart.add(firstMovie);
    const result = newCart.getAll();
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
        ]
    )
})