import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { Cards } from "../cards/cards.jsx";

export function Categories({activeLink, handleLinkClick}) {
    const genres = [
        'Architecture',
        'Art & Fashion',
        'Biography',
        'Business',
        'Crafts & Hobbies',
        'Drama',
        'Fiction',
        'Food & Drink',
        'Health & Wellbeing',
        'History & Politics',
        'Humor',
        'Poetry',
        'Science',
        'Technology',
        'Travel & Maps'
    ];


    return (
        <div className="categories">
            <div className="categories-list">
                <ul className="genre-list">
                    {genres.map((link) => (
                        <li
                            className={`genre-list-item ${activeLink === link ? 'active' : ''}`}
                            key={link}
                            onClick={() => handleLinkClick(link)}
                        >
                            <span className="genre-list-item-text">{link}</span>
                        </li>
                    ))}
                </ul>   
            </div>
        </div>
    );
}

