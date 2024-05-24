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

    const [page, setPage] = useState(0)
    const [books, setBooks] = useState([])

    const handleLinkClick = (link) =>{
        setPage(0); setBooks([]);
        setActiveGenre (link);
    }
    const [itemsInTheCart, setItemsInTheCart] = useState(0)
    const handleBuyNow = () => setItemsInTheCart((oldItems) => oldItems + 1)

    useEffect(() => {
        const startIndex = page > 0 ? page * 6 + 1 : 0
        api.getCardsInfo({activeGenre: activeGenre, limit: 6, startIndex}).then((result)=> setBooks((oldBooks) => [...oldBooks, ...result]))
      
          
        }, [page, activeGenre])
    
    
    const handleOpenNextPage = () => setPage((oldPage) => oldPage + 1)
    console.log(books)
    

    return (
        <div>
            <Header
            counter={itemsInTheCart}/>
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
                        <Cards handleBuyNow={handleBuyNow}
                        books={books}/>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <Button buttonText={"LOAD MORE"}
                onClick={handleOpenNextPage} />
            </div>
        </div>
    );
}