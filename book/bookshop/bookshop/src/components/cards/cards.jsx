import "./cards.scss";
import { Card } from "../card/card.jsx";
import React, { useState, useEffect } from 'react';
import { api } from '../../api/api';

export function Cards({activeGenre, limit}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadInitialData = async () => {
            const newBooks = await api.getCardsInfo({activeGenre: activeGenre, limit: limit});
            setBooks(newBooks);
        };

        loadInitialData();
    }, []);

    return (
        <div className="row">
            {books.map((book) => {
                const info = book.volumeInfo;
                const sale = book.saleInfo;
                const thumbnail = info.imageLinks && info.imageLinks.thumbnail ? info.imageLinks.thumbnail : 'src/pictures/placeholder.jpg';
                const text = info.description ? info.description : 'no description';
                let valute = sale.listPrice && sale.listPrice.currencyCode ? sale.listPrice.currencyCode : '';
                let price = sale.listPrice && sale.listPrice.amount ? sale.listPrice.amount : '';
                const cost = valute + '⠀' + price;

                return (
                    <div className="col-md-6" key={book.id}>
                        <Card
                            image={thumbnail}
                            author={info.authors}
                            title={info.title}
                            rating={info.averageRating}
                            text={text}
                            cost={cost}
                            review={info.ratingsCount}
                        />
                    </div>
                );
            })}
        </div>
    );
}