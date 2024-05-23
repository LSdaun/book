import "./page.scss";
import { Header } from "../components/header/header.jsx";
import { Slider } from "../components/slider/slider.jsx";
import { Cards } from "../components/cards/cards.jsx";
import { Categories } from "../components/categories/categories.jsx";
import { Promo } from "../components/promo/promo.jsx";
import { Button } from "../components/button/button.jsx";
import { api } from "../api/api.js";
import React, { useState, useEffect } from 'react';

export function Page() {

    const [activeGenre, setActiveGenre] = useState('Architecture');
    const handleLinkClick = (link) =>{
        setActiveGenre (link);
    }
    const [page, setPage] = useState(1)
    const [books, setBooks] = useState([])
    
    useEffect(() => {
      const newBooks = api.getCardsInfo({activeGenre: activeGenre, limit: 6})
      setBooks((oldBooks) => [...oldBooks, ...newBooks])
    }, [page])
    
    const handleOpenNextPage = () => setPage((oldPage) => oldPage + 1)
    
    // return(
    //   <div>
    //   <div>
    //    {books.map((book)=> <Book key={book.id} {...book} />)}
    //   </div>
    //   <button type="button" onClick={handleOpenNextPage}>Next page</button>
    //   </div>
    // )
    return (
        <div>
            <Header/>
            <Slider></Slider>
            <div className="promo-transform">
                <div className="promo-transform--purple">
                    <Promo
                        promoText={"Change old book on new"}
                        className="promo--purple promo--big"
                    />
                </div>
                <div className="promo-transform--pink">
                    <Promo
                        promoText={"top 100 books 2022"}
                        className="promo--pink promo--small"
                    />
                </div>
            </div>
            <div className="main">
                <div className="categories-cards-container">
                    <div className="categories-div">
                        <div className="categories-transform">
                            <Categories activeLink={activeGenre}
                            handleLinkClick={handleLinkClick}/>
                        </div>
                    </div>
                    <div className="cards-transform">
                        <Cards activeGenre={activeGenre}
                        limit={6}/>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <div>
                    {books.map((book)=> <Book key={book.id} {...book} />)}
                </div>
                <Button buttonText={"LOAD MORE"}
                onClick={handleOpenNextPage} />
            </div>
        </div>
    );
}